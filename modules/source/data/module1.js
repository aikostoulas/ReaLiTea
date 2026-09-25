/* Module 1 content — v.4 module text + self-study scaffolding (Module_1_selfstudy.md), second person */
(function(){
const P=(text,o={})=>({t:'p',text,...o});
const L=(items,o={})=>({t:'list',items,...o});
const OL=(items)=>({t:'olist',items});
const N=(kind,title,body,o={})=>({t:'note',kind,title,body,...o});
const Q=(text,cite)=>({t:'quote',text,cite});
const SRC=(title,citation,url)=>({t:'source',title,citation,url});
const TXT=(id,label,o={})=>({t:'text',id,label,...o});
const CHK=(id,label,items,o={})=>({t:'checks',id,label,items,...o});
const SC=(id,items,label='Self-check')=>({t:'checks',id,label,items,selfcheck:true});
const REV=(label,body,o={})=>({t:'reveal',label,body,...o});
const TAB=(head,rows,o={})=>({t:'table',head,rows,...o});
const GRID=(id,label,cols,rows,o={})=>({t:'grid',id,label,cols,rows,...o});
const SUB=(title,body)=>({t:'sub',title,body});
const CH=(id,label,options)=>({t:'choice',id,label,options});
const BR=(items,title='If… then…')=>N('branch',title,[L(items)]);
const H=(text)=>({t:'h',text});
const link=u=>`[${u}](${u})`;

const EVALQ=(id,verb)=>[
  TXT(id+'-q1',`How accessible was the information you ${verb}? To what teachers would this way of presenting information mostly appeal?`,{rows:3}),
  TXT(id+'-q2','How complete was the information you heard? Is there any information missing that might be useful for your purposes?',{rows:3}),
  TXT(id+'-q3','How useful is this way of presenting information for you? In what ways can it help you with your teaching?',{rows:3})];

window.RLT_MODULE = {
 id:'m1', storageKey:'rlt-m1-selfstudy-v1',
 number:1, title:'Drawing on published professional knowledge',
 audience:['**Pre-service and in-service teachers** of second, foreign and additional languages, working on their own and at their own pace.',
  'It suits you if you want a broad picture of where professional knowledge is published, how you can access and engage with it, and what motivates you to do so.',
  'You do not need any prior research training. If the Initial descriptors in Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) describe you best, you will get more out of the module with a mentor, tutor or colleague.'],
 citation:'The ReaLiTea Project. (2026). *Drawing on published professional knowledge*. Available online: [https://www.realitea.info/drawingonpublishedprofessionalknowledge](https://www.realitea.info/drawingonpublishedprofessionalknowledge).',
 facet:'Using published professional knowledge',
 portfolioSummary:'Completed ReaLiTea Module 1, Drawing on published professional knowledge, in self-study mode: exploring where professional knowledge is published, how it can be accessed and engaged with, why teachers engage with it, and planning a personalised learning pathway.',

 intro:[
  H('Summary'),
  P(`Language teaching, as an applied profession, builds on the collective knowledge of the profession. This term ‘professional knowledge’ can refer to both the personal, or experiential, knowledge that teachers accumulate through their experience, and to the public, or published, knowledge that teachers and researchers share, whether it is academic or practical in orientation and origin. This module will focus on the latter, and will help you to develop skills and strategies for drawing on published insights which may be relevant to your professional needs. In the activities that follow, we will explore the diverse ways in which knowledge is disseminated and the forms in which it might be presented. We will also think about how we can effectively engage with professional knowledge that is made available to us through publication, and the ways in which our motivations shape our engagement with professional knowledge.`),
  H('Introduction'),
  P(`Welcome to the first module of the ReaLiTea learning resources for developing your ability to engage with published professional knowledge. Professional knowledge, in language education, can take many forms: there is experiential, or personal, knowledge that teachers accumulate over the course of their career, as well as knowledge that is shared in various publications. In this module, we will focus on published professional knowledge, we will explore some of this diversity and we will experiment with ways to meaningfully engage with it.`),
  P(`But first, a quick note on the terms we will be using: Although professional knowledge can refer to private insights gained through experience, in these materials we will focus on published professional knowledge, and we might occasionally refer to this interchangeably as ‘professional knowledge’ for brevity. We will use the term ‘published professional knowledge’ or ‘publications’ to describe academic literature as well as other content that is more practical in origin and orientation. This includes information that has been recorded in books and academic journals, web-based resources such as blogs, podcasts and videos or any other format in which teachers and academics might exchange insights. We have chosen the term ‘published professional knowledge’, rather than alternatives such as ‘academic literature’ or ‘research publications’, as it is more inclusive. This means, additionally, that it is less likely to create unhelpful hierarchies in our thinking about how the knowledge base of language education is structured.`),
  P(`When you have completed this module, you will likely have a comprehensive view of the various sources of published professional knowledge and their relative strengths. The content of this module should also help you to better understand your needs and motivations for engaging with published professional knowledge. The insights you will gain about professional knowledge and your needs, and the enhanced ability to engage with publications are core parts of your research literacy, which means your ability to locate, access, critically evaluate and use public professional knowledge. Ultimately, this module should help you think about how you can develop your research literacy and plan a personalised learning pathway.`),
  P(`There are six activities in this module. The first activity is a warm-up task. This will help you to focus your thinking about how you engage with professional knowledge. The three activities that follow deal with questions such as “where does published professional knowledge appear?”, “how can it be accessed?” and “how can teachers engage with it?”. These activities are intended to challenge narrow conceptualisations of research and to develop a broad understanding of research engagement. Next, Activity 5 explores different motivations for engaging with the knowledge base of language education, and it encourages you to think about how your motivations might impact your practices when engaging with published professional knowledge. The module concludes with a self-assessment reflective task, which can help you to think about what you have learnt and to design a personalised set of learning priorities.`),
  P(`Each activity is divided into several steps. You can engage with these activities at your own pace, spending more time on the ones that are closer to your learning priorities. To help you navigate through the activities in the Module, we have provided information about the aims of each activity, as well as the resources and time that you will need to complete it. That said, we recommend that you follow the sequence of steps and activities as presented in the module.`),
  P(`All the tasks in the module can be done individually. However, you might find it useful to work together with colleagues, onsite or in online learning communities. This will help you share your perspective and learn from your colleagues’ insights. In the materials, we have indicated which tasks are best suited for discussion and pair work.`),
  P(`Sometimes you might come across an activity which has multiple options. You can try out all the options provided or, if you are working with colleagues, you might want to divide the work amongst you.`),
  P(`We hope that these activities help you to become more intentional and effective in the ways that you engage with the published professional knowledge. We also hope that doing these activities can make you more confident in the way you approach the knowledge base of the profession. So, if you are ready, let us begin!`),
  H('Intended learning outcomes'),
  P(`When you have completed this module, you will be able to…`),
  L([`Identify and describe the primary channels through which professional knowledge in language teaching is disseminated [A1.3].`,
     `Analyse and differentiate various modes (textual, visual, aural, multimodal, etc.) of professional knowledge communication [A1.4].`,
     `Apply targeted reading strategies to engage efficiently with professional knowledge in literature, adapting approaches to suit specific learning needs [B2.1–2].`,
     `Evaluate your personal motivations and purposes for engaging with published professional knowledge, developing a reflective awareness of these influences [C3].`,
     `Create a tailored learning pathway to enhance your research literacy, focusing on the strategic use of the published resources at your disposal [A3.3].`]),
  P(`The codes in square brackets refer to the competences in the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae).`,{small:true}),
  H('Resources needed'),
  L([`Internet access`,`Headphones (optionally)`,`The ReaLiTea Research Literacy Framework`]),
  H('Using these materials'),
  N('note','Working through this module on your own',[
   P(`This version of the module includes support that a mentor or tutor would otherwise provide. After some tasks you will find a self-check list or a model answer; after others you will find guidance that tells you what to do next depending on your answer. Try each task before you look at this support, because comparing your own attempt with a model is where most of the learning happens.`),
   P(`Some tasks were designed as discussions. In this version they include an individual alternative. If you have access to a colleague or to the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community), you can still use the discussion option.`),
   P(`Several activities build on your answers to earlier ones (for example, Activity 4 Step 3 uses the text you choose in Activity 2 Step 5). If you skipped an earlier step, the module tells you what to do instead.`)]),
  {t:'legend'}
 ],

 activities:[
 /* ================= ACTIVITY 1 ================= */
 {id:'a1',title:'Warm-up',
  helps:['Reflect on your reading practices and other ways in which you engage with published professional knowledge','Identify areas for potential professional development for engaging with published professional knowledge'],
  needs:['A helpful colleague or access to a forum (optionally)','Headphones (for Step 2)'],
  time:'15–20 minutes',
  lead:[N('note','Discussion option',[P(`Both steps in this activity can be implemented as discussion tasks with a colleague. If you are studying alone, you can also work through this activity as a reflection task.`)])],
  steps:[
  {id:'a1s1',title:'Your recent reading',blocks:[
   P(`Reflect on the following questions or discuss them with a peer.`,{instr:true,task:['reflection','discussion']}),
   N('note','Working alone',[P(`Write short answers to the questions, rather than only thinking about them, so that you can return to them in Activities 3 and 6.`)]),
   TXT('a1s1-when','When was the last time you read something connected to language teaching?',{rows:2}),
   TXT('a1s1-what','What was it about?',{rows:2}),
   TXT('a1s1-challenges','What, if any, challenges did you face?',{rows:2}),
   TXT('a1s1-help','In what, if any, ways did this reading help you become better at language teaching?',{rows:2}),
   TXT('a1s1-overall','How would you describe your experience overall?',{rows:2}),
   SC('a1s1-sc',[`You have named a specific text, video or other resource (or noted honestly that you cannot remember one).`,
    `You have given an approximate time ("last week", "about a year ago").`,
    `You have named at least one specific challenge, or stated that there was none.`],'To make your answers concrete, check that'),
   BR([`If you could not remember the last time you read something connected to language teaching, that is useful information, not a failure. In Activity 3, you may want to start with Option 1 or Option 2, which use shorter formats.`,
    `If the main challenge was **language or technical terms**, note this; Activity 3, Options 1–3 present research in more accessible formats.`,
    `If the main challenge was **time**, note which formats you could fit into your week (e.g. a one-page summary, a short video).`,
    `If the main challenge was **getting access** to the text (e.g. a paywall), look at Activity 3, Option 6, and note that Module 3 deals with this.`,
    `If the main challenge was **finding something relevant**, pay particular attention to Activity 2, Step 5.`],'What to do with your answers')
  ]},
  {id:'a1s2',title:'Teacher engagement with research',blocks:[
   P(`Listen to the following video extract (13:23–16:30), in which Professor Simon Borg discusses how teachers engage with published research. Then reflect on the questions that follow.`,{instr:true,task:['video']}),
   SRC('Teacher engagement with research','Borg, S. (n.d.). *Teacher engagement with research* [Video]. ELTDP Symposium.','https://tinyurl.com/45pbdkff'),
   N('note','Working alone',[P(`Listen to the extract (or read the transcript), answer the three questions in writing, and then compare your answers with the notes that follow.`)]),
   SUB('Transcript',[
    P(`So teachers who said that they read ‘often’ or ‘sometimes’ were also asked ‘what do you read’. And this is what the responses looked like. The most common category, or source of reading being professional magazines and journals, [followed by] books, academic journals, web-based materials and newsletters.`),
    P(`Now, keep in mind, we are asking the teachers about research. They said “We read research” and we said “what do you read?”. It is interesting that the most common category is professional magazines and journals. Because when we think about professional magazines and journals, these are not publications that normally carry research. These are not research publications. They normally contain more practical material.`),
    P(`So, this suggests an interesting distinction, maybe, which we can help teachers in making between different types of literature. Between literature, between sources that have a more practical orientation, a more practical origin, and literature which is based on research, which has been generated through systematic study.`),
    P(`And so, here are teachers in their interviews, in their written comments explaining the type of reading they do. Here’s a teacher from Switzerland saying: “I sometimes try out things I’ve read about, but these are usually practical tips from teachers”. And we were getting this from a lot of teachers who said they read research. When we asked them “what do you read?”, they said “we read practical magazines”, “we read tips for teachers”… We also interviewed, I also interviewed some managers as part of the project and they were they were making similar comments about the reading their teachers did. So, this manager in the UK is saying: “I think what most of our teachers read is not necessarily research. They read a lot of stuff about teaching ideas, but they're looking for practical ideas that are not necessarily based on research”.`),
    P(`And so, a useful distinction we can make when we think about the reading teachers do is between more practically oriented material and material which is based on research which has been generated through systematic study. I'm not saying one is more important than the other. I'm not saying teachers should read research and not practical material of course that would be silly to say that. Practical ideas, practical literature will always have greater appeal to teachers but what we're trying to suggest is there is also room for reading other types of literature, literature which is more research-based and of course the two types of reading, as the double-headed arrow there suggests, can interact. They're not in opposition; they can work together to support teachers’ work.`)]),
   TXT('a1s2-q1','What types of reading are mentioned?',{rows:3}),
   TXT('a1s2-q2','Do you think that one type of reading is more useful than the other?',{rows:3}),
   TXT('a1s2-q3','How might “the two types of reading interact”?',{rows:3}),
   REV('Show what the extract says',[
    P(`**What types of reading are mentioned?** The extract names specific sources teachers reported reading: professional magazines and journals (the most common), books, academic journals, web-based materials and newsletters. From these, Professor Borg draws a broader distinction between two types of literature:`),
    L([`literature with a more **practical orientation** (e.g. practical tips from teachers, teaching ideas)`,`literature that is **based on research**, "generated through systematic study"`]),
    P(`If your answer listed only the sources, reread the third paragraph of the transcript, which introduces the distinction.`),
    P(`**Do you think that one type of reading is more useful than the other?** This asks for your opinion, so there is no single correct answer. The speaker's own position is that he is not saying one is more important than the other.`),
    P(`**How might "the two types of reading interact"?** The extract says only that they are not in opposition and can work together to support teachers' work; it does not explain how. So this question asks you to go beyond the text. Some possible answers:`),
    L([`a practical tip you read in a magazine might lead you to look for research on whether it works`,`a research finding might become more usable once you read a teacher's account of trying it out`,`research might help you understand *why* a practical idea works in one class but not another`]),
    P(`If you could not think of any, use the first example above and try to find a case from your own experience that fits it.`),
    SC('a1s2-sc',[`Your answer to the first question identifies the two-way distinction, not only the list of sources.`,
     `Your answer to the second question gives a reason linked to your own teaching situation.`,
     `It considers what each type might offer that the other does not.`,
     `It notices whether your view agrees or disagrees with the speaker's, and why.`,
     `Your answer to the third question suggests at least one concrete way the two could connect.`])],{gate:['a1s2-q1','a1s2-q3'],exportLabel:'Notes on the extract'})
  ]}
 ]},

 /* ================= ACTIVITY 2 ================= */
 {id:'a2',title:'Where is professional knowledge published?',
  helps:['Gain a clear understanding of the different ways knowledge is shared in your field.','Reflect on whether some types of knowledge or sources are seen as more important than others, and think about why these differences exist.'],
  needs:['A helpful colleague or access to a forum (optionally, for Steps 3 & 4)','Internet access (for Step 5)'],
  time:'35–40 minutes',
  steps:[
  {id:'a2s1',title:'Which sources are relevant to you?',blocks:[
   P(`Would you consider the following sources of information relevant to your professional development as a language teacher?`,{instr:true,task:['reflection']}),
   {t:'rate',id:'a2s1-rate',label:'Your answers',scale:['Certainly yes','Probably yes','Probably not','Certainly not'],
    items:['Articles in academic journals','Articles in professional journals','Academic conference presentations','Presentations at teacher conferences','Chapters in professional (‘how to’) books','Professional blog posts','Podcasts and videos','Academic websites','Infographics']},
   N('note','Keep your answers',[P(`Keep your answers. You will return to them after Step 2.`)])
  ]},
  {id:'a2s2',title:'Formats of professional knowledge',blocks:[
   P(`Read the following text. Following that, make a list of formats (written, oral, multimodal) or types of text where you think professional knowledge might appear.`,{instr:true,task:['reading','writing']}),
   P(`In everyday discourse, ‘research’ is often understood as involving controlled experiments, statistics and objectivity. There are good reasons for this, especially when thinking about the sciences. In language education, however, our conception of what counts as useful ‘research’ is broader: it includes all forms of systematic knowledge-building about our professional practice. To avoid the misleading connotations of the word ‘research’, in this set of materials, reference will be made to ‘knowledge’, when describing the insights that have been documented in the knowledge base of the profession, and ‘inquiry’ (alongside ‘research’) to describe the process of knowledge building.`),
   P(`This practice is similar to the perspective advanced by Lankshear and Knobel (2004, p. 4), who point out that:`),
   Q(`Like doctors, lawyers and architects, [teachers] draw on a shared fund of professional knowledge and accumulated experience to take them as far as possible in specific situations. When they need to go beyond that shared ‘professional wisdom’ they draw on specialist educational knowledge, experience, networks and their capacity for informed autonomous judgment to make decisions about how best to promote learning objectives.`),
   P(`As hinted in the quote above, the knowledge pool from which teachers can draw in order to develop empirically informed teaching practices is wide and goes beyond the narrow conception of academic research (although the latter is still included in this broad definition).`),
   P(`In language education, professional knowledge can be recorded in many forms: For example, research is often published in academic journals and books. However, teachers describing their own experiences of classroom-based inquiry also produce professionally relevant knowledge. Professional knowledge can also be found in blogs about language education, videos and podcasts and other, similar, channels. Similarly, professional knowledge can refer to primary research or first-hand experience, e.g., when researchers describe a study about language learners, and secondary scholarship, which is when primary research or experience is synthesised, re-told for a different audience, or presented in a new format (e.g., a blog, an infographic, a video summary).`),
   TXT('a2s2-list','Your list of formats and types of text',{rows:6}),
   REV('Check your list',[
    P(`The reading mentions these formats and types of text:`),
    L([`academic journals and books`,`teachers' own accounts of classroom-based inquiry`,`blogs about language education`,`videos and podcasts`,`infographics and video summaries (as examples of secondary scholarship)`]),
    P(`The table in Step 1 adds: professional journals, academic conference presentations, presentations at teacher conferences, professional ("how to") books and academic websites.`),
    SC('a2s2-sc',[`Your list includes at least one **written**, one **oral** and one **multimodal** format.`,
     `It includes both **primary** sources (e.g. a researcher describing a study, a teacher describing their own inquiry) and **secondary** sources (e.g. a summary, an infographic).`,
     `It includes at least one format that does not appear in the reading.`]),
    BR([`If you answered "Probably not" or "Certainly not" for **blogs, podcasts, videos or infographics** in Step 1, reread the final paragraph of the text, which counts these as channels for professional knowledge. Decide whether you want to change your answer, and note why or why not.`,
     `If you answered "Certainly yes" only for **academic** sources, reread the quotation from Lankshear and Knobel (2004) and consider whether "shared 'professional wisdom'" is represented in your answers.`,
     `If you answered "Certainly yes" for **everything**, ask yourself whether some sources would be more relevant than others for a specific question you have about your teaching.`],'Returning to Step 1'),
    TXT('a2s2-revisit','Would you change any of your answers in Step 1? Why, or why not?',{rows:3})],{gate:['a2s2-list'],exportLabel:'Formats mentioned in the reading'})
  ]},
  {id:'a2s3',title:'Sources for teachers at different career stages',blocks:[
   P(`What professional knowledge sources would you consider suitable for the following categories of language teachers? Where might teachers in each category look for professionally relevant information? How might they engage with such knowledge and how would they use it in their professional lives?`,{instr:true,task:['reflection','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague. If you work alone, complete the table on your own and then do the perspective-taking task below it, which takes the place of a colleague's view.`)]),
   GRID('a2s3-grid','Your table',[{h:'Experience',w:170},{h:'Novice',type:'text'},{h:'Mid-career',type:'text'},{h:'Experienced',type:'text'},{h:'Expert',type:'text'}],[
    ['What types of content might these teachers read?'],['Where might they find such content?'],['How would they engage with this content?'],['Why would they engage with this content?']]),
   CH('a2s3-far','The column furthest from your own career stage',['','Novice','Mid-career','Experienced','Expert']),
   TXT('a2s3-voice','Two sentences, written in the first person as if you were a teacher at that stage, explaining what you read and why',{rows:3}),
   SC('a2s3-sc',[`You have written something in every cell, even if tentatively.`,
    `Your answers differ across the columns. (If they look almost the same, ask yourself what really changes between a novice and an expert teacher.)`,
    `You have not assumed that experienced teachers only read academic texts, or that novices only read practical ones, without asking whether this is always true.`],'Before moving on, check that')
  ]},
  {id:'a2s4',title:'Compare with an example answer',blocks:[
   P(`The table below is an (expanded) example of how someone might answer the question in **Step 3** (i.e. it shows what types of knowledge and knowledge engagement might be considered relevant to different teacher audiences). Read the information in the table and compare it with your own ideas. Discuss any points that surprise you or are not in line with your expectations. Are there any points which you would approach differently? Why?`,{instr:true,task:['reading','discussion']}),
   N('resist','One possible answer',[P(`The table in this step is **one possible answer**, written by someone else. It is not a correct answer, and parts of it are open to question. Compare it with your own table in the three stages below.`)]),
   TAB(['Experience','Novice','Mid-career','Experienced','Expert'],[
    ['Reading resources','Blog posts, how-to books, videos, podcasts, websites, guides for classroom application','Research accounts written by teachers, teacher blogs, more advanced practitioner guides, webinars','Publications that offer practical knowledge, research articles, specialised texts in specific fields of interest','Academic publications, comprehensive books, meta-analyses, high-impact research journals'],
    ['Sources','YouTube, teacher forums, open access teaching materials, online teacher communities (e.g., Twitter EdChats, Facebook groups)','IATEFL Special Interest Group publications, TESOL infographics, reflective journals, teacher interviews, research databases','TESL-EJ, OASIS, specialised practitioner publications, teacher-led research articles','ELT Journal, Journal of Applied Linguistics, AERA journals, teacher education conferences'],
    ['Reading process','Reading and note-taking, discussing with students and colleagues, informal peer feedback','Writing blog posts, writing materials based on reading, conducting small classroom-based inquiries','School-based professional development, mentoring new teachers, contributing to PD initiatives','Affiliated with academic and practitioner-oriented communities, engaging in peer reviews'],
    ['Developmental axis','Learning how to create evidence-based teaching, experimenting with new teaching practices','Developing reflective teaching practices, integrating theory with classroom action research','Applying advanced theoretical frameworks in day-to-day teaching, contributing to research projects','Contributing to the academic body of knowledge, shaping policy, mentoring early-career researchers'],
    ['Engagement with research','Understanding basic pedagogical concepts, starting to explore evidence-based strategies','Actively participating in research-informed teaching, conducting small-scale research projects','Collaborating on or leading action research in schools, engaging with research that shapes institutional practices','Leading or guiding large-scale academic research projects, mentoring junior researchers'],
    ['Professional community role','Observing and participating in communities of practice, asking questions, seeking mentorship','Contributing practical knowledge to communities of practice, occasionally leading sessions or initiatives','Leading communities of practice, organising PD activities, mentoring novice teachers','Serving as key experts in educational communities, influencing wider pedagogical approaches']]),
   TXT('a2s4-agree','Stage 1 — Agreement: two cells where the table matches your own ideas',{rows:2}),
   TXT('a2s4-surprise','Stage 2 — Surprise: two cells that surprise you, with one sentence each explaining what you expected instead',{rows:4}),
   N('note','Stage 3 — Questioning the table',[P(`Without a colleague to challenge the table, use these prompts to do so yourself.`)]),
   TXT('a2s4-oasis','The table places the **OASIS** database among sources for *experienced* teachers. In Step 5, OASIS is described as hosting one-page summaries written in accessible, non-technical language. Which column would you place it in, and why?',{rows:3}),
   TXT('a2s4-process','The **"Reading process"** row includes activities such as mentoring new teachers and engaging in peer reviews. Are these ways of reading, or ways of *using* what one has read? Would you rename or split this row?',{rows:3}),
   TXT('a2s4-direction','The table moves in one direction, from novice to expert. Could an experienced teacher sensibly prefer a podcast or a blog post? Could a novice teacher benefit from a research article? What would that depend on?',{rows:3}),
   SC('a2s4-sc',[`For at least one prompt, you have written an answer that disagrees with the table and given a reason.`]),
   BR([`If you found that you agreed with everything in the table, choose one row and write the strongest argument you can against it, even if you do not fully believe it.`])
  ]},
  {id:'a2s5',title:'Browse sources of professional knowledge',blocks:[
   P(`Browse the following sources of information and locate a text that you find interesting and relevant to your needs.`,{instr:true,task:['online']}),
   L([`**Camtree**, an online repository where teachers from around the world publish research reports. ([https://library.camtree.org/home](https://library.camtree.org/home))`,
      `The **OASIS database**, a site hosting one-page summaries of research on language learning, use and education written in accessible, non-technical language ([https://oasis-database.org/](https://oasis-database.org/)).`,
      `**Studies in Second Language Learning and Teaching**, an open access journal that hosts research about language education ([https://pressto.amu.edu.pl/index.php/ssllt](https://pressto.amu.edu.pl/index.php/ssllt))`,
      `**TESOLGraphics**, a website that uses visualisation to make research articles accessible to a wide audience of language teachers ([https://www.tesolgraphics.com/](https://www.tesolgraphics.com/))`,
      `**TESOLacademic**, a YouTube channel hosting videos in which authors talk about their research in TESOL ([https://www.youtube.com/@TESOLacademic](https://www.youtube.com/@TESOLacademic))`]),
   N('branch','Choosing where to start',[P(`If you are not sure which site to browse, use the description given for each one:`),
    TAB(['If…','Start with…'],[
     ['you have little time or prefer short texts','The OASIS database (one-page summaries)'],
     ['you find visual presentations easier to follow','TESOLGraphics'],
     ['you prefer listening or watching','TESOLacademic'],
     ['you want to read about the classroom inquiries of other teachers','Camtree'],
     ['you are ready to try a full research article','*Studies in Second Language Learning and Teaching*']])]),
   N('worked','Deciding whether a text is right for you',[P(`Before selecting a text, ask yourself:`),
    OL([`Does the title or topic connect to a question or challenge you have in your teaching?`,`Can you understand the title and the first few lines without difficulty?`,`Can you realistically read, watch or listen to it in the time you have?`,`Is it about a setting (learners' age, type of school, language taught) similar to or usefully different from your own?`]),
    P(`If you answer "no" to questions 1 or 2, look for another text. If you answer "no" to question 3, note the text for later and choose a shorter one now.`)]),
   GRID('a2s5-record','The text you selected (you will need it in Activity 4, Step 3)',[{h:'',w:150},{h:'Your record',type:'text'}],[['Title'],['Author'],['Site'],['Link']])
  ]}
 ]},

 /* ================= ACTIVITY 3 ================= */
 {id:'a3',title:'How to access published professional knowledge',
  helps:['Understand the differences in the ways in which professional knowledge is presented and accessed','Develop skills that will help you engage with textual, visual, oral and multimodal texts that contain professional knowledge.'],
  needs:['Internet access','Headphones (optional, for Option 3)'],
  time:'20–40 minutes',
  lead:[
   N('options','Multiple options',[P(`There are six **options** in this activity. You may choose to engage with any one of these options, depending on your strengths, interests and needs. At the end of the activity, you might want to discuss what you have learnt with colleagues who have worked on different options.`)]),
   N('branch','Choosing an option',[P(`Choose one option using your answers to Activity 1:`),
    L([`If you have not read much about language teaching recently, or found language a challenge → **Option 1** (infographic) or **Option 2** (one-page summary)`,
       `If you prefer listening or watching → **Option 3** (video)`,
       `If you want to see how teachers write about their own inquiries → **Option 4** (teacher-written chapter)`,
       `If you have read research articles before and want to see how you manage → **Option 5** (open-access article)`,
       `If you want to experience what happens when an article is behind a paywall → **Option 6** (the pre-print is provided)`]),
    P(`If you are unsure, choose Option 1 or 2 now and return to a longer option later. When you have finished your option, go to the final step, **Check and compare**.`)]),
   N('worked','Worked example: answering the evaluation questions',[
    P(`To see what useful answers to the evaluation questions look like, read this worked example before your own attempt. It uses the Simon Borg extract from Activity 1, which you have already met.`),
    P(`**How accessible was the information? To what teachers would this way of presenting information mostly appeal?** The extract is spoken, uses everyday language and includes quotations from teachers and a manager, which make the ideas easy to relate to. The transcript also means you can reread parts you missed. However, at one point the speaker refers to a double-headed arrow on a slide that you cannot see, so some information depends on the visuals. This format would probably appeal to teachers who prefer listening to reading, or who want a short introduction to a topic.`),
    P(`**How complete was the information? Is there any information missing that might be useful for your purposes?** The extract refers to survey responses ("this is what the responses looked like") but the transcript does not say how many teachers took part or what proportion gave each answer. It mentions teachers in Switzerland and a manager in the UK, but not the full range of countries. If you wanted to use these findings to convince colleagues, you would need to find the original study.`),
    P(`**How useful is this way of presenting information? In what ways can it help with teaching?** The distinction between practically oriented and research-based reading helps a teacher think about what they usually read. It does not give a teaching technique, but it could help in choosing what to read next when trying to solve a problem in class.`),
    P(`**What makes these answers useful:**`),
    L([`they refer to specific features of the format (spoken, transcript, missing slide)`,`they separate "easy to understand" from "complete"`,`they name concrete missing information`,`they connect usefulness to a real purpose`])],{collapsed:true})],
  steps:[
  {id:'a3o1',label:'Option 1',title:'An infographic from TESOLGraphics',blocks:[
   P(`Look at the following infographic from **TESOLGraphics**, a website that presents the content of research articles in visual ways and answer the questions that follow.`,{instr:true,task:['reading']}),
   SRC('TESOLGraphics infographic','Mora, J. C., & Levkina, M. (2017). Task-based pronunciation teaching and research: Key issues and future directions. *Studies in Second Language Acquisition, 39*(2), 381–399. [https://doi.org/10.1017/S0272263117000183](https://doi.org/10.1017/S0272263117000183)','https://tinyurl.com/2p9zstxa'),
   ...EVALQ('a3o1','read'),
   N('explain','Explanation',[P(`If you have access to the original article (see the citation above), you can compare the two formats (infographic and research article). What do you perceive as the strong points and limitations of each format?`)]),
   TXT('a3o1-compare','Strong points and limitations of each format (optional)',{rows:3})
  ]},
  {id:'a3o2',label:'Option 2',title:'A summary from the OASIS database',blocks:[
   P(`Read the following summary of a research article, from the **OASIS database**, a site hosting one-page summaries of research on language learning, use and education written in accessible, non-technical language, and answer the questions that follow.`,{instr:true,task:['reading']}),
   SRC('OASIS summary','Johnson, D. C., Carbine, M., & Shea, C. (2024). Challenging deficit ideologies in Spanish heritage language policies and programs. *Foreign Language Annals, 57*(4), 944–961. [https://doi.org/10.1111/flan.12770](https://doi.org/10.1111/flan.12770)','https://tinyurl.com/4r2a293j'),
   ...EVALQ('a3o2','read'),
   N('explain','Explanation',[P(`If you have access to the original article (see the citation above), you can compare the two formats (summary and research article). What do you perceive as the strong points and limitations of each format?`)]),
   TXT('a3o2-compare','Strong points and limitations of each format (optional)',{rows:3})
  ]},
  {id:'a3o3',label:'Option 3',title:'A video from TESOLacademic',blocks:[
   P(`Watch the following video from **TESOLacademic**, a YouTube channel that curates video presentations about language education research and listen to Hayo Reinders’ talk about an article he co-authored with Phil Benson. Then, answer the questions that follow.`,{instr:true,task:['video']}),
   SRC('TESOLacademic video','Reinders, H. & Benson, P. (2017). Research agenda: Language learning beyond the classroom. *Language Teaching, 50*(4), 561–578. [https://doi.org/10.1017/S0261444817000192](https://doi.org/10.1017/S0261444817000192)','https://tinyurl.com/ype7hytp'),
   ...EVALQ('a3o3','heard'),
   N('explain','Explanation',[P(`If you have access to the original article (see the citation above), you can compare the two formats (video summary and research article). What do you perceive as the strong points and limitations of each format?`)]),
   TXT('a3o3-compare','Strong points and limitations of each format (optional)',{rows:3})
  ]},
  {id:'a3o4',label:'Option 4',title:'A chapter from Champion Teachers',blocks:[
   P(`Choose one of the nine chapters in the *Champion Teachers* edited volume. Read the chapter and answer the questions below.`,{instr:true,task:['reading']}),
   SRC('Champion teachers','Rebolledo, P., Smith, R., & Bullock, D. (Eds.). (2016). *Champion teachers: Stories of exploratory action research*. British Council.','https://tinyurl.com/5b3jee5a'),
   TXT('a3o4-chapter','The chapter you chose',{rows:1}),
   ...EVALQ('a3o4','read'),
   N('explain','Explanation',[P(`The chapters in this book were written by teachers for teachers. In what ways do you think that this is reflected in the style and content of the chapter you read? How might an article written by academics for teachers be different?`)]),
   TXT('a3o4-compare','How the chapter reflects being written by teachers for teachers (optional)',{rows:3})
  ]},
  {id:'a3o5',label:'Option 5',title:'An article in an open-access journal',blocks:[
   P(`Read the following research article, which appeared in **Studies in Second Language Learning and Teaching**, an open-access academic journal, and answer the questions that follow.`,{instr:true,task:['reading']}),
   SRC('Research article (open access)','Gkonou, C. (2011). Anxiety over EFL speaking and writing: A view from language classrooms. *Studies in Second Language Learning and Teaching, 1*(2), 267–281.','https://tinyurl.com/mtt82fec'),
   ...EVALQ('a3o5','read'),
   N('explain','Explanation',[P(`This article appears in an open-access journal. This means that readers can read the content of the article without paying a fee. However, teachers sometimes find that research articles are inaccessible because of their content or the language in which it is presented. Are there aspects of this article that some teachers might find challenging? What other format would you consider as an alternative for presenting this information?`)]),
   TXT('a3o5-compare','Challenging aspects, and an alternative format (optional)',{rows:3})
  ]},
  {id:'a3o6',label:'Option 6',title:'An article behind a paywall',blocks:[
   P(`Read the following research article, which appeared in the journal **Innovation in Language Learning and Teaching**, and answer the questions that follow.`,{instr:true,task:['reading']}),
   SRC('Research article (paywalled)','Dikilitaş, K., & Mumford, S. E. (2018). Teacher autonomy development through reading teacher research: Agency, motivation and identity. *Innovation in Language Learning and Teaching, 13*(3), 253–266. [https://doi.org/10.1080/17501229.2018.1442471](https://doi.org/10.1080/17501229.2018.1442471)','https://tinyurl.com/mwwmwfkv'),
   ...EVALQ('a3o6','read'),
   N('explain','Explanation',[P(`Note that this article appears behind a paywall. This means that only people or libraries that subscribe to the journal can access the content. However, you can sometimes find alternative versions of articles that are behind paywalls (see Module 3 for more).`)]),
   SRC('Pre-print of the article','Pre-print of Dikilitaş and Mumford (2018), shared by the ReaLiTea project.','https://www.realitea.info/_files/ugd/39f9fd_1d9f360bd36f4cda9e180cc3fbc17de9.pdf')
  ]},
  {id:'a3check',label:'Check',title:'Check your answers and compare formats',blocks:[
   SC('a3c-sc',[`You have referred to at least one **specific feature** of the format (e.g. length, visuals, audio, headings, language used).`,
    `You have kept apart two kinds of accessibility: whether you could **get to** the text (free or behind a paywall) and whether you could **understand** it (content and language). Options 5 and 6 draw attention to this difference.`,
    `For completeness, you have named at least one **specific** thing that is missing or that you would want to know (e.g. who took part, where the study happened, how the conclusions were reached).`,
    `For usefulness, you have referred to a **specific class, group of learners or teaching situation**.`],'After answering the evaluation questions for your option, check that'),
   BR([`If you wrote "It was clear" or "It was hard", add *what* made it clear or hard.`,
    `If you wrote that **nothing was missing**, check whether the text tells you: who the participants were; where the study took place; how the information was gathered; what the limitations are. If it covers all of these, you may have chosen a full article (Option 5 or 6); in that case ask the reverse question: what would be lost if it were shortened into a summary or infographic?`,
    `If you wrote that it was **not useful**, ask whether it might be useful for a different purpose (e.g. understanding your learners rather than planning a lesson).`],'If your answers were brief or general'),
   N('branch','If you find your text difficult (especially Options 4–6)',[P(`Try these strategies in order, and stop when you can follow the main points:`),
    OL([`Read the title, abstract and headings first to get a general idea of what the text is about.`,`Read the introduction and conclusion before the middle sections.`,`Note unfamiliar terms and look them up in a glossary or dictionary, rather than stopping at each one.`,`Focus on one section that seems most relevant to your teaching, rather than trying to understand everything.`]),
    P(`If the text is still too difficult after step 4, switch to Option 1, 2 or 3. This is a reasonable decision, not a failure: choosing a format that suits your current needs is part of what this module is about.`)]),
   N('note','Instead of the closing discussion: a contrast pass (about 10 minutes)',[P(`The activity suggests discussing your option with colleagues who worked on different ones. If you are working alone, do a short contrast pass instead:`),
    OL([`Choose a second option in a **different format** from your first (e.g. if you read an article, now look at the infographic or the video).`,`Skim it quickly, without answering all the questions.`,`Answer only the first evaluation question (accessibility) for the second option.`,`Write two sentences comparing the two formats: one thing the first did better and one thing the second did better.`])]),
   CH('a3c-second','Your second option',['','Option 1: infographic','Option 2: one-page summary','Option 3: video','Option 4: teacher-written chapter','Option 5: open-access article','Option 6: paywalled article']),
   TXT('a3c-access','How accessible was the information in your second option?',{rows:2}),
   TXT('a3c-compare','Two sentences comparing the two formats',{rows:3})
  ]}
 ]},

 /* ================= ACTIVITY 4 ================= */
 {id:'a4',title:'How to engage with published professional knowledge',
  helps:['Compare different ways of engaging with the published professional knowledge','Relate ways of engaging with the published research knowledge with your current strengths, interests and needs'],
  needs:['Headphones (optional, for Step 2 and 3)','A helpful colleague or access to a discussion forum'],
  time:'20–40 minutes',
  steps:[
  {id:'a4s1',title:'How did you engage?',blocks:[
   P(`Think about the way you engaged with the previous activity. Did you read or listen to the information that was presented in a passive way? Are there any ways in which you can make your engagement more effective?`,{instr:true,task:['reflection']}),
   CHK('a4s1-did','Tick the things you did while working on Activity 3',[`You took notes`,`You wrote down a question the text raised for you`,`You reread a part you did not understand`,`You looked up a word or idea`,`You connected something in the text to your own class`,`You talked or wrote to someone about it`]),
   BR([`**0–1 ticks:** your engagement was mostly passive. In Step 3, use the note template exactly as given.`,
    `**2–3 ticks:** choose one item you did not tick and make sure you do it in Step 3.`,
    `**4 or more ticks:** in Step 3, try engaging with a *different format* from the one you used in Activity 3.`]),
   TXT('a4s1-effective','Ways in which you can make your engagement more effective',{rows:3})
  ]},
  {id:'a4s2',title:'What is engagement with research?',blocks:[
   P(`Watch the presentation below and summarise its content in note form.`,{instr:true,task:['video','writing']}),
   {t:'video',src:'media/what-is-engagement-with-research.mp4',poster:'media/what-is-engagement-with-research-poster.jpg',title:'What is engagement with research? (video, about 2 minutes)',caption:'*What is engagement with research?* Presented by Achilleas Kostoulas (University of Thessaly). Duration: 1 minute 47 seconds. If you cannot listen, read the transcript below.'},
   SUB('Transcript',[
    P(`‘Engaging with research’ (or ‘knowledge’, if one takes a broader perspective) is often understood as synonym to ‘reading’. This view can be an oversimplification, for three reasons.`),
    P(`Firstly, professional knowledge is now available in a variety of formats (see **Activities 2 and 3**), including video and audio, and multimodal texts. In some cases, engaging with research means listening, or watching, or engaging with input in multiple ways.`),
    P(`Furthermore, reading is not a uniform activity, as it can mean ‘skimming’ and ‘scanning’ or even intensive reading and note-taking. The same, of course, applies to other ways of engaging with input. Exactly how a teacher might approach a publication (or blog, or video) will depend on their needs and interests.`),
    P(`Finally, engaging with research need not mean just passively consuming knowledge. It can also involve working with colleagues, discussing what you have read, making collaborative notes and so on.`)]),
   TXT('a4s2-notes','Your notes',{rows:6}),
   REV('Check your notes',[
    P(`The presentation gives three reasons why "engaging with research" is more than reading:`),
    OL([`Professional knowledge comes in many **formats** (video, audio, multimodal), so engaging may mean listening or watching.`,`Reading itself is **not uniform**: skimming, scanning, intensive reading and note-taking are different, and the choice depends on needs and interests.`,`Engagement need not be **passive consumption**: it can involve working with colleagues, discussing and making collaborative notes.`]),
    SC('a4s2-sc',[`Your notes include all three reasons.`,`Your notes are in your own words, not copied sentences.`]),
    P(`If you have only one or two reasons, reread the transcript, noticing the words "Firstly", "Furthermore" and "Finally", which signal the three points.`)],{gate:['a4s2-notes'],exportLabel:'The three reasons'})
  ]},
  {id:'a4s3',title:'Take notes on a text',blocks:[
   P(`Choose one of the resources you selected in **Activity 2** and read / listen to it while taking notes of the most important points.`,{instr:true,task:['reading','writing']}),
   N('note','Which text to use',[P(`Use the text you recorded in Activity 2, Step 5. (If you did not record one, return to Activity 2, Step 5 and choose a short text now.)`)]),
   N('worked','Worked example: notes on the Borg extract from Activity 1',[
    TAB(['',''],[
     ['Source','Borg, S. (n.d.). *Teacher engagement with research* [Video]. ELTDP Symposium. https://tinyurl.com/45pbdkff (extract 13:23–16:30)'],
     ['Format','Video of a symposium talk, with transcript'],
     ['Why it was chosen','It was part of Module 1, Activity 1'],
     ['Main points','Teachers who said they read research mostly named professional magazines and journals. These usually contain practical material, not research. Borg suggests distinguishing practically oriented literature from literature based on systematic study. He does not rank one above the other; they can support each other.'],
     ['Quotation','"They\'re not in opposition" (extract 13:23–16:30)'],
     ['Words or ideas not understood','"systematic study" — how systematic does it need to be?'],
     ['Connection to teaching','Most of what this teacher reads is teaching tips, so they may be missing research on the same topics.'],
     ['A question still open','How many teachers were surveyed, and in which countries?']])],{collapsed:true}),
   GRID('a4s3-notes','Note template',[{h:'',w:230},{h:'Your notes',type:'text'}],[
    ['Source (author, year, title, where you found it, link)'],['Format'],['Why you chose it'],['Main points, in your own words (3–5)'],['One short passage you may want to quote exactly (in quotation marks, with page or time)'],['Words or ideas you did not understand'],['Connection to your teaching'],['A question you still have']]),
   SC('a4s3-sc',[`You have recorded the source fully enough to find it again.`,`Main points are in your own words; any exact words are in quotation marks.`,`You have at least one connection to your teaching and at least one question.`,`If someone else read only your notes, they would understand what the text is mainly about.`]),
   BR([`If you could not write three main points, return to the "If you find your text difficult" strategies in Activity 3 (final step).`])
  ]},
  {id:'a4s4',title:'Discuss what you read',blocks:[
   P(`Discuss the content you read/listened to with a colleague or post about it in a forum.`,{instr:true,task:['discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague. Alternatively, if you have access to an internet forum, you can discuss your thoughts there.`)]),
   N('resist','Why this step works best with other people',[P(`The transcript in Step 2 names working with colleagues, discussing and making collaborative notes as forms of engagement. Working completely alone changes what this step can do, so use Route A if you can. Route B serves some of the same purposes, but the questions you imagine will tend to be ones you can already anticipate.`)]),
   N('branch','Route A (recommended if possible): discussing online',[P(`Post a short summary of what you read or heard, with one question, in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community) or another teacher forum. Return later to read and respond to replies.`)]),
   N('branch','Route B (working fully alone): explaining to an absent colleague',[OL([
    `Think of a real colleague who would find the text relevant.`,
    `Write them a short message (80–120 words) explaining what you read or heard, one point that might be useful to *them*, and one question you still have.`,
    `Write down two questions you think this colleague would ask you after reading your message.`,
    `Try to answer both questions using only your notes.`])]),
   CH('a4s4-route','The route you followed',['','Route A: discussing online','Route B: explaining to an absent colleague']),
   TXT('a4s4-message','Your post or message',{rows:6,words:true,target:[80,120]}),
   TXT('a4s4-questions','Two questions a colleague might ask (Route B), or replies you received (Route A)',{rows:3}),
   TXT('a4s4-answers','Your answers, using only your notes',{rows:4}),
   BR([`If you **could answer both** questions, your notes captured the text well.`,
    `If you **could not answer** one of them, return to the text to find the answer, and add it to your notes.`,
    `If you **could not think of any questions** a colleague might ask, try these: "How do you know this is true?" "Would this work with our learners?" "Where can I find out more?"`,
    `If you later have the chance, send the message to the colleague (or discuss it with them).`])
  ]}
 ]},

 /* ================= ACTIVITY 5 ================= */
 {id:'a5',title:'Why engage with published professional knowledge',
  helps:['Develop an understanding of the diverse motivations that sustain engagement with professional knowledge','Relate ways of engaging with the professional knowledge with your own motivations','Flexibly select ways of engaging with professional knowledge based on their motivation for reading'],
  needs:['A helpful colleague (optionally)'],
  time:'40–60 minutes',
  steps:[
  {id:'a5s1',title:'Reasons for engaging with professional knowledge',blocks:[
   P(`Read the following list of reasons why a teacher might engage with published professional knowledge. Can you add any other reasons to the list?`,{instr:true,task:['reflection','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague.`)]),
   L([`To solve a challenge in your professional practice`,`To diversify the way in which you teach`,`To develop academically`,`To satisfy your professional curiosity`,`To find ideas that will help you with a writing task`,`To improve your language skills`,`…`]),
   N('note','Working alone',[P(`Add at least two reasons to the list and keep your list. You will compare it with the chart in Step 3.`)]),
   TXT('a5s1-add1','A reason you would add',{rows:1}),
   TXT('a5s1-add2','Another reason you would add',{rows:1})
  ]},
  {id:'a5s2',title:'Rank the reasons',blocks:[
   P(`Rank the items in the list above according to how important they are to you at this stage of your career development.`,{instr:true,task:['reflection']}),
   {t:'rank',id:'a5s2-rank',label:'Your ranking (1 = very important, 8 = not important at all)',headLabel:'Reason',
    items:[['To solve a challenge in your professional practice',''],['To diversify the way in which you teach',''],['To develop academically',''],['To satisfy your professional curiosity',''],['To find ideas that will help you with a writing task',''],['To improve your language skills',''],['The first reason you added in Step 1',''],['The second reason you added in Step 1','']]},
   TXT('a5s2-top','One sentence explaining why your top reason is the most important to you',{rows:2}),
   TXT('a5s2-bottom','One sentence explaining why your bottom reason is the least important to you',{rows:2}),
   N('note','Keep these sentences',[P(`You will use these sentences in Activity 6, Step 1.`)])
  ]},
  {id:'a5s3',title:'Reasons for reading research',blocks:[
   P(`Read the figure below, which is adapted from Hall (2023). Think about the people who agreed with each statement. What types of professional knowledge would they be more likely to engage with?`,{instr:true,task:['reading']}),
   {t:'bars',title:'Reported reasons for reading research: agree + strongly agree',rows:[
    ['Reading research is good for teachers’ professional development',91],['Teachers should read research about language teaching and learning',85],['Reading research helps me make decisions about teaching',82],['Reading research makes me a more effective teacher',80],['Reading research gives me confidence in what I do',77],['Reading research is enjoyable',68],['Reading research will help me get a promotion',52],['My school/institution expects me to read research',41],['I read research because it is part of a course I am studying on',40]],
    note:'Percentages are approximate values reconstructed from the original chart. The original stacked bar chart also shows the proportions who strongly agreed, agreed, neither agreed nor disagreed, disagreed or strongly disagreed; this version shows only the combined "Agree + Strongly agree" figures. Adapted from Hall, G. (2023). *Teachers’ engagement with published research: How do teachers who read research navigate the field, what do they read, and why?* British Council.'},
   N('note','Reading the chart',[P(`Before thinking about the question, make sure you can read the chart.`)]),
   TXT('a5s3-r1','1. What is the chart about? (Look at the title.)',{rows:1}),
   TXT('a5s3-r2','2. What do the percentages show?',{rows:1}),
   TXT('a5s3-r3','3. Which statement has the highest agreement, and which has the lowest?',{rows:2}),
   TXT('a5s3-r4','4. What does the note below the chart tell you about how exact the numbers are?',{rows:1}),
   REV('Check your reading of the chart',[OL([
    `The chart shows reasons for reading **research**, not professional knowledge in general.`,
    `It shows the percentage of respondents who agreed or strongly agreed with each statement.`,
    `Highest: reading research is good for teachers' professional development (91%). Lowest: I read research because it is part of a course I am studying on (40%).`,
    `The percentages are approximate, reconstructed from the original chart.`]),
    P(`If you got one of these wrong, reread the chart title and the note before continuing.`)],{gate:['a5s3-r1','a5s3-r3']}),
   N('note','Comparing with your Step 1 list',[P(`Check whether your list included reasons like those at the bottom of the chart: promotion, institutional expectations, a course of study. If it did not, note whether you tend to think of reasons for reading as mainly personal rather than external.`)]),
   TXT('a5s3-compare','What you noticed when comparing the chart with your list',{rows:2}),
   TXT('a5s3-answer','Answering the question: choose three statements from the chart and, for each one, write what types of professional knowledge people who agree might be likely to engage with',{rows:6}),
   REV('Show some possible answers',[
    L([`*Reading research helps me make decisions about teaching (82%)*: these teachers might favour content that translates easily into classroom decisions, such as one-page summaries, teachers' accounts of their own inquiries and practitioner guides.`,
       `*Reading research is enjoyable (68%)*: these teachers might choose formats they find engaging in their free time, such as podcasts, videos or blogs, as well as longer texts on topics they are curious about.`,
       `*Reading research will help me get a promotion (52%)* or *is part of a course I am studying on (40%)*: these teachers might need texts that are recognised in formal settings and can be cited, such as academic journal articles and books.`]),
    P(`Your answers do not need to match these.`),
    SC('a5s3-sc',[`Each answer names a **type or format** of content, not only a reason.`,`Each answer explains **why** that type would suit the reason.`,`You have noticed that the chart is about reading *research*, and considered whether your answers still hold for other kinds of professional knowledge.`])],{gate:['a5s3-answer'],exportLabel:'Possible answers'})
  ]},
  {id:'a5s4',title:'Write a short summary',blocks:[
   P(`Using the information presented at the chart above, or any other relevant source, write a short text (approx. 150 words) summarising the reasons why teachers might engage with professional knowledge. When you are done, reflect on the questions that follow.`,{instr:true,task:['writing','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague. If you work alone, write your text first, check it against the criteria below, and only then read the model text.`)]),
   TXT('a5s4-text','Your text',{rows:9,words:true,target:[130,170]}),
   SC('a5s4-sc',[`**Accurate:** any figures you use match the chart, and you have signalled that they are approximate.`,
    `**Attributed:** you have said where the information comes from (e.g. Hall, 2023).`,
    `**Organised:** you have grouped reasons (e.g. professional versus external) rather than listing every statement in order.`,
    `**In your own words:** you have not copied the chart statements word for word throughout.`,
    `**Critical:** you have included at least one sentence about what the chart does *not* tell you.`,
    `**Length:** roughly 130–170 words.`]),
   BR([`If you ticked fewer than four boxes, revise your text before reading the model.`]),
   REV('Show the model text (one possible version)',[
    Q(`According to data adapted from a British Council report by Hall (2023), teachers give a range of reasons for reading research. Most of these relate to professional growth and practice. Around nine in ten agree that reading research is good for teachers' professional development, and roughly four in five say that it helps them make decisions about teaching or makes them more effective. Many also report that it gives them confidence (77%) or that they enjoy it (68%). External reasons appear less common. Just over half link reading research with promotion, while only about two in five read because their institution expects it or because it is part of a course. This suggests that engagement is driven more by professional values than by requirements. However, the figures are approximate and refer only to reading research, so they may not explain how teachers engage with other kinds of professional knowledge.`)],{gate:['a5s4-text'],exportLabel:'Model text'}),
   TXT('a5s4-compare','One thing the model does that yours does not, and one thing yours does that the model does not',{rows:3}),
   TXT('a5s4-access','To what extent did access to specific information help you produce your text?',{rows:2}),
   TXT('a5s4-easy','What aspects of engaging with the chart (or other source) did you find easiest / more challenging?',{rows:2}),
   TXT('a5s4-efficient','How can you make this process more efficient and more relevant to your needs?',{rows:2}),
   P(`(Photo in the print version: IvanS / Pexels)`,{small:true})
  ]},
  {id:'a5s5',title:'Three teachers',blocks:[
   P(`Read about the following teachers. In what ways might engaging with published professional knowledge be helpful for them? Think about the sources of information that would be most useful for them, the formats of information exchange that they might prefer and the ways in which they could engage with the knowledge. Can you think of another scenario in which engaging with professional knowledge could be useful?`,{instr:true,task:['reflection','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague.`)]),
   {t:'profiles',items:[
    ['Amira','Amira is a novice teacher who is frustrated by her students’ lack of language learning motivation.'],
    ['Hanzō','Hanzō is a language teacher who has recently taken on a management post. His immediate priority is to set up a new self-access centre, and he needs evidence to convince stakeholders about the benefits of self-access in order to secure funding.'],
    ['Chiara','Chiara is a language teacher who wants to find out more about language learning assessment in order to write more effective tests.']]},
   N('worked','Worked example: Amira',[
    P(`**Why might engaging with published professional knowledge help?** Amira is frustrated by her students' lack of motivation. Published knowledge could help her understand what motivation involves and find approaches other teachers have tried, rather than relying only on trial and error.`),
    P(`**Most useful sources:** As a novice, she might start with accessible, practice-oriented sources, such as the OASIS database or teachers' accounts on Camtree, and move to research articles once she has a clearer question.`),
    P(`**Preferred formats:** Short formats (summaries, infographics, videos) might suit a new teacher with a heavy workload.`),
    P(`**Ways of engaging:** She could take notes on two or three short texts, try out one idea with a class, and discuss what happened with a mentor or a more experienced colleague.`)]),
   N('note','Your turn',[P(`Write a similar response for Hanzō and for Chiara, covering all four points: why it would help; sources; formats; ways of engaging.`)]),
   TXT('a5s5-hanzo','Hanzō',{rows:6}),
   TXT('a5s5-chiara','Chiara',{rows:6}),
   REV('Show points to compare',[
    P(`**Hanzō** needs evidence to convince stakeholders, so the **authority** of sources matters more than for Amira. A strong response might mention research-based sources (e.g. research articles or syntheses) rather than only practical tips, and ways of engaging that produce something he can share, such as a short written summary of the evidence. It might also notice that stakeholders may prefer accessible formats, so he may need to read research but present it simply.`),
    P(`**Chiara** has a specific, focused topic (assessment) and a practical goal (writing better tests). A strong response might mention sources that combine principles with practical guidance, such as practitioner guides alongside research, and detailed, intensive reading with notes she can return to when designing tests.`),
    SC('a5s5-sc',[`Each response covers all four points.`,`Your recommendations for the three teachers **differ**, and the differences are linked to their situations.`,`For Hanzō, you have considered how convincing the sources would be to others, not only how useful they are to him.`])],{gate:['a5s5-hanzo','a5s5-chiara'],exportLabel:'Points to compare'}),
   TXT('a5s5-own','Another scenario: based on a real situation from your teaching context (with names and details changed), answering the same four points',{rows:6}),
   P(`(Photos in the print version: RDNE Stock Project; Thirdman / Pexels)`,{small:true})
  ]}
 ]},

 /* ================= ACTIVITY 6 ================= */
 {id:'a6',title:'Reflecting on and planning for development',
  helps:['Reflect on your current motivations and needs for engagement with professional knowledge','Design a personalised learning pathway for developing your ability to access published professional knowledge','Create a list of resources to which you can refer in the future'],
  needs:['The ReaLiTea Research Literacy Framework','Internet access'],
  time:'30 minutes',
  steps:[
  {id:'a6s1',title:'Your needs and context',blocks:[
   P(`Think about your current needs and context and complete the following table.`,{instr:true,task:['reflection']}),
   N('note','Before completing the table, look back at',[L([
    `your ranking and sentences from Activity 5, Step 2 (for your main motivation)`,
    `your evaluation answers in Activity 3 (for the types of content you find most accessible)`,
    `your Activity 1 answers and the text you chose in Activity 2, Step 5 (for the types of content most relevant to your needs)`])]),
   GRID('a6s1-grid','Your needs and context',[{h:'',w:280},{h:'Your answer',type:'text'}],[
    ['Your main motivation for engaging with published professional knowledge is…'],['The types of content that you find most accessible are…'],['The types of content that are most relevant to your needs are…']]),
   TXT('a6s1-diff','If your main motivation is different from your top-ranked reason in Activity 5, one sentence explaining the difference',{rows:2})
  ]},
  {id:'a6s2',title:'Self-assessment with the Framework',blocks:[
   P(`Read **Section B** (‘Accessing published professional knowledge’) of the ReaLiTea Research Literacy Framework. Identify the aspects of accessing professional knowledge with which you feel confident, as well as areas of priority for your development.`,{instr:true,task:['reflection']}),
   N('worked','How to assess yourself',[OL([
    `**Start at the lowest level.** Read the Initial descriptor first and ask whether it is true of you. Only move to Emerging if Initial is true, and so on. Each level builds on the one below it.`,
    `**Look for evidence, not a feeling.** For the level you think fits best, answer the Framework's question: "How do I know / How can I show that this is true of me?" Try to use evidence from this module (see the table below).`,
    `**Record the support you used.** Many Initial and Emerging descriptors mention a knowledgeable other, guiding questions, templates or pre-defined criteria. In this module, some of that support came from the materials themselves (e.g. the note template, the guiding questions for the chart). When you record your evidence, note what support you used, for example: "made notes using the module's template".`,
    `**Check for over-claiming and under-claiming.** Without someone to discuss your self-assessment with, ask yourself: *Over-claiming:* have you chosen a level because you can **describe** the skill, or because you have **done** it, more than once, without the support mentioned at that level? *Under-claiming:* is there something you do routinely in your teaching (e.g. choosing which parts of a text to read carefully) that you have not counted because you do not think of it as a "research" skill?`,
    `**Expect an uneven profile.** It is normal to be at different levels for different descriptors. If all your answers are at the same level, look again at two descriptors where you feel least and most confident.`,
    `**Choose priorities.** Select one or two descriptors as priorities, and for each one write down the *next* level's descriptor as your goal.`])]),
   TAB(['Framework area','Where you may find evidence in Module 1'],[
    ['B1.1 Searching for information','Activity 2, Step 5; Activity 6, Step 3'],['B1.2 Filtering information','Activity 2, Step 5'],['B1.3 Accessing information','Activity 3 (especially Option 6)'],['B2.1 General comprehension skills','Activity 3'],['B2.2 Detailed comprehension','Activity 5, Step 3 (reading the chart)'],['B2.3 Note-taking','Activity 4, Steps 2 and 3'],['B3.1 Understanding authority','Activity 3; Activity 5, Step 5 (Hanzō)'],['B3.3 Evaluating local relevance','Activity 2, Step 5; Activity 3 (usefulness question)'],['B3.4 Evaluating potential impact','Activity 3; Activity 5, Step 5'],['B4.2 Organisation and B4.3 Criticality','Activity 5, Step 4']]),
   GRID('a6s2-evidence','Your evidence record',[{h:'Descriptor',w:150},{h:'Level you can evidence',type:'select',options:['','Initial','Emerging','Advancing','Established','Not sure yet']},{h:'Evidence from this module',type:'text',w:200},{h:'Support you used',type:'text'}],[
    ['B1.1 Searching for information'],['B1.2 Filtering information'],['B1.3 Accessing information'],['B2.1 General comprehension skills'],['B2.2 Detailed comprehension'],['B2.3 Note-taking'],['B3.1 Understanding authority'],['B3.3 Evaluating local relevance'],['B3.4 Evaluating potential impact'],['B4.2 Organisation'],['B4.3 Criticality']]),
   TXT('a6s2-confident','Aspects of accessing professional knowledge with which you feel confident',{rows:3}),
   TXT('a6s2-priorities','Your priorities: one or two descriptors, with the next level’s descriptor as your goal',{rows:4}),
   N('resist','What this cannot replace',[P(`This procedure reduces the risks of over-claiming and under-claiming, but it cannot replace a second person's view. If you later have the chance, share your self-assessment with a mentor, teacher educator or colleague with relevant expertise, as the Framework recommends.`)])
  ]},
  {id:'a6s3',title:'Build your list of collections',blocks:[
   P(`Search the internet for collections of resources (books, journals, blogs, video channels, podcasts, etc.) with which you are comfortable. Make a list of such collections for your reference.`,{instr:true,task:['online','writing']}),
   N('note','Where to start',[P(`You can begin with the collections already named in this module: Camtree, the OASIS database, *Studies in Second Language Learning and Teaching*, TESOLGraphics and TESOLacademic (Activity 2, Step 5), and the collections in Additional reading at the end of this module.`)]),
   N('worked','Criteria for each collection you add to your list',[L([
    `**Who produces it?** You can identify the person, organisation, journal or project responsible.`,
    `**Is it current?** It has been updated or added to recently.`,
    `**Can you get to it?** You can access the content freely, or through your institution.`,
    `**Does it suit you?** Its format and language match what you found accessible in Activity 3.`,
    `**Does it show where its knowledge comes from?** It links to or names the research, teacher inquiry or experience it is based on.`,
    `**Is it relevant?** It covers topics related to your motivation and priorities from Steps 1 and 2.`]),
    P(`If a collection meets fewer than four criteria, leave it off the list or mark it "use with caution" and note why.`)]),
   GRID('a6s3-list','Your list of collections',[{h:'Collection and link',type:'text',w:220},{h:'Orientation',type:'select',options:['','Practice-oriented','Research-based','Both']},{h:'Criteria met',type:'select',options:['','6','5','4','3 or fewer (use with caution)']},{h:'Notes',type:'text'}],[[],[],[],[],[]],{addable:true}),
   BR([`If your list contains **only practice-oriented** collections (e.g. tips, blogs), add at least one that is research-based.`,
    `If it contains **only academic** collections (e.g. journals), add at least one that is practice-oriented or accessible.`,
    `The Simon Borg extract in Activity 1 suggested that these two types of reading can work together.`],'Checking the balance of your list')
  ]}
 ]}
 ]
};
})();
