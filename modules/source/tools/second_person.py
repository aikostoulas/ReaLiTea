import re,sys
MODAL=set('will would can cannot could may might must should shall do did does am was have had need needed feel felt think thought know knew get got see saw find found expect expected want wanted understand understood'.split())
def conv(t):
    o=t
    t=re.sub(r"\bI am\b","you are",t); t=re.sub(r"\bI'm\b","you're",t); t=re.sub(r"\bI’m\b","you’re",t)
    t=re.sub(r"\bI was\b","you were",t); t=re.sub(r"\bI've\b","you've",t)
    t=re.sub(r"\bmyself\b","yourself",t); t=re.sub(r"\bMyself\b","Yourself",t)
    t=re.sub(r"\bmine\b","yours",t)
    t=re.sub(r"\bmy\b","your",t); t=re.sub(r"\bMy\b","Your",t)
    t=re.sub(r"\bme\b","you",t)
    # imperative: clause-initial I + plain verb
    def imp(m):
        pre,verb=m.group(1),m.group(2)
        if verb.lower() in MODAL or verb.endswith('ed') or verb in ('not',):
            return pre+('You ' if pre.strip()=='' or pre.rstrip().endswith(('.', ':', '**','`','(')) else 'you ')+verb
        v=verb
        cap = pre=='' or re.search(r'[.:!?]\s*$|\*\*\s*$|^\s*$|\(\s*$',pre)
        return pre+(v[0].upper()+v[1:] if cap else v)
    t=re.sub(r"(^|[.:!?]\s+|\*\*\s*|\(\s*|,\s+|;\s+|\band\s+|\bthen\s+)I ([a-z]+)",imp,t)
    t=re.sub(r"\bI\b","you",t)
    # sentence-initial 'you' → 'You'
    t=re.sub(r"(^|[.:!?]\s+|\*\*)you\b",lambda m:m.group(1)+'You',t)
    return t
if __name__=='__main__':
    for line in sys.stdin: print(conv(line.rstrip('\n')))
