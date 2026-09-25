import asyncio, sys, os, zipfile, re
from playwright.async_api import async_playwright
OUT='/home/claude/site/shots'
async def route(r):
    u=r.request.url
    if 'docx' in u and 'jsdelivr' in u:
        await r.fulfill(path='/home/claude/.npm-global/lib/node_modules/docx/dist/index.iife.js', content_type='application/javascript')
    elif u.startswith('file:') or u.startswith('data:') or u.startswith('blob:'): await r.continue_()
    else: await r.abort()
async def run(b,n):
    ctx=await b.new_context(viewport={'width':1300,'height':900},accept_downloads=True)
    await ctx.route('**/*',route)
    page=await ctx.new_page(); errs=[]
    page.on('console',lambda m: errs.append(m.text) if m.type in('error','warning') and 'net::' not in m.text and 'Failed to load' not in m.text else None)
    page.on('pageerror',lambda e: errs.append('PAGEERROR '+str(e)))
    page.on('dialog',lambda d: asyncio.ensure_future(d.accept()))
    await page.goto(f'file://{"/home/claude/site/dist"}/module{n}.html'); await page.wait_for_timeout(400)
    # open all details
    await page.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
    # fill inputs
    stats=await page.evaluate("""()=>{
      let t=0,c=0,s=0,r=0;
      document.querySelectorAll('main textarea, main input[type=text]').forEach((el,i)=>{el.value='Test answer '+i+' with some words here'; el.dispatchEvent(new Event('input',{bubbles:true})); t++;});
      document.querySelectorAll('main input[type=checkbox]').forEach((el,i)=>{ if(i%2==0){el.checked=true; el.dispatchEvent(new Event('change',{bubbles:true})); c++;}});
      document.querySelectorAll('main select').forEach((el,i)=>{ if(el.options.length>1){el.selectedIndex=1; el.dispatchEvent(new Event('change',{bubbles:true})); s++;}});
      const names=new Set(); document.querySelectorAll('main input[type=radio]').forEach(el=>{ if(!names.has(el.name)){names.add(el.name); el.checked=true; el.dispatchEvent(new Event('change',{bubbles:true})); r++;}});
      return {t,c,s,r};
    }""")
    await page.wait_for_timeout(500)
    # click all reveal buttons, and 'Show it anyway' if prompted
    revs=await page.evaluate("""()=>{ let n=0,shown=0; document.querySelectorAll('.btn-reveal').forEach(b=>{ b.click(); n++; const box=b.parentElement; const p=box.querySelector('.reveal-prompt'); if(p && !p.hidden){ p.querySelector('button').click(); } if(!box.querySelector('.reveal-panel').hidden) shown++; }); return {n,shown}; }""")
    scores=await page.evaluate("[...document.querySelectorAll('.score')].map(e=>e.textContent)")
    stored=await page.evaluate(f"(()=>{{const r=localStorage.getItem('rlt-m{n}-selfstudy-v1'); return r?Object.keys(JSON.parse(r).data).length:0}})()")
    # reload persistence
    await page.reload(); await page.wait_for_timeout(400)
    filled=await page.evaluate("[...document.querySelectorAll('main textarea')].filter(t=>t.value).length")
    dots=await page.evaluate("[document.querySelectorAll('.dot').length, document.querySelectorAll('.dot.done').length]")
    # export with models
    await page.check('#f-incl'); await page.fill('#f-name','Test Teacher')
    async with page.expect_download() as dl:
        await page.click('.mywork .btn-primary')
    d=await dl.value; path=f'{OUT}/m{n}.docx'; await d.save_as(path)
    z=zipfile.ZipFile(path); xml=z.read('word/document.xml').decode()
    txt=re.sub(r'<[^>]+>',' ',xml)
    fp=len(re.findall(r'\b(I|my|me|mine|myself)\b',txt))
    await page.set_viewport_size({'width':1300,'height':900}); await page.goto(f'file:///home/claude/site/dist/module{n}.html'); await page.wait_for_timeout(300)
    await page.screenshot(path=f'{OUT}/m{n}_top.png')
    await page.evaluate("window.scrollTo(0,document.body.scrollHeight)"); await page.wait_for_timeout(200)
    await page.screenshot(path=f'{OUT}/m{n}_bottom.png')
    await page.set_viewport_size({'width':390,'height':844}); await page.goto(f'file:///home/claude/site/dist/module{n}.html'); await page.wait_for_timeout(300)
    await page.screenshot(path=f'{OUT}/m{n}_mobile.png')
    hscroll=await page.evaluate("document.documentElement.scrollWidth>window.innerWidth+1")
    print(f'M{n}',stats,revs,'scores',scores,'stored',stored,'refilled',filled,'dots',dots,'docx KB',os.path.getsize(path)//1024,'firstperson-in-docx',fp,'hscroll',hscroll,'errors',errs[:4])
    await ctx.close()
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for n in [int(x) for x in sys.argv[1:]]: await run(b,n)
        await b.close()
asyncio.run(main())
