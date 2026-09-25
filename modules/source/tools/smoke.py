import asyncio, sys, json
from playwright.async_api import async_playwright
PAGES=sys.argv[1:]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for pg in PAGES:
            ctx=await b.new_context(viewport={'width':1300,'height':900})
            # block external to avoid hangs; route docx lib to local copy
            async def route(r):
                u=r.request.url
                if 'docx' in u and 'jsdelivr' in u:
                    await r.fulfill(path='/home/claude/.npm-global/lib/node_modules/docx/dist/index.iife.js', content_type='application/javascript')
                elif u.startswith('file:') or u.startswith('data:'): await r.continue_()
                else: await r.abort()
            await ctx.route('**/*',route)
            page=await ctx.new_page(); errs=[]
            page.on('console',lambda m: errs.append(m.text) if m.type in('error','warning') else None)
            page.on('pageerror',lambda e: errs.append('PAGEERROR '+str(e)))
            await page.goto('file:///home/claude/site/dist/'+pg); await page.wait_for_timeout(600)
            n=await page.evaluate("document.querySelectorAll('details.step').length")
            print(pg,'steps',n,'errors',[e for e in errs if 'net::' not in e and 'Failed to load resource' not in e][:5])
            await page.screenshot(path=f'/home/claude/site/shots/{pg}.png',full_page=False)
            await ctx.close()
        await b.close()
asyncio.run(main())
