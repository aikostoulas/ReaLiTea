/* Landing page for the ReaLiTea self-study suite */
(function(){
'use strict';
const {$,inline,masthead,audienceBox,localBox,footer}=window.RLT_UI;
const SITE=window.RLT_SITE;
const root=document.getElementById('app');

function started(n){
  try{ const raw=localStorage.getItem(`rlt-m${n}-selfstudy-v1`); if(!raw) return null;
    const S=JSON.parse(raw); return S.updated?new Date(S.updated):null; }catch(e){ return null; }
}

root.append(masthead({
  brandLine:`${SITE.modules.length} modules for language teachers`,
  title:$('div',{},$('p',{class:'mod-label'},'Self-study edition'),$('h1',{},'Research literacy for language teachers')),
  meta:'Five modules that help you find, access, read, evaluate and use published professional knowledge. Work through them at your own pace; your responses stay on your device.'}));

const layout=$('div',{class:'layout'});
root.append(layout);

layout.append($('aside',{class:'side'},
  audienceBox([
    'These modules are for **pre-service and in-service teachers** of second, foreign and additional languages who want to strengthen their research literacy on their own, at their own pace.',
    'Each module includes the support that a mentor or tutor would otherwise provide: self-check lists, model answers, worked examples and guidance on what to do next.',
    'You do not need any prior research training. If, when you read Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae), the Initial descriptors describe you best, you will get more out of the modules if you work through them with a mentor, tutor or colleague.']),
  localBox(),
  $('nav',{class:'toc-wrap','aria-label':'Modules'},$('div',{class:'toc',style:'padding-top:10px'},
    $('div',{class:'toc-a',style:'margin-top:0'},'Modules'),
    $('ol',{style:'display:block'},SITE.modules.map(m=>$('li',{style:'margin:0 0 6px'},$('a',{href:m.file},`${m.n}. ${m.title}`))))))));

const main=$('main',{class:'main',id:'main'});
layout.append(main);

main.append($('section',{class:'home-intro'},
  $('h2',{},'About these modules'),
  $('p',{},inline('The ReaLiTea professional development resources aim to help teachers of second, foreign and additional languages strengthen their research literacy: the ability to locate, access, critically evaluate and use published professional knowledge.')),
  $('p',{},inline('Each module is divided into activities, and each activity into steps. You can engage with the activities at your own pace, spending more time on the ones that are closer to your learning priorities. We recommend, however, that you follow the sequence of steps and activities within each module.')),
  $('p',{},inline('As you work, type your responses into the spaces provided. They are saved in your browser as you go, and you can export them from each module as a Word document, together with a completed entry for Part III (Professional Development Plan) of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae).'))));

main.append($('div',{class:'cards'},SITE.modules.map(m=>{
  const d=started(m.n);
  return $('a',{class:`card c${m.n}`,href:m.file},
    $('span',{class:'card-num','aria-hidden':'true'},String(m.n)),
    $('h3',{},$('span',{class:'sr-only'},`Module ${m.n}: `),m.title),
    $('p',{},m.summary),
    $('div',{class:'card-meta'},`${m.activities} activities`+(d?` · You last worked on this module on ${d.toLocaleDateString('en-GB',{day:'numeric',month:'long'})}`:'')),
    $('div',{class:'card-go'},d?'Continue this module →':'Start this module →'));
})));

root.append(footer());
})();
