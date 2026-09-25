/* Module 5 content — v.4 module text + self-study scaffolding (Module_5_self-study_redesign.md), second person */
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
const PROV=(text)=>N('provisional','Still in preparation',[P(text)]);

window.RLT_MODULE = {
 id:'m5', storageKey:'rlt-m5-selfstudy-v1',
 number:5, title:'Alternative ways of reading research in language education',
 audience:['**Pre-service and in-service teachers** of second, foreign and additional languages, working on their own and at their own pace.',
  'It suits you if you want to explore formats beyond the standard research article (comics, poems, videos), experiment with creative forms yourself and reflect on decolonial perspectives and your own positionality.',
  'Like Module 4, it asks you to read publications critically. If the Initial descriptors in Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) describe you best, you will get more out of it with a mentor, tutor or colleague.'],
 citation:'The ReaLiTea Project. (2026). *Alternative ways of reading research in language education*. Available online: [https://www.realitea.info/alternative](https://www.realitea.info/alternative).',
 facet:'Using published professional knowledge',
 portfolioSummary:'Completed ReaLiTea Module 5, Alternative ways of reading research in language education, in self-study mode: evaluating alternative formats for sharing research, re-presenting an abstract in a creative form, and reflecting on decolonial perspectives and researcher positionality.',

 intro:[
  H('Summary'),
  P(`This module aims to challenge assumptions about what research is (or should be) like. To that end, we will work with publications that are presented in formats other than the usual linear structure of a research article; in fact, we will also work with ways of disseminating knowledge that go beyond text. As we do so, we will critically evaluate how useful such ways of producing and sharing professional knowledge are, and we will learn to position ourselves critically as readers (and producers!) of professional knowledge experimenting with alternative modalities. In this module we will also critically reflect on the relative position of western forms of knowledge in language education, and we will work towards raising our awareness of decolonial perspectives in linguistics and education.`),
  H('Introduction'),
  P(`Welcome to the fifth module of the ReaLiTea learning resources for developing your ability to engage with the knowledge base of language education.`),
  P(`Like Module 4, this module aims to develop your ability to critically approach the publications you read. In this module however, we will focus on expanding our reflection strategies, creativity and imagination as we engage with various forms of published professional knowledge.`),
  P(`Upon completing this module, you will have developed critical reflection skills that will help you (a) develop an awareness of a non-Western-centric approach to research, (b) explore alternative perspectives on scholarship, including the form, development and dissemination of professional knowledge. Ultimately, the goal is to gain a different understanding of how knowledge is created.`),
  P(`This module consists of three activities. In the first Activity, we discuss various alternative methods for writing and sharing scientific knowledge. In Activity 2 we experiment more actively with producing and appraising alternative publications. Finally, in Activity 3, we are introduced to the concept of decolonisation, which enriches our critical perspective and encourages reflection on how we apply research in teaching.`),
  P(`Each activity is divided into several steps. You can engage with these activities at your own pace, spending more time on the ones that are closer to your learning priorities. To help you navigate through the activities in the Module, we have provided information about the aims of each activity, as well as the resources and time that you will need to complete it. That said, we recommend that you follow the sequence of steps and activities as presented in the module.`),
  P(`All the tasks in the module can be done individually. However, you might find it useful to work together with colleagues, onsite or in online learning communities. This will help you share your perspective and learn from your colleagues’ insights. In the materials, we have indicated which tasks are best suited for discussion and pair work.`),
  P(`Sometimes you might come across an activity that has multiple options. You can try out all the options provided, or, if you are working with colleagues, you might want to divide the work among you.`),
  P(`We hope that these activities will help you develop more critical and alternative approaches to selecting the literature, doing and discussing research. We hope that this different point of view encourages more inclusive approaches to teaching language, as well. If you are ready, let's begin!`),
  H('Intended learning outcomes'),
  P(`When you have completed this module, you will be able to…`),
  L([`**Identify and describe conventional and alternative ways** of communicating professional knowledge in language education (e.g., text, poetry, comics, video).`,
     `**Critically evaluate** the effectiveness and scholarly value of different formats for sharing research.`,
     `**Experiment with creative forms** of expression to re-present academic findings in alternative modalities and reflect on their affordances and limitations.`,
     `**Position yourself critically as a reader and producer** of professional knowledge, with awareness of decolonial perspectives and the role of researcher positionality.`]),
  H('Resources needed'),
  L([`Internet access`,`Headphones`,`Imagination and creativity`,`The ReaLiTea Research Literacy Framework`]),
  H('Using these materials'),
  N('note','Working through this module on your own',[
   P(`This version of the module includes support that a mentor or tutor would otherwise provide. Most steps follow the same sequence: something to think about before you start, a worked example where the task is creative or unfamiliar, your own attempt, a self-check and guidance on what to do next. If you work more independently, you can go straight to the task and use the checks afterwards.`),
   P(`The self-checks help you review your own work. They are not tests of your level: the ReaLiTea Research Literacy Framework is descriptive rather than evaluative.`),
   P(`Some tasks were designed as discussions or ask you to share your work. In this version they include an individual alternative, and sharing is optional. If you have access to a colleague or to the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community), you can still use the discussion options.`),
   P(`A few parts of this module depend on resources that are still being reviewed. They are clearly marked **Still in preparation**, and the parts still to be completed appear in square brackets.`)]),
  N('note','Time',[P(`The support in this version adds reading and self-checking time to every step, so allow more time than the figures given for each activity. Activity 3 in particular includes listening to a podcast, reading a full article, analysing a second article and a creative task; you may want to spread it over more than one session.`)]),
  {t:'legend'}
 ],

 activities:[
 /* ================= ACTIVITY 1 ================= */
 {id:'a1',title:'Variations on the standard publication format',
  helps:['Reflect on non-linear ways of reading / writing / interpreting scientific knowledge/research','Expand your creative tools repertoire for reading/ writing/ interpreting/ producing scientific knowledge','Critically assess alternative methods of writing/producing scientific knowledge.'],
  needs:['PC and internet access (for Steps 2 and 4)','Helpful colleagues (for step 5, optional)','Imagination & creativity'],
  time:'60 minutes',
  steps:[
  {id:'a1s1',title:'How are academic texts written?',blocks:[
   P(`Reflect on how academic texts are written. To what extent does the production of academic texts align with the practical needs of language teachers? To what extent can an academic publication be relevant to all the contexts where languages are taught and learnt? Would it be possible to communicate professional knowledge in other ways?`,{instr:true,task:['reflection']}),
   N('note','Before you start',[P(`These questions don't have a single right answer. What matters is that your response is grounded in academic texts you have read rather than in general impressions. Before you write, choose one academic text you have read in full (an article, a chapter or a dissertation) and keep it in mind as you work through the questions.`)]),
   N('explain','Breaking the questions down',[L([
    `**How academic texts are written:** Who was your text written for? What did you need to know already to follow it? Which parts did you read closely and which did you skip?`,
    `**Alignment with teachers' practical needs:** What would a teacher need from this text in order to change something in their classroom? Did the text provide it?`,
    `**Relevance across contexts:** Where was the research carried out? What would need to be similar about your context for the findings to apply to it?`,
    `**Other ways of communicating:** If the authors had five minutes to share this knowledge with teachers, what form might they choose?`])]),
   TXT('a1s1-text','The academic text you have in mind',{rows:1}),
   TXT('a1s1-reflection','Your reflection',{rows:8}),
   REV('Show a model reflection',[
    P(`*One possible response, based on an imagined article:*`),
    Q(`The last article I read in full was a study of teacher feedback on student writing. It was written mainly for other researchers: the literature review and methodology took up more than half of the text and the practical implications were covered in two paragraphs at the end. As a teacher, those two paragraphs were what I needed, but I could only decide whether to trust them by reading the methods section, which assumed statistical knowledge I don't fully have. The study was carried out with university students in one country, so I'm not sure how far it applies to my lower-secondary classes. I can imagine the same findings shared as a short video showing examples of feedback, or as a one-page summary for teachers. Something might be lost, though: the detail about how the data were collected is what allowed me to judge how far to trust the claims.`,`Invented example of a teacher's reflection`)],{gate:['a1s1-reflection'],exportLabel:'Model reflection'}),
   SC('a1s1-sc',[`You referred to at least one specific text you have read, not to academic writing in general.`,`You considered who academic texts are written for and how that shapes them.`,`You noted ways in which academic texts meet teachers' needs as well as ways in which they don't.`,`You compared the context of the research with contexts you know.`,`You suggested at least one other way of communicating the knowledge and noted something that might be lost as well as gained.`]),
   BR([`If your response was mostly critical of academic texts, ask what academic conventions (such as describing methods in detail) make possible. You come back to this question in Step 2.`,
    `If your response was mostly positive, ask whether a colleague with less experience of reading research would find the text as accessible as you did.`,
    `If you couldn't think of a specific text, skim ahead to Kubota (2022) in Activity 3, Step 3, use it for this reflection and return to the rest of Activity 1 afterwards.`])
  ]},
  {id:'a1s2',title:'Dance Your PhD',blocks:[
   P(`Watch the video “Dance Your PhD 2022” by following the link below. Do you think that it falls under the definition of an academic “text”? Is it effective in communicating content? What is gained and what is lost by communicating knowledge in this way?`,{instr:true,task:['video']}),
   SRC('Dance Your PhD 2022: Active learning','Senka, 707. (2022, January 27). *Dance your PhD 2022 (social sciences winner): Active learning* [Video]. YouTube.','https://www.youtube.com/watch?v=aENPi77v5lY'),
   N('note','Before you watch',[P(`The quotation marks around "text" suggest the word is being used in a broader sense than words on a page. You don't need a formal definition. Instead, keep these working questions in mind:`),
    L([`Does the video communicate a claim or finding based on research?`,`Could you identify the research topic from the video alone?`,`Could someone refer back to it, cite it or build on it?`,`Who seems to be the intended audience?`]),
    P(`Also decide *effective for whom* before you watch: for you as a language teacher, for a researcher in the field or for a general viewer. Your judgement may differ for each.`)]),
   CH('a1s2-for','Effective for whom?',['','For you as a language teacher','For a researcher in the field','For a general viewer']),
   GRID('a1s2-notes','While you watch: notes in two columns (these become your gains and losses)',[{h:'What you understood from the video',type:'text'},{h:'What you couldn\'t tell from the video',type:'text'}],[[],[],[]],{addable:true}),
   TXT('a1s2-text','Does it fall under the definition of an academic “text”? Why, or why not?',{rows:3}),
   TXT('a1s2-effective','Is it effective in communicating content?',{rows:3}),
   TXT('a1s2-gained','What is gained and what is lost by communicating knowledge in this way?',{rows:3}),
   REV('Show a model answer',[
    N('model','One of many possible responses',[P(`This is one possible response, not the correct answer. The questions ask for your judgement, and a well-reasoned response could reach different conclusions. Compare the reasoning, not only the conclusions.`)]),
    P(`**About the video.** *Active learning* was the social sciences winner of the 2022 Dance Your Ph.D. contest, run by the journal *Science*, in which researchers explain their doctoral research through dance. It interprets Senka Žižanović's doctoral research at the University of Zagreb on active learning as a didactic-methodical paradigm of contemporary teaching.`),
    P(`**Is it an academic "text"?** Partly. It is not a text in the narrow sense of words on a page, but it communicates doctoral research, it has an identifiable topic and it was selected by a scientific journal as a way of sharing research. However, it would be hard to cite a specific finding from it, check how the research was carried out or build on it in the way a reader can with an article. It is best described as an academic text in a broad sense: a companion to the thesis rather than a replacement for it.`),
    P(`**Is it effective, and for whom?** For a language teacher, it works well as an invitation: it turns an abstract idea about teaching into something visual and memorable, and it can make viewers curious about the research behind it. It is less effective at showing what active learning looks like in a particular subject, what evidence supports it or when it works best. A researcher in the field would probably learn little that is new, while a general viewer might find it the most engaging format of all.`),
    P(`**What is gained and what is lost?** Gained: attention, emotional engagement, memorability, a sense of the researcher as a person, and access for viewers who would never open a thesis. Lost: the research questions, the design, the evidence behind the claims, the limitations and nuance. Viewers also have to interpret the movement, so two people may take away different messages from the same video.`),
    N('note','Make your own answer specific',[P(`This response discusses the format in general terms. In your own answer, point to at least one specific moment in the video that supports your judgement.`)])],{gate:['a1s2-text','a1s2-gained'],exportLabel:'One possible response'}),
   SC('a1s2-sc',[`You gave a reasoned position on whether the video is a "text", not only yes or no.`,`You said who it is effective for.`,`You named at least one gain and at least one loss.`,`At least one of your points is based on something specific in this video, not on videos in general.`]),
   BR([`If you decided it is *not* an academic text because it uses few or no words, look at the table in Step 3, which lists graphics, podcasts and comics as possible formats. Is your idea of "text" narrower than the module's?`,
    `If you decided it *is* an academic text, check whether you could state the research finding in one sentence from the video alone. If you couldn't, consider whether the video works on its own or only alongside a written publication. (Illingworth makes a similar suggestion about poetry in Activity 2, Step 2.)`,
    `If you listed only gains or only losses, rewatch a short section and look specifically for the other.`])
  ]},
  {id:'a1s3',title:'Ways of disseminating knowledge',blocks:[
   P(`Would you consider the following methods of **disseminating knowledge** professionally useful? If you have encountered publications in these formats, consider sharing them with colleagues or posting about them in our Virtual Community of Practice.`,{instr:true,task:['writing']}),
   N('note','Before you start',[P(`"Professionally useful" can mean different things. For each format, decide what you think it could be useful for; there may be more than one purpose: learning about research findings; deciding whether to try something in your teaching; sharing knowledge with colleagues, parents or learners; your own professional development.`),
    P(`Tick the box if you think the format is professionally useful and leave it empty if you don't. In the Example column, note a specific example you have come across.`)]),
   GRID('a1s3-grid','Methods of disseminating knowledge',[{h:'',w:110},{h:'Yes / No',type:'check',w:70},{h:'Useful for…',type:'text'},{h:'Example',type:'text'}],[
    ['**Graphics**'],['**Blog post**'],['**Video**'],['**Podcast**'],['**Short Film**'],['**Poem**'],['**Comics**']]),
   SUB('If you can\'t think of an example',[
    P(`Several of these formats appear later in this module. You can note them now and replace or add to them once you have found examples of your own.`),
    TAB(['Format','Example in this module'],[
     ['Graphics','—'],['Blog post','Salmons (2023), *Positionality and data collection* (Activity 3, Step 5); *Women\'s Journeyscapes* (Additional reading)'],['Video','*Dance Your PhD 2022: Active learning* (Activity 1, Step 2)'],['Podcast','DECOLAB/UNTO, *Decolonising Research Ethics* (Activity 3, Step 2)'],['Short film','—'],['Poem','Illingworth\'s (2016) poem abstract (Activity 2, Step 2)'],['Comics','Kara and Jackson (2018), *Conversation with a purpose* (Activity 2, Step 1)']]),
    P(`For graphics and short films, search online for a topic you're interested in together with the format (e.g. "[topic] infographic research"). Before noting an example, check that it is based on research — for instance, that it names or links to a study.`)]),
   SC('a1s3-sc',[`You made a decision for every format, even if it was tentative.`,`For at least three formats, you noted what they would be useful for.`,`For every format you ticked, you looked for a specific example.`,`For at least one format you didn't tick, you asked whether it could be useful for a different purpose or audience.`]),
   BR([`If you ticked every format, choose the one you would be least likely to use in practice and note why.`,`If you ticked very few, ask whether your reasons concern the format itself or the particular examples you have seen.`]),
   N('note','Sharing (optional)',[P(`If you can, share one or two of your examples with colleagues or post about them in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community). If you're working alone, keep your completed table: it is the starting point for your library in Step 5.`)])
  ]},
  {id:'a1s4',title:'Autoethnography',blocks:[
   P(`The links below will take you to an article by Al-Jawad et al. (2024), who talk about autoethnography as a way of generating knowledge. Autoethnography involves the systematic study of one’s own practice (e.g., when a teacher collects data about their work to better understand their professional context). Read the abstract and think about the data the authors use (not just statistics and interview extracts). How can these provide us with insights into their professional lives?`,{instr:true,task:['reading']}),
   SRC('Creating comics, songs and poems to make sense of decolonising the curriculum: A collaborative autoethnography patchwork','Al-Jawad, M., Chawla, G., & Singh, N. (2024). Creating comics, songs and poems to make sense of decolonising the curriculum: A collaborative autoethnography patchwork. *Medical Humanities, 50*(1), 1–11.','https://mh.bmj.com/content/50/1/1'),
   N('note','Before you read',[P(`Read the abstract with these questions in mind. The abstract is free to read; the full article may need a subscription.`)]),
   TXT('a1s4-q1','1. What did the authors create or collect as data?',{rows:2}),
   TXT('a1s4-q2','2. How is this different from statistics or interview extracts?',{rows:2}),
   TXT('a1s4-q3','3. What might this kind of data show about the authors’ professional lives that statistics or interviews might not?',{rows:2}),
   TXT('a1s4-q4','4. The title describes the study as a *collaborative* autoethnography: whose practice was studied and by whom?',{rows:2}),
   REV('Show a model answer',[
    N('model','One of many possible responses',[P(`This is one possible response, based on the article's abstract. Other readers will notice different things, especially in answer to question 3. Compare the reasoning, not only the content.`)]),
    OL([`**What did the authors create or collect as data?** Comics, poems and a song, together with written reflections and records of their conversations. They combine these into what they call a "patchwork text".`,
        `**How is this different from statistics or interview extracts?** The authors produced these data themselves, about their own experience, rather than collecting responses from other people and reducing them to numbers or selected quotations. The data are creative and personal, and the authors interpret them together.`,
        `**What might this kind of data show?** The abstract describes decolonising the curriculum as complex work that can do harm as well as good, can lead educators to question their personal and political identities and motives, and can be discouraging. It notes that surveys and toolkits can help people start this work but say little about how to keep it going. Comics, poems and songs can capture how the work *feels* (doubt, discomfort, connection, joy) and the identity questions it raises, which a survey response would struggle to express. The authors present the arts as adding meaning, connection and joy, and they frame their work as a form of collective resistance.`,
        `**Whose practice was studied, and by whom?** Three medical educators at Brighton and Sussex Medical School in the UK studied their own practice together. In a collaborative autoethnography, each of them looks at the shared experience through the perspectives of the others.`]),
    P(`**A question you might ask:** how can a reader judge the trustworthiness of a comic or a song as research data? The abstract suggests that the authors hope readers will find connections with their own practice, which is a different aim from proving a general claim.`)],{gate:['a1s4-q1','a1s4-q3'],exportLabel:'One possible response'}),
   SC('a1s4-sc',[`You identified what the data were, using the abstract.`,`You explained how they differ from statistics and interview extracts.`,`You suggested at least one insight into the authors' professional lives that this kind of data offers.`,`You noted at least one question or limitation (e.g. how would a reader judge the trustworthiness of a poem as data?).`]),
   N('note','Making the connection to your own practice',[P(`The article was published in *Medical Humanities*, so its authors' professional context may differ from yours. To bring the idea closer to your own work, ask: if you studied your own teaching autoethnographically, what could you create as data? For example, a comic strip of a difficult moment in a lesson or a short poem written at the end of each teaching week.`)]),
   TXT('a1s4-own','One idea for data you could create about your own teaching',{rows:2}),
   BR([`If the abstract said little about the data, skim the full article for the sections where the data are presented.`,`If you're unsure whether creative work can count as research data, note your doubt and return to it in Activity 2, Step 2, where the question of what is "scholarly" comes up again.`])
  ]},
  {id:'a1s5',label:'Step 5',title:'Extension: a library of multimodal publications',blocks:[
   P(`Create a list of publications about language teaching and learning where multimodality and the arts play an important role. Share your growing library with other teachers.`,{instr:true,task:['writing']}),
   N('explain','To share resources you can curate…',[L([`A shared online document`,`A cloud-based drive`,`A discussion board or forum`,`A shared Zotero library`])]),
   N('note','Before you start: what to include',[P(`Include a publication in your library if:`),
    L([`it is about language teaching and learning, **and**`,`multimodality or the arts play an important role in it — either in *how* the knowledge is communicated (e.g. a comic, a poem, a video) or in *what* the research is about (e.g. drama or music in language classes).`]),
    P(`If an item meets only one of these criteria, mark it as "Related" rather than including it in the main library.`)]),
   N('worked','Worked example: an inclusion decision',[P(`Kara and Jackson (2018), *Conversation with a purpose*, is a comic, so multimodality clearly plays an important role in how it communicates. However, it is about interviews as a research tool rather than about language teaching and learning. It meets only one criterion, so it goes in the "Related" section rather than in the main library.`)]),
   N('note','Starting points',[P(`Begin with the examples in your Step 3 table and add to the library as you work through Activities 2 and 3.`)]),
   GRID('a1s5-library','Your library',[{h:'Reference (APA 7)',type:'text',w:220},{h:'Format',type:'text'},{h:'Role of multimodality or the arts',type:'text'},{h:'Why you included it',type:'text'},{h:'Where you found it',type:'text'},{h:'Section',type:'select',options:['','Main library','Related']}],[[],[],[]],{addable:true}),
   SC('a1s5-sc',[`Each entry has a reference full enough for you to find the item again.`,`For each entry, you can say what role multimodality or the arts play.`,`You have separated items that meet both criteria from those that meet only one.`,`You have opened each link and checked that the item exists and is what you think it is.`]),
   N('note','Sharing (optional)',[P(`If you can, share your library using one of the options above. If you're working alone, keep it in a format you could share later; the Word export includes it.`)])
  ]}
 ]},

 /* ================= ACTIVITY 2 ================= */
 {id:'a2',title:'Exploring alternative ways of communicating professional knowledge',
  helps:['Reflect on how professional knowledge is produced and represented.','Critically evaluate the effectiveness of alternative formats (e.g. comics, poetry) for scholarly communication.','Experiment with re-expressing research in creative forms.'],
  needs:['PC and internet access (for Steps 2 and 4)','Helpful colleagues (for step 2, optional)','Imagination & creativity'],
  time:'60 minutes',
  steps:[
  {id:'a2s1',title:'An academic publication in comic format',blocks:[
   P(`“Conversation with a purpose” (Kara & Jackson, 2018) is an academic publication **in comic format**, which talks about the use of interviews as a research tool. You can access the book through the link below. Complete the following table before skimming the book, as you skim it and after you have skimmed it.`,{instr:true,task:['reflection']}),
   SRC('Conversation with a purpose','Kara, H., & Jackson, S. (2018). *Conversation with a purpose*.','https://helenkara.com/wp-content/uploads/2018/06/conversation-with-a-purpose.pdf'),
   N('note','Before you start',[P(`The table asks about how knowledge is produced. The book is about interviews as a research tool and it is written as a comic. So you can read it on two levels: what it says about interviews as a way of *producing* knowledge, and what its comic format shows about ways of *communicating* knowledge. Make notes on both.`),
    P(`Complete the two "Before skimming" boxes before you open the book.`)]),
   SUB('Guidance for each box',[L([
    `**What do you already know?** Anything you know, even if it seems basic — from your studies, your reading or your own experience of interviewing someone or being interviewed. Three to five points are enough.`,
    `**What do you want to find out?** Questions the book could plausibly answer. "How…" and "Why…" questions usually work better than yes/no questions.`,
    `**What are some interesting things you learnt?** Things that were new to you or that changed what you wrote in the first box. At least one about the content and one about the comic format.`,
    `**What questions might you ask the authors?** Questions the book did not answer for you.`]),
    P(`*Less helpful and more helpful entries (illustrative; the "more helpful" entries show the kind of detail to aim for and are not summaries of the book):*`),
    TAB(['Box','Less helpful','More helpful'],[
     ['What do you want to find out?','Interviews.','How do researchers decide which questions to ask in an interview?'],
     ['What are some interesting things you learnt?','It was interesting.','The comic format made [a specific point] easier to follow than it would have been in continuous text, because [reason].'],
     ['What questions might you ask the authors?','Why a comic?','Did readers of this comic remember its main points differently from readers of a conventional text on the same topic?']])]),
   P(`**Before skimming**`),
   TXT('a2s1-know','What do you already know about how knowledge is produced?',{rows:3}),
   TXT('a2s1-find','What do you want to find out about how knowledge is produced?',{rows:3}),
   P(`**As you skim / after skimming**`),
   TXT('a2s1-learnt','What are some interesting things you learnt?',{rows:3}),
   TXT('a2s1-ask','What questions might you ask the authors if you had the chance?',{rows:3}),
   SC('a2s1-sc',[`You completed the "Before skimming" boxes before you opened the book.`,`For each of your "want to find out" questions, you noted whether the book answered it.`,`Your "learnt" box includes at least one point about the content and one about the format.`,`You compared your first and third boxes: was something you thought you knew confirmed, extended or challenged?`]),
   BR([`Check whether the question is answered in a part of the book you skimmed quickly.`,`If it isn't, keep it. It may be taken up in a later activity, or you can post it in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community) (optional).`,`If every one of your "want to find out" questions was answered, ask whether your questions were ambitious enough.`],'Without the chance to ask the authors your questions')
  ]},
  {id:'a2s2',title:'An abstract in prose and in verse',blocks:[
   P(`The abstract below (Illingworth, 2016) is written in two forms: a continuous text and a poem. Discuss with a colleague whether both formats are equally useful professionally. Are they equally ‘scholarly’? Can all forms of professional publications be shared in alternative ways? What might some limitations be?`,{instr:true,task:['reflection','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague. Where a colleague is available, the discussion is the better route. If you are working alone, follow the individual version below.`)]),
   Q(`This study begins to investigate if poetry could be used as an alternative form of communication, by first assessing if poetic verse is an effective form of communication to other scientists. In order to assess this suitability, a survey was conducted in which two different groups of participants were asked questions based on a scientific abstract. One group of participants was given the original scientific abstract, whilst the second group was instead given a poem written about the scientific study. Quantitative analysis found that whilst a scientific audience found a poetic interpretation of a scientific abstract to be no less interesting or inspiring than the original prose, they did find it to be less accessible. However, further qualitative analysis suggested that the poem did a good job in conveying a similar meaning to that presented in the original abstract. The results of this study indicate that whilst for a scientific audience poetry should not replace the prose abstract, it could be used alongside the original format to inspire the reader to find out more about the topic. Further research is needed to investigate the effectiveness of this approach for a non-expert audience`,`Illingworth, S. (2016). Are scientific abstracts written in poetic verse an effective representation of the underlying research? *F1000Research, 5*. [https://doi.org/10.12688/f1000research.7783.3](https://doi.org/10.12688/f1000research.7783.3)`),
   P(`**Alternative version:**`),
   Q(`Are scientific papers understood,\nBy anyone from outside of the field;\nAnd is an abstract really any good,\nIf jargon means its secrets aren’t revealed?\n\nCould poetry present a different way,\nOf summing up research in a nutshell;\nPresented in a language for the lay,\nYet still useful for scientists as well?\n\nThis study aimed to find if it was true,\nThat poems could be a way to convey fact;\nBy splitting sample researchers in two:\nAnd giving each a different abstract.\n\nThe findings showed that whilst prose was preferred,\nRelated meanings from both were inferred.\n\n*Keywords:* Science Communication, Interdisciplinary, Communication, Publishing`),
   N('resist','Working alone',[P(`Working alone, you can't hear a colleague's view, but you can make your own reasoning visible by arguing both sides of each question before you decide. "Professionally useful" and "scholarly" are different questions: a format can be useful to teachers without being accepted as scholarly, and the reverse. The prose abstract reports findings that bear directly on these questions, so use it as evidence as well as an example.`)]),
   GRID('a2s2-grid','For each question: one argument for "yes", one for "no", and which you find more convincing',[{h:'Question',w:170},{h:'An argument for "yes"',type:'text'},{h:'An argument for "no"',type:'text'},{h:'More convincing, and why',type:'text'}],[
    ['Are both formats equally useful professionally?'],['Are they equally ‘scholarly’?'],['Can all forms of professional publications be shared in alternative ways?'],['What might some limitations be?']]),
   REV('Show a model answer',[
    P(`**Are both formats equally useful professionally?** Not in every respect. According to the prose abstract, the scientific participants found the poem no less interesting or inspiring than the original prose but did find it less accessible. For a teacher deciding whether to read a full article, accessibility matters. The abstract also reports that the poem conveyed a similar meaning, however, so it isn't simply less informative.`),
    P(`**Are they equally scholarly?** The prose version contains information the poem leaves out: it mentions that a survey was used, that the analysis was both quantitative and qualitative, that poetry should not replace the prose abstract and that further research with non-expert audiences is needed. These details allow a reader to judge the study. The poem keeps the aim, the two-group design and a summary of the findings. On this basis, the prose version does more of what readers expect of a scholarly abstract, although the poem could still be valuable as a scholarly product in its own right.`),
    P(`**Can all forms of professional publications be shared in alternative ways?** Possibly many can, but probably not without losses. The author's own conclusion is that poetry could be used alongside the original format rather than instead of it, which suggests that alternative formats may work best as a complement.`),
    P(`**What might some limitations be?** Meaning can change as well as be lost. The poem frames the study around readers outside the field and a language "for the lay", whereas the prose abstract says the study assessed a scientific audience and leaves non-expert audiences for further research. The poem's "prose was preferred" also simplifies the more specific finding that the poem was less accessible. Finally, the findings concern scientists; the abstract does not tell us whether language teachers would respond in the same way.`)],{gate:['a2s2-grid'],exportLabel:'Model answer'}),
   SC('a2s2-sc',[`You answered all four questions.`,`You used at least one piece of evidence from the prose abstract, not only your impression of the poem.`,`You kept "professionally useful" and "scholarly" separate.`,`For at least one question, you stated an argument you disagree with fairly.`,`You noted a limitation of the alternative format and at least one limitation of the conventional one.`]),
   BR([`If you concluded that the poem is not scholarly at all, check what your judgement rests on: the missing content or the poetic form? Would a prose abstract missing the same information be scholarly?`,
    `If you concluded that both versions are equal in every respect, use the table in Step 3 to compare them element by element.`,
    `If your answers closely match the model answer, look for one point where you disagree with it and write down why.`,
    `If you can, post your two-sided response to one of the questions in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community) and read how others answered it (optional).`])
  ]},
  {id:'a2s3',title:'Create an alternative abstract',blocks:[
   P(`Choose an article about language teaching that you have read and create a new abstract using **alternative forms of expression** (poem, short video, etc.). Compare the two abstracts. In what ways is each better?`,{instr:true,task:['writing']}),
   N('note','Before you start',[L([
    `You don't need to be a poet, a film-maker or an artist. The aim is to explore what changes when the same knowledge is expressed differently, and a rough version does that as well as a polished one.`,
    `Choose an article you know well — ideally one you have read in full, not just its abstract.`,
    `"In what ways is each better?" invites you to find strengths in both versions rather than choose a winner.`])]),
   N('worked','Worked example: taking apart the Illingworth (2016) pair',[
    P(`Before you create your own version, look at what happened when the prose abstract in Step 2 became a poem.`),
    TAB(['Element of the prose abstract','In the poem?','How'],[
     ['Aim: to assess whether poetic verse is an effective form of communication to other scientists','Kept but reframed','The poem asks whether poems could convey fact, and opens with questions about readers from outside the field, jargon and a language "for the lay"'],
     ['Method: a survey; two groups, one given the original abstract and one a poem','Kept, simplified','The sample is split in two and each group is given a different abstract; the survey is not mentioned'],
     ['Finding: the poem was no less interesting or inspiring','Left out','—'],
     ['Finding: the poem was less accessible','Changed','Expressed as "prose was preferred"'],
     ['Finding: the poem conveyed a similar meaning','Kept','Related meanings were inferred from both'],
     ['Conclusion: poetry should not replace the prose abstract but could be used alongside it','Left out','—'],
     ['Further research with a non-expert audience','Left out','A lay audience appears instead in the opening questions']]),
    P(`The poem has fourteen rhymed lines and ends with a rhyming couplet ("preferred" / "inferred"), which gives the final finding extra emphasis. To fit this form, the poet had to choose what to keep, what to leave out and what to express differently.`)],{collapsed:true}),
   N('note','Your attempt',[OL([`List the key elements of your article's abstract: aim, context and participants, method, findings, conclusion and limitations.`,`Choose a form and decide who your version is for.`,`Create your alternative abstract.`,`Complete a table like the one in the worked example for your own version.`])]),
   TXT('a2s3-article','The article you chose (full reference)',{rows:2}),
   GRID('a2s3-form','Form and audience',[{h:'',w:160},{h:'Your answer',type:'text'}],[['Form (poem, comic, short video…)'],['Who your version is for']]),
   TXT('a2s3-abstract','Your alternative abstract (if you used a non-written form, describe it and say where it is saved)',{rows:10}),
   GRID('a2s3-elements','What happened to each element',[{h:'Element of the original abstract',w:200},{h:'In your version?',type:'select',options:['','Kept','Kept, simplified','Kept but reframed','Changed','Left out']},{h:'How',type:'text'}],[['Aim'],['Context and participants'],['Method'],['Findings'],['Conclusion'],['Limitations']]),
   {t:'rate',id:'a2s3-rubric',label:'Self-check',headLabel:'Criterion',scale:['Yes','Partly','Not yet'],items:[
    'Someone who hasn\'t read the article could tell what it is about.','The main finding is present and not distorted.','You know which elements you left out and why.','The form does some work (e.g. an image shows a relationship; a rhyme emphasises a key point) rather than only decorating the content.','You can say who your version is for.']},
   GRID('a2s3-compare','Comparing the two abstracts: which version is better for…',[{h:'',w:230},{h:'Better version',type:'select',options:['','The original','Your version','Both equally']},{h:'Why',type:'text'}],[
    ['a researcher deciding whether to cite the article'],['a teacher deciding whether to read it'],['remembering the main point'],['judging how trustworthy the findings are'],['sharing the research with learners or parents']]),
   BR([`If your version left out the main finding, revise it before comparing; comparing an incomplete version tells you less.`,
    `If the original was better in every way, ask who else might read the abstract. It is unusual for one format to suit every audience.`,
    `If your version was better in every way, look again at "judging how trustworthy the findings are": could a reader of your version tell how the findings were reached?`,
    `If you found it hard to start, try a tightly constrained form — fourteen lines following Illingworth's pattern, or a comic of three panels (aim, method, finding).`,
    `If your version changed the meaning (as the poem arguably does with "prose was preferred"), decide whether the change is acceptable for your intended audience and note it.`])
  ]}
 ]},

 /* ================= ACTIVITY 3 ================= */
 {id:'a3',title:'Decolonising research',
  helps:['Question the methods of knowledge production through scientific texts','Position yourself critically as a researcher, educator, student and as a reader of scientific texts'],
  needs:['A helpful colleague (step 2, optional)','PC and Internet access','Headphones (step 2)','Imagination & Creativity'],
  time:'30–40 minutes',
  steps:[
  {id:'a3s1',title:'A publication as a sculpture',blocks:[
   P(`Imagine a publication as the foundation for a sculpture. The different materials that make up the sculpture represent various linguistic and cultural factors an author needs to consider when conducting research and writing about it. What factors would you use in your sculpture? How would you represent them?`,{instr:true,task:['reflection']}),
   N('explain','El Anatsui',[P(`El Anatsui is a Ghanaian sculptor who uses various found materials, such as wood, metal, clay and bottles, to create large assemblage sculptures resembling patchworks. His sculptures are renowned for the variety of tools and materials he employs, as well as the unique ways he connects and combines them to create intricate mosaics.`),
    P(`The print version of this module shows a photograph of his wall-mounted sculpture *Earth Developing More Roots* (2011), a large patchwork of flattened metal and bottle-cap strips in gold, silver, red and blue. You can see the photograph at [https://www.flickr.com/photos/seeminglee/8987127837/in/photostream/](https://www.flickr.com/photos/seeminglee/8987127837/in/photostream/) (Lee, 2013).`)]),
   N('note','Before you start',[P(`The metaphor has three parts:`),
    L([`the **publication** is the foundation of the sculpture`,`the **materials** are the linguistic and cultural factors an author needs to consider when conducting research *and* when writing about it`,`the **way the materials are joined** reflects how these factors relate to each other.`]),
    P(`The description of El Anatsui's work emphasises not only the variety of his materials but the ways he connects and combines them. So your sculpture should show relationships, not only a list of factors.`)]),
   N('worked','Worked example (illustrative)',[
    P(`*A fictional teacher-researcher describes their sculpture:*`),
    Q(`My publication is a study of how my secondary-school students use their home languages during English lessons.`),
    L([`A **large metal sheet** at the centre is English: the language the study will be written in and the language of most of the research it will cite.`,
       `**Bottle caps** in many colours are the students' home languages. There are many of them and they are small, so some are hard to see from a distance.`,
       `**Copper wire** joins some caps to the sheet. Each time a student's words are translated into English in the writing, the connection becomes visible but the piece it joins changes shape.`,
       `A **strip of wood** frames the edge: the school's language policy, which sets the limits within which students speak.`,
       `Some **gaps** are left: the students who chose not to take part and what they might have said.`,
       `A small **mirror** in the middle is the author, whose own languages and background reflect onto everything around them.`])],{collapsed:true}),
   GRID('a3s1-sculpture','Your sculpture',[{h:'Factor (linguistic or cultural)',type:'text',w:180},{h:'Research or writing?',type:'select',options:['','Conducting the research','Writing about it','Both']},{h:'Material',type:'text'},{h:'How it connects to other parts, and why this material',type:'text'}],[[],[],[],[]],{addable:true}),
   TXT('a3s1-publication','The publication at the foundation of your sculpture, and where you place yourself as the author',{rows:3}),
   SC('a3s1-sc',[`Your sculpture includes both linguistic and cultural factors.`,`It includes factors to do with conducting the research and with writing about it.`,`You showed how at least some factors connect, not only which factors are present.`,`You can give a reason for each choice of material.`,`You decided whether and where to place yourself, as the author, in the sculpture. (You return to this in Step 5.)`]),
   BR([`If your factors are mostly linguistic, ask which cultural factors — such as expectations about who asks questions or how disagreement is expressed — might affect what participants say and how you write about it.`,
    `If you found it hard to think in images, list the factors first and assign materials afterwards.`,
    `If your sculpture is very neat, remember that El Anatsui's sculptures resemble patchworks and ask where there might be tensions or loose joins in yours.`])
  ]},
  {id:'a3s2',title:'Decolonising research ethics',blocks:[
   P(`Listen to the first 15 minutes of the DECOLAB/UNTO Unlearning Together Podcast Series entitled "Decolonising Research Ethics”. Note the definitions the guests provide for decolonial ethics.`,{instr:true,task:['video','discussion']}),
   SRC('Decolonising Research Ethics','DECOLAB/UNTO. (n.d.). *Decolonising research ethics* (No. 1) [Audio podcast episode]. In Unlearning Together Podcast Series. SoundCloud.','https://soundcloud.com/decolab/episode-1-decolonising-research-ethics'),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague. Decolonisation is contested, and meeting a view that differs from your own is part of what the discussion offers; the individual version below supports you in building a definition, but it cannot supply that disagreement.`)]),
   N('note','Before you listen',[P(`The podcast discusses *decolonial ethics* in research. The questions afterwards ask about *decolonisation* in language education more broadly. Use the first to think about the second, without assuming they are the same thing.`)]),
   GRID('a3s2-notes','Notes grid',[{h:'Guest',type:'text',w:110},{h:'What they say decolonial ethics is (close paraphrase or a short quotation)',type:'text',w:260},{h:'Approximate time',type:'text',w:90},{h:'Key words',type:'text'}],[[],[],[]],{addable:true}),
   SC('a3s2-sc1',[`You noted who offered each definition or description.`,`You noted approximate times, so you can listen again.`,`You kept what the guests said separate from your own reactions.`,`You noticed at least one point where the guests' definitions overlap and, if there is one, a point where they differ.`]),
   PROV(`A timestamped list of where the guests offer definitions in the first 15 minutes will be added here, so that you can check your notes for completeness. [Number of guests who offer definitions in the first 15 minutes, and the key idea in each.]`),
   P(`How would you define decolonisation? Are there aspects of language education where decolonisation seems more pressingly important?`,{instr:true,task:['discussion']}),
   N('explain','Explanation',[P(`Consider incorporating evidence from previous activities regarding concepts that help us understand how knowledge is produced, who produces it and the experiences that shape this knowledge.`)]),
   N('worked','Drafting your own definition',[OL([
    `Write a first draft, in one or two sentences, of what decolonisation in language education means for you.`,
    `Compare your draft with your notes. What have you included that the guests didn't mention? What did they mention that you left out?`,
    `Look back at earlier activities for evidence about how knowledge is produced, who produces it and the experiences that shape it — for example, Activity 1, Step 1 (whether one publication can be relevant to every context) and Activity 1, Step 4 (autoethnography as knowledge produced from one's own experience).`,
    `Write a revised definition.`])]),
   TXT('a3s2-draft','First draft (one or two sentences): what decolonisation in language education means for you',{rows:2}),
   TXT('a3s2-compare','What you included that the guests didn’t mention, and what they mentioned that you left out',{rows:3}),
   TXT('a3s2-revised','Revised definition',{rows:3}),
   TXT('a3s2-aspect','One aspect of language education where decolonisation seems especially pressing in a context you know, and why',{rows:3}),
   N('note','If you need a starting point',[P(`Ask yourself: which languages are taught and which aren't? Whose ways of speaking count as correct? Whose research and experience inform the materials you use?`)]),
   SC('a3s2-sc2',[`Your revised definition differs from your first draft in at least one respect, or you can explain why it didn't need to change.`,`Your definition refers to language education, not only to research.`,`You chose a specific aspect and a specific context.`,`You drew on at least one earlier activity.`]),
   BR([`If your definition is only about what is taught, ask whether it also concerns who produces knowledge (Step 4) and how researchers position themselves (Step 5).`,
    `If your definition is so broad that it could describe almost any educational reform, ask what it would specifically challenge or undo.`,
    `If the question didn't seem to apply to your context, note this and return to it after Step 4, where you look at where the research in your area comes from.`])
  ]},
  {id:'a3s3',title:'Decolonizing second language writing',blocks:[
   P(`Read the abstract of Kubota's (2022) article *Decolonizing Second Language Writing: Possibilities and Challenges*. How can we work towards what Kubota describes as "striving to create new conceptual, methodological, and discursive spaces for Southern and Indigenous voices"? Then, read the full article and take notes on the specific suggestions she provides about decolonisation.`,{instr:true,task:['reading','writing']}),
   SRC('Decolonizing second language writing: Possibilities and challenges','Kubota, R. (2022). Decolonizing second language writing: Possibilities and challenges. *Journal of Second Language Writing, 58*, Article 100946. [https://doi.org/10.1016/j.jslw.2022.100946](https://doi.org/10.1016/j.jslw.2022.100946)','https://www.sciencedirect.com/science/article/pii/S1060374322000819'),
   N('note','Before you read the full article: predicting',[P(`After reading the abstract, write two or three predictions about what Kubota will suggest. One way to read the quoted phrase is to take its three kinds of space separately:`),
    L([`**conceptual** spaces — ways of thinking and the ideas we draw on`,`**methodological** spaces — ways of doing research`,`**discursive** spaces — ways of writing and speaking about research.`])]),
   TXT('a3s3-how','How can we work towards creating new conceptual, methodological and discursive spaces for Southern and Indigenous voices?',{rows:3}),
   TXT('a3s3-predict','Your predictions: what do you think Kubota will suggest?',{rows:3}),
   N('note','While you read',[P(`The article's title refers to both possibilities and challenges, so note both.`)]),
   GRID('a3s3-notes','Notes on Kubota’s suggestions',[{h:'Kubota\'s suggestion',type:'text',w:200},{h:'Where in the article (section or page)',type:'text',w:100},{h:'Kind of space',type:'select',options:['','Conceptual','Methodological','Discursive']},{h:'What it could look like in your context',type:'text'},{h:'A possible challenge',type:'text'}],[[],[],[],[]],{addable:true}),
   TXT('a3s3-compare','After reading: which suggestions did you anticipate, and which surprised you?',{rows:3}),
   SC('a3s3-sc',[`You noted suggestions from across the article, not only from its opening sections.`,`You recorded where each suggestion appears, so you can find it again.`,`You kept Kubota's suggestions separate from your own ideas.`,`You noted at least one challenge.`,`You considered at least one suggestion in relation to your own context, even though the article is about second language writing.`]),
   PROV(`An answer key listing Kubota's main suggestions, with section references, will be added here so that you can compare your notes with it.`),
   BR([`If most of your predictions matched her suggestions, check whether the abstract had already signalled them, then choose one suggestion to think about in more depth.`,
    `If few suggestions seemed to apply to your context, ask which ones don't apply at all and which would require changes beyond your control, and note the difference.`,
    `If you found the full article hard to follow, concentrate on the sections that present her suggestions and return to the rest later.`])
  ]},
  {id:'a3s4',title:'Where does the research come from?',blocks:[
   P(`Find an article about a topic that is relevant to your practice. Pay attention to the **bibliographical resources** (locations where the research was conducted and the authors involved). What are your thoughts?`,{instr:true,task:['reflection']}),
   N('note','Before you start',[P(`Look at two things: where the research was carried out and where the authors are based. Look at the article you've chosen and at a sample of ten studies from its reference list. If the information isn't stated, write "not stated" rather than guessing.`)]),
   GRID('a3s4-tally','Tally table',[{h:'Item',w:150},{h:'Where the research was carried out',type:'text'},{h:'Where the authors are based',type:'text'}],[
    ['The article you chose'],['Reference 1'],['Reference 2'],['Reference 3'],['Reference 4'],['Reference 5'],['Reference 6'],['Reference 7'],['Reference 8'],['Reference 9'],['Reference 10']]),
   N('note','Then note',[P(`Which places appear most often? Which appear rarely or not at all? Do the research settings and the authors' locations match?`)]),
   N('worked','Worked example (fictional article, for illustration only)',[Q(`I chose an article on vocabulary learning and looked at ten studies from its reference list. Seven of the ten were carried out in Western Europe or North America and eight had authors based there. Two studies were carried out in East Asia, but one of these had authors based elsewhere. None were carried out in schools like mine. My thought is that the evidence behind the article's recommendations comes from contexts quite different from my own, and that researchers and teachers working in contexts like mine are largely missing. I'm not sure whether this is because such research doesn't exist or because it isn't published in the journals this author reads.`,`Invented example of a teacher's notes`)],{collapsed:true}),
   TXT('a3s4-article','The article you chose (full reference)',{rows:2}),
   TXT('a3s4-thoughts','What are your thoughts?',{rows:5}),
   SC('a3s4-sc',[`You recorded information rather than guessing it.`,`You described a pattern, not only individual items.`,`Your thoughts connect the pattern to at least one idea from this activity — for example, Kubota's call for new spaces for Southern and Indigenous voices.`,`You considered more than one possible explanation for the pattern.`]),
   BR([`If the research is concentrated in one region, ask whose contexts are missing and whether that matters for your practice.`,
    `If the research settings are varied but the authors are based in only a few places, ask who is writing about whom, and carry this question into Step 5.`,
    `If both are varied, check whether your article is typical by repeating the tally for an article from a different journal.`,
    `If location information was hard to find, note this and consider what it means for a reader trying to judge whether findings apply to their context.`])
  ]},
  {id:'a3s5',title:'Positionality',blocks:[
   N('explain','Positionality',[P(`Researchers are individuals with diverse identities, experiences and emotions shaped by factors such as gender, class, ethnicity, age, religion and previous educational experiences. These identities influence an individual’s/ researcher’s **positionality** within society, which in turn affects their research choices at various stages of the research process, including the formulation of research questions, study design and selection of research tools ("Positionality," 2014). Consequently, this influences the production of knowledge (Van Ramshorst, 2024). Therefore, it is essential for every individual/teacher conducting research to make explicit the factors they believe shape their methodological choices, thought processes, interactions and how they perceive the world.`)]),
   P(`The concept of **positionality** is a **critical and decolonial approach** to research. Based on the example below, describe your positionality as an educator-researcher/ student-researcher. Express yourself using any language(s) or mode, including writing, pictures, painting and more.`,{instr:true,task:['writing']}),
   N('note','The example',[P(`In the print version, the example is an illustration of a positionality statement (created using AI): a woman in profile surrounded by labels — *researcher*, *educator*, *white woman*, *multilingual*, *decolonisation*, *lives and works mainly in Western countries*, *human and language/linguistic rights activist*.`)]),
   N('resist','Before you start',[L([
    `Your positionality statement is for you. You decide what to include and whether to share it with anyone. You don't need to write down anything you're not comfortable recording.`,
    `Remember that your responses are saved only in this browser on this device. If you use a shared computer, clear your responses when you have exported them.`,
    `Describe yourself as an educator-researcher if you teach and a student-researcher if you're in initial teacher education. If both apply, you can use both.`,
    `You can use any language(s) or mode.`])]),
   N('explain','From labels to links',[P(`A positionality statement can have two layers:`),
    OL([`**Who you are**: the factors that shape you as an educator-researcher.`,`**How this might shape your research**: your research questions, study design, research tools, interactions with participants and how you see what you find.`]),
    P(`The example image shows the first layer. The reading shows why the second matters.`)]),
   N('worked','Worked example (written by a fictional teacher)',[Q(`I teach English at a state secondary school in the town where I grew up. I learnt English mainly through grammar-focused, exam-oriented lessons, and I did well in those exams.\n\nBecause of my own education, I may be inclined to ask research questions about exam results rather than, for example, about how my students use English outside school. I need to check whether that is the most important question for them.\n\nBecause I share a first language with most of my students, I may understand their comments easily in interviews. I may also take for granted things an outsider would ask about, and overlook students whose home language is different.\n\nAs their teacher, I have authority over my students. If I interview them, they may tell me what they think I want to hear, so I would need to think carefully about how, and by whom, data are collected.`,`Invented example`)],{collapsed:true}),
   TXT('a3s5-who','Layer 1 — Who you are: the factors that shape you as an educator-researcher / student-researcher',{rows:4}),
   TXT('a3s5-how','Layer 2 — How this might shape your research',{rows:6}),
   SC('a3s5-sc',[`You named several factors that shape who you are as an educator-researcher. (The reading mentions gender, class, ethnicity, age, religion and previous educational experiences; include those you think are relevant and are comfortable recording.)`,
    `For at least two factors, you linked them to a research choice: research questions, study design or research tools.`,
    `You considered how your position might affect your interactions with participants.`,
    `You included at least one way your position might limit what you notice, not only what it helps you see.`,
    `If you used pictures or another mode, the links are visible (e.g. through arrows or captions), not only the labels.`]),
   BR([`If your statement is mainly a list of labels, like the example image, take one label and link it to a research choice (for example: because you are a…, you might…).`,
    `If you found it hard to connect your position to research because you haven't carried out research, use a small inquiry you could imagine doing in your own classroom — or the study you imagined for your sculpture in Step 1.`,
    `If you included only factors that help your research, ask what someone with a very different background might notice that you wouldn't.`,
    `If some factors felt uncomfortable to write about, you can leave them out of your statement and still think about how they might affect your research.`]),
   N('explain','Additional reading',[P(`You can read more about the concept of positionality by visiting this link: [https://atlasti.com/research-hub/positionality-statements-qualitative-research](https://atlasti.com/research-hub/positionality-statements-qualitative-research)`),
    P(`Or by reading this blog post: Salmons, J. (2023, June 1). Positionality and data collection. Sage Research Methods Community. [https://researchmethodscommunity.sagepub.com/blog/positionality-and-data-collection](https://researchmethodscommunity.sagepub.com/blog/positionality-and-data-collection)`)])
  ]}
 ]}
 ]
};
})();
