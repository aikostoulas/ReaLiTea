import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); ctx=await b.new_context(viewport={'width':1300,'height':900})
        async def route(r):
            u=r.request.url
            await (r.continue_() if u.startswith(('file:','data:','blob:')) else r.abort())
        await ctx.route('**/*',route)
        pg=await ctx.new_page()
        await pg.goto('file:///home/claude/site/dist/index.html'); await pg.wait_for_timeout(300)
        await pg.screenshot(path='shots/index_full.png',full_page=True)
        await pg.goto('file:///home/claude/site/dist/module2.html#a3s2'); await pg.wait_for_timeout(500)
        await pg.evaluate("document.getElementById('a3s2').scrollIntoView()"); await pg.evaluate("window.scrollBy(0,-10)")
        await pg.screenshot(path='shots/m2_quiz.png')
        await pg.goto('file:///home/claude/site/dist/module5.html#a2s2'); await pg.wait_for_timeout(500)
        await pg.evaluate("document.getElementById('a2s2').scrollIntoView()"); await pg.evaluate("window.scrollBy(0,900)")
        await pg.screenshot(path='shots/m5_grid.png')
        await pg.goto('file:///home/claude/site/dist/module1.html#a5s3'); await pg.wait_for_timeout(500)
        await pg.evaluate("document.getElementById('a5s3').scrollIntoView()"); await pg.evaluate("window.scrollBy(0,150)")
        await pg.screenshot(path='shots/m1_chart.png')
        await b.close()
asyncio.run(main())
