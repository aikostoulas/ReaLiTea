import re,sys
sys.path.insert(0,'tools'); from second_person import conv
p=sys.argv[1]; s=open(p).read()
# skip regions: N('voices',...) blocks and email blocks
skip=[]
for m in re.finditer(r"N\('voices'|\{t:'email'",s):
    i=m.start(); depth=0; j=i
    while True:
        c=s[j]
        if c in '([{': depth+=1
        elif c in ')]}':
            depth-=1
            if depth==0: break
        j+=1
    skip.append((i,j))
def inskip(i): return any(a<=i<b for a,b in skip)
out=[]; last=0
for m in re.finditer(r"`(?:[^`\\]|\\.)*`|'(?:[^'\\\n]|\\.)*'|\"(?:[^\"\\\n]|\\.)*\"",s):
    lit=m.group(0)
    if inskip(m.start()) or ' ' not in lit: continue
    new=lit[0]+conv(lit[1:-1])+lit[-1]
    if new!=lit:
        out.append(s[last:m.start()]); out.append(new); last=m.end()
out.append(s[last:]); open(p,'w').write(''.join(out))
