/* ReaLiTea self-study engine: renders module data, autosaves, exports responses to .docx */
(function(){
'use strict';
const M = window.RLT_MODULE;
if(M && window.RLT_EXTRAS) M.extras=window.RLT_EXTRAS.concat(M.extras||[]);
const SITE = window.RLT_SITE || {modules:[]};
const ASSET = window.RLT_ASSETS || {};
const $ = (tag, attrs={}, ...kids) => {
  const el = document.createElement(tag);
  for (const [k,v] of Object.entries(attrs||{})) {
    if (v==null || v===false) continue;
    if (k==='class') el.className=v;
    else if (k==='html') el.innerHTML=v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v===true?'':v);
  }
  for (const k of kids.flat(Infinity)) if (k!=null && k!==false) el.append(k.nodeType?k:document.createTextNode(k));
  return el;
};

/* ---------- inline markup: **bold**, *italic*, [text](url) ---------- */
function segments(raw){
  const src=String(raw).replace(/\\\*/g,'\u0001');
  const fix=t=>t.replace(/\u0001/g,'*');
  return segs(src).map(s=>({...s,text:fix(s.text),link:s.link}));
}
function segs(src){
  const out=[]; const re=/\[([^\]]+)\]\((https?:[^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last=0, m;
  while((m=re.exec(src))){
    if(m.index>last) out.push({text:src.slice(last,m.index)});
    if(m[1]) out.push({text:m[1],link:m[2]});
    else if(m[3]) { // bold may contain italics
      for (const s of segs(m[3])) out.push({...s,b:true});
    }
    else out.push({text:m[4],i:true});
    last=re.lastIndex;
  }
  if(last<src.length) out.push({text:src.slice(last)});
  return out;
}
function inline(src){
  const f=document.createDocumentFragment();
  for(const s of segments(String(src))){
    let node = s.link ? $('a',{href:s.link,target:'_blank',rel:'noopener'},s.text) : document.createTextNode(s.text);
    if(s.i) node=$('em',{},node);
    if(s.b) node=$('strong',{},node);
    f.append(node);
  }
  return f;
}
const plain = src => segments(String(src)).map(s=>s.text).join('');

/* ---------- state & storage ---------- */
if(!M){ window.RLT_UI_ONLY=true; }
const KEY=M?M.storageKey:'rlt-none';
let storageOK=true;
let S={name:'',data:{},started:null,updated:null,includeModels:false};
try{ const raw=localStorage.getItem(KEY); if(raw) S=Object.assign(S,JSON.parse(raw)); }catch(e){ storageOK=false; }
let saveTimer=null;
function save(){
  S.updated=new Date().toISOString();
  if(!S.started) S.started=S.updated;
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>{
    try{ localStorage.setItem(KEY,JSON.stringify(S)); storageOK=true; }catch(e){ storageOK=false; }
    updateStatus(); updateProgress();
  },300);
}
const get = id => S.data[id];
const set = (id,v) => { S.data[id]=v; save(); };

function filled(v){
  if(v==null) return false;
  if(typeof v==='string') return v.trim()!=='';
  if(typeof v==='boolean') return v;
  if(Array.isArray(v)) return v.some(filled);
  if(typeof v==='object') return Object.values(v).some(filled);
  return !!v;
}

/* ---------- index of blocks ---------- */
const RESPONSE_TYPES=new Set(['text','grid','checks','match','rank','rate','choice','quiz']);
function walk(blocks,fn){ for(const b of blocks||[]){ fn(b); if(b.body) walk(b.body,fn); } }
function stepHasResponse(step){ let r=false; walk(step.blocks,b=>{ if(RESPONSE_TYPES.has(b.t) && !b.selfcheck && filled(get(b.id))) r=true; }); return r; }

/* ---------- block renderers ---------- */
const NOTE_LABEL={note:'Note',explain:'Explanation',worked:'Worked example',branch:'If… then…',voices:'Other voices',resist:'Keep in mind',expect:'What to expect',options:'Multiple options',provisional:'Still in preparation',ai:'AI-generated',model:'One possible response'};
const TASK_LABEL={online:'Online resources',writing:'Writing task',reading:'Focused reading task',reflection:'Reflection task',discussion:'Discussion option',video:'Video-based task'};

function field(label, control, id){
  return $('div',{class:'field'}, label?$('label',{class:'field-label',for:id},inline(label)):null, control);
}

function render(b){
  switch(b.t){
  case 'h': return $('h3',{class:'intro-h'},b.text);
  case 'p': {
    if(b.instr) return $('div',{class:'instruction'},
      b.task?$('div',{class:'task-tags'},b.task.map(t=>$('span',{class:'tag tag-'+t},TASK_LABEL[t]))):null,
      $('p',{},inline(b.text)));
    return $('p',{class:b.small?'small':null},inline(b.text));
  }
  case 'list': return $('ul',{},b.items.map(i=>$('li',{},inline(i))));
  case 'olist': return $('ol',{},b.items.map(i=>$('li',{},inline(i))));
  case 'quote': return $('figure',{class:'quote'},
      $('blockquote',{},String(b.text).split('\n\n').map(t=>$('p',{},t.split('\n').map((ln,i)=>[i?$('br'):null,inline(ln)])))),
      b.cite?$('figcaption',{},inline(b.cite)):null);
  case 'source': return $('div',{class:'source'},
      $('div',{class:'source-title'},b.title),
      $('p',{class:'source-cite'},inline(b.citation)),
      $('a',{class:'btn btn-quiet',href:b.url,target:'_blank',rel:'noopener'},'Open in a new tab'));
  case 'table': return $('div',{class:'scroll'},$('table',{class:'static'},
      $('thead',{},$('tr',{},b.head.map(h=>$('th',{scope:'col'},inline(h))))),
      $('tbody',{},b.rows.map(r=>$('tr',{},r.map((c,i)=>{
        const inner = b.split ? $('ul',{class:'plain'},c.split(b.split).map(x=>$('li',{},x.trim()))) : inline(c);
        return (i===0 && !b.split && b.head[0]==='') ? $('th',{scope:'row'},inline(c)) : $('td',{},inner);
      }))))));
  case 'sub': return $('details',{class:'sub'},$('summary',{},b.title),$('div',{class:'sub-body'},b.body.map(render)));
  case 'note': {
    const body=$('div',{class:'note-body'},b.body.map(render));
    const head=$('div',{class:'note-head'},$('span',{class:'note-kind'},NOTE_LABEL[b.kind]||'Note'),
      b.title && b.title!==NOTE_LABEL[b.kind] ? $('span',{class:'note-title'},b.title):null);
    if(b.collapsed){
      return $('details',{class:'note note-'+b.kind},$('summary',{},head,$('span',{class:'note-toggle'},'Show')),body);
    }
    return $('aside',{class:'note note-'+b.kind},head,body);
  }
  case 'email': {
    const pre=$('pre',{class:'email'},b.text);
    const btn=$('button',{class:'btn btn-quiet',type:'button',onclick:async()=>{
      try{ await navigator.clipboard.writeText(b.text); btn.textContent='Copied'; }catch(e){ btn.textContent='Select the text to copy it'; }
      setTimeout(()=>btn.textContent='Copy the email',2000);
    }},'Copy the email');
    return $('div',{},pre,btn);
  }
  case 'bars': return $('figure',{class:'bars'},
      b.title?$('figcaption',{class:'bars-title'},b.title):null,
      b.rows.map(([lab,val])=>$('div',{class:'bar-row'},$('span',{},lab),
        $('div',{class:'bar-track','aria-hidden':'true'},$('div',{class:'bar-fill',style:`width:${val}%`})),
        $('span',{class:'bar-val'},val+'%'))),
      b.note?$('p',{class:'small',style:'margin:8px 0 0'},inline(b.note)):null);
  case 'profiles': return $('div',{class:'profiles'},b.items.map(([name,text])=>$('div',{class:'profile'},$('h4',{},name),$('p',{},inline(text)))));
  case 'mindmap': return $('figure',{class:'mindmap',role:'img','aria-label':b.alt},
      b.nodes.slice(0,4).map(([t,d])=>$('div',{class:'node','aria-hidden':'true'},$('strong',{},t),d||'')),
      $('div',{class:'centre','aria-hidden':'true'},b.centre),
      b.nodes.slice(4).map(([t,d])=>$('div',{class:'node','aria-hidden':'true'},$('strong',{},t),d||'')));
  case 'video': return $('figure',{class:'video'},
      $('video',{controls:true,preload:'metadata',playsinline:true,poster:b.poster||null,'aria-label':b.title},
        $('source',{src:b.src,type:'video/mp4'}),
        $('p',{},'Your browser cannot play this video. ',$('a',{href:b.src},'Download the video'),'.')),
      $('figcaption',{},inline(b.caption||b.title)));
  case 'placeholder': return $('div',{class:'placeholder',role:'note'},$('strong',{},'Still in preparation: '),inline(b.text));
  case 'refs': return $('ul',{class:'refs'},b.items.map(i=>$('li',{},inline(i))));
  case 'h4': return $('h3',{class:'sub-h'},b.text);
  case 'legend': return $('div',{class:'legend'},
      $('p',{},'Throughout the module, support appears in boxes like these:'),
      $('ul',{class:'legend-list'},['explain','worked','expect','branch','voices','resist','options'].map(k=>$('li',{class:'note-'+k},$('span',{class:'swatch'}),NOTE_LABEL[k]))));
  case 'text': return renderText(b);
  case 'choice': {
    const id='f-'+b.id;
    const sel=$('select',{id,onchange:e=>set(b.id,e.target.value)},b.options.map(o=>$('option',{value:o},o||'Choose…')));
    sel.value=get(b.id)||'';
    return field(b.label,sel,id);
  }
  case 'checks': return renderChecks(b);
  case 'grid': return renderGrid(b);
  case 'match': return renderMatch(b);
  case 'rank': return renderRank(b);
  case 'rate': return renderRate(b);
  case 'reveal': return renderReveal(b);
  case 'quiz': return renderQuiz(b);
  case 'quizscore': {
    const el=$('p',{class:'score'});
    const upd=()=>{ const v=get(b.of)||{}; const blk=findBlock(b.of); const n=blk.items.filter((q,i)=>String(v[i])===String(q.key)).length;
      el.textContent = `You answered ${n} out of ${blk.items.length} correctly.`; };
    upd(); el._update=upd; return el;
  }
  case 'matchscore': {
    const el=$('p',{class:'score'});
    const upd=()=>{ const v=get(b.of)||{}; const blk=findBlock(b.of); const n=blk.key.filter((k,i)=>v[i]===k).length;
      el.textContent = `You matched ${n} out of ${blk.key.length} correctly.`; };
    upd(); el._update=upd; return el;
  }
  }
  return $('div',{},'');
}

function renderText(b){
  const id='f-'+b.id;
  const ctl = b.rows===1
    ? $('input',{id,type:'text',value:get(b.id)||''})
    : $('textarea',{id,rows:b.rows||4},get(b.id)||'');
  const counter = b.words ? $('div',{class:'counter','aria-live':'polite'}) : null;
  const upd=()=>{ if(counter){ const n=(ctl.value.trim().match(/\S+/g)||[]).length;
      counter.textContent=`${n} ${n===1?'word':'words'}`+(b.target?` (aim for ${b.target[0]}–${b.target[1]})`:''); } };
  ctl.addEventListener('input',()=>{ set(b.id,ctl.value); upd(); });
  upd();
  return $('div',{class:'field'},$('label',{class:'field-label',for:id},inline(b.label)),ctl,counter);
}

function renderChecks(b){
  const v=get(b.id)||{};
  const list=$('ul',{class:'checks'},b.items.map((item,i)=>{
    const id=`f-${b.id}-${i}`;
    const cb=$('input',{type:'checkbox',id,onchange:e=>{ const cur=Object.assign({},get(b.id)); cur[i]=e.target.checked; set(b.id,cur); }});
    cb.checked=!!v[i];
    return $('li',{},cb,$('label',{for:id},inline(item)));
  }));
  const box=$('div',{class:'checkbox-block'+(b.selfcheck?' selfcheck':'')},$('div',{class:'checks-label'},inline(b.label)),list);
  if(b.gate) return gateWrap(b,box,'Show the self-check points');
  return box;
}

function cellControl(b,col,r,c,rowsState){
  const val=(rowsState[r]||[])[c];
  const write=v=>{ const cur=(get(b.id)||[]).map(x=>x?x.slice():[]); while(cur.length<=r) cur.push([]); cur[r][c]=v; set(b.id,cur); };
  const aria=`${plain(b.label)}, row ${r+1}, ${col.h||'column '+(c+1)}`;
  if(col.type==='check'){ const cb=$('input',{type:'checkbox','aria-label':aria,onchange:e=>write(e.target.checked)}); cb.checked=!!val; return $('div',{class:'cell-check'},cb); }
  if(col.type==='select'){ const s=$('select',{'aria-label':aria,onchange:e=>write(e.target.value)},col.options.map(o=>$('option',{value:o},o||'—'))); s.value=val||''; return s; }
  if(col.type==='mark'){
    const cur=val||{};
    const s=$('select',{'aria-label':aria+' rating'},['','✔','~','✘'].map(o=>$('option',{value:o},o||'—')));
    s.value=cur.m||'';
    const t=$('textarea',{rows:2,'aria-label':aria+' evidence',placeholder:'Evidence'},cur.t||'');
    const w=()=>write({m:s.value,t:t.value});
    s.addEventListener('change',w); t.addEventListener('input',w);
    return $('div',{class:'cell-mark'},s,t);
  }
  const t=$('textarea',{rows:2,'aria-label':aria},val||'');
  t.addEventListener('input',()=>write(t.value));
  return t;
}

function renderGrid(b){
  const wrap=$('div',{class:'grid-block'});
  const draw=()=>{
    wrap.innerHTML='';
    const saved=get(b.id)||[];
    const n=Math.max(b.rows.length,saved.length);
    const tbody=$('tbody');
    for(let r=0;r<n;r++){
      const def=b.rows[r]||[];
      if(def[0] && def[0].group){ tbody.append($('tr',{class:'group'},$('th',{colspan:b.cols.length,scope:'colgroup'},def[0].group))); continue; }
      tbody.append($('tr',{},b.cols.map((col,c)=>{
        if(col.type) return $('td',{},cellControl(b,col,r,c,saved));
        return $('th',{scope:'row'},inline(def[c]||''));
      })));
    }
    const table=$('table',{class:'grid'},
      $('colgroup',{},b.cols.map(col=>$('col',{style:col.w?`width:${col.w}px`:null}))),
      $('thead',{},$('tr',{},b.cols.map(col=>$('th',{scope:'col'},inline(col.h))))),tbody);
    wrap.append($('div',{class:'field-label'},inline(b.label)),$('div',{class:'scroll'},table));
    if(b.addable) wrap.append($('button',{class:'btn btn-quiet',type:'button',onclick:()=>{
      const cur=(get(b.id)||[]).slice(); while(cur.length<n) cur.push([]); cur.push([]); set(b.id,cur); draw();
    }},'Add a row'));
  };
  draw();
  return wrap;
}

function renderMatch(b){
  const v=get(b.id)||{};
  const opts=$('dl',{class:'match-options'},b.options.map(([k,t])=>[$('dt',{},k),$('dd',{},inline(t))]));
  const rows=b.items.map((item,i)=>{
    const id=`f-${b.id}-${i}`;
    const s=$('select',{id,onchange:e=>{ const cur=Object.assign({},get(b.id)); cur[i]=e.target.value; set(b.id,cur); refreshScores(); }},
      ['',...b.options.map(o=>o[0])].map(o=>$('option',{value:o},o||'—')));
    s.value=v[i]||'';
    return $('li',{},$('label',{for:id},`${i+1}. ${item}`),s);
  });
  return $('div',{class:'match'},$('div',{class:'field-label'},b.label),opts,$('ol',{class:'match-items'},rows));
}

function renderQuiz(b){
  const v=get(b.id)||{};
  const letters=b.letters||'abcdefgh';
  return $('div',{class:'quiz'},b.label?$('div',{class:'field-label'},inline(b.label)):null,
    b.items.map((q,i)=>$('fieldset',{class:'quiz-q'+(b.inline?' quiz-inline':'')},
      $('legend',{},$('span',{class:'quiz-n'},`${i+1}`),inline(q.q)),
      $('div',{class:'quiz-opts'},q.options.map((o,k)=>{
        const id=`f-${b.id}-${i}-${k}`;
        const rb=$('input',{type:'radio',id,name:`${b.id}-${i}`,value:String(k),onchange:()=>{ const cur=Object.assign({},get(b.id)); cur[i]=String(k); set(b.id,cur); refreshScores(); }});
        rb.checked=v[i]===String(k);
        return $('label',{for:id,class:'quiz-opt'},rb,$('span',{},b.inline?o:[`${letters[k]}. `,inline(o)]));
      })))));
}

function renderRank(b){
  const warn=$('p',{class:'warn','aria-live':'polite'});
  const check=()=>{ const v=Object.values(get(b.id)||{}).filter(Boolean); warn.textContent = new Set(v).size<v.length ? 'You have used the same rank more than once.' : ''; };
  const n=b.items.length;
  const rows=b.items.map(([name,desc],i)=>{
    const id=`f-${b.id}-${i}`;
    const s=$('select',{id,onchange:e=>{ const cur=Object.assign({},get(b.id)); cur[i]=e.target.value; set(b.id,cur); check(); }},
      ['',...Array.from({length:n},(_,k)=>String(k+1))].map(o=>$('option',{value:o},o||'—')));
    s.value=(get(b.id)||{})[i]||'';
    return $('tr',{},$('td',{class:'rank-cell'},s),$('th',{scope:'row'},$('label',{for:id},name)),desc?$('td',{},desc):null);
  });
  check();
  const hasDesc=b.items.some(it=>it[1]);
  return $('div',{class:'grid-block'},$('div',{class:'field-label'},b.label),
    $('div',{class:'scroll'},$('table',{class:'grid rank'},$('thead',{},$('tr',{},$('th',{scope:'col'},'Rank'),$('th',{scope:'col'},b.headLabel||'Evaluation criterion'),hasDesc?$('th',{scope:'col'},'Description'):null)),$('tbody',{},rows))),warn);
}

function renderRate(b){
  const v=get(b.id)||{};
  const rows=b.items.map((item,i)=> item.group ? $('tr',{class:'group'},$('th',{colspan:b.scale.length+1,scope:'colgroup'},item.group)) : $('tr',{},$('th',{scope:'row'},item),b.scale.map((lab,k)=>{
    const rb=$('input',{type:'radio',name:`${b.id}-${i}`,value:String(k+1),'aria-label':`${item}: ${lab}`,onchange:()=>{ const cur=Object.assign({},get(b.id)); cur[i]=String(k+1); set(b.id,cur); }});
    rb.checked=v[i]===String(k+1);
    return $('td',{class:'rate-cell'},rb);
  })));
  return $('div',{class:'grid-block'},$('div',{class:'field-label'},b.label),
    $('div',{class:'scroll'},$('table',{class:'grid rate'},$('thead',{},$('tr',{},$('th',{scope:'col'},b.headLabel||'Criterion'),b.scale.map(s=>$('th',{scope:'col'},s)))),$('tbody',{},rows))));
}

function gateWrap(b,content,label){
  const box=$('div',{class:'reveal'});
  const panel=$('div',{class:'reveal-panel',hidden:true},content);
  const prompt=$('div',{class:'reveal-prompt',hidden:true},
    $('p',{},'You have not responded to this task yet. You will get more from the model if you try first.'),
    $('button',{class:'btn btn-quiet',type:'button',onclick:()=>open()},'Show it anyway'));
  const btn=$('button',{class:'btn btn-reveal',type:'button','aria-expanded':'false',onclick:()=>{
    if(!panel.hidden){ panel.hidden=true; btn.setAttribute('aria-expanded','false'); btn.textContent=label; return; }
    const ready=!b.gate || b.gate.some(id=>filled(get(id)));
    if(ready) open(); else { prompt.hidden=false; }
  }},label);
  function open(){ prompt.hidden=true; panel.hidden=false; btn.setAttribute('aria-expanded','true'); btn.textContent='Hide'; refreshScores(); }
  box.append(btn,prompt,panel);
  return box;
}
function renderReveal(b){ return gateWrap(b,$('div',{},b.body.map(render)),b.label); }

const blockIndex={};
if(M) for(const a of M.activities) for(const s of a.steps) walk(s.blocks,b=>{ if(b.id){ if(blockIndex[b.id]) console.warn('duplicate id',b.id); blockIndex[b.id]=b; } });

function findBlock(id){ return blockIndex[id]; }
function refreshScores(){ document.querySelectorAll('.score').forEach(el=>el._update&&el._update()); }

/* ---------- page ---------- */
const PORTFOLIO=[
  {id:'pf-expect',label:'In what ways did you expect this activity to develop your research literacy?'},
  {id:'pf-impact',label:'In what positive or negative ways did this activity impact your research literacy?'},
  {id:'pf-further',label:'Are there any other skills or areas of knowledge that you need to develop based on your experience of this activity?'}];

let statusEl, navDots={};
function updateStatus(){
  if(!statusEl) return;
  if(!storageOK){ statusEl.textContent='This browser is not saving your responses (for example, in a private window). Export them before you close the page.'; statusEl.className='status status-warn'; return; }
  if(S.updated){ const d=new Date(S.updated); statusEl.textContent=`Saved on this device at ${d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}.`; }
  else statusEl.textContent='Your responses are saved on this device as you type.';
  statusEl.className='status';
}
function updateProgress(){
  for(const a of M.activities) for(const s of a.steps){ const d=navDots[s.id]; if(d) d.classList.toggle('done',stepHasResponse(s)); }
}

/* ---------- shared page furniture (also used by the landing page) ---------- */
function masthead(opts){
  const brand=$('a',{class:'brand',href:SITE.home||'index.html'},
    $('div',{class:'brand-text'},$('strong',{},'ReaLiTea self-study modules'),$('span',{},opts.brandLine)),
    ASSET.logoWhite?$('img',{src:ASSET.logoWhite,alt:'ReaLiTea – Research Literacy of Teachers logo'}):null);
  return $('header',{class:'masthead'},$('div',{class:'mast-inner'},
    $('div',{class:'mast-top'},$('p',{class:'series'},SITE.series),brand),
    opts.title, opts.meta?$('p',{class:'mast-meta'},opts.meta):null));
}
function audienceBox(items,extra){
  return $('section',{class:'side-box audience','aria-labelledby':'aud-h'},
    $('h2',{id:'aud-h'},'Who is this resource for?'),
    items.map(t=>$('p',{},inline(t))), extra||null);
}
function localBox(){
  const icon=$('span',{class:'local-icon','aria-hidden':'true',html:'<svg viewBox="0 0 16 16" width="16" height="16"><rect x="3" y="7" width="10" height="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'});
  return $('section',{class:'side-box local','aria-labelledby':'local-h'},
    $('h2',{id:'local-h'},icon,'Your responses stay with you'),
    $('p',{},'Everything you type is saved only in this browser, on this device. It is not sent to a remote server, and the ReaLiTea team cannot see it.'),
    $('p',{},'Your responses will be lost if you clear your browser data, switch device or use a private window, so export them to Word from time to time. The Word file is also created on your device.'));
}
function footer(){
  const cite = M ? M.citation : null;
  return $('footer',{class:'foot'},$('div',{class:'foot-inner'},
    $('div',{class:'foot-row'},
      ASSET.logoWhite?$('img',{src:ASSET.logoWhite,alt:'ReaLiTea – Research Literacy of Teachers logo'}):null,
      $('div',{},
        $('p',{},inline(SITE.projectDescription)),
        $('p',{},inline(cite ? `CC-BY-SA The ReaLiTea Project. (2026). This material is licensed under a CC-BY-SA (Attribution 4.0 International) Creative Commons License. Please credit it as follows: ${cite} This license does not apply to materials that are covered by other copyright laws and that are linked herein.`
          : `CC-BY-SA The ReaLiTea Project. (2026). These materials are licensed under a CC-BY-SA (Attribution 4.0 International) Creative Commons License. Each module gives its own recommended citation. This license does not apply to materials that are covered by other copyright laws and that are linked herein.`)),
        $('details',{},$('summary',{},'Project members'),$('p',{class:'small'},'Listed in alphabetical order.'),$('ul',{class:'plain authors'},SITE.authors.map(a=>$('li',{},a)))))),
    $('div',{class:'foot-row eu'},
      ASSET.euWhite?$('img',{src:ASSET.euWhite,alt:'Co-funded by the European Union'}):null,
      $('p',{class:'small'},'The ReaLiTea project is co-funded by the European Union. Views and opinions expressed are, however, those of the authors only and do not necessarily reflect those of the European Union or the Erasmus+ National Agency for Higher Education (German Academic Exchange Service). Neither the European Union nor the granting authority can be held responsible for them.'))));
}
function pager(n){
  const mods=SITE.modules; const i=mods.findIndex(m=>m.n===n);
  const prev=mods[i-1], next=mods[i+1];
  return $('nav',{class:'pager','aria-label':'Other modules'},
    prev?$('a',{href:prev.file,class:'prev'},$('small',{},`← Module ${prev.n}`),prev.title):$('a',{href:SITE.home||'index.html',class:'prev'},$('small',{},'← All modules'),'Self-study modules home'),
    next?$('a',{href:next.file,class:'next'},$('small',{},`Module ${next.n} →`),next.title):$('a',{href:SITE.home||'index.html',class:'next'},$('small',{},'All modules →'),'Self-study modules home'));
}
window.RLT_UI={$,inline,masthead,audienceBox,localBox,footer};

function build(){
  const root=document.getElementById('app');
  root.innerHTML='';

  root.append(masthead({
    brandLine:`Module ${M.number} of ${SITE.modules.length||5}`,
    title:$('div',{class:'mast-title'},$('span',{class:'mod-num','aria-hidden':'true'},String(M.number)),
      $('div',{},$('p',{class:'mod-label'},`Module ${M.number}, self-study edition`),$('h1',{},M.title))),
    meta:'Work through the steps at your own pace. Your responses stay on this device until you export them.'}));

  const layout=$('div',{class:'layout'});
  root.append(layout);

  // aside: audience, my work, local storage, nav
  statusEl=$('p',{class:'status'});
  const nameInput=$('input',{type:'text',id:'f-name',value:S.name||'',autocomplete:'name'});
  nameInput.addEventListener('input',()=>{ S.name=nameInput.value; save(); });
  const incl=$('input',{type:'checkbox',id:'f-incl'}); incl.checked=!!S.includeModels;
  incl.addEventListener('change',()=>{ S.includeModels=incl.checked; save(); });
  const exportBtn=$('button',{class:'btn btn-primary',type:'button',onclick:()=>exportDocx(exportBtn)},'Export your responses (.docx)');
  const clearBtn=$('button',{class:'btn btn-danger',type:'button',onclick:()=>{
    if(confirm('Delete all your responses to this module from this device? This cannot be undone. Export them first if you want to keep them.')){
      S={name:'',data:{},started:null,updated:null,includeModels:false};
      try{ localStorage.removeItem(KEY); }catch(e){}
      build(); }
  }},'Clear your responses');
  const nav=$('nav',{class:'toc','aria-label':'Module contents'},
    $('a',{href:'#overview',class:'toc-a'},'Module overview'),
    M.activities.map((a,ai)=>$('div',{class:'toc-group'},
      $('a',{href:'#'+a.id,class:'toc-a'},`Activity ${ai+1}: ${a.title}`),
      $('ol',{},a.steps.map((s,si)=>{ const dot=$('span',{class:'dot','aria-hidden':'true'}); navDots[s.id]=dot;
        return $('li',{},$('a',{href:'#'+s.id,onclick:()=>openStep(s.id)},dot,s.label||`Step ${si+1}`)); })))),
    M.extras?M.extras.map(x=>$('a',{href:'#'+x.id,class:'toc-a'},x.title)):null,
    $('a',{href:'#portfolio',class:'toc-a'},'Portfolio entry'));
  layout.append($('aside',{class:'side'},
    audienceBox(M.audience),
    localBox(),
    $('div',{class:'side-sticky'},
    $('section',{class:'mywork','aria-labelledby':'mywork-h'},
      $('h2',{id:'mywork-h'},'Your work'),
      $('div',{class:'field'},$('label',{class:'field-label',for:'f-name'},'Your name (optional, shown on the export)'),nameInput),
      statusEl,
      $('div',{class:'inline-check'},incl,$('label',{for:'f-incl'},'Include model answers in the export')),
      exportBtn, clearBtn),
    $('details',{class:'toc-wrap',open:window.matchMedia('(min-width: 1000px)').matches},$('summary',{},'Contents'),nav))));

  const main=$('main',{class:'main',id:'main'});
  layout.append(main);

  main.append($('section',{class:'overview',id:'overview'},$('h2',{},'Module overview'),M.intro.map(render)));

  M.activities.forEach((a,ai)=>{
    const sec=$('section',{class:'activity',id:a.id},
      $('h2',{},$('span',{class:'act-no'},`Activity ${ai+1}`),a.title),
      $('dl',{class:'act-meta'},
        $('div',{},$('dt',{},'This activity will help you to'),$('dd',{},$('ul',{},a.helps.map(h=>$('li',{},inline(h)))))),
        $('div',{},$('dt',{},'To do this activity, you will need'),$('dd',{},$('ul',{},a.needs.map(h=>$('li',{},inline(h)))))),
        $('div',{},$('dt',{},'Time required'),$('dd',{},a.time))),
      a.lead?a.lead.map(render):null);
    a.steps.forEach((s,si)=>{
      sec.append($('details',{class:'step',id:s.id},
        $('summary',{},$('span',{class:'step-no'},s.label||`Step ${si+1}`),$('span',{class:'step-title'},s.title)),
        $('div',{class:'step-body'},s.blocks.map(render))));
    });
    main.append(sec);
  });

  if(M.extras) M.extras.forEach(x=>main.append($('section',{class:'activity',id:x.id},$('h2',{},x.title),x.blocks.map(render))));

  main.append($('section',{class:'activity portfolio',id:'portfolio'},
    $('h2',{},$('span',{class:'act-no'},'Portfolio'),'Recording this module in your Professional Development Plan'),
    $('p',{},inline(`Part III of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) asks you to record the research engagement activities you undertake. The export includes a completed row for the **${M.facet}** table, using what you write here. You can fill this in now or later.`)),
    PORTFOLIO.map(f=>renderText({t:'text',id:f.id,label:f.label,rows:3})),
    $('div',{class:'export-again'},$('button',{class:'btn btn-primary',type:'button',onclick:e=>exportDocx(e.currentTarget)},'Export your responses (.docx)'))));

  main.append(pager(M.number));

  root.append(footer());
  updateStatus(); updateProgress();
  if(location.hash) openStep(location.hash.slice(1));
}

function openStep(id){ const el=document.getElementById(id); if(el && el.tagName==='DETAILS') el.open=true; }
window.addEventListener('hashchange',()=>openStep(location.hash.slice(1)));
window.addEventListener('beforeprint',()=>document.querySelectorAll('details').forEach(d=>d.open=true));

/* ---------- export to .docx ---------- */
async function exportDocx(btn){
  if(!window.docx){ alert('The export tool could not load. Check your internet connection and try again, or use your browser\'s Print option to save a PDF.'); return; }
  const D=window.docx;
  const original=btn.textContent; btn.disabled=true; btn.textContent='Preparing…';
  try{
    const W=9638; // A4 minus 2 cm margins, in DXA
    const FONT='Calibri';
    const runs=(src,extra={})=>segments(String(src)).map(s=>{
      const o={text:s.text,bold:s.b||extra.bold,italics:s.i||extra.italics,size:extra.size,color:extra.color};
      return s.link ? new D.ExternalHyperlink({link:s.link,children:[new D.TextRun({...o,style:'Hyperlink'})]}) : new D.TextRun(o);
    });
    const para=(src,o={})=>new D.Paragraph({children:runs(src,o),spacing:{after:120},...(o.p||{})});
    const multi=(txt,o={})=>String(txt).split(/\n/).map(line=>new D.Paragraph({children:[new D.TextRun({text:line,...o})],spacing:{after:60}}));
    const label=txt=>new D.Paragraph({children:runs(txt,{bold:true}),spacing:{before:160,after:60},keepNext:true});
    const border={style:D.BorderStyle.SINGLE,size:4,color:'9AA9B6'};
    const borders={top:border,bottom:border,left:border,right:border};
    function table(head,rows,widths){
      const cols=head.length; const tw=widths?widths.reduce((a,b)=>a+b,0):W;
      const cw=widths||Array(cols).fill(Math.floor(W/cols));
      const cell=(content,i,isHead,shade)=>new D.TableCell({borders,width:{size:cw[i],type:D.WidthType.DXA},
        margins:{top:60,bottom:60,left:100,right:100},
        shading:(isHead||shade)?{type:D.ShadingType.CLEAR,color:'auto',fill:isHead?'DCE4EB':'EEF2F5'}:undefined,
        children:(Array.isArray(content)?content:[content]).flatMap(c=> typeof c==='string'
          ? (c===''?[new D.Paragraph('')]:String(c).split('\n').map(l=>new D.Paragraph({children:runs(l,{bold:isHead})})))
          : [c])});
      return new D.Table({width:{size:tw,type:D.WidthType.DXA},columnWidths:cw,layout:D.TableLayoutType.FIXED,
        rows:[new D.TableRow({tableHeader:true,children:head.map((h,i)=>cell(plain(h),i,true))}),
          ...rows.map(r=> r.group
            ? new D.TableRow({children:[new D.TableCell({borders,columnSpan:cols,width:{size:tw,type:D.WidthType.DXA},shading:{type:D.ShadingType.CLEAR,color:'auto',fill:'EEF2F5'},children:[new D.Paragraph({children:[new D.TextRun({text:r.group,bold:true})]})]})]})
            : new D.TableRow({cantSplit:true,children:r.map((c,i)=>cell(c,i,false))}))]});
    }
    const gap=()=>new D.Paragraph({text:'',spacing:{after:80}});
    const widthsFor=cols=>{ const px=cols.map(c=>c.w||160); const tot=px.reduce((a,b)=>a+b,0); const w=px.map(p=>Math.floor(W*p/tot)); w[w.length-1]+=W-w.reduce((a,b)=>a+b,0); return w; };

    function responseChildren(b){
      const v=get(b.id);
      if(b.t==='text'){ if(!filled(v)) return []; return [label(b.label),...multi(v)]; }
      if(b.t==='choice'){ if(!filled(v)) return []; return [new D.Paragraph({children:[...runs(b.label+': ',{bold:true}),new D.TextRun(v)],spacing:{before:120,after:80}})]; }
      if(b.t==='checks'){ if(!filled(v)) return []; return [label(b.label),...b.items.map((it,i)=>new D.Paragraph({children:[new D.TextRun({text:(v&&v[i]?'☒  ':'☐  ')}),...runs(it)],spacing:{after:40},indent:{left:240}}))]; }
      if(b.t==='match'){ if(!filled(v)) return []; const withKey=S.includeModels;
        const head=withKey?['Term','Your answer','Answer key']:['Term','Your answer'];
        const rows=b.items.map((it,i)=>{ const opt=b.options.find(o=>o[0]===v[i]); const mine=v[i]?`${v[i]}: ${plain(opt[1])}`:'—'; return withKey?[it,mine,b.key[i]]:[it,mine]; });
        return [label(b.label),table(head,rows,withKey?[2600,5638,1400]:[2800,6838]),gap()]; }
      if(b.t==='rank'){ if(!filled(v)) return []; const rows=b.items.map((it,i)=>[v[i]||'—',it[0]]).sort((x,y)=>(parseInt(x[0])||99)-(parseInt(y[0])||99));
        return [label(b.label),table(['Rank',b.headLabel||'Evaluation criterion'],rows,[1400,8238]),gap()]; }
      if(b.t==='rate'){ if(!filled(v)) return []; const rows=b.items.map((it,i)=>it.group?{group:it.group}:[it,v[i]?b.scale[parseInt(v[i])-1]:'—']);
        return [label(b.label),table([b.headLabel||'Criterion','Your answer'],rows,[5200,4438]),gap()]; }
      if(b.t==='quiz'){ if(!filled(v)) return []; const withKey=S.includeModels;
        const rows=b.items.map((q,i)=>{ const mine=v[i]!=null&&v[i]!==''?q.options[v[i]]:'—'; const r=[`${i+1}. ${q.q}`,mine]; if(withKey) r.push(q.options[q.key]); return r; });
        return [label(b.label),table(withKey?['Question','Your answer','Answer']:['Question','Your answer'],rows,withKey?[4400,2800,2438]:[5600,4038]),gap()]; }
      if(b.t==='grid'){ if(!filled(v)) return [];
        const saved=v||[]; const n=Math.max(b.rows.length,saved.length); const rows=[];
        const hasFixed=b.cols.some(c=>!c.type);
        for(let r=0;r<n;r++){
          const def=b.rows[r]||[];
          if(def[0]&&def[0].group){ rows.push({group:def[0].group}); continue; }
          const vals=b.cols.map((col,c)=>{
            if(!col.type) return def[c]||'';
            const x=(saved[r]||[])[c];
            if(col.type==='check') return x?'☒':'☐';
            if(col.type==='mark') return x?[x.m,x.t].filter(Boolean).join('  '):'';
            return x||'';
          });
          const anyInput=b.cols.some((col,c)=>col.type && filled((saved[r]||[])[c]));
          if(hasFixed || anyInput) rows.push(vals);
        }
        return [label(b.label),table(b.cols.map(c=>c.h||' '),rows,widthsFor(b.cols)),gap()]; }
      return [];
    }
    function modelChildren(blocks){
      const out=[];
      for(const b of blocks){
        if(b.t==='p') out.push(para(b.text));
        else if(b.t==='list'||b.t==='olist') b.items.forEach(it=>out.push(new D.Paragraph({children:[new D.TextRun('–  '),...runs(it)],indent:{left:240},spacing:{after:60}})));
        else if(b.t==='table') { out.push(table(b.head.map(h=>h||' '),b.rows.map(r=>r.map(c=>c)),null)); out.push(gap()); }
      }
      return out;
    }

    const now=new Date();
    const dateStr=now.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
    const children=[
      new D.Paragraph({heading:D.HeadingLevel.TITLE,children:[new D.TextRun(`ReaLiTea Module ${M.number}: ${M.title}`)]}),
      new D.Paragraph({children:[new D.TextRun({text:'Responses (self-study edition)',size:28,color:'44596E'})],spacing:{after:200}}),
      para(`**Name:** ${S.name||'—'}`),
      para(`**Exported:** ${dateStr}`),
      para(S.includeModels?'This record contains the responses you gave in the module, followed where relevant by the model answers and commentary provided in the module.':'This record contains the responses you gave in the module. Model answers are not included.',{italics:true,color:'44596E'})];
    let any=false;
    M.activities.forEach((a,ai)=>{
      const stepParts=[];
      a.steps.forEach((s,si)=>{
        if(!stepHasResponse(s)) return;
        const parts=[new D.Paragraph({heading:D.HeadingLevel.HEADING_2,children:[new D.TextRun(`${s.label||'Step '+(si+1)}: ${s.title}`)]})];
        const instr=s.blocks.find(b=>b.instr); if(instr) parts.push(para(instr.text,{italics:true,color:'44596E'}));
        const models=[];
        walk(s.blocks,b=>{
          if(RESPONSE_TYPES.has(b.t)) parts.push(...responseChildren(b));
          if(b.t==='reveal') models.push(b);
        });
        if(S.includeModels && models.length){
          models.forEach(m=>{ const mc=modelChildren(m.body); if(mc.length){ parts.push(new D.Paragraph({heading:D.HeadingLevel.HEADING_3,children:[new D.TextRun('From the module: '+(m.exportLabel||plain(m.label).replace(/^(Show|Compare with) (the )?/i,'').replace(/^./,c=>c.toUpperCase())))]}),...mc); }});
        }
        stepParts.push(...parts);
      });
      if(stepParts.length){ children.push(new D.Paragraph({heading:D.HeadingLevel.HEADING_1,pageBreakBefore:any,children:[new D.TextRun(`Activity ${ai+1}: ${a.title}`)]}),...stepParts); any=true; }
    });
    if(!any) children.push(para('No responses have been recorded yet.',{italics:true}));

    const started=S.started?new Date(S.started).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):dateStr;
    const timeframe= started===dateStr ? dateStr : `${started} – ${dateStr}`;
    const pv=id=>get(id)||'';
    const pfWidths=[3000,1800,2650,2650,2650,1820]; // landscape A4 minus 2 cm margins = 14570
    const portfolio=[
      new D.Paragraph({heading:D.HeadingLevel.HEADING_1,children:[new D.TextRun('Portfolio entry')]}),
      para(`For Part III (Professional Development Plan) of the ReaLiTea Research Literacy Framework, section **${M.facet}**.`),
      table(['Summary of research engagement activity','Timeframe','In what ways did you expect this activity to develop your research literacy?','In what positive or negative ways did this activity impact your research literacy?','Are there any other skills or areas of knowledge that you need to develop based on your experience of this activity?','Cross-reference to evidence'],
        [[M.portfolioSummary,timeframe,pv('pf-expect'),pv('pf-impact'),pv('pf-further'),'This document']],pfWidths)];
    const footerP=new D.Footer({children:[new D.Paragraph({alignment:D.AlignmentType.CENTER,children:[new D.TextRun({text:`CC-BY-SA ${plain(M.citation)}  Page `,size:16,color:'6E8599'}),new D.TextRun({children:[D.PageNumber.CURRENT],size:16,color:'6E8599'})]})]});
    const margin={top:1134,bottom:1134,left:1134,right:1134};
    const doc=new D.Document({
      creator:'ReaLiTea self-study module', title:`ReaLiTea Module ${M.number}: responses`,
      styles:{default:{document:{run:{font:FONT,size:21}}},
        paragraphStyles:[
          {id:'Title',name:'Title',basedOn:'Normal',run:{size:40,bold:true,color:'1E2B38'},paragraph:{spacing:{after:80}}},
          {id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{size:32,bold:true,color:'1E2B38'},paragraph:{spacing:{before:240,after:160},outlineLevel:0}},
          {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{size:26,bold:true,color:'2F5F8A'},paragraph:{spacing:{before:320,after:100},outlineLevel:1,keepNext:true}},
          {id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',quickFormat:true,run:{size:22,bold:true,color:'44596E'},paragraph:{spacing:{before:200,after:80},outlineLevel:2,keepNext:true}}]},
      sections:[
        {properties:{page:{size:{width:11906,height:16838},margin}},footers:{default:footerP},children},
        {properties:{page:{size:{width:11906,height:16838,orientation:D.PageOrientation.LANDSCAPE},margin}},footers:{default:footerP},children:portfolio}]
    });
    const blob=await D.Packer.toBlob(doc);
    const url=URL.createObjectURL(blob);
    const a=$('a',{href:url,download:`ReaLiTea_Module${M.number}_responses_${now.toISOString().slice(0,10)}.docx`});
    document.body.append(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),4000);
    btn.textContent='Exported';
  }catch(e){
    console.error(e); alert('The export did not work. You can use your browser\'s Print option to save a PDF instead.'); btn.textContent=original;
  }finally{
    setTimeout(()=>{ btn.disabled=false; btn.textContent=original; },1800);
  }
}
window.RLT_exportDocx=exportDocx; // exposed for testing

if(M) build();
})();
