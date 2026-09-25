/* Module 4 content — v.4 module text + self-study scaffolding (Module_4_selfstudy_redesign.md), second person */
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

const LANG=N('explain','Explanation',[P(`To do this task, use any language(s) you feel most comfortable with. In addition to writing, you can also use other forms of expression, such as pictures, drawings, sounds, etc. (If you use other forms of expression, describe them briefly in the answer space so that they appear in your export.)`)]);
const GUIDE=['Why?','How does that work?','What\'s that?','What does that mean?','Really? Are you sure?','Is that all?','How do you know?','Says who?','What about…'];

window.RLT_MODULE = {
 id:'m4', storageKey:'rlt-m4-selfstudy-v1',
 number:4, title:'Critical reading and evaluation of published professional knowledge',
 audience:['**Pre-service and in-service teachers** of second, foreign and additional languages, working on their own and at their own pace.',
  'It suits you if you want to read research publications with epistemic vigilance: judging how trustworthy they are, what they leave out and how relevant they are to your context.',
  'The module works best if you have already met the typical parts of a research article (see Module 3). If the Initial descriptors in Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) describe you best, you will get more out of it with a mentor, tutor or colleague.'],
 citation:'The ReaLiTea Project. (2026). *Critical reading and evaluation of published professional knowledge*. Available online: [https://www.realitea.info/critical](https://www.realitea.info/critical).',
 facet:'Using published professional knowledge',
 portfolioSummary:'Completed ReaLiTea Module 4, Critical reading and evaluation of published professional knowledge, in self-study mode: exploring critical thinking and epistemic injustice, practising critical reading strategies, relating the parts of research articles to the stages of research, and evaluating publications with the CRAAP test and a personal checklist.',

 intro:[
  H('Summary'),
  P(`This module is designed to help you develop skills and strategies for critical thinking and reading that will help you engage with different kinds of publications. Doing so will enable you to evaluate the publications you come across depending on (a) how relevant they are to your interest and (b) the quality of their content. When reading published research, it is important to be mindful of the quality of the content we read. Quality is a difficult word to define, but it encompasses considerations such as scholarly rigour, professional relevance, and ethical implications. This need is heightened when we adopt an inclusive reading outlook, which encompasses work that is published in a variety of ways, often without the mediation of editors, reviewers, or teacher educators. In this module, we will first explore the multi-layered concept of "being critical", focusing on concepts such as reflection, imagination, and creativity. We will highlight key sections of academic articles, including the abstract, literature review, methodology, results, and discussion, and see how a critical outlook can help us evaluate their quality. Additionally, we will introduce a systematic approach to evaluating scientific texts, involving the CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) test that can help you make informed judgements about the credibility and usefulness of what you read.`),
  H('Introduction'),
  P(`Welcome to Module 4 of the ReaLiTea learning resources, which aim to help you engage with research publications in an effective, focused and critical way. Unlike many other sources of professional knowledge, research publications – especially the ones published in academic journals – are often perceived as being very authoritative. However, even such resources need to be read carefully and with epistemic vigilance.`),
  P(`This module focuses on developing your ability to approach the findings reported in such publications critically – not in the sense of finding fault, but in the sense of carefully thinking about how trustworthy they are, what ethical implications they involve, and what alternatives might be possible. The critical skills that we will develop, while working with research publications, of course apply to all kinds of sources of professional knowledge.`),
  P(`Upon completing this module, you will have developed critical reflection skills that will help you engage with the structure and content of publications in language education. This module has been designed to help you question how knowledge is produced and to examine your own thought processes. Additionally, it will provide you with new approaches to reading about empirical work and other forms of scholarship.`),
  P(`This module consists of four activities. The first activity is a warm-up task designed to help you articulate your thoughts on the concept of critical thinking. Activity 2 focuses on critical reading and explores strategies for achieving effective reading of scientific texts. Then, in Activity 3, we will take apart some typical examples of research publications. Finally, Activity 4 introduces the CRAAP test and other evaluation checklists and considers their limitations.`),
  P(`Each activity is divided into several steps. You can engage with these activities at your own pace, spending more time on the ones that are closer to your learning priorities. To help you navigate through the activities in the Module, we have provided information about the aims of each activity, as well as the resources and time that you will need to complete it. That said, we recommend that you follow the sequence of steps and activities as presented in the module.`),
  P(`All the tasks in the module can be done individually. However, you might find it useful to work together with colleagues, onsite or in online learning communities. This will help you share your perspective and learn from your colleagues’ insights. In the materials, we have indicated which tasks are best suited for discussion and pair work.`),
  P(`Sometimes you might come across an activity that has multiple options. You can try out all the options provided, or, if you are working with colleagues, you might want to divide the work amongst you.`),
  P(`We hope that these activities will help you develop a more critical approach to selecting the publications you engage with. Additionally, we aim for these activities to guide you in exploring new perspectives on scientific knowledge —how it is produced and how it is shared with readers. If you are ready, let's begin!`),
  H('Intended learning outcomes'),
  P(`When you have completed this module, you will be able to…`),
  L([`Analyse and differentiate various modes (textual, visual, aural, multimodal, etc.) of professional knowledge communication [A1.1–4].`,
     `Apply targeted reading strategies to engage efficiently with professional knowledge in literature, adapting approaches to suit specific learning needs [B2.1].`,
     `Evaluate your personal motivations and purposes for engaging with published professional knowledge, developing a reflective awareness of these influences [C3.2].`,
     `Create a tailored learning pathway to enhance your research literacy, focusing on the strategic use of professional and academic literature [A4].`]),
  P(`The codes in square brackets refer to the competences in the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae).`,{small:true}),
  H('Resources needed'),
  L([`Internet access`,`Headphones`,`Imagination and creativity`,`The ReaLiTea Research Literacy Framework`]),
  H('Using these materials'),
  N('note','Working through this module on your own',[
   P(`This version of the module is designed for self-study. After most tasks there is a check. Try the task first and only then open the check. Many tasks in this module have no single right answer; in those cases the check gives you criteria and an illustrative answer, not a key.`),
   P(`Some tasks were designed as discussions. In this version they include an individual alternative. If you have access to a colleague or to the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community), you can still use the discussion option, and you will often get more out of it.`),
   P(`This module works best if you have already met the typical parts of a research article (see Module 3). If, when you read Part II of the ReaLiTea Research Literacy Framework, the Initial descriptors describe you best, you will get more out of this module if you work through it with a mentor, tutor or colleague.`)]),
  N('note','Time',[P(`Working alone usually takes longer than the times given for each activity, because you will also read the checks and model answers. As a rough guide, allow about 35–45 minutes for Activity 1, 50–60 minutes for Activity 2, 80–90 minutes for Activity 3 and 55–65 minutes for Activity 4.`)]),
  {t:'legend'}
 ],

 activities:[
 /* ================= ACTIVITY 1 ================= */
 {id:'a1',title:'Warm-up',
  helps:['Reflect on the concept of critical reading based on your experiences','Raise awareness on the concepts of professional knowledge, critical reading and epistemic injustices','Become aware of the relationship between critical thinking, epistemologies and the creation of knowledge'],
  needs:['Internet access (for Step 3)','Imagination'],
  time:'15 minutes',
  steps:[
  {id:'a1s1',title:'This is not a pipe',blocks:[
   P(`Let’s think about how knowledge is produced, written and shared. Is it always as simple as ‘finding’ something?`,{instr:true,task:['reflection']}),
   N('note','Look at the original painting',[P(`Open René Magritte’s painting *La trahison des images (Ceci n’est pas une pipe)* [*The Treachery of Images (This is Not a Pipe)*] (1929) on the website of the Los Angeles County Museum of Art, which holds the original. Look closely at the image and at the words painted beneath the pipe before you continue.`)]),
   SRC('The Treachery of Images (This is Not a Pipe)','Magritte, R. (1929). *La trahison des images (Ceci n’est pas une pipe)* [Oil on canvas]. Los Angeles County Museum of Art.','https://collections.lacma.org/object/31931'),
   N('note','A second image to imagine',[P(`The print version of this module sets a second image beside the painting: the cover of an academic book, *Knowledge Creation in Education* (Springer), with the words ‘This is not a scientific text’ handwritten across it. Picture that cover, or any academic book you know, with the same words written over it.`)]),
   P(`Look at the painting on the museum's website. It is a famous work by René Magritte, a Belgian surrealist artist. What do you think he meant? Now think about the second image, the book cover with ‘This is not a scientific text’ written across it. What does it suggest about **knowledge**?`,{instr:true,task:['discussion']}),
   N('note','Write before you read on',[P(`Before you read the commentary, write two or three sentences in answer to each question. There is no wrong answer at this stage.`)]),
   TXT('a1s1-magritte','What do you think Magritte meant?',{rows:3}),
   TXT('a1s1-right','How about the book cover with ‘This is not a scientific text’ written across it? What does it suggest about knowledge?',{rows:3}),
   REV('Read the commentary',[
    P(`We often read Magritte's painting and its caption (“This is not a pipe”) as a joke; however, there is a serious point behind it. The caption is perfectly accurate: this is a picture of a pipe, not an actual pipe one can fill, light or smoke. In other words, the painting *represents* the pipe, and this involves a range of choices about how the pipe is depicted (e.g., from which angle, in what light, against what kind of background), and choices about what is not shown. Even in a case as simple as a painting of a pipe, representation is never a neutral act of depiction or description.`),
    P(`The same observation applies, with even more strength, to the kinds of knowledge we come across in language education (and elsewhere in academic and professional life). A lesson plan and a teaching report are never an actual lesson; a table with test scores is not learning; a research abstract is not an article and so on.`),
    P(`Closer to our purposes in this module, a research article, a monograph or a conference paper (or a blog post or a podcast or a Wikipedia article) are not the knowledge on which they report. They are accounts of that knowledge, each of them shaped by the conventions of its genre, by the perceived expectations of its intended readers, by constraints such as the word or page limit, and by the decisions its authors consciously or subconsciously made about what to foreground and what to leave out. Even when objectively framed, methodology sections describe what was done, but they rarely report on everything that was tried. Findings are selected, framed and narrated, according to what the authors believe is most important – from their subjective perspectives. And discussion sections offer one reading of the results, when others might have been possible.`),
    P(`It would be wrong to walk away believing that research texts are therefore inherently untrustworthy, or (worse?) that any one account is as good as another. What this means is that reading research texts well involves attending not only to *what* they say, but to *how* they have been made to say it. This kind of processing is what we will call critical reading (and, more broadly, critical thinking). It is the kind of approach to research literacy that goes beyond asking "what did this study find?" and brings into question "how has this been put together, by whom, for whom and what does that framing make visible or obscure?"`),
    N('branch','Compare what you wrote with the commentary',[L([
     `Did you say that the painting is a *representation* of a pipe rather than a pipe? If so, you have the main idea.`,
     `Did you apply the same idea to the book cover, that is, that a book about knowledge creation is an *account* of knowledge, shaped by choices, rather than the knowledge itself?`,
     `Did you notice that the commentary does **not** say research texts are untrustworthy? If your answer was "so we cannot believe research", reread the final paragraph: the point is to attend to how a text was made, not to reject it.`,
     `If your answer was quite different from the commentary (for example, you read the book cover as a joke about a bad book), that is a reasonable first reading. Keep it in mind: the commentary offers one reading, and it says itself that others are possible.`])])],{gate:['a1s1-magritte','a1s1-right'],exportLabel:'Commentary'})
  ]},
  {id:'a1s2',title:'What does critical thinking mean to you?',blocks:[
   P(`Think and write down words, concepts and experiences that you think are associated with critical thinking. Then, building on what you have written, define what a critical thinking approach in language education means to you.`,{instr:true,task:['reflection']}),
   LANG,
   N('note','What you are aiming for',[P(`A few words or images for each of the three prompts and one sentence completing "Critical thinking in language education involves…". You will come back to this sentence in Activity 2, Step 5, so it does not need to be complete now.`)]),
   TXT('a1s2-words','Words associated with critical thinking',{rows:2}),
   TXT('a1s2-concepts','Concepts associated with critical thinking',{rows:2}),
   TXT('a1s2-experiences','Experiences associated with critical thinking',{rows:2}),
   TXT('a1s2-def','Critical thinking in language education involves…',{rows:2}),
   SC('a1s2-sc',[`There is at least one word about *questioning* or *evaluating* what you read or hear.`,`There is at least one word about *your own teaching or experience*.`,`There is something about *who produces knowledge* or *whose knowledge counts*. (It is fine if there is not yet; Steps 3 and 4 introduce this.)`],'Look at your notes and sentence and check'),
   BR([`If most of your words are about finding faults or criticising, reread the last paragraph of the Step 1 commentary. Critical thinking in this module means looking at how knowledge has been put together, not only finding what is wrong with it.`,
    `If your sentence is very general (for example, "thinking carefully"), try adding "…in language education" to one of your words and ask what it would look like in a lesson or when you read about teaching.`]),
   N('worked','Illustrative example (invented, not a model to copy)',[P(`**Words, concepts, experiences:** "asking why", "not believing everything in the coursebook", "teacher training, when we compared two methods".`),P(`**Sentence:** "Critical thinking in language education involves asking why a method or a text says what it says, and checking it against one's own learners."`)],{collapsed:true})
  ]},
  {id:'a1s3',title:'Epistemic injustice',blocks:[
   P(`Read the article by Stroupe, Suárez and Scipio (2025) entitled *Epistemic injustice and the "Nature of Science".* Summarise the concept of **epistemic injustice** in a way that other students and teachers might find easy to understand.`,{instr:true,task:['reading','writing']}),
   SRC('Epistemic injustice and the "Nature of Science"','Stroupe, D., Suárez, E., & Scipio, D. (2025). Epistemic injustice and the "Nature of Science". *Journal of Research in Science Teaching, 62*(4), 901–941.','https://onlinelibrary.wiley.com/doi/full/10.1002/tea.21988'),
   N('note','Before you read',[P(`You do not need to read all of the article. Read the abstract and look for the part where the authors explain what they mean by epistemic injustice, and the two lenses they use.`)]),
   BR([`The article is published open access (CC BY-NC-ND 4.0), so you should be able to read it free of charge. If the page still asks you to log in or pay, try a repository or your library (Module 3, Activity 1 shows how). If you cannot open it, work from the abstract and mark your summary as "based on the abstract only".`],'If you cannot open the article'),
   N('note','What you are aiming for',[P(`Three to five short lines that a colleague with no background in philosophy could follow.`)]),
   TXT('a1s3-summary','Epistemic injustice',{rows:6}),
   SC('a1s3-sc',[`Your summary says in everyday words what epistemic injustice is about (fairness in whose knowledge is recognised).`,`It names the two lenses the authors use.`,`It says what the authors examined (what kind of texts and how many).`,`It avoids words that your reader would need to look up, or explains them.`,`It is in your own words, not copied sentences.`]),
   REV('Show an AI-generated summary',[
    N('ai','Read this critically',[P(`The summary below was **generated by an AI tool** (Claude, developed by Anthropic) in September 2026, working from the article's published abstract. It was not written by a person, and it has not been checked against the full text of the article. Read it as you would read any other source: with attention to what it says, how it says it and what it might get wrong.`)]),
    L([`**Epistemic injustice** is unfairness in how people are treated as knowers: some people are not recognised as having valuable knowledge, or their ways of making sense of the world are not taken seriously.`,
       `Stroupe, Suárez and Scipio (2025) use this idea to question the "Nature of Science" (NOS). NOS is a construct that science education scholars created to simplify, for learners, how scientific knowledge is produced. Since the 1980s it has shaped national and international science education reforms.`,
       `The authors use two lenses. **Testimonial injustice** occurs when someone's word is given less credibility because of who they are. **Contributory injustice** occurs when the ways of understanding that some groups have developed are ignored by people with more power. *(These two definitions come from the wider philosophical literature, not from the abstract. Check how the authors themselves define them.)*`,
       `They analysed the 97 most-cited peer-reviewed journal articles on NOS, looking at which scholars are named to build the construct and how researchers position learners in relation to it.`,
       `They found that the scholars named to inform the construct are mainly White men, and that NOS research often positions learners from a deficit perspective.`,
       `They conclude by discussing the injustices that the construct may perpetuate, and they offer a vision for "a more complete story of science" in places where learning happens.`,
       `*For language teachers (the AI tool's own interpretation; the article is about science education):* similar questions can be asked about whose descriptions of "correct" language or "good" teaching are treated as authoritative.`]),
    N('note','Compare the AI summary with your own',[P(`Your summary was written by a person: you. Compare the two versions, then reflect on how useful AI summary generation is for your professional reading.`)]),
    TXT('a1s3-ai-compare','1. What does the AI summary include that yours does not? What does yours include that the AI summary does not?',{rows:3}),
    TXT('a1s3-ai-accuracy','2. Check the AI summary against the abstract (and against the article, if you can open it). Is anything inaccurate, overstated, missing or presented as if it came from the article when it did not?',{rows:3}),
    TXT('a1s3-ai-reader','3. Which summary would a colleague with no background in philosophy find easier to follow? Why?',{rows:3}),
    TXT('a1s3-ai-useful','4. How useful is AI summary generation for your professional reading? When would you use it, what would you check and when would you prefer to write your own summary?',{rows:4}),
    SUB('Points you might consider',[L([
     `An AI summary can sound fluent and confident whether or not it is accurate, so fluency is not a sign of quality.`,
     `AI tools can mix what a text says with general knowledge from elsewhere. In this summary, the definitions of the two lenses and the point about language teachers are examples; here they are labelled, but that is not always the case.`,
     `A summary generated from an abstract can only be as good as the abstract. It cannot tell you what the full article argues in detail.`,
     `Writing your own summary is how you practise comprehension and note-taking (B2 in the ReaLiTea Research Literacy Framework). Relying on AI summaries may save time but skip that practice.`,
     `An AI tool cannot know what matters for your learners, your context or your question.`,
     `Before pasting an article into an AI tool, consider the publisher's licence and your institution's policy, and say when you have used AI in anything you share.`])]),
    BR([`If the AI summary seemed clearly better than yours, look again at question 2: is it better because it is more accurate, or because it sounds more polished?`,
     `If your summary is mostly about science, add one line on why this might matter in language education (for example, whose descriptions of "correct" language or "good" teaching are treated as authoritative). Mark this line as your own interpretation.`])],{gate:['a1s3-summary'],exportLabel:'AI-generated summary'})
  ]},
  {id:'a1s4',title:'Epistemology',blocks:[
   P(`In your reading you may have come across the term “epistemology”. This is a term that is often used in academic writing, and it —roughly— means “the way we know that something is true”. You can read more about it below:`,{instr:true,task:['reading']}),
   Q(`**Epistemology** is fundamentally connected to knowledge, encompassing both the process of knowledge production and knowledge as an end product. It explores the various ways in which knowledge is formed, its limitations and its purposes (Greco, 2021). In recent years, there has been significant criticism of Western epistemology, which refers to the methods of research and knowledge production that are predominantly derived from and centred on Western perspectives and experiences, often rooted in colonial histories. Alongside this critique, there has been a growing interest in epistemologies of the South, which advocate for the inclusion of diverse perspectives that extend beyond Western ways of thinking.`),
   TXT('a1s4-q1','1. In one sentence, how does the idea of epistemology connect to what you read about epistemic injustice in Step 3?',{rows:2}),
   TXT('a1s4-q2','2. The text mentions "epistemologies of the South". In your own words, what is the criticism of "Western epistemology" that it responds to?',{rows:2}),
   REV('Show notes',[OL([
    `Epistemology is about how knowledge is produced and what counts as knowing; epistemic injustice is about whose ways of knowing are treated unfairly in that process.`,
    `The text describes a criticism that research and knowledge production have been centred on Western perspectives and experiences, often rooted in colonial histories. If you want to read further, the Further reading list below is the place to start.`])],{gate:['a1s4-q1','a1s4-q2'],exportLabel:'Notes'}),
   P(`**Further reading**`),
   {t:'refs',items:[`de Sousa Santos, B. (2014). *Epistemologies of the South: Justice against epistemicide*. Routledge.`,`de Sousa Santos, B., & Meneses, M. (2019). *Knowledges born in the struggle: Constructing the epistemologies of the Global South.* Routledge.`]}
  ]}
 ]},

 /* ================= ACTIVITY 2 ================= */
 {id:'a2',title:'What is critical reading?',
  helps:['Raise awareness on the concept of critical reading','Reflect on the way knowledge is produced in scientific texts','Become aware of the different ways you can critically approach a scientific text','Understand the concepts of creative thinking and critical reading, and how they relate to scientific texts.'],
  needs:['A colleague, if available (Steps 1, 3 and 4 include an individual option)','PC and internet access (Steps 2 and 4)','Headphones (step 2)','Imagination and Creativity'],
  time:'40 minutes',
  steps:[
  {id:'a2s1',title:'Key points about critical reading',blocks:[
   P(`Reflect with a colleague or individually on the questions below. Based on your discussions or thoughts, create a list of key points related to critical reading. Use written or/and other forms of expression!`,{instr:true,task:['reflection','discussion']}),
   LANG,
   N('note','Working alone',[P(`For each question write at least two points. For the third and fourth questions, try to give one "yes" and one "but" (for example, "Yes, a podcast can be useful, but…").`)]),
   TXT('a2s1-q1','What can help you understand whether a text is professionally and academically ‘sound’?',{rows:3}),
   TXT('a2s1-q2','What are the features that you would associate with ‘scholarly merit’?',{rows:3}),
   TXT('a2s1-q3','Can everyone understand a text with such features? If not, why? What does this imply about the way knowledge is created and shared?',{rows:3}),
   TXT('a2s1-q4','Can academic and professional publications be presented differently from what you have encountered so far? What might that mean in terms of their usefulness? In terms of their credibility?',{rows:3}),
   TXT('a2s1-list','Your list of key points related to critical reading',{rows:4}),
   REV('Show points readers often make',[
    P(`You do not need to have all of these. Look for anything you did not think of and decide whether to add it to your list.`),
    L([`*Soundness:* the text explains how its claims were reached; it is published in a recognised outlet; it cites other work; it is transparent about methods and limitations.`,
       `*Scholarly merit:* specialised terms, conventional structure (see Activity 3), references, peer review.`,
       `*Can everyone understand it?* Often not: specialised language, paywalls and the dominance of a few languages limit who can read and who can publish. This connects to epistemic injustice (Activity 1): the features that signal merit can also keep some people out.`,
       `*Different forms:* blog posts, podcasts, videos and infographics (this module uses several). They can be easier to access and closer to practice, but you may need to work harder to judge their credibility.`]),
    BR([`If your list only says "peer-reviewed means sound", go back to questions 3 and 4. Peer review is important, but the questions ask you to think about what that model includes and excludes.`,
     `If your list is mostly about whether texts are *difficult*, add at least one point about how you would know whether a text is *trustworthy*.`])],{gate:['a2s1-list'],exportLabel:'Points readers often make'})
  ]},
  {id:'a2s2',title:'How to read critically',blocks:[
   P(`Watch the video below on **critical reading**. Reflect on an article you have recently read or choose one to read and consider the questions presented in the video: “Where is it from? What else is there? What about you? How would you explain this to a child?”`,{instr:true,task:['video']}),
   SRC('How to read critically','Academic Skills – Newcastle University. (2024, June 4). *How to read critically* [Video]. YouTube.','https://www.youtube.com/watch?v=dW4HLYtlDO0'),
   N('explain','Three-Year-Old\'s Guide to Critical Reading',[L(GUIDE),P(`Source: Academic Skills – Newcastle University (2024)`,{small:true})]),
   N('worked','Worked example (before you try): the four questions applied to the article from Activity 1, Step 3',[TAB(['Question','Applied to Stroupe, Suárez and Scipio (2025)'],[
    ['Where is it from?','A peer-reviewed article in the *Journal of Research in Science Teaching*, published in 2025. It comes from science education, not language education.'],
    ['What else is there?','The article questions a construct that many other researchers have used, so there is a large body of work that takes a different view. A reader would need at least one article that uses the "Nature of Science" approach to understand what is being questioned.'],
    ['What about you?','For a language teacher: do you use any simplified accounts of "how language works" or "what good teaching is" that might leave out some people\'s knowledge?'],
    ['How would you explain this to a child?','"Some people\'s ideas get listened to more than others\', and this article checks whose ideas were used to explain how science works."']])],{collapsed:true}),
   N('note','Now you try',[P(`Choose an article you have read recently (or Nemes, 2024, from Activity 3, if you have none) and answer the same four questions.`)]),
   TXT('a2s2-article','The article you chose',{rows:1}),
   GRID('a2s2-grid','The four questions',[{h:'Question',w:190},{h:'Your answer',type:'text'}],[['Where is it from?'],['What else is there?'],['What about you?'],['How would you explain this to a child?']]),
   SC('a2s2-sc',[`"Where is it from?" includes the type of publication and where it was published, not only the author's name.`,`"What else is there?" names at least one other source or viewpoint, or says what you would need to look for.`,`"What about you?" connects the article to your own teaching or beliefs.`,`"Explain to a child" uses no specialist terms.`]),
   BR([`If you found "What else is there?" hard, use the Three-Year-Old's Guide: "Is that all?" and "What about…?" are ways into this question.`])
  ]},
  {id:'a2s3',title:'Reflective practice',blocks:[
   P(`Look at the figure below entitled “Eight principles for scholarly reflective practice for learning and teaching”. Think about the concept of **reflection**. Discuss with a colleague: which of the following principles are you familiar with? Do you have any other suggestions from your experience?`,{instr:true,task:['discussion']}),
   N('explain','Eight principles for scholarly reflective practice for learning and teaching',[P(`The figure is a circular diagram titled *Reflective practice*, showing eight principles:`),
    OL([`Learn how (to reflect)`,`Take time (to reflect)`,`Set the scene`,`Scaffold`,`Practice and experiment`,`Offer multiple modes`,`Assess with care`,`Be scholarly`]),
    P(`Adapted from Harvey et al. (2025).`,{small:true})]),
   N('resist','Working alone',[P(`The purpose of this step is to exchange experience, and that cannot be fully simulated. If you can, discuss it with a colleague or in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community). Otherwise, use the table and questions below.`)]),
   GRID('a2s3-grid','How familiar are you with each principle?',[{h:'Principle',w:170},{h:'Familiarity',type:'select',options:['','You already do this','You have heard of it','New to you']},{h:'An example from your practice or training',type:'text'}],[
    ['Learn how (to reflect)'],['Take time (to reflect)'],['Set the scene'],['Scaffold'],['Practice and experiment'],['Offer multiple modes'],['Assess with care'],['Be scholarly']]),
   TXT('a2s3-hardest','1. Which principle would be hardest to follow in a school or course where time is short and exams dominate? Why?',{rows:3}),
   TXT('a2s3-critical','2. Which principle is most closely connected to critical reading? (Hint: look at "Be scholarly".)',{rows:2}),
   TXT('a2s3-other','Any other suggestions from your experience',{rows:2}),
   BR([`If you marked "New to you" for most principles, that is useful information for your learning pathway; note it for the end of the module.`,
    `If you are unsure what a principle means, do not guess: note it as a question, and if you can, look at Harvey et al. (2025) or ask in the Community of Practice.`])
  ]},
  {id:'a2s4',title:'Creative thinking and critical reading',blocks:[
   P(`In a blog post titled "Critical & creative thinking in research", Janet Salmons notes that creative thinking can be defined as “relating to or involving the use of imagination or original ideas to create something".`),
   P(`After reading the quote above, discuss how **creative thinking** is connected to **critical reading**. In what ways might creative thinking play a key role in critically interpreting scientific knowledge? Share your insights with a colleague. Then read the whole article (link below), and --next time you read an article—think about what might be a more innovative approach to the literature review.`,{instr:true,task:['discussion']}),
   SRC('Critical & creative thinking in research','Salmons, J. (2018, September 5). *Critical & creative thinking in research*. Sage Research Methods Community.','https://tinyurl.com/368xhw9e'),
   N('resist','Working alone',[P(`As in Step 3, the exchange of insights cannot be fully replaced. Before reading the whole post, write your answer below; then compare it with the points that follow.`)]),
   TXT('a2s4-creative','In what ways might creative thinking help you interpret a research text critically? (three or four sentences)',{rows:4}),
   REV('Show points to compare with',[
    P(`These draw on earlier parts of this module; they are not a summary of Salmons' post.`),
    L([`The Activity 1 commentary says a discussion section offers one reading of the results "when others might have been possible". Imagining those other readings is a creative act.`,
       `The Three-Year-Old's Guide ends with "What about…?". Finishing that question needs imagination: you have to picture what is missing.`,
       `Explaining a study to a child (Step 2) means inventing a new way of saying it, which often shows what you have not understood.`]),
    BR([`If your sentences treat creative and critical thinking as opposites, look again at the quoted definition ("original ideas to create something") and ask what a reader creates when reading critically.`])],{gate:['a2s4-creative'],exportLabel:'Points to compare with'}),
   TXT('a2s4-review','After reading the whole post: one idea for a more innovative literature review',{rows:3}),
   N('worked','Illustrative ideas (invented)',[L([`organising sources around a debate rather than by date`,`using a visual map instead of a linear summary`,`including practitioner sources such as blogs alongside research articles, and saying why`])],{collapsed:true})
  ]},
  {id:'a2s5',title:'Revise your definition',blocks:[
   P(`Reflecting on previous steps, consider the definitions and key points you provided for critical reading. Would you like to make any modifications? Use written and/or other forms of expression!`,{instr:true,task:['reflection']}),
   N('note','What to revise',[P(`Look at two things: your sentence from Activity 1, Step 2 ("Critical thinking in language education involves…") and your list from Step 1 of this activity. Use both to complete "Critical reading involves…".`)]),
   TXT('a2s5-def','Critical reading involves…',{rows:4}),
   SC('a2s5-sc',[`texts as accounts shaped by choices (Activity 1, Step 1)`,`whose knowledge is recognised, and who can access it (Activity 1, Step 3; Activity 2, Step 1)`,`specific questions you can ask of a text (Activity 2, Step 2)`,`reflection on your own purposes and practice (Activity 2, Step 3)`,`imagining other readings or what is missing (Activity 2, Step 4)`],'Your revised version draws on at least three of these'),
   BR([`If your definition has not changed, check it against the list. If it already covers three or more, it is fine to keep it; note which parts of the activity confirmed it.`]),
   N('worked','Illustrative example (invented)',[P(`"Critical reading involves asking where a text comes from and how it was put together, noticing whose knowledge it includes or leaves out, imagining how else the findings could be read and checking what it means for one's own learners."`)],{collapsed:true})
  ]}
 ]},

 /* ================= ACTIVITY 3 ================= */
 {id:'a3',title:'Identifying stages of research in writing',
  helps:['Understand and identify how articles in language education and adjacent fields are typically structured, and approach them using critical reading practices','Connect the different parts of a scientific article to the stages of a research project','Situate research within its context'],
  needs:['PC and Internet access'],
  time:'50–60 minutes',
  steps:[
  {id:'a3s1',title:'The main parts of a manuscript',blocks:[
   P(`To critically read an academic or professional publication, it’s helpful to understand how it is structured. Read the following text, by SAGE (an academic publisher that covers various disciplines) and discuss it in tandem or in groups. What are the **main parts** of a text published in their journals?`,{instr:true,task:['reading','discussion']}),
   SRC('Preparing your manuscript','SAGE. (n.d.). *Preparing your manuscript.*','https://us.sagepub.com/en-us/nam/preparing-your-manuscript'),
   TXT('a3s1-parts','Working alone: the main parts, in order',{rows:4}),
   REV('Check your list',[
    P(`The page lists the sections a manuscript will generally include: Abstract, Introduction, Methodology, Results, Discussion, Conclusion, Acknowledgments, Statements and Declarations, and References. It also stresses that each journal's own guidelines decide the exact sections, and that the list is for original research articles; other article types differ.`),
    BR([`If your list included the title page or keywords, that is not wrong: the page discusses them too, but as parts of the submission rather than sections of the article.`,
     `If you missed "Statements and Declarations", note what might go there (for example, funding, conflicts of interest, ethics). You will see an example in Nemes (2024) in Step 3.`])],{gate:['a3s1-parts'],exportLabel:'Main parts'})
  ]},
  {id:'a3s2',title:'Stages of research and parts of a publication',blocks:[
   P(`Look at the table below and reflect on the relationship between the **stages of research project** and the **parts of a publication** reporting on research (an empirical publication).`,{instr:true,task:['reflection']}),
   TAB(['Stages of a research project','Parts of an empirical publication'],[[
    'Topic; Context - Research problem; Literature review; Research Questions/ Hypothesis; Research approach; Pilot study; Data collection / generation; Data analysis; Results',
    'Abstract; Introduction; Literature review; Methodology (Research Questions, Approach, Design, Data collection / generation tools, Method(s) of analysis, Ethics); Results; Discussion; Conclusions']],{split:';'}),
   N('explain','Explanation',[P(`Academic articles often do not present all the information clearly within their main sections. This could be due to practical considerations, such as word limit, or for other reasons, such as limitations in scope. By adopting a critical perspective, we can question what the author(s) chose to omit.`)]),
   N('note','Before you look at the answers',[P(`For each stage on the left, write the part (or parts) of the publication where you would expect to find it. If you cannot place a stage, write "?".`)]),
   GRID('a3s2-grid','Where would you expect to find each stage?',[{h:'Stage of a research project',w:200},{h:'Part(s) of the publication',type:'text'}],[
    ['Topic'],['Context – research problem'],['Literature review'],['Research questions / hypothesis'],['Research approach'],['Pilot study'],['Data collection / generation'],['Data analysis'],['Results']]),
   REV('Check your answers',[
    TAB(['Stage of a research project','Where it usually appears'],[
     ['Topic','Introduction (and summarised in the Abstract)'],['Context – research problem','Introduction'],['Literature review','Literature review (sometimes several background sections with other headings)'],['Research questions / hypothesis','Methodology (sometimes also stated at the end of the Introduction)'],['Research approach','Methodology'],['Pilot study','Methodology, **if reported at all**'],['Data collection / generation','Methodology'],['Data analysis','Methodology (how it was done); Results (what it produced)'],['Results','Results']]),
    P(`**Indicative answer (from the module's Appendix)**`),
    P(`The stages of field research should be directly related to the stages of writing a scientific text, as the scientific text is the end product of the research. The research problem stage corresponds to the introduction or the relevant chapter addressing the research problem in the text. The theoretical concepts and previous related studies are linked to the theoretical framework and literature review chapters. The research questions, hypotheses, methodological approach, design, data collection tools, method of analysis and ethical considerations together comprise the research methodology chapter. The analysis process that leads to the results forms the chapter on the presentation of results. A more in-depth reflective process that relates and synthesises the results with the theoretical framework and literature review culminates in the discussion and conclusions chapter.`),
    P(`It is important to note that when writing a scientific text derived from an undergraduate or postgraduate thesis, or even a doctoral study, specific guidelines usually dictate the order of chapters. However, we must also consider the shift towards a decolonising approach to research, as well as the scientific paradigm of posthumanism, which allows for non-linear pathways in the production of a scientific text.`),
    P(`You may also want to see Module 5 for alternative ways of publishing and sharing research.`,{small:true}),
    N('branch','Noticing the gaps',[L([
     `Two parts on the right (Discussion, Conclusions) have no stage on the left. The indicative answer explains that they come from relating the results back to the literature.`,
     `"Ethics" appears on the right but not on the left.`,
     `"Pilot study" is often hard to place because many articles do not report one. If you put "?" next to Pilot study, you have found exactly what the Explanation box describes: authors do not always present everything, and a critical reader can ask what was omitted.`])])],{gate:['a3s2-grid'],exportLabel:'Answers'})
  ]},
  {id:'a3s3',title:'Annotate an article',blocks:[
   P(`Below you will find parts of an article (Nemes, 2024) with some **key parts highlighted**. Using these as examples, continue annotating other parts of the article in a similar way`,{instr:true,task:['writing']}),
   SRC('Teaching a second language to learners with mild intellectual disabilities','Nemes, M. (2024). Teaching a second language to learners with mild intellectual disabilities – a Hungarian case study. *Frontiers in Education, 9*, Article 1450095.','https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1450095/full'),
   N('worked','Annotated example 1: the opening of the article',[
    P(`**Label: Topic** (the first sentence)`),
    Q(`**The present paper deals with the issues of teaching a second language to school-aged children with MID, focusing on Hungary.** Since Hungary’s accession to the European Union in 2004, foreign language teaching has assumed a prominent role in education. Aligning with the European Commission’s 2005 declaration of every child’s right to language learning, the European Union identified key competences, including foreign languages, as essential for the 21st century. The overarching aim of foreign language instruction is to equip children with age-appropriate and practical language skills. Act CXC of 2011 on Public Education mandates twice-weekly foreign language lessons for students with learning difficulties, commencing in Grade 7. English as a Foreign Language (EFL) generally means teaching English to non-native speakers in an environment where English is not the primary language. Teaching English involves the 4 basic language skills: speaking, listening, reading and writing. As for teaching English, there have been new and innovative methods and approaches to enhance overall language competence among students. Meggyesné Hosszu (2019) defines foreign languages as those not central to learners’ immediate lives but taught in guided settings such as schools.`,`Nemes (2024), CC BY`)]),
   N('worked','Annotated example 2: the research methodology section',[
    P(`**Labels:** *Methodology* (the heading) · *Aim* (the first sentence) · *Research Questions* (the two questions) · *Tools of data collection* (the interview sentence)`),
    Q(`**[Methodology]** 4 Research methodology\n\n**[Aim]** The aim of this research study was to investigate the conditions under which students with MID acquire foreign language skills, as well as the teaching methods and tools employed in educational settings. We had the following research questions:\n\n**[Research Questions]** What specific, practical tasks work in the language lessons of MID learners? What seems to retain and how to test MID learners’ language competence in class?\n\n**[Tools of data collection]** To achieve this aim, semi-structured in-depth interviews were conducted with eleven SEN teachers and language teachers who instruct foreign languages to this specific student population. The eleven interviewed teachers represented a range of ages and geographical locations. Two teachers were between 20 and 30years old, two between 30 and 40, five between 40 and 50, and two over 50. Regarding location, three resided in the capital city, four in other cities, and four in smaller towns. In terms of qualifications, four held degrees in special needs education, three of whom possessed C1-level foreign language certifications. The remaining four were language teachers, with one currently pursuing additional studies in special education specializing in MID and psycho-pedagogy (Table 1).`,`Nemes (2024), CC BY`)]),
   N('explain','Explanation',[P(`Books, doctoral theses and postgraduate dissertations about language education tend to be structured along similar lines.`)]),
   N('note','What you are aiming for',[P(`Labels on at least five further parts of the article, using the same kinds of labels as the examples (for example, "Research problem", "Participants", "Data analysis", "Ethics", "Limitations").`)]),
   GRID('a3s3-grid','Your annotations',[{h:'Where in the article (section, paragraph or first words)',type:'text',w:220},{h:'What it does',type:'text'},{h:'Your label',type:'text',w:160}],[[],[],[],[],[]],{addable:true}),
   REV('Show an annotation key',[
    P(`This key follows the article's own section numbers. Compare it with your labels; different wording is fine if you found the same thing.`),
    TAB(['Where in the article','What it does','Suggested label(s)'],[
     ['Abstract','Summarises aims, participants, methods and conclusions','Abstract'],
     ['Section 1, first paragraphs','General importance of foreign languages; EU commitment to language learning for children with disabilities','Context'],
     ['Section 1, "The present paper deals with…"','Names the topic and the Hungarian policy context','Topic (as in the example); Context'],
     ['Section 1, final paragraphs','No consensus among professionals, parents and teachers; some see language learning as a burden, others see possible success','Research problem'],
     ['Section 1, "The current research aims…"','States the aim','Aim'],
     ['Sections 2 and 3','Characteristics of learners with MID; national curricula; choice of language; learning materials; teacher qualifications','Literature review / background (not headed "Literature review")'],
     ['Section 4, first part','Aim, two research questions, eleven teachers, Table 1','Aim; Research questions; Participants (as in the example)'],
     ['Section 4, data collection paragraph','Dates, online and face-to-face interviews, 25-question guide','Data collection'],
     ['Section 4, analysis paragraph','Six-step thematic analysis (Braun and Clarke, 2006); coding and themes','Data analysis'],
     ['Section 4, "A qualitative approach…"','Justifies the approach','Research approach'],
     ['Section 4, focus group paragraph','Second strand: focus group with eight Grade 7 students; third research question','Data collection; Research questions'],
     ['Section 4, last paragraph','Information, parental consent, head teacher approval','Ethics'],
     ['Section 5 (5.1–5.8)','Findings from the teacher interviews, organised by theme','Results'],
     ['Section 6','Findings from the student focus group','Results'],
     ['Section 7','Brings findings together, implications for teaching; last paragraph states limitations','Discussion and Conclusions; Limitations'],
     ['Statements','Ethics statement, author contributions, funding, conflict of interest','Statements and declarations']]),
    P(`**Points a careful reader might notice.** These connect to the Explanation box in Step 2.`),
    L([`There is no section headed "Discussion"; Section 7 ("Summary") does that work.`,
       `No pilot study is reported, and the 25 interview questions are not included.`,
       `Section 5 mixes the study's own findings with findings from other studies (for example, research in Indonesia and Ghana), so you have to read carefully to see which claims come from the eleven interviews.`,
       `Worth checking: the methodology excerpt says four teachers held special needs degrees and "the remaining four" were language teachers. That adds up to eight, not eleven; Table 1 lists seven language teachers.`,
       `The focus group analysis is described in two different ways (in Section 4 and in Section 6).`]),
    BR([`If you could not decide whether Sections 2 and 3 are "literature review" or "context", both are reasonable: they do both jobs. What matters is that you noticed there is no section with that heading.`,
     `If you labelled Section 7 only "Conclusions", reread it and look for sentences that interpret the findings or say what they mean for teaching; those are discussion.`])],{gate:['a3s3-grid'],exportLabel:'Annotation key'})
  ]},
  {id:'a3s4',title:'Setting the scene',blocks:[
   P(`Read the following excerpt from Pat Thomson's (2022) blog post "Academic writing knowhow – setting the scene". How important do you think it is to **situate research** within a context? How broad or specific should this grounding be?`,{instr:true,task:['reading']}),
   Q(`Contextual scene setting can be comparatively slight in word terms, but a few sentences can do a lot of work. Scene-setting accomplishes five key things.\n\nIt locates the paper/book/proposal in a field of study, an area of concern, a policy context, a professional practice, a geographical location, a moment in time. One or a combination of these things. And in doing this locational work the opener also\n\nestablishes the potential significance of the paper. The context makes the case that the paper will say something about an important matter. Nothing trivial here. There is good reason to take this paper seriously. The opener may also suggest that the text will be timely, something that people are already talking and concerned about. And once the significance is pointed out, then\n\nthe reader knows that the paper to come is something they should read. It also helps if the opener is inviting and well written so that\n\nthe reader think that this will be a paper they will enjoy. The reader wants to open the door, go thought the archway, fall down the rabbit hole. And very usefully\n\nlaying out the context at the start of the text allows you to go back to it at the very end of the paper, when you are discussing the implications of the work you’ve written about. Now you know this, what does that mean for this context? What should happen now, who might do what, given the results and this argument?\n\nAnd of course these five points strongly suggest that in order to set the scene so that it speaks to a reader, you have start with an idea of who you are writing to, and what they will be concerned about. And just a little tip. Writing multiple openers for different readers is always an interesting way to decide which reader, which angle you are going to take in your text and which journal you will target.`,`Thomson, P. (2022, December 5). *Academic writing knowhow – setting the scene*. Patter. [https://patthomson.net/2022/12/05/academic-writing-knowhow-setting-the-scene/](https://patthomson.net/2022/12/05/academic-writing-knowhow-setting-the-scene/)`),
   N('note','Note frame',[P(`Before answering the questions, list the five things Thomson says scene-setting does, in one short line each.`)]),
   GRID('a3s4-five','The five things scene-setting does',[{h:'',w:40},{h:'In one short line',type:'text'}],[['1'],['2'],['3'],['4'],['5']]),
   REV('Check your list',[OL([`Locates the text (in a field, concern, policy, practice, place or moment in time)`,`Establishes why it matters`,`Tells readers that they should read it`,`Invites readers in, so that they want to read on`,`Sets up a return to the context at the end, when discussing implications`]),
    P(`Thomson adds that all five depend on knowing who the reader is.`),
    BR([`If you counted fewer than five, look at where each paragraph begins: some end mid-sentence and the next one completes them.`])],{gate:['a3s4-five'],exportLabel:'The five things'}),
   TXT('a3s4-important','How important do you think it is to situate research within a context?',{rows:3}),
   TXT('a3s4-broad','How broad or specific should this grounding be?',{rows:3}),
   SC('a3s4-sc',[`Your answer to "How broad or specific?" mentions the reader.`]),
   N('worked','One way to think about it (invented illustration)',[P(`For readers in the same country, a few lines of policy context may be enough; for international readers, the author may need to explain the local system before its importance is clear.`)],{collapsed:true})
  ]},
  {id:'a3s5',title:'Review Nemes (2024) with Thomson’s criteria',blocks:[
   P(`After reading the blog post, use the criteria that Thomson suggests to critically review Nemes’ (2024) article which we encountered in Step 3`,{instr:true,task:['reading','writing']}),
   N('note','What you need, and what you are aiming for',[P(`You need the Introduction of Nemes (2024), online (link in Step 3); the "Topic" excerpt in Step 3 shows only part of it. Aim for a short note for each of Thomson's five points, with evidence from the article for each.`)]),
   GRID('a3s5-grid','Your review',[{h:'Thomson\'s point',w:170},{h:'In Nemes (2024)',type:'text'},{h:'Evidence',type:'text'}],[['1. Locates the text'],['2. Establishes significance'],['3. Tells readers they should read it'],['4. Invites readers in'],['5. Returns at the end']]),
   SC('a3s5-sc',[`Each of your notes points to a place in the article.`,`You kept "what the article does" separate from "what you think of it".`,`For point 3, you thought about who the article's readers are (an international, open-access journal).`]),
   REV('Show a model review',[
    P(`Illustrative; your own judgements may differ, especially on points 3 and 4.`),
    TAB(['Thomson\'s point','In Nemes (2024)','Evidence'],[
     ['1. Locates the text','Strongly: field (foreign language teaching for learners with MID), policy, place and time are all given','EU commitment (2005); Act CXC of 2011; Hungary; compulsory from Grade 7 since the 2015/2016 school year'],
     ['2. Establishes significance','Yes, but spread across the Introduction rather than at the start','Children\'s right to language learning; the field is described as new, with no agreed methodology; no consensus among stakeholders'],
     ['3. Tells readers they should read it','Clear for teachers of learners with MID in Hungary; less clear why readers elsewhere should read a Hungarian case','Comparisons with England and Indonesia appear, but the article does not say what the Hungarian case offers other countries'],
     ['4. Invites readers in','A matter of judgement: the opening is a general claim about technology and English rather than the specific problem','First paragraph of Section 1'],
     ['5. Returns at the end','Partly: Section 7 returns to Hungary (institutional autonomy, lack of materials) and suggests what teachers can do; it does not return to the compulsory-teaching policy the Introduction opened with','Section 7']]),
    BR([`If you rated every point as fully met, look again at point 5: does the ending tell you what should happen in the context set up at the start?`,
     `If you rated every point as poor, look again at point 1: the article gives a lot of contextual detail, even if you did not find the opening inviting.`])],{gate:['a3s5-grid'],exportLabel:'Model review'})
  ]},
  {id:'a3s6',label:'Step 6',title:'Extension activity: the Three-Year-Old’s Guide',blocks:[
   P(`In Nemes' article (2024), select one of the key parts of the scientific article. Then, use the Three-Year-Old's Guide to Critical Reading from Activity 2, Step 2 to annotate it. If you have time, try to review as many parts as possible using the same critical approach!`,{instr:true,task:['reflection']}),
   N('worked','Worked example (before you try): the Methodology excerpt shown in Step 3',[
    TAB(['Question','Where','Annotation'],[
     ['How do you know?','"semi-structured in-depth interviews were conducted with eleven…"','How were the teachers found and invited? The article does not say.'],
     ['What does that mean?','Research question 2','"What seems to retain" is unclear. Does it mean what learners remember?'],
     ['Is that all?','Tools of data collection','The excerpt mentions interviews; the abstract also mentions a focus group with children. Where is that reported?'],
     ['Says who?','Analysis paragraph','The article has one author but uses "we" and "the researcher(s)". Who did the coding?'],
     ['Why?','Choice of interviews','Why interviews and not classroom observation, if the question is about what works in lessons?']]),
    P(`Choose a *different* part of the article for your own annotations.`)],{collapsed:true}),
   TXT('a3s6-part','The part of the article you chose',{rows:1}),
   GRID('a3s6-grid','Your annotations',[{h:'Question from the Guide',type:'select',options:['',...GUIDE]},{h:'Where',type:'text'},{h:'Your annotation',type:'text',w:260}],[[],[],[],[]],{addable:true}),
   SC('a3s6-sc',[`Each annotation points to a specific place in the text.`,`Each asks a question that the text could, in principle, answer.`,`Each says what you would need to know to answer it, or where you might look.`],'A useful annotation'),
   BR([`If your questions are all "What does that mean?", try at least one "How do you know?" or "Is that all?". These move from understanding the text to evaluating it.`,
    `If you find an answer to your own question later in the article, note that too. Finding that a question was answered is part of reading critically.`])
  ]}
 ]},

 /* ================= ACTIVITY 4 ================= */
 {id:'a4',title:'Evaluating publications',
  helps:['Become familiar with the basic components of the CRAAP test','Deepen your understanding and application of the basic components of the CRAAP test','Critically evaluate the CRAAP tool along with similar assessment tools'],
  needs:['PC and internet access (for Steps 3 and 4)','Imagination & Creativity'],
  time:'40 minutes',
  steps:[
  {id:'a4s1',title:'What might the CRAAP criteria mean?',blocks:[
   P(`The **CRAAP test** is a tool used to evaluate scientific texts, consisting of five key criteria: **Currency, Relevance, Authority, Accuracy and Purpose.** Based on your own understanding and experience as well as the knowledge you have acquired so far, what do you think that these criteria mean in the context of language education research?`,{instr:true,task:['writing']}),
   GRID('a4s1-grid','Your descriptions',[{h:'Criterion',w:120},{h:'This likely means:',type:'text'}],[['**Currency**'],['**Relevance**'],['**Authority**'],['**Accuracy**'],['**Purpose**']])
  ]},
  {id:'a4s2',title:'Compare with the CRAAP test',blocks:[
   P(`Review the basic descriptions for the criteria of the CRAAP test. Compare them with the description you provided earlier.`,{instr:true,task:['reflection']}),
   N('explain','Give information the CRAAP test! Check its validity with these questions.',[
    TAB(['Heading','Questions'],[
     ['**Is it current?**','Was it written recently enough to be accurate? Has it been revised or updated? Do the links work?'],
     ['**Is it relevant?**','Does the information relate to your topic or answer your question? Who is the intended audience? Have you checked other sources to make sure yours is the most relevant to your topic?'],
     ['**Is it authoritative?**','Who wrote, published, or publicized it? What makes the author an expert? Are they backed by an institution (such as a university or institute)? If not, are they a primary source?'],
     ['**Is it accurate?**','Is there supporting evidence? Has the information been reviewed by experts or factcheckers? Are there spelling or other errors? What are other experts saying about it?'],
     ['**What\'s the purpose?**','Why was this information created? Is it to promote something? Sell ads? Drive votes? Is the purpose clear? What biases can you find? What are others saying about the author or source? What is your purpose and bias?']]),
    P(`Text of an illustrated infographic (art by Lisa Nowlain). Source: Nowlain, L. (2020, April 3). *Give information the CRAAP test.* ALSC Blog. [https://www.alsc.ala.org/blog/2020/04/information-literacy-for-parents/craap/](https://www.alsc.ala.org/blog/2020/04/information-literacy-for-parents/craap/)`,{small:true})]),
   GRID('a4s2-compare','Comparing',[{h:'Criterion',w:120},{h:'Your Step 1 description',type:'select',options:['','Matched','Partly matched','Different']},{h:'What you would add or change',type:'text'}],[['Currency'],['Relevance'],['Authority'],['Accuracy'],['Purpose']]),
   N('note','Things to notice',[L([
    `Some of the infographic's questions are about web information in general ("Do the links work?", "Sell ads? Drive votes?"). Which questions fit a research article, and which fit a website?`,
    `The last question under Purpose is "What is your purpose and bias?". That question is about you, the reader, not the text.`])]),
   BR([`If your description of Currency was "only the newest research counts", compare it with the infographic's question "Was it written recently enough to be accurate?". Recently *enough* depends on the topic. The checklist in Step 3 also asks whether older sources will work.`,
    `If your description of Authority was only "a famous author", note the infographic's other questions: who published it, and whether the author has institutional backing.`])
  ]},
  {id:'a4s3',title:'Evaluate an article with the CRAAP checklist',blocks:[
   P(`Access the article by Biermann et al. (2025), entitled “Towards education with a shared language: language learning strategies adopted by newly arrived immigrant and refugee adolescents in Danish schools”. Evaluate the article by filling in the following checklist, which is based on the **CRAAP test**.`,{instr:true,task:['online','writing']}),
   SRC('Towards education with a shared language','Biermann, L. W., Borsch, A. S., Primdahl, N. L., Jervelund, S. S., Verelst, A., Derluyn, I., & Skovdal, M. (2025). Towards education with a shared language: Language learning strategies adopted by newly arrived immigrant and refugee adolescents in Danish schools. *Social Psychology of Education, 28*, Article 86. [https://doi.org/10.1007/s11218-025-10043-7](https://doi.org/10.1007/s11218-025-10043-7)','https://link.springer.com/article/10.1007/s11218-025-10043-7'),
   N('note','What you are aiming for',[P(`A note in every row, with at least one piece of evidence from the article (a section, table or statement) in each.`)]),
   GRID('a4s3-grid','CRAAP checklist',[{h:'Criterion',w:100},{h:'Guiding questions',w:260},{h:'Notes',type:'text'}],[
    ['Currency','When was the information published or posted? Revised or updated? Do you need current information, or will older sources work as well?'],
    ['Relevance','Does the information relate to your topic or answer your question? Who is the intended audience? How similar are your needs to theirs?'],
    ['Authority','Who are the author(s), publisher(s) and ‑if applicable‑ sponsor(s) of this research? What are the author\'s credentials or organizational affiliations? Does the author seem qualified to write on the topic?'],
    ['Accuracy','Where does the information come from? What evidence is used to support it? Has the information been reviewed or refereed? Does the language or tone seem unbiased and free of emotions?'],
    ['Purpose','What is the purpose of the information? Is it to inform, teach, sell, entertain or persuade? Does the point of view appear objective and impartial? Are there political, religious, institutional or personal biases?']]),
   P(`Source: The checklist is adapted from Meriam Library (2010), Evaluating Information-Applying the CRAAP Test [https://library.csuchico.edu/sites/default/files/craap-test.pdf](https://library.csuchico.edu/sites/default/files/craap-test.pdf)`,{small:true}),
   SC('a4s3-sc',[`Every row has evidence from the article, not just "yes" or "good".`,`You separated what the article states from your own judgement.`,`You noted at least one thing you could not find (for example, when the data were collected).`,`Your Relevance note mentions your own teaching context.`]),
   REV('Show a model checklist',[
    P(`Compare your notes with these. Your notes on Relevance and Purpose may reasonably differ.`),
    TAB(['Criterion','Model notes'],[
     ['Currency','Published online on 21 March 2025 (received March 2024; accepted February 2025). The article does not say when the data were collected, only that they come from the early phases of a larger project. The data may therefore be older than the publication date. Whether that matters depends on how quickly the policy it describes (preparatory classes in Denmark) changes.'],
     ['Relevance','The study is about 85 newly arrived immigrant and refugee students (ages 13 to 23) learning Danish in preparatory classes in Denmark. It focuses on social and affective language learning strategies. The authors say their findings matter for teachers and practitioners working with newcomer students. For your own relevance, see the guidance below.'],
     ['Authority','Seven authors from a Department of Public Health (University of Copenhagen) and a Department of Social Work and Social Pedagogy (Ghent University). Their author notes describe backgrounds in sociology, public health and psychosocial wellbeing rather than language education. Published by Springer in *Social Psychology of Education*; funded by the EU\'s Horizon 2020 programme.'],
     ['Accuracy','Evidence comes from 11 interviews and 13 focus groups, analysed thematically using NVivo; quotes illustrate each theme. Language learning was not in the topic guide but emerged in the conversations. Some interviews used interpreters. Data protection approval was obtained; the article says formal ethics approval is not required for this type of research in Denmark. The dates show the article went through review, but the journal\'s peer review policy would confirm this. **Worth checking:** the text says participants came from seven schools, but Table 1 lists schools numbered 1 to 9. The stated limitation is that only social and affective strategies were studied.'],
     ['Purpose','To inform and to argue. The authors argue that preparatory classes can support social and affective strategies, and they challenge a monolingual norm in those classes. The study is part of a project on mental health-promoting interventions in schools, which may shape what the authors looked for. No conflicts of interest are declared. The tone in the Results is analytical, but the Discussion takes clear positions, which is normal for this kind of article.']]),
    BR([`If you teach adolescents who are new to the language of the country where they live, the findings are close to your context. Still ask whether classes like Danish preparatory classes exist where you work.`,
     `If you teach a foreign language to learners in their home country, the setting is quite different. Ask which strategies (for example, using laughter or exchanging praise) might still transfer, and which depend on living in the new country.`,
     `If you teach adults, note that most participants were 13 to 17, and look for studies with adults before drawing conclusions.`],'Relevance: which applies to you?'),
    BR([`If you found nothing to question under Accuracy, compare the text of Section 4 with Table 1.`,
     `If you marked Authority as low because the authors are not language education researchers, look again: the checklist asks whether the authors seem *qualified to write on the topic*. The topic is also about migration and wellbeing, where their backgrounds are relevant. Authority is rarely a yes-or-no judgement.`])],{gate:['a4s3-grid'],exportLabel:'Model checklist'})
  ]},
  {id:'a4s4',title:'The limitations of checklists',blocks:[
   P(`Read the following text (based on information from Birmingham City University, n.d.) regarding the **limitations** of using **evaluation checklists,** like the CRAAP test, and reflect on these insights. What are your thoughts? Create a list of criteria that are relevant to you (either written or multimodal) or visit the Realitea Virtual Community of Practice and write a post based on your experience.`,{instr:true,task:['reading','writing']}),
   P(`**Limitations of the "evaluation checklists”**`),
   P(`Checklists are often useful ways to systematically evaluate webpages and other sources of information. Some widely used checklists (with memorable acronyms!) include the following:`),
   L([`The CRAAP test (Meriam Library, 2010): Currency, Relevance, Authority, Accuracy and Purpose.`,
      `RADAR (Mandalios, 2013): Relevance, Authority, Date, Appearance, Reason for writing.`,
      `The SIFT method (Caulfield, 2019): Stop, Investigate the source, Find better coverage and Trace claims to the original context.`,
      `The Trust in Online Health Information (TOHI) scale, used in a health context, that features brand, content, credibility, ease of use, recommendation, style, usefulness and verification (Rowley et al., 2015).`]),
   P(`However, there is a risk that this approach leads to superficial evaluation, perhaps leaving out sources that may be relevant. It also, by design, ignores the actual claims made in the source that is being evaluated. This means that the “checklist approach” needs to be used alongside other methods that focus on the content of the source and the processes used to create it.`),
   TXT('a4s4-thoughts','What are your thoughts?',{rows:3}),
   N('note','What you are aiming for',[P(`A short checklist (five to eight items) that you could use the next time you read a research article. If you prefer, post it in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community) and ask others which item they would add.`)]),
   GRID('a4s4-list','Your evaluation checklist',[{h:'',w:40},{h:'Item (phrased as a question)',type:'text'}],[['1'],['2'],['3'],['4'],['5'],['6'],['7'],['8']]),
   SC('a4s4-sc',[`at least one item about the **claims** the text makes (the reading says checklists can ignore these)`,`at least one item about the **process** used to create the knowledge (for example, how data were collected)`,`at least one item about **your context** (relevance to your learners)`,`at least one item about **you as a reader** (your purpose and assumptions)`,`items phrased as questions you can answer by looking at the text`],'Your checklist should include'),
   N('worked','Illustrative items (invented), drawing on this module',[L([
    `Do the numbers and details agree across the text, tables and abstract? (Activity 3, Step 3; Activity 4, Step 3)`,
    `Whose voices and knowledge are included, and whose are missing? (Activity 1, Step 3)`,
    `What choices did the authors make about what to foreground? (Activity 1, Step 1)`,
    `Does the article set the scene well enough to judge whether it applies to your context? (Activity 3, Steps 4 and 5)`,
    `What is not reported that you would expect to see? (Activity 3, Step 2)`])],{collapsed:true}),
   N('note','Test run',[P(`Apply your checklist to either Nemes (2024) or Biermann et al. (2025). Note which items were easy to answer, which were hard and whether any item gave you information the CRAAP checklist did not.`)]),
   TXT('a4s4-test','Your test run',{rows:4}),
   BR([`If your checklist is mostly CRAAP with new names, add the claims and process items.`,`If your checklist has more than ten items, choose the ones that gave you the most useful information in the test run.`]),
   N('resist','About levels',[P(`Drafting your own criteria is a step towards the later levels of B1.2 in the ReaLiTea Research Literacy Framework, but doing it once in a module does not show a level. If you want to use this checklist as evidence in a self-assessment, test it on several texts over time and, if possible, discuss it with a mentor, tutor or colleague, or in the Community of Practice.`)])
  ]},
  {id:'a4s5',label:'Closing',title:'Before you finish',blocks:[
   P(`Look back at your work in this module and answer three questions in writing. Keep these answers with your Part III Professional Development Plan (the export includes them).`,{instr:true,task:['reflection']}),
   TXT('a4s5-hardest','1. Which task was hardest for you, and what does that suggest you need to practise? (For example, if Activity 4, Step 3 was hard, you might look at B3.2 in Part II of the ReaLiTea Research Literacy Framework.)',{rows:3}),
   TXT('a4s5-questions','2. Which of your own questions from Activity 3, Step 6 would you like to be able to answer, and where could you learn how?',{rows:3}),
   TXT('a4s5-next','3. What is one thing you will do differently the next time you read a research article?',{rows:2})
  ]}
 ]}
 ]
};
})();
