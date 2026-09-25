import re, json, sys
def md_inline(t):
    t=re.sub(r'</?u>|<span[^>]*>|</span>','',t)
    t=t.replace('\\[','[').replace('\\]',']').replace('\\*','*')
    t=re.sub(r'<(https?://[^>]+)>',r'[\1](\1)',t)
    t=re.sub(r'\*([^*]+)\*,\s*\*([^*]+)\*',r'*\1, \2*',t)  # merge split italics like *Journal*, *21*
    return t.strip()
def section(md, start_pat):
    lines=md.split('\n'); out=[]; on=False
    for ln in lines:
        if re.match(start_pat,ln): on=True; continue
        if on and re.match(r'^## ',ln): break
        if on: out.append(ln)
    return out
def refs_block(lines):
    items=[md_inline(l) for l in lines if l.strip() and not l.startswith('[^')]
    return {'t':'refs','items':items}
def reading_blocks(lines):
    blocks=[]; 
    for l in lines:
        if not l.strip() or l.startswith('[^'): continue
        if l.startswith('### '): blocks.append({'t':'h4','text':l[4:].strip().strip('*').strip()})
        elif l.startswith('> '): blocks.append({'t':'p','text':md_inline(l[2:])})
        else: blocks.append({'t':'p','text':md_inline(l)})
    return blocks
if __name__=='__main__':
    n=sys.argv[1]; md=open(f'/home/claude/site/text/M{n}.md').read()
    spec=json.loads(sys.argv[2])  # [[pattern, id, title, kind]]
    extras=[]
    for pat,id_,title,kind in spec:
        lines=section(md,pat)
        blocks=[refs_block(lines)] if kind=='refs' else reading_blocks(lines)
        extras.append({'id':id_,'title':title,'blocks':blocks})
    open(f'/home/claude/site/data/extras{n}.js','w').write('window.RLT_EXTRAS='+json.dumps(extras,ensure_ascii=False,indent=1)+';\n')
    print(json.dumps(extras,ensure_ascii=False)[:600])
