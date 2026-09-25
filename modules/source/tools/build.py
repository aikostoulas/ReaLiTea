import base64, json, os, re, sys
ROOT='/home/claude/site'; E=ROOT+'/engine'; D=ROOT+'/data'; OUT=ROOT+'/dist'
os.makedirs(OUT,exist_ok=True)
def b64(p,mime): return f"data:{mime};base64,"+base64.b64encode(open(p,'rb').read()).decode()
assets={'logoWhite':b64(ROOT+'/img/logo_white.png','image/png'),'euWhite':b64(ROOT+'/img/eu_white.png','image/png')}
css=open(E+'/styles.css').read(); app=open(E+'/app.js').read(); site=open(E+'/site.js').read()
assets_js='window.RLT_ASSETS='+json.dumps(assets)+';'
FONTS='''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet">'''
def page(title,theme,scripts,docx=False):
    js=''.join(f'<script>{x}</script>\n' for x in scripts)
    lib='<script src="https://cdn.jsdelivr.net/npm/docx@9.6.1/dist/index.iife.js"></script>\n' if docx else ''
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="icon" href="{assets['logoWhite'] if False else ''}">
{FONTS}
<style>{css}</style>
</head>
<body class="theme-{theme}">
<a href="#main" class="skip">Skip to the main content</a>
<div id="app"><noscript><p style="padding:24px">These self-study modules need JavaScript to run.</p></noscript></div>
{lib}{js}</body>
</html>
'''
titles={1:'Drawing on published professional knowledge',2:'Locating relevant knowledge to inform language education',3:'Engaging with journal articles (and beyond)',4:'Critical reading and evaluation of published professional knowledge',5:'Alternative ways of reading research in language education'}
for n in range(1,6):
    df=f'{D}/module{n}.js'
    if not os.path.exists(df): continue
    scripts=[site,assets_js]
    rf=f'{D}/extras{n}.js'
    if os.path.exists(rf): scripts.append(open(rf).read())
    scripts+= [open(df).read(), app]
    html=page(f'Module {n}: {titles[n]} — ReaLiTea self-study',f'm{n}',scripts,docx=True)
    html=html.replace('<link rel="icon" href="">\n','')
    open(f'{OUT}/module{n}.html','w').write(html); print('built module',n,len(html)//1024,'KB')
html=page('ReaLiTea self-study modules','home',[site,assets_js,app,open(E+'/home.js').read()])
html=html.replace('<link rel="icon" href="">\n','')
open(f'{OUT}/index.html','w').write(html); print('built index',len(html)//1024,'KB')
