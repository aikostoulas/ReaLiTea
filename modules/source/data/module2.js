/* Module 2 content — v.4 module text + self-study scaffolding (Module_2_selfstudy.md), second person */
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

const DISC=N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague.`)]);

/* appraisal criteria shared by the five options in Activity 4 */
const APPRAISE=(id)=>GRID(id,'Your appraisal',[{h:'What to consider?',w:120},{h:'Ask yourself…',w:260},{h:'Record your answer',type:'text'}],[
 ['Focus','What is this source mainly about, and how does that compare with what you were searching for?'],
 ['Type of source','What is the format or nature of the document (e.g., peer-reviewed article, book, conference paper, report)?'],
 ['Geographic focus','What specific region or area does the source address or is contextualised within?'],
 ['Timeliness','How current is the source, considering its publication date and the context in which it was produced?'],
 ['Relevance','To what extent does the source directly address your research questions or thematic areas?'],
 ['Credibility','What is the credibility of the source based on the expertise of the authors, their affiliations and the reputation of the publisher?'],
 ['Accessibility','How easily can the full text and supporting materials be accessed?'],
 ['Evidence','What kind of evidence, if any, is offered in support of the claims made?'],
 ['Originality','Does the source offer perspectives, methods or findings that are new to you?']]);
const OPTION_TAIL=(id)=>[
 TXT(id+'-src','The source you chose (reference or link)',{rows:2}),
 APPRAISE(id+'-appraise'),
 CH(id+'-decision','Your decision',['','Keep','Maybe','Reject']),
 TXT(id+'-reason','The reason for your decision',{rows:2}),
 SC(id+'-sc',[`You have answered every row, writing **"not stated"** where the information is not available, rather than guessing.`,
  `For **Type of source**, you have named the type (e.g. peer-reviewed article, report, summary, teacher account).`,
  `For **Credibility**, you have given a reason based on the author, the publisher or the place where it appears, not only your impression.`,
  `For **Evidence**, you have described *what kind* of evidence is offered (e.g. tests, interviews, a review of other studies, personal experience).`,
  `For **Relevance**, you have compared the source with your question from Activity 2.`,
  `You have ended with a decision: **keep**, **maybe** or **reject**, with a reason.`]),
 N('note','Stuck on a row, or unsure what to decide?',[P(`Use the guidance under **Step 2: Choose a database and appraise a source**.`)])];

window.RLT_MODULE = {
 id:'m2', storageKey:'rlt-m2-selfstudy-v1',
 number:2, title:'Locating relevant knowledge to inform language education',
 audience:['**Pre-service and in-service teachers** of second, foreign and additional languages, working on their own and at their own pace.',
  'It suits you if you want to turn a question about your teaching into an effective search, and to choose publications that are relevant and credible.',
  'You do not need any prior research training. If the Initial descriptors in Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) describe you best, you will get more out of the module with a mentor, tutor or colleague.'],
 citation:'The ReaLiTea Project. (2026). *Locating relevant knowledge to inform language education*. Available online: [https://www.realitea.info/locatingpublications](https://www.realitea.info/locatingpublications).',
 facet:'Using published professional knowledge',
 portfolioSummary:'Completed ReaLiTea Module 2, Locating relevant knowledge to inform language education, in self-study mode: mapping sources of professional knowledge, developing a research question, building and refining search statements, appraising sources found in databases and self-assessing against Section B1 of the Framework.',

 intro:[
  H('Summary'),
  P(`Being able to effectively locate and access professional knowledge is a fundamental component of research literacy. This module, *Locating relevant knowledge to inform language education*, aims to foster key skills necessary for teachers of foreign, second or additional languages to engage with scholarly and professional resources. The primary focus of this module is on developing teachers’ abilities to search for relevant and credible knowledge (whether in the form of journal articles, academic books, professional publications or other knowledge outputs), and to filter search results in order to locate work that meets standards of quality and is relevant to teachers’ needs.`),
  H('Introduction'),
  P(`This set of learning materials, which has been developed as part of the *Research Literacy of Teachers Project*, or ‘ReaLiTea’, focuses on locating relevant and credible professional knowledge that can inform the teaching and learning of foreign, second or additional languages. We will sometimes use the term ‘publications’, as a shorthand way to describe such knowledge; this can be understood to mean any form of published content, ranging from peer-reviewed journal articles to blog posts and social media content, whether oral, written or multimodal, as long as it meets the criteria of rigour and relevance that we will develop.`),
  P(`The landscape of scholarly and professional publications about language education is vast, dynamic and uneven. This module addresses the critical skills and strategies teachers need to navigate such a landscape. A core underlying component of these skills and strategies is the ability to discern and access publications that are relevant and credible. This refers equally to publications that are professionally oriented and to publications that are written in academic style. The examples we use in these materials, however, will be drawn primarily from the academic literature, as this is where readers most often encounter difficulty.`),
  P(`There are five activities in this module. The first activity comprises four steps and serves to get you thinking about the different ways one might navigate the professional knowledge that is available online. The second and third activities focus on creating research questions and developing strategies to search for information. Activity 4, which follows, invites you to answer your research questions by using the strategies you learnt about. The module concludes with a reflective activity, which aims to help you self-assess and plan your future professional development.`),
  P(`You might want to follow the activities in the suggested order. However, the activities are self-contained, in order to help you engage with the ones that are most relevant to your needs. Each activity is structured in sequential steps, and can be done individually, allowing you to progress at your preferred pace. To support you to navigate smoothly through the module, we have provided guidance on aims, required resources and estimated time for completion for each activity.`),
  P(`While activities can be undertaken individually, we very strongly encourage you to collaborate with colleagues, either onsite or within online learning communities. The [ReaLiTea virtual Community of Practice](https://www.realitea.info/community) is one space where such collaboration can take place. In addition to increasing your motivation, collaborative work and the exchange of perspectives will help you to learn from your colleagues' insights, and develop a better understanding of how the guidance here can be adjusted to fit different learning needs. The materials indicate which tasks are most conducive to discussion and pair work.`),
  P(`In cases where activities offer multiple options, we invite you to explore as many possibilities as your time allows. Alternatively, if you are working in a group, perhaps you can distribute the options among yourselves and spend some time afterwards discussing them, in order to make the most of the learning experience.`),
  P(`We hope that you find these materials helpful and enjoyable. Onwards!`),
  H('Intended learning outcomes'),
  P(`When you have completed this module, you will be able to:`),
  L([`Improve your learning practices [A3.3] by developing the ability to locate appropriate learning resources based on your strengths, interests and needs.`,
     `Efficiently search for information [B1.1] by creating a search strategy based on your needs, and by implementing this strategy using focused and efficient search statements.`,
     `Filter information [B1.2] by refining and optimising your search strategy in order to retrieve relevant and high-quality information.`,
     `Retrieve potentially useful information [A3.1] by efficiently using various academic databases and repositories where published knowledge is deposited.`]),
  P(`The codes in square brackets refer to competences described in the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae).`,{small:true}),
  H('Required resources'),
  L([`Internet access`,`Headphones (optionally)`,`The ReaLiTea Research Literacy Framework`]),
  H('Using these materials'),
  N('note','Working through this module on your own',[
   P(`This version of the module includes support that a mentor or tutor would otherwise provide. After some tasks you will find a self-check list or a model answer; after others you will find guidance that tells you what to do next depending on your answer. Try each task before you look at this support, because comparing your own attempt with a model is where most of the learning happens.`),
   P(`Activities 2 to 5 build on each other: you develop a question, turn it into search statements, run searches, appraise what you find and assess your progress. To show how this works, the module follows **one worked example** through all four activities: a question about mobile apps and vocabulary learning with young learners. At each point, work on your own question, not the example.`),
   P(`All the discussion options in this module are optional. If you have access to a colleague or to the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community), you can still use them.`)]),
  {t:'legend'}
 ],

 activities:[
 /* ================= ACTIVITY 1 ================= */
 {id:'a1',title:'Warm-up',
  helps:['Reflect on your current sources of professional knowledge.','Identify and organise your professional knowledge sources.'],
  needs:['A helpful colleague or access to a forum (optionally).','Paper and pen, if you prefer to draw your mind map by hand (Step 2).'],
  time:'30–60 minutes',
  steps:[
  {id:'a1s1',title:'Your use of the literature',blocks:[
   P(`Reflect on the following questions or discuss them with a peer.`,{instr:true,task:['reflection','discussion']}),
   DISC,
   N('note','Working alone',[P(`Write short answers to the questions so that you can use them again in Activity 5.`)]),
   TXT('a1s1-often','How often do you use the academic and professional literature (e.g., books, academic articles, teaching reports, blogs) to learn more about teaching and learning approaches, methods and techniques?',{rows:2}),
   TXT('a1s1-where','Where do you usually look for research insights and guidance for your teaching? Are these the same resources you use for your learning? What are their differences?',{rows:3}),
   TXT('a1s1-decide','How do you decide which sources are worth exploring when you look up information for your teaching or research needs?',{rows:3}),
   TXT('a1s1-challenges','What challenges do you face in accessing academic research and making good use of it?',{rows:3}),
   TXT('a1s1-confident','How confident do you feel in assessing the credibility of publications?',{rows:2}),
   CH('a1s1-scale','Your current confidence in assessing credibility (1 = not at all confident, 5 = very confident)',['','1','2','3','4','5']),
   SC('a1s1-sc',[`For "how often", you give an approximate frequency (e.g. "once a month", "only for course assignments").`,
    `For "where", you name at least two specific places (a website, a journal, a colleague, a social media group).`,
    `For "how do you decide", you describe what you actually do, not what you think you should do.`]),
   BR([`If you rarely use the literature because you **do not know where to look**, Steps 2–4 and Appendix I are the most important parts of this activity for you.`,
    `If you find sources but **cannot tell which are worth reading**, pay particular attention to the appraisal criteria in Activity 4.`,
    `If you find sources but **cannot access them**, note this; the Accessibility criterion in Activity 4 addresses it, and Module 3 deals with it in more detail.`,
    `If you feel **not very confident** about credibility, that is common at this stage. Your rating above lets you compare in Activity 5.`],'What to do with your answers'),
   P(`There are multiple sources of professional knowledge on which language teachers can draw (see also Module 1). In Steps 2 and 3 of this activity we will consider some of these. However, the rest of this module will focus more explicitly on sources like the scholarly and professional literature. We do this because reading this literature and using it well often need deliberate support, at least compared with sources like colleagues' advice or your own reflection, which you're likely already drawing on more naturally. This does not mean that academic articles and similar sources are more important: different sources of knowledge are useful for different needs, and they all complement each other in a balanced ‘ecology of ideas’ (Stelma & Kostoulas, 2021).`)
  ]},
  {id:'a1s2',title:'Map your sources of professional knowledge',blocks:[
   P(`The mind map below shows the various sources a language teacher considers relevant to their professional practice. How useful / relevant do you think each source is?`,{instr:true,task:['reflection','discussion']}),
   DISC,
   {t:'mindmap',centre:'My professional knowledge sources',alt:'Mind map with a central node, "My professional knowledge sources", connected to six sources: journals (peer-reviewed research), databases, professional bodies, infographics, reflections (own experiences), and conferences (talks and networking).',
    nodes:[['Journals','peer-reviewed research'],['Databases',''],['Professional bodies',''],['Infographics',''],['Reflections','own experiences'],['Conferences','talks and networking']]},
   GRID('a1s2-sample','How useful is each source in the sample map for you?',[{h:'Source',w:170},{h:'Useful for you?',type:'select',options:['','Useful','Sometimes useful','Not useful for you']},{h:'Short reason',type:'text'}],[
    ['Journals (peer-reviewed research)'],['Databases'],['Professional bodies'],['Infographics'],['Reflections (own experiences)'],['Conferences (talks and networking)']]),
   P(`Create a similar mind-map, with branches for each type of source you use. Take an inclusive approach, noting as many sources as possible (e.g., academic journals, conferences, books, infographics, etc.). Under each branch, list specific examples (e.g., for research databases: OASIS). Using a different colour, expand the map to include sources that you do not regularly use. Why do you not use them?`,{instr:true,task:['writing']}),
   N('note','Your map in table form',[P(`Record each branch of your map as a row below (you can also draw it on paper). Mark whether you use the source regularly; for the sources you do not use regularly (the "different colour" branches), say why.`)]),
   GRID('a1s2-map','Your mind map',[{h:'Branch (type of source)',type:'text',w:160},{h:'Specific examples',type:'text',w:220},{h:'Do you use it regularly?',type:'select',options:['','Yes','No']},{h:'If not, why not?',type:'text'}],[[],[],[],[],[],[]],{addable:true}),
   SC('a1s2-sc',[`Your map includes at least one source from each group: **people** (e.g. colleagues, mentors, online teacher groups); **your own experience** (e.g. reflections, teaching journals); **research publications** (e.g. journals, databases); **summaries and accessible formats** (e.g. infographics, one-page summaries, videos, podcasts); **events** (e.g. conferences, webinars, workshops); **organisations** (e.g. professional bodies, teacher associations).`,
    `If a group was missing, you have added it as a source you do not use regularly and written why you do not use it.`,
    `Under each branch, you have named at least one **specific** example (e.g. "OASIS", not just "databases").`],'Working alone, you may think of fewer sources than you would with a colleague. Before you finish, check that')
  ]},
  {id:'a1s3',title:'Analyse your map',blocks:[
   P(`Analyse the mind map of your current professional knowledge sources.`,{instr:true,task:['reflection','discussion']}),
   DISC,
   L([`Look for any areas where you might be over-reliant on one source or missing out on others.`,`Consider any potential sources you haven’t yet explored.`,`Consider what benefits these new sources might offer in terms of credibility, depth or practical educational value.`,`Identify one or two steps you can take to broaden your access.`]),
   N('explain','Explanation',[P(`Many universities have institutional repositories, where you can access useful research.`),P(`You could also join our online research community, the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community).`)]),
   N('worked','Checking your map without someone else to look at it',[P(`Use these questions to check for over-reliance and gaps:`),OL([
    `**Balance.** Which branch has the most examples? Do more than half of all your examples sit on one branch? If so, you may be over-reliant on that kind of source.`,
    `**Practice and research.** Are your sources mostly practical (tips, ideas, advice) or mostly research-based? If almost all are one type, note what the other type could add. (Module 1, Activity 1 discussed how the two types can work together.)`,
    `**Checked and unchecked.** For each branch, who checks the quality of what is published there (e.g. peer reviewers, editors, nobody)? If most of your sources have no checking, note this for the Credibility criterion in Activity 4.`,
    `**Free and paid.** Which of your sources can you use without a subscription? If you rely only on free sources, ask what you might be missing; if you rely on your institution's access, ask what happens if you lose it.`])]),
   TXT('a1s3-balance','Balance: over-reliance or gaps you noticed',{rows:3}),
   TXT('a1s3-practice','Practice and research',{rows:2}),
   TXT('a1s3-checked','Checked and unchecked sources',{rows:2}),
   TXT('a1s3-free','Free and paid sources',{rows:2}),
   TXT('a1s3-new','Potential sources you haven’t yet explored, and what they might offer',{rows:3}),
   TXT('a1s3-steps','One or two steps you can take to broaden your access',{rows:3}),
   N('worked','Examples of specific, realistic next steps',[L([`"Look up your university's institutional repository this week."`,`"Join the ReaLiTea virtual Community of Practice and read three posts by the end of the month."`])]),
   SC('a1s3-sc',[`Each step names a specific source and a time.`])
  ]},
  {id:'a1s4',title:'Academic and scholarly sources',blocks:[
   P(`As noted above, there are a lot of sources of professional knowledge. In the following table, we will focus on sources with an academic or scholarly orientation. Reflect on how often you use each source, as detailed below. Find out about any sources that are unfamiliar to you. Appendix I describes each of these sources.`,{instr:true,task:['reflection','discussion']}),
   DISC,
   {t:'rate',id:'a1s4-rate',label:'How often you use each source',headLabel:'Source',scale:['Never','Rarely','Sometimes','Often','Always'],items:[
    {group:'Research Databases'},'OASIS','ERIC','JSTOR','Google Scholar','Scopus',
    {group:'Repositories'},'Directory of Open Access Repositories','University Institutional Repositories',
    {group:'Networks'},'Academia.edu','ResearchGate','The ReaLiTea Virtual Community',
    {group:'Online Resources'},'Academic journals','TESOLGraphics','TESOLAcademic channel','TESOL Talks Podcast','IATEFL Research SIG publications','Camtree Digital Library']},
   N('note','After completing the table',[P(`Choose **two** sources you marked "Never" or "Rarely". For each one, read its description in Appendix I (at the end of this module) and write: what type of source it is (database, repository, network, online resource); one kind of question it could help you with; and one thing you would need to check before relying on it (e.g. whether you can access the full texts, or who checks what is posted there).`),
    P(`If you marked "Often" or "Always" for most sources, choose one that you use often and write what you would recommend it for, and what you would *not* use it for.`)]),
   GRID('a1s4-explore','Two sources to explore',[{h:'Source',type:'text',w:140},{h:'Type of source',type:'select',options:['','Database','Repository','Network','Online resource']},{h:'A question it could help you with',type:'text'},{h:'What you would need to check',type:'text'}],[[],[]])
  ]}
 ]},

 /* ================= ACTIVITY 2 ================= */
 {id:'a2',title:'Developing and refining your inquiry',
  helps:['Transform an abstract concept into a concrete research question that might be answered by searching and reading.','Evaluate a research question using the FINER criteria.','Reflect on gaps or blind spots in your initial question design and revise accordingly.'],
  needs:['A helpful colleague or access to a forum (optionally)'],
  time:'40–60 minutes',
  steps:[
  {id:'a2s1',title:'From research aims to answerable questions',blocks:[
   P(`Read the following text, and find out how broad research aims can be turned into answerable questions.`,{instr:true,task:['reading']}),
   N('note','Before reading',[P(`In this module, you will answer your question mainly by **searching for and reading** publications, not by collecting data yourself. The text below comes from a research methods book, so it talks about evidence, measurement and data collection. As you read, think about how the same process helps you turn a broad interest into a question you can search for.`)]),
   P(`Operationalisation is a pivotal step in research design, transforming abstract research aims into concrete, measurable objectives. It involves breaking down overarching goals into specific, testable questions that can yield quantifiable or verifiable answers. The process begins with deconstructing broad research aims into constituent elements, such as in the example of studying educational continuity between primary and secondary education. For instance, 'continuity' can be dissected into various facets like ‘pedagogical practices’, ‘curriculum alignment’, and ‘organizational structures’.`),
   P(`By focusing on a specific aspect, such as ‘pedagogical continuity’, researchers can formulate operationalised research questions. One such question might be: *How (if at all) do primary and secondary teachers coordinate their pedagogical practices?* Questions framed in this way can then guide decisions about what evidence to collect and how to analyse it.`),
   P(`Operationalised questions are essential as they:`),
   L([`Define clear criteria for measurement`,`Specify the type of evidence required`,`Guide data collection and analysis`,`Ensure the research is empirically grounded`]),
   P(`Through this process, researchers move from general intentions to concrete, actionable questions, and this makes their studies more focused and more defensible.`),
   P(`Adapted from Cohen, L., Manion, L., & Morrison, K. (2007). *Research methods in education* (6th ed.). RoutledgeFalmer.`,{small:true}),
   TXT('a2s1-q1','1. What is the broad research aim in the example?',{rows:1}),
   TXT('a2s1-q2','2. What smaller parts is it broken into?',{rows:1}),
   TXT('a2s1-q3','3. Which part does the example question focus on?',{rows:1}),
   TXT('a2s1-q4','4. Why is the example question easier to work with than the broad aim?',{rows:2}),
   REV('Check your answers',[OL([
    `Studying educational continuity between primary and secondary education.`,
    `Pedagogical practices, curriculum alignment and organisational structures.`,
    `Pedagogical continuity: "How (if at all) do primary and secondary teachers coordinate their pedagogical practices?"`,
    `It focuses on one aspect, so it makes clear what evidence is needed and what to look for.`]),
    BR([`If you got question 2 or 3 wrong, reread the first two paragraphs, looking for the words in quotation marks.`,
     `If you thought **every question must be measurable with numbers**, look again at the example question. It asks "How (if at all)…", which can be answered through descriptions as well as numbers.`,
     `Notice the words "**if at all**" in the example. They leave room for the answer to be "they do not". You will come back to this in Step 3.`])],{gate:['a2s1-q2','a2s1-q3'],exportLabel:'Answers'})
  ]},
  {id:'a2s2',title:'Write your question',blocks:[
   P(`Think of a topic that you’d like to find out more about. Write it out in question form.`,{instr:true,task:['writing','discussion']}),
   DISC,
   N('worked','Worked example (before your own attempt)',[TAB(['Stage','Example'],[
    ['Broad topic','Technology in the classroom'],
    ['Breaking it down (like "continuity" in Step 1)','which technology (mobile apps, interactive whiteboards, online platforms); which learners (young learners, teenagers, adults); which area of learning (vocabulary, speaking, motivation)'],
    ['Choosing one aspect','Mobile apps for vocabulary with young learners'],
    ['First version of the question','"How do mobile apps help young learners learn vocabulary?"']])]),
   N('note','Your turn',[P(`Write your own topic, break it down into at least three parts, choose one and write the first version of your question.`)]),
   TXT('a2s2-topic','Your broad topic',{rows:1}),
   TXT('a2s2-parts','Breaking it down: at least three parts',{rows:3}),
   TXT('a2s2-aspect','The aspect you chose',{rows:1}),
   TXT('a2s2-rq','Research question (first version)',{rows:2}),
   SC('a2s2-sc',[`It is written as a question.`,`It focuses on **one** aspect of your topic.`,`It can be answered, at least partly, by reading what others have published.`,`It cannot be answered with just "yes" or "no".`,`You can pick out two or three key terms you could search for.`]),
   BR([`If it is **very broad** (e.g. "How can I motivate my students?"), break the topic down as in the example and choose one part (e.g. which learners, which kind of activity).`,
    `If it is a **yes/no question** (e.g. "Do games help vocabulary learning?"), rewrite it starting with "How", "What" or "To what extent".`,
    `If it is only about **your own class** (e.g. "Why is my Year 3 class unmotivated?"), no publication can answer it directly. Ask: what is the general question behind it that others may have studied (e.g. "What factors do studies link to low motivation among learners of this age?")? Your own class can come back into it when you think about relevance.`,
    `If you **cannot find key terms** to pick out, the question may be too abstract; replace general words (e.g. "improve", "better") with specific ones (e.g. "vocabulary recall", "willingness to speak").`],'If your question does not pass'),
   TXT('a2s2-keyterms','Two or three key terms from your question',{rows:1})
  ]},
  {id:'a2s3',title:'Check your question against the FINER criteria',blocks:[
   P(`Read the following FINER criteria and think about how well your tentative research question aligns with them. Rewrite your question until you are satisfied that it does.`,{instr:true,task:['writing','discussion']}),
   DISC,
   N('explain','The FINER criteria',[P(`The **FINER criteria** are a set of guidelines used to evaluate how viable a research question is. Each letter stands for:`),
    L([`**F:** Feasible`,`**I:** Interesting`,`**N:** Novel`,`**E:** Ethical`,`**R:** Relevant`]),
    P(`Although these criteria were originally developed in the context of clinical research, we can adapt them for thinking about our own needs as language teachers.`)]),
   N('worked','Worked example (before your own attempt): applying FINER to "How do mobile apps help young learners learn vocabulary?"',[
    TAB(['Criterion','What the check revealed','Change made'],[
     ['Feasible','The key terms (mobile apps, vocabulary, young learners) can be searched for.','None'],
     ['Interesting','The teacher uses apps with their classes and wants to know whether it is worth it.','None'],
     ['**Novel**','"How do mobile apps *help*…" assumes that they do. The teacher may be looking for confirmation of a view they already hold.','Borrowed "whether and how" (like "if at all" in Step 1)'],
     ['**Ethical**','Not all learners may have access to a device at home. If the teacher acted on the answer by setting app-based homework, some learners could be affected unfairly.','Noted as something to look for in the reading; the question itself stays focused'],
     ['Relevant','The answer could change whether and how the teacher sets app-based vocabulary work.','None']]),
    P(`**Revised question:** "What does published research suggest about whether and how mobile apps support vocabulary learning among young learners of English?"`)],{collapsed:true}),
   GRID('a2s3-finer','Evaluation Checklist: FINER Criteria',[{h:'Criterion',w:100},{h:'Ask yourself',w:330},{h:'Check (✓)',type:'check',w:70},{h:'What the check revealed / change made',type:'text'}],[
    ['Feasible','Do you have enough resources (time, access to data) to answer this question? Is the question narrow enough that you could make some progress on it in the time you have? Can you turn this question into search terms, or is it phrased too abstractly to search for?'],
    ['Interesting','Does the research question address something that you find personally interesting? Would you still want the answer if nobody had asked you to look into it? Are you willing to read several publications to answer it?'],
    ['Novel','Does this question really ask about something you do not know? Are you looking for an answer, or for confirmation of a view you already hold? Can the answer to this question take you further than your present understanding?'],
    ['Ethical','Will the answers to this question help you to improve your practice in ways that will benefit everyone? Does the way you have phrased the question avoid unfair assumptions about a group of learners? If you acted on the answer, who would be affected, and would they regard the change as reasonable?'],
    ['Relevant','Does the research question address something that is important for your professional practice? Can the answer to the question change something specific about your practice? Does this matter to anyone besides you?']]),
   N('resist','Being honest without a colleague',[P(`Working alone, it is easy to tick every box. For the two criteria that are hardest to judge alone, do these extra checks.`)]),
   TXT('a2s3-expect','Novel: what do you *expect* the answer to be? If your question only makes sense if your expectation is right, rewrite it so that a different answer is possible (e.g. adding "whether", "if at all" or "to what extent").',{rows:2}),
   TXT('a2s3-others','Ethical: name one person or group who would be affected if you acted on the answer (e.g. learners, parents, colleagues), and write two sentences from their point of view. Would they see the change as reasonable?',{rows:3}),
   BR([`**Feasible** not met because the question is too large: narrow one part (learners, setting or area of learning).`,
    `**Interesting** not met: return to Step 2 and choose a different part of your topic; you will need to read several publications, so interest matters.`,
    `**Novel** not met because you already know the answer: ask what you *don't* know about the topic (e.g. under what conditions, for which learners).`,
    `**Ethical** not met because of an assumption about a group of learners: rephrase the question without the assumption (e.g. "weaker learners" → "learners who find X difficult").`,
    `**Relevant** not met: ask what you could do differently depending on the answer; if nothing, choose a different question.`],'If a criterion is not met'),
   TXT('a2s3-revised','Research question (revised version)',{rows:2}),
   SC('a2s3-sc',[`Your final question has been revised at least once. (If it has not, check the Novel criterion again.)`])
  ]}
 ]},

 /* ================= ACTIVITY 3 ================= */
 {id:'a3',title:'Searching efficiently',
  helps:['Develop the ability to search for information in the literature in a focused and efficient way.','Refine your search strategies so that you obtain more relevant outcomes.','Apply your search strategies to different academic databases.'],
  needs:['A helpful colleague or access to a forum (optionally, for Step 2)','Internet access (for Steps 2 and 3)'],
  time:'35–40 minutes',
  steps:[
  {id:'a3s1',title:'What’s a Boolean search?',blocks:[
   P(`The following text discusses Boolean operators. Despite their intimidating name, Boolean operators are nothing more than simple ‘hacks’ that can help us to navigate the academic and professional literature more efficiently.`,{instr:true,task:['reading']}),
   N('explain','What’s a Boolean search?',[
    P(`A Boolean search is a way to search databases, search engines and text corpora efficiently. This involves using a set of special words or symbols (Boolean operators) alongside your search terms. These operators help you to combine the search terms in smart ways, and narrow down your search.`),
    P(`**The three main Boolean operators:**`),
    L([`AND: This narrows your search by requiring both terms to appear (e.g., “classroom AND technology” finds results that include both words)`,`OR: This broadens your search by allowing either term to appear (e.g., "quiz OR test" finds results with either word)`,`NOT: This excludes a term you don't want (e.g., "immersion NOT bilingual" avoids results about bilingualism)`]),
    P(`You can find more operators in Appendix II. Using these operators helps you get more precise, relevant results instead of scrolling through hundreds of unrelated hits!`)]),
   {t:'quiz',id:'a3s1-ops',label:'Checking you can use the operators: will each search give you more or fewer results than the search "vocabulary" alone?',inline:true,items:[
    {q:'vocabulary AND games',options:['More','Fewer'],key:1},{q:'vocabulary OR lexis',options:['More','Fewer'],key:0},{q:'vocabulary NOT adults',options:['More','Fewer'],key:1}]},
   REV('Check your answers',[{t:'quizscore',of:'a3s1-ops'},OL([`Fewer: both words must appear.`,`More: either word can appear.`,`Fewer: results containing "adults" are removed.`]),
    P(`If you got any of these wrong, reread the three bullet points in the text and look at the examples in Appendix II before starting the quiz.`)],{gate:['a3s1-ops']})
  ]},
  {id:'a3s2',title:'Quiz: how efficient are your searches?',blocks:[
   P(`The following quiz helps you to reflect on how competent you are in identifying academic resources. How efficient are you in searching for information online?`,{instr:true,task:['reflection']}),
   N('note','Alternative version',[P(`You can answer the quiz here, or take the online version at [https://link.kostoulas.com/Realitea202](https://link.kostoulas.com/Realitea202). If you use the online version, read the explanations below afterwards; they cover the same topics.`)]),
   {t:'quiz',id:'a3s2-quiz',label:'Quiz',items:[
    {q:'When constructing an effective search statement for a literature review, which strategy is most likely to make your search results more relevant?',options:['Using only broad, general keywords without any Boolean operators.','Combining specific keywords with synonyms using Boolean operators and controlled vocabulary.','Relying solely on the database’s default search settings.','Using wildcard characters exclusively without Boolean operators.'],key:1},
    {q:'Why might you use quotation marks in a search query?',options:['To perform a wildcard search.','To retrieve results containing the exact phrase.','To exclude the phrase from results.','To indicate a search for related terms.'],key:1},
    {q:'Which of the following is the most effective search statement for finding articles about "The use of mobile apps in language learning for young learners"?',options:['Mobile apps language learning young learners.','Mobile apps OR language learning OR young learners.','"Mobile apps" AND "language learning" AND "young learners".','Mobile apps NOT language learning NOT young learners.'],key:2},
    {q:'Which of the following is a good way to adapt a search statement for a different database?',options:['Use the exact same search statement without making any changes.','Use only the keywords and ignore the Boolean operators.','Consider the database-specific features and adjust the search statement accordingly.','Use only the title of your research question as the search statement.'],key:2}]},
   REV('Show the answers and explanations',[
    {t:'quizscore',of:'a3s2-quiz'},
    P(`**Answers:** 1: b; 2: b; 3: c; 4: c`),
    P(`**1: b.** Combining specific keywords with synonyms (joined by OR) and using the database's own subject terms makes results both focused and complete. *a* is too broad: without operators, results may include many unrelated texts. *c* depends on settings that may not suit your question. *d* uses only one technique; wildcards (like the asterisk in Appendix II) are useful, but not enough on their own.`),
    P(`*What is "controlled vocabulary"?* Some databases label each record with a fixed list of subject terms, so that texts on the same topic can be found even if their authors used different words. If a database shows subject terms or descriptors next to a result, these can give you useful search terms.`),
    P(`**2: b.** Quotation marks keep words together as an exact phrase (see Appendix II). *a* describes the asterisk, not quotation marks. *c* describes NOT. *d* describes the opposite: quotation marks make a search stricter, not wider.`),
    P(`**3: c.** It keeps each phrase together and requires all three to appear. *a* leaves the search to the database's default settings, which vary. *b* uses OR, so it would find results about *any one* of the three topics. *d* excludes the very topics you are looking for. Option *c* is the best of the four, but not perfect: it would miss texts that say "mobile applications" or "children". Using OR for synonyms could help, for example: ("mobile apps" OR "mobile applications") AND "language learning" AND ("young learners" OR children)`),
    P(`**4: c.** Databases work differently. For example, the OASIS help note in Activity 4 explains that OASIS automatically searches for *any* of the words you type (an OR search), so a statement written for one database may behave differently in another. *a* ignores these differences. *b* loses the precision the operators give. *d* is usually too long and specific to work as a search statement.`),
    BR([`**4 correct:** continue to Step 3.`,`**3 correct:** reread the explanation for the question you missed.`,`**2 or fewer correct:** reread the Step 1 text and Appendix II, then try the quiz again before continuing.`],'What to do next')],{gate:['a3s2-quiz'],exportLabel:'Answers and explanations'})
  ]},
  {id:'a3s3',title:'Build better searches',blocks:[
   P(`Watch the video and answer the following questions.`,{instr:true,task:['video']}),
   SRC('Build better searches in Web of Science','Web of Science Training. (n.d.). *Build better searches in Web of Science* [Video]. YouTube.','https://www.youtube.com/watch?v=VgtN-mMkajg'),
   {t:'quiz',id:'a3s3-tf',label:'Are the following statements true or false?',inline:true,items:[
    {q:'Using the Boolean operator “AND” between keywords narrows your search results by requiring that all connected terms appear in each result.',options:['True','False'],key:0},
    {q:'Placing a phrase within quotation marks in a search query will search for the exact phrase, not just the individual words.',options:['True','False'],key:0},
    {q:'The operator “OR” is useful when you want to retrieve results that include at least one of several alternative keywords.',options:['True','False'],key:0},
    {q:'Using the operator “NOT” in your search statement will exclude results containing the term that follows it.',options:['True','False'],key:0},
    {q:'Effective search statements depend only on selecting the right keywords, and the structure or order of terms does not affect the results.',options:['True','False'],key:1}]},
   N('explain','Explanation',[P(`For extra help, take a look at Appendix II.`)]),
   REV('Show the answers',[{t:'quizscore',of:'a3s3-tf'},OL([
    `**True.** AND requires all connected terms to appear.`,`**True.** Quotation marks search for the exact phrase.`,`**True.** OR retrieves results with at least one of the terms.`,`**True.** NOT excludes results containing the term that follows.`,
    `**False.** The structure of a search statement matters. For example, Appendix II explains that parentheses group terms so that the search logic works as intended.`]),
    BR([`If you answered **statement 5** incorrectly, compare these two searches: *vocabulary AND games OR apps* and *vocabulary AND (games OR apps)*. The second one makes sure that every result is about vocabulary; the first may not, depending on how the database reads it.`,
     `If you answered **any of statements 1–4** incorrectly, return to the Step 1 text; these repeat its three main points.`])],{gate:['a3s3-tf'],exportLabel:'Answers'})
  ]}
 ]},

 /* ================= ACTIVITY 4 ================= */
 {id:'a4',title:'Selecting appropriate sources of information',
  helps:['Apply your search strategy in a range of databases and repositories.','Appraise the publications your searches return, using a consistent set of criteria.','Compare how different databases and repositories serve your particular needs.'],
  needs:['Internet access'],
  time:'40–60 minutes for one option; allow 20–30 minutes for each additional option',
  steps:[
  {id:'a4s1',title:'Try out your search query',blocks:[
   P(`Now it is time to try out your search query, in order to find answers to the question you created in Activity 2. You can try writing some variations of your search query in the space below. Writing a good search query will take some trial and error, and you will likely have to reformulate it several times before you narrow down the results. Even then, however, you will need to select which publications are most relevant to your needs. We will learn more about this by exploring the options below.`,{instr:true,task:['writing']}),
   N('explain','Explanation',[P(`You can use appropriate search techniques (e.g., quotation marks, Boolean operators) to refine your query and well-chosen keywords to make your results more precise.`)]),
   N('worked','Worked example (before your own attempt): search statements for the revised question from Activity 2',[TAB(['Version','Search statement','Why it was changed'],[
    ['1','mobile apps vocabulary young learners','First try, using the key terms from the question'],
    ['2','"mobile apps" AND vocabulary AND "young learners"','Results included many texts on other topics; phrases were kept together and all terms required'],
    ['3','("mobile apps" OR "mobile applications") AND vocabular* AND ("young learners" OR children)','Results were too few; synonyms were added with OR, and an asterisk used so that "vocabulary" and similar forms are included']])]),
   N('note','Your turn',[P(`Write your first search statement using the key terms you picked out in Activity 2, then run it in the database you choose in Step 2. Record each new version and why you changed it.`)]),
   GRID('a4s1-queries','Search query',[{h:'Version',w:70},{h:'Search statement',type:'text',w:260},{h:'Why you changed it',type:'text'}],[['1'],['2'],['3'],['4'],['5']],{addable:true}),
   N('branch','If your search is not working',[TAB(['What happens','What to try'],[
    ['**Too many results** (you cannot look through them)','Add another key term with AND; put phrases in quotation marks; use the filters (e.g. date, research area); remove an unwanted topic with NOT'],
    ['**Too few or no results**','Remove the least important term; add synonyms with OR; use an asterisk for word endings; remove quotation marks; check spelling; try a broader database'],
    ['**Results are about something else**','Check whether one of your terms has another meaning in other fields; use NOT to exclude that meaning; use a more specific phrase in quotation marks'],
    ['**The operators seem to be ignored**','Check the database\'s help or advanced search page; some databases (e.g. OASIS) treat words differently by default, so you may need quotation marks or filters instead'],
    ['**You have changed the statement three or more times without improvement**','Return to Activity 2 and check whether your question is too narrow or uses terms that authors rarely use']])]),
   SC('a4s1-sc',[`You have tried at least two versions of your search statement.`,`For each change, you can explain why you made it.`])
  ]},
  {id:'a4s2',title:'Choose a database and appraise a source',blocks:[
   P(`There are five options in this step. You may choose to engage with one or more of these options, depending on your strengths, interests and needs.`,{instr:true,task:['online']}),
   N('options','Choosing an option',[L([
    `If you want **short, non-technical summaries** of research on language learning and teaching → **Option 1 (OASIS)**`,
    `If your question is about **education more broadly** and you want a large collection → **Option 2 (ERIC)**`,
    `If you want to search **across many disciplines and types of publication** and you are prepared to find that some texts are not accessible → **Option 3 (Google Scholar)**`,
    `If you want to explore a **digital library of journal articles and books** across disciplines → **Option 4 (JSTOR)**`,
    `If you want to see what **one open-access journal** has published on your topic → **Option 5 (SSLLT)**`]),
    P(`If you are unsure, start with Option 1; it is designed for readers who are not specialists.`)]),
   N('worked','Worked example (before your own attempt): an appraisal',[
    P(`*The record below is **invented** for practice. It is not a real publication.*`),
    Q(`**Tablet apps and vocabulary learning in two primary EFL classrooms: A teacher's inquiry** (2019)\n\nSummary published in an online teacher research library.\n\nA primary school teacher describes using vocabulary apps with two classes of 9–10-year-olds over six weeks. Learners took vocabulary tests before and after, and the teacher recorded their comments. Scores improved in both classes, and most learners said they enjoyed the apps, although some found them distracting. The teacher discusses the role of short, focused app use.`),
    TAB(['What to consider?','Example answer'],[
     ['Focus','Vocabulary apps with young learners: close to the question, but about tablets in class rather than mobile apps in general'],
     ['Type of source','A teacher\'s account of their own classroom inquiry, published as a summary; not stated to be peer-reviewed'],
     ['Geographic focus','Not stated in the summary; the full text would need checking'],
     ['Timeliness','2019; apps change quickly, so specific apps may be out of date, but the general findings may still be useful'],
     ['Relevance','Partly relevant: same learner age and area of learning; only two classes in one school'],
     ['Credibility','Written by a practising teacher about their own classes; the library it appears in would need checking. A different kind of authority from a peer-reviewed study, not necessarily lower'],
     ['Accessibility','Summary freely available; full text availability not stated'],
     ['Evidence','Vocabulary tests before and after, and learners\' comments; small scale, no comparison group mentioned'],
     ['Originality','The point about distraction is new to this reader']]),
    P(`**Decision:** Keep, as a practical insight to compare with larger studies.`)],{collapsed:true}),
   N('branch','If you are unsure about a row',[L([
    `**Type of source:** look for words such as "journal", "volume", "report", "thesis", "conference" or "summary" in the record.`,
    `**Credibility:** look for the authors' affiliations and the name of the journal or publisher. If you cannot find any of these, note it; a source with no identifiable author or publisher needs extra caution.`,
    `**Timeliness:** an older source is not automatically out of date. Ask whether the topic has changed a lot since then.`,
    `**Evidence:** if the summary or abstract does not say how the conclusions were reached, write "not stated" and treat this as a reason for caution.`])]),
   BR([`If the source is **relevant but has weak evidence** → *maybe*: it may be useful for ideas but not for firm conclusions.`,
    `If it is **credible and has strong evidence but only partly relevant** → *maybe*: note which part is relevant.`,
    `If it is **not relevant to your question** → *reject*, however credible it is.`,
    `If you **reject every source** you appraise → return to Step 1 and check whether your search statement matches your question.`],'Deciding'),
   N('note','Now choose your option',[P(`Open the option you chose below. If you use more than one option, continue with the **Optional step** afterwards.`)])
  ]},
  {id:'a4o1',label:'Option 1',title:'Using OASIS',blocks:[
   P(`Visit the OASIS (Open Accessible Summaries in Language Studies) database using the links provided below. Then, use the search function to run a query that will bring up articles connected to your research question.`,{instr:true,task:['online']}),
   SRC('The OASIS Database','Open Accessible Summaries in Language Studies (OASIS).','https://www.oasis-database.org'),
   N('explain','Need help using the OASIS database?',[L([
    `Start by entering some search terms into the search box. OASIS automatically performs an OR search and searches for any words entered. For example, if you type “word1 word2” (without the quotation marks), this will bring search results including word1 OR word2 OR both.`,
    `You can also use quotation marks around a search term or phrase to find summaries that contain the exact words or phrases.`,
    `Refine your search results with the filters down the left of the screen. For example, you can search for all OASIS content with * and use Research Area filter to refine your search results.`])]),
   P(`Now, choose one summary that looks promising, and evaluate it with the criteria below.`,{instr:true,task:['reflection']}),
   ...OPTION_TAIL('a4o1')
  ]},
  {id:'a4o2',label:'Option 2',title:'Using ERIC',blocks:[
   P(`Visit the Education Resources Information Center (ERIC) database using the links below. Then, use the search function to run a query that will bring up articles connected to your research question.`,{instr:true,task:['online']}),
   SRC('Education Resources Information Center (ERIC)','ERIC database.','https://eric.ed.gov/'),
   N('explain','Need help using ERIC?',[P(`The video below has some advice on how to use ERIC efficiently.`)]),
   SRC('Searching eric.ed.gov','ERIC – Education Resources. (n.d.). *Searching eric.ed.gov* [Video]. YouTube.','https://www.youtube.com/watch?v=WkUxARnUHn4'),
   P(`Now, choose one article that looks promising, and evaluate it with the criteria below.`,{instr:true,task:['reflection']}),
   ...OPTION_TAIL('a4o2')
  ]},
  {id:'a4o3',label:'Option 3',title:'Using Google Scholar',blocks:[
   P(`Visit Google Scholar using the links below. Then, use the search function to run a query that will bring up articles connected to your research question.`,{instr:true,task:['online']}),
   SRC('Google Scholar','Google Scholar.','https://scholar.google.com'),
   N('explain','Need help using Google Scholar?',[P(`If you follow the link below, you will find a useful slideshow with advice on using Google Scholar efficiently.`)]),
   SRC('Advanced Google Scholar','Russell, D. M. (2017). *Advanced Google Scholar* [PowerPoint slides]. Google.','https://library.si.edu/sites/default/files/tutorial/pdf/advancedgooglescholar.pdf'),
   P(`Now, choose one book or article that looks promising. You may not be able to access it, but the abstract or snippet should help you appraise its relevance and credibility. Evaluate this source using the criteria below.`,{instr:true,task:['reflection']}),
   ...OPTION_TAIL('a4o3')
  ]},
  {id:'a4o4',label:'Option 4',title:'Using JSTOR',blocks:[
   P(`Using the links below, visit JSTOR, a database that preserves many forms of scholarly content. Then, use the search function to run a query that will bring up articles connected to your research question.`,{instr:true,task:['online']}),
   SRC('JSTOR','JSTOR.','https://www.jstor.org'),
   N('explain','Need help using JSTOR?',[P(`The video below has some advice on how to use JSTOR efficiently.`)]),
   SRC('Advanced search on JSTOR','JSTOR. (n.d.). *Advanced search on JSTOR* [Video]. YouTube.','https://www.youtube.com/watch?v=QK8_OW3lerQ'),
   P(`Now, choose one article that looks promising, and evaluate it with the criteria below.`,{instr:true,task:['reflection']}),
   ...OPTION_TAIL('a4o4')
  ]},
  {id:'a4o5',label:'Option 5',title:'Using a journal search function',blocks:[
   P(`Visit the website of *Studies in Second Language Learning and Teaching*, an open-access academic journal. Then, browse the archive or use the search function to run a query that will bring up articles connected to your research question.`,{instr:true,task:['online']}),
   SRC('Studies in Second Language Learning and Teaching (SSLLT)','*Studies in Second Language Learning and Teaching* (SSLLT).','https://pressto.amu.edu.pl/index.php/ssllt'),
   P(`Now, choose one article that looks promising and evaluate it using the criteria below.`,{instr:true,task:['reflection']}),
   ...OPTION_TAIL('a4o5')
  ]},
  {id:'a4opt',label:'Optional step',title:'Compare the databases',blocks:[
   P(`How easy did you find the process of formulating your search query? How efficient was the process and how relevant were the search results obtained? Complete the following comparison table, using a tick (✓) for positive assessments and a cross (X) for negative assessments, tailored to your individual research needs.`,{instr:true,task:['reflection','discussion']}),
   N('note','If you used only one option',[P(`If you used more than one of the options, this step can be done as a discussion task with a colleague. If you used only one option, complete the table for that one database; this gives you evidence for Activity 5. If you cannot tell whether a database has a feature, choose "?" and write where you looked in your notes below.`)]),
   GRID('a4opt-grid','Comparison table',[{h:'Feature',w:170},...['OASIS','ERIC','Google Scholar','JSTOR','SSLLT'].map(h=>({h,type:'select',options:['','✓','X','?']}))],[
    [{group:'Search capabilities'}],['Advanced search'],['Boolean operators'],['Phrase searching'],['Easy to use'],
    [{group:'Content'}],['Peer-reviewed'],['Publication dates'],['Full-text access'],['Accuracy and currency'],
    [{group:'Usability'}],['User interface'],['Accessibility'],['Free access'],['Help and support'],
    [{group:'Special features'}],['Citation index'],['Citation export'],['Cited by'],['Related articles']]),
   SUB('Where to look for each feature',[TAB(['Feature','What it means','Where to check'],[
    ['Advanced search','A search form with separate boxes and options','A link near the search box, often labelled "Advanced"'],
    ['Boolean operators','AND, OR and NOT work as described in Activity 3','Try vocabulary AND games, then vocabulary OR games; the number of results should differ'],
    ['Phrase searching','Quotation marks keep words together','Search with and without quotation marks and compare'],
    ['Peer-reviewed','Results have been checked by other experts before publication','A filter or label on results'],
    ['Full-text access','You can read the whole text, not only the abstract','A link to a PDF or full text next to results'],
    ['Help and support','Guidance on using the database','A "Help" or "FAQ" link (see also Additional reading)'],
    ['Citation export','Download a reference in a format you can store or use','A "Cite" or "Export" button'],
    ['Cited by','A list of later publications that refer to this one','A "Cited by" link under a result'],
    ['Related articles','Suggestions for similar publications','A "Related" or "Similar" link'],
    ['Citation index','The database records which publications cite which','Usually visible through counts such as "Cited by"']])]),
   TXT('a4opt-where','Notes on features you could not check, and where you looked',{rows:2}),
   N('note','Instead of the discussion',[P(`Write three sentences.`)]),
   TXT('a4opt-first','1. The database you would use first for a question like yours, and why',{rows:2}),
   TXT('a4opt-feature','2. One feature you did not know about before and how you could use it',{rows:2}),
   TXT('a4opt-other','3. One database you would use for a *different* kind of question, and what that question might be',{rows:2})
  ]}
 ]},

 /* ================= ACTIVITY 5 ================= */
 {id:'a5',title:'Self-assessment task',
  helps:['Reflect on your learning progress.','Build confidence in research skills.','Become more aware of how you go about locating information.'],
  needs:['A recent research question or topic you explored (for example, the question you developed in Activity 2)'],
  time:'30–45 minutes',
  steps:[
  {id:'a5s1',title:'Your searches',blocks:[
   P(`Complete the table below with examples from your own searches during this module:`,{instr:true,task:['reflection']}),
   N('worked','Worked example',[TAB(['Search task','Keywords used','Boolean operators','Database/platform','Outcome (effective or not?)'],[
    ['*Finding research on mobile apps and vocabulary with young learners*','*mobile apps, mobile applications, vocabular\\*, young learners, children*','*AND, OR, quotation marks, asterisk*','*(the database used)*','*Partly effective: version 3 found relevant results, but only one source was kept after appraisal*']])]),
   GRID('a5s1-grid','Your searches',[{h:'Search task',type:'text',w:150},{h:'Keywords used',type:'text'},{h:'Boolean operators',type:'text'},{h:'Database/platform',type:'text'},{h:'Outcome (effective or not?)',type:'select',options:['','Effective','Partly effective','Not effective']}],[[],[]],{addable:true}),
   N('explain','Deciding whether a search was effective',[L([
    `**Effective:** among the first results you looked at, several were relevant, and you kept at least one source after appraisal.`,
    `**Partly effective:** you found relevant results, but only after several changes, or none of them passed your appraisal.`,
    `**Not effective:** most results were unrelated, or you found nothing you could use.`])]),
   TXT('a5s1-next','For each "partly" or "not effective" search, one thing you would try next time (use the table in Activity 4, Step 1)',{rows:3})
  ]},
  {id:'a5s2',title:'Reflect on your experience',blocks:[
   P(`Reflect on your experience locating professionally relevant knowledge by responding to the prompts.`,{instr:true,task:['reflection']}),
   TXT('a5s2-confidence','In what ways have the resources in this module improved your confidence in locating and selecting publications that are relevant to your needs?',{rows:4}),
   TXT('a5s2-inform','While engaging with the resources in this module, you came across several publications and were asked to consider their relevance to your teaching. How will the professional knowledge in these publications inform your future practice?',{rows:4}),
   SC('a5s2-sc',[`You have compared your confidence now with what you wrote in Activity 1, Step 1.`,`You have named at least one specific technique, database or criterion you learnt about in this module.`,`For the second prompt, you have named at least one publication and one specific way it could inform your practice (or explained why none of them could).`],'To make your reflection specific, check that')
  ]},
  {id:'a5s3',title:'Self-assessment with the Framework',blocks:[
   P(`Read Section B1 (‘Locating appropriate sources of information’) of the ReaLiTea Research Literacy Framework. Which set of descriptors best describes you? Are there any areas where you would like to develop? If so, how do you plan to do this?`,{instr:true,task:['reflection']}),
   N('worked','How to assess yourself',[OL([
    `**Start at the lowest level.** For each descriptor (B1.1, B1.2, B1.3), read the Initial descriptor first and move up only if it is true of you. Each level builds on the one below it.`,
    `**Use the placement cues** in the first table below. The levels in B1 differ mainly in who decides the scope of a search and the criteria for choosing sources.`,
    `**Look for evidence from this module** (second table below).`,
    `**Record the support you used.** In this module, much of the structure came from the materials: the worked examples, the FINER checklist and the appraisal table. When you record evidence, note this, for example: "appraised a source using the module's criteria table".`,
    `**Check for over-claiming and under-claiming.** *Over-claiming:* have you chosen a level because you *understand* how to do something, or because you have *done* it, more than once, with the kind of support described at that level? *Under-claiming:* do you already search or filter information in other parts of your life or work (e.g. choosing teaching materials online) in ways that match a descriptor?`,
    `**Plan.** For one descriptor, write the next level's descriptor as your goal, and one concrete step towards it (e.g. "Next time: create your own criteria before searching, and compare them with the module's table").`])]),
   TAB(['Descriptor','Cue question'],[
    ['B1.1 Searching for information','Who defined the scope of your search: someone else (as in the worked example), you with help, or you on your own, based on your interests?'],
    ['B1.2 Filtering information','Who set the criteria you used: the module\'s table, criteria you created with others, or criteria you created yourself for your interests?'],
    ['B1.3 Accessing information','Could you only open what was freely available, or did you use other ways to reach texts?']]),
   TAB(['Descriptor','Where you may find evidence'],[
    ['B1.1','Your question (Activity 2); your search statements and changes (Activity 4, Step 1); your table in Step 1 of this activity'],
    ['B1.2','Your appraisal and keep/maybe/reject decision (Activity 4, Step 2)'],
    ['B1.3','The Accessibility row of your appraisal; your notes on free and paid sources (Activity 1, Step 3)']]),
   GRID('a5s3-evidence','Your evidence record',[{h:'Descriptor',w:150},{h:'Level you can evidence',type:'select',options:['','Initial','Emerging','Advancing','Established','Not sure yet']},{h:'Evidence from this module',type:'text',w:200},{h:'Support you used',type:'text'}],[
    ['B1.1 Searching for information'],['B1.2 Filtering information'],['B1.3 Accessing information']]),
   TXT('a5s3-develop','Areas where you would like to develop, and how you plan to do this',{rows:4}),
   N('resist','What this cannot replace',[P(`The Framework recommends a validating conversation about your self-assessment. If you later have the chance, share your self-assessment with a mentor, teacher educator or colleague with relevant expertise.`)]),
   N('note','Well done',[P(`You've successfully navigated Module 2 and built a strong foundation! Now, get ready to take your skills even further in Module 3 – exciting new insights and practical applications await!`)])
  ]}
 ]}
 ],

 extras:[
  {id:'appendix1',title:'Appendix I: Where to find useful publications',blocks:[
   TAB(['Name','Type','Description','URL'],[
    ['OASIS','Research Database','The Open Accessible Summaries in Language Studies (OASIS) is a publicly available database that provides one-page, non-technical summaries of peer-reviewed research articles in the fields of language learning, language teaching and multilingualism.','[https://www.oasis-database.org](https://www.oasis-database.org)'],
    ['ERIC','Research Database','ERIC (Education Resources Information Center) is a comprehensive online database that provides access to a vast collection of academic literature in the field of education.','[https://eric.ed.gov/](https://eric.ed.gov/)'],
    ['JSTOR','Research Database','JSTOR (Journal Storage) is a digital library that provides access to thousands of academic journal articles, books and primary sources across various disciplines, including education, linguistics and TESOL.','[https://www.jstor.org](https://www.jstor.org)'],
    ['Google Scholar','Search Engine','Google Scholar is a freely accessible search engine that indexes scholarly articles, books, conference papers, theses, dissertations and patents across various disciplines.','[https://scholar.google.com](https://scholar.google.com)'],
    ['Scopus','Citation database','Scopus is a large, multidisciplinary abstract and citation database of peer-reviewed research literature. It is maintained by Elsevier and covers a wide range of disciplines, including education, linguistics and TESOL.','[https://www.scopus.com](https://www.scopus.com)'],
    ['Directory of Open Access Repositories','Repository','The Directory of Open Access Repositories (OpenDOAR) is an authoritative global directory of open access repositories, providing free access to academic and research outputs.','[https://v2.sherpa.ac.uk/opendoar](https://v2.sherpa.ac.uk/opendoar)'],
    ['University Institutional Repositories','Repository','University Institutional Repositories (IRs) are digital platforms or archives managed by universities that store and provide access to the academic outputs and research produced by their faculty, students and staff.','e.g., [https://ora.ox.ac.uk](https://ora.ox.ac.uk)'],
    ['Academia.edu','Academic Network','Academia.edu is an academic networking platform where researchers and scholars can share, discover and access academic papers, preprints and conference proceedings.','[https://www.academia.edu](https://www.academia.edu)'],
    ['ResearchGate','Academic Network','ResearchGate is a professional social networking platform designed for researchers, academics and scientists to share, discover and discuss research.','[https://www.researchgate.net](https://www.researchgate.net)'],
    ['*Studies in Second Language Learning and Teaching*','Academic Journal','Studies in Second Language Learning and Teaching (SSLLT) is an academic journal that focuses on research related to the teaching and learning of second languages.','[https://pressto.amu.edu.pl/index.php/ssllt](https://pressto.amu.edu.pl/index.php/ssllt)'],
    ['*English Language Teacher Education and Development (ELTED) Journal*','Academic Journal','English Language Teacher Education and Development Journal is a well-established, open access, peer-reviewed journal for the worldwide ELT/TESOL community.','[http://www.elted.net/](http://www.elted.net/)'],
    ['TESOLGraphics','Infographics','TESOLGraphics focuses on providing visual materials that support English language teaching and learning.','[https://www.tesolgraphics.com/](https://www.tesolgraphics.com/)'],
    ['TESOLAcademic channel','Videos','The TESOL Academic Channel is a YouTube channel that offers access to various academic resources, webinars and presentations for English language teaching professionals.','[https://www.youtube.com/@TESOLacademic](https://www.youtube.com/@TESOLacademic)'],
    ['TESOL Talks Podcast','Podcast','The TESOL Talks Podcast is a podcast series for English language educators.','[https://tinyurl.com/mp3mtk6s](https://tinyurl.com/mp3mtk6s)'],
    ['World TESOL Academy','Blog','The World TESOL Academy Blog features articles, resources and insights on various topics related to Teaching English to Speakers of Other Languages.','[https://www.worldtesolacademy.com/blog/](https://www.worldtesolacademy.com/blog/)']])]},
  {id:'appendix2',title:'Appendix II: Boolean operators',blocks:[
   TAB(['Operator','Description','Example','Instructions'],[
    ['AND','Narrows search results by retrieving only records that contain all specified keywords.','language AND technology','Use AND when you need every term in your query to appear in the results.'],
    ['OR','Broadens search results by retrieving records that contain at least one of the specified keywords.','education OR pedagogy','Use OR to capture a wider range of documents when searching for synonyms or related terms.'],
    ['NOT','Excludes records containing specific keywords, filtering out irrelevant information.','technology NOT smartphones','Use NOT to eliminate unwanted topics from your search results.'],
    ['Parentheses: ()','Groups terms or subqueries to control the logic and order of operations in complex search queries.','(language acquisition) AND (young learners)','Use parentheses to group terms and operators, ensuring that your search logic executes as intended.'],
    ['Quotation marks: “”','Searches for an exact phrase by preserving the order and proximity of the enclosed words.','"task-based learning"','Use quotation marks when you need to retrieve documents containing the exact phrase you specify.'],
    ['Asterisk: \\*','Acts as a wildcard or truncation symbol, matching multiple word endings or variations of a root word.','technolog\\* (retrieves technology, technologies, technological, etc.)','Use the asterisk to capture different word endings or variations in your search query.']])]}
 ]
};
})();
