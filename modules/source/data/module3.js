/* Module 3 content — v.4 module text + self-study scaffolding (Module_3_selfstudy_redesign.md) */
(function(){
const P=(text,o={})=>({t:'p',text,...o});
const L=(items,o={})=>({t:'list',items,...o});
const N=(kind,title,body)=>({t:'note',kind,title,body});
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
const BR=(items)=>N('branch','If… then…',[L(items)]);

const doi=u=>`[${u}](${u})`;

const abstractGrid=(n)=>GRID('a3s1-abs'+n,'Your inferences',[{h:''},{h:'Article',type:'text'}],[['Aims'],['Method(s)'],['Findings']]);
const citeGrid=(id)=>GRID(id,'Two references you selected',[
  {h:'Reference (copied in full)',type:'text',w:220},{h:'Why you selected it',type:'text'},{h:'Where it is cited in the article',type:'text'},{h:'What you expect to find',type:'text'},
  {h:'Checked?',type:'select',options:['Not checked yet','Confirmed','Partly confirmed','Not confirmed']}],[[],[]],{addable:true});

window.RLT_MODULE = {
 id:'m3', storageKey:'rlt-m3-selfstudy-v1',
 number:3, title:'Engaging with journal articles (and beyond)',
 audience:['**Pre-service and in-service teachers** of second, foreign and additional languages, working on their own and at their own pace.',
  'It suits you if you want to become more confident in accessing journal articles, reading them strategically and judging how far you can trust them.',
  'You do not need any prior research training. If the Initial descriptors in Part II of the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) describe you best, you will get more out of the module with a mentor, tutor or colleague.'],
 series:'Developing research literacy for teachers of second, foreign and additional languages',
 citation:'The ReaLiTea Project. (2026). *Engaging with journal articles (and beyond)*. Available online: [https://www.realitea.info/journalarticles](https://www.realitea.info/journalarticles).',
 facet:'Using published professional knowledge',
 portfolioSummary:'Completed ReaLiTea Module 3, Engaging with journal articles (and beyond), in self-study mode: accessing publications, evaluating their trustworthiness, extracting information from the literature, broadening reading horizons and reflecting on progress.',
 authors:['Carolyn Blume (Heidelberg University of Teacher Education)','Kenan Dikilitaş (University of Bergen)','Raúl Enrique García López (TU Dortmund University)','Julia Hüttner (University of Vienna)','Sebastian Kösel (University of Stuttgart)','Achilleas Kostoulas (University of Thessaly)','Emma Marsden (University of Oxford and the OASIS project)','Eleni Motsiou (University of Thessaly)','Julia Pittenauer (University of Vienna)','Christina Ringel (TU Dortmund University)','Aysel Saricaoğlu (Ankara Social Sciences University)','Saskia Schabio (University of Stuttgart)','Yela Schauwecker (University of Stuttgart)','Evgenia Tassou (University of Thessaly)','Sofia Tsioli (University of Thessaly)'],

 intro:[
  {t:'h',text:'Summary'},
  P(`Effectively finding and accessing professional knowledge (as mediated through books, journal articles, blogs, videos etc.) is a core aspect of research literacy. This module, *Engaging with journal articles (and beyond)*, focuses specifically on developing your confidence in reading articles that have been published in academic journals. The activities that make up this module will help you to access such publications, read them in strategic and purposeful ways, and make informed inferences about their trustworthiness.`),
  {t:'h',text:'Introduction'},
  P(`The ReaLiTea professional development resources aim to help teachers of second, foreign and additional languages strengthen their research literacy. This module focuses on strengthening your confidence and competence in engaging with journal articles. There are, of course, many sources of valuable professional knowledge – and we have seen some of them in previous modules. Our focus on journal articles, in this module, does not mean that these are more important; they are, however, more challenging to access than some other sources of professional knowledge. By developing the skills to engage with such publications, it should be straightforward to transfer them to other sources of knowledge.`),
  P(`This section provides practical strategies for accessing high-quality academic content. Mastering such pathways – whether through institutional subscriptions, open-access platforms or interlibrary loan systems – ensures you can retrieve the exact resources you need when you need them. Together, we will develop skills to bypass common access limitations by leveraging open-access repositories, institutional library services and other legitimate channels. We will also engage with techniques for extracting critical information, making informed inferences, synthesising data from multiple sources and assessing the credibility and reliability of those sources.`),
  P(`There are five structured activities in this module:`),
  L([`In the first activity, *Getting better at accessing publications*, we will take a structured look at various strategies for accessing professional knowledge. This includes making use of institutional resources, open-access platforms and collaborative networks.`,
     `The second activity in the set is entitled *Evaluating the trustworthiness of publications*. The five steps that make up this activity will help you to critically examine and apply established criteria for evaluating the credibility, reliability and potential biases in publications.`,
     `The next activity, *Extracting information from the literature*, will focus on techniques for efficiently identifying, interpreting and synthesising key information and arguments within the professional literature, fostering deep comprehension and analytical skills.`,
     `Activity 4, *Broadening reading horizons*, invites you to expand your definition of professionally relevant publications beyond academic articles.`,
     `The final activity asks you to reflect on your learning throughout this module, evaluate what you have learnt, identify priorities for your further growth and plot the next steps in your development trajectory.`]),
  P(`As you move through these activities, remember that every article you successfully retrieve and every barrier you overcome strengthens your capacity to stay current in your field.`),
  {t:'h',text:'Intended learning outcomes'},
  P(`When you have completed this module, you will be able to…`),
  L([`Identify and utilise multiple access points to professional knowledge, including institutional subscriptions, open-access repositories and academic networks. [B1.3]`,
     `Extract and synthesise key arguments, evidence and themes from professional literature to support informed decision-making and practice. [B2.1–B2.3]`,
     `Evaluate the trustworthiness of publications using critical appraisal techniques and established credibility criteria. [B3.1–B3.4]`]),
  P(`The codes in square brackets refer to the competences in the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae).`,{small:true}),
  {t:'h',text:'Required resources'},
  L([`Internet access`,`Headphones (optionally)`,`The ReaLiTea Research Literacy Framework`]),
  {t:'h',text:'Using these materials'},
  N('note','Working through this module on your own',[
   P(`This version of the module includes support that a mentor or tutor would otherwise provide. After some tasks you will find a self-check list or a model answer; after others you will find guidance that tells you what to do next depending on your answer. Try each task before you look at this support, because comparing your own attempt with a model is where most of the learning happens.`),
   P(`Some tasks were designed as discussions. In this version they include an individual alternative. If you have access to a colleague or to the ReaLiTea virtual Community of Practice ([https://www.realitea.info/community](https://www.realitea.info/community)), you can still use the discussion option.`),
   P(`If, when you read Part II of the ReaLiTea Research Literacy Framework, the Initial descriptors describe you best, you will get more out of this module if you work through it with a mentor, tutor or colleague.`)]),
  {t:'legend'}
 ],

 activities:[
 /* ================= ACTIVITY 1 ================= */
 {id:'a1',title:'Getting better at accessing publications',
  helps:['Access more publications','Diversify your sources of professional knowledge','Become better at evaluating publications'],
  needs:['A helpful colleague or access to a forum (optionally, for Step 2)','Internet access (for Steps 1, 2 and 4)'],
  time:'35–40 minutes',
  steps:[
  {id:'a1s1',title:'Find the articles and brainstorm access points',blocks:[
   P(`Look at the list of articles presented below, and find them online. In some cases, you might be able to read the entire content of the articles (i.e., they are **open access**); in other cases, you might only have access to information about the article and a short summary (the **abstract**). Brainstorm some ways to access the articles that are not freely available. What are the advantages or disadvantages of each method?`,{instr:true,task:['online','writing']}),
   N('note','What counts as access',[P(`Tick **Access?** only if you can open and read the full text, not just the abstract, without paying. Your result depends on where you are: if you are logged in through a university or school library, you may see articles that someone elsewhere cannot. A tick means "access for you, from here".`)]),
   GRID('a1s1-access','Articles',[{h:'Article',w:320},{h:'Access?',type:'check'},{h:'What you saw',type:'text'}],[
    [`1. Her, L. (2024). An asymmetrical partnership: The shifting onus of Hmong heritage language teaching from families to dual-language programs. *The Modern Language Journal, 108*, 866–887. ${doi('https://doi.org/10.1111/modl.12961')}`],
    [`2. Yang, Z., & Forbes, K. (2025). Moving beyond native-speakerism through identity-based teacher education: The roles of positioning and agency. *Language Teaching Research*, 0(0). ${doi('https://doi.org/10.1177/13621688241310403')}`],
    [`3. Álvarez, I., Fuertes Gutiérrez, M., & Gallardo Barbarroja, M. (2023). Team teaching in languages: A scoping review of approaches and practices in higher education. *Innovation in Language Learning and Teaching, 18*(1), 59–77. ${doi('https://doi.org/10.1080/17501229.2023.2229798')}`],
    [`4. Reeves, J. R. (2006). Secondary teacher attitudes toward including English-language learners in mainstream classrooms. *The Journal of Educational Research, 99*(3), 131–142. ${doi('https://www.jstor.org/stable/27548123')}`],
    [`5. Chun, D., Kern, R., & Smith, B. (2016). Technology in language use, language teaching, and language learning. *The Modern Language Journal, 100*, 64–80. ${doi('https://www.jstor.org/stable/44134996')}`],
    [`6. Turan, Z., & Akdag-Cimen, B. (2019). Flipped classroom in English language teaching: A systematic review. *Computer Assisted Language Learning, 33*(5–6), 590–606. ${doi('https://doi.org/10.1080/09588221.2019.1584117')}`]]),
   N('branch','If you get stuck finding an article',[L([
    `If you cannot find an article by searching for its title, copy the full link beginning https://doi.org/ (articles 1, 2, 3 and 6) or https://www.jstor.org/ (articles 4 and 5) into your browser's address bar.`,
    `If the page asks you to pay or to log in, you have met a "paywall". Leave the box unticked and note what you saw. This is an expected result: Step 2 is about what to do next.`,
    `If the page shows a label such as "Open access" or a free PDF download, tick the box.`])]),
   GRID('a1s1-brainstorm','Your brainstorm',[{h:'Alternative access points',type:'text'},{h:'Advantages',type:'text'},{h:'Disadvantages / limitations',type:'text'}],[[],[],[],[]],{addable:true}),
   SC('a1s1-sc',[`You have listed at least three alternative access points.`,`For each one, you have written at least one advantage and one disadvantage.`,`At least one of your disadvantages concerns *which version* of the article you would get or *how long* it would take, not only cost.`]),
   REV('Show the model table',[
    TAB(['Alternative access points','Advantages','Disadvantages / limitations'],[
     ['Searching Google Scholar for a free version','Quick; no account needed','A free version is not always available; it may not be the final published version'],
     ['Author-sharing websites (e.g. ResearchGate, Academia.edu)','Often full text; you can see the authors\' other work','May require an account; the version may differ from the published one'],
     ['Preprint servers','Open; often available early','A preprint may not have been peer reviewed and may change before publication'],
     ['University repositories (e.g. the repository where the Boyd (2022) chapter in Activity 2 is shared)','Open and usually shared with the publisher\'s permission','Often the author\'s accepted manuscript rather than the typeset version'],
     ['Libraries and interlibrary loan','Legitimate access to the final version','You may need membership or to visit in person; requests can take days and may cost something'],
     ['Emailing the author','Legitimate; sometimes starts a useful professional contact','Depends on a reply; may take time'],
     ['Buying the article','Immediate access to the final version','Can be expensive for a single article']]),
    BR([`If your list included websites that offer paywalled articles for free without the publisher's permission, note that using them may breach copyright law in many countries and your institution's policies. This module works with the legitimate routes listed in Step 2.`,
        `If your list was very short, you do not need to extend it now: Step 2 gives you a fuller list to compare against.`])],{gate:['a1s1-brainstorm']})
  ]},
  {id:'a1s2',title:'Try other routes to a paywalled article',blocks:[
   P(`Even if an article is ‘**paywalled**’ (i.e., you don’t have free access to it), there are several ways to access its content. The list below shows some of them. Compare this list to the one you created in Step 1, and reflect on the advantages and limitations of each method. Then, try to access a paywalled article using one of the methods presented below.`,{instr:true,task:['online','reflection']}),
   N('expect','What to expect',[P(`Some of these routes give an answer in seconds (Google Scholar); others take days (a library request, an email to an author). If you cannot get the article during this session, that is a normal outcome. Record which method you tried and the date, and check again later. The "Did this work?" column can be completed after the session.`)]),
   TXT('a1s2-article','The paywalled article you tried to access',{rows:1}),
   GRID('a1s2-routes','Alternative access points',[{h:'Alternative access points',w:300},{h:'Did this work?',type:'check'},{h:'Notes (method tried, date, result)',type:'text'}],[
    [{group:'Online resources'}],
    ['Google Scholar: Sometimes, a free version is available.'],
    ['Academic sharing websites (e.g. ResearchGate, Academia.edu): Check if the authors have shared the article.'],
    ['Preprint Servers: Search for the article on pre-print servers like EdArXiv, SocArXiv or SSRN.'],
    [{group:'Interlibrary Loan (ILL)'}],
    ['Contact library: University libraries subscribe to many journals, and often offer access to students, if you have credentials (username and password) or are at their premises.'],
    ['InterLibrary Loan: Reach out to a university library\'s ILL department to request the article.'],
    [{group:'Author'}],
    ['Email: Send a polite email to the authors requesting a copy of the article.'],
    ['Author\'s Website: Search for the author\'s personal website.'],
    [{group:'Collaborate with colleagues'}],
    ['Share Costs: If multiple teachers need the same article, consider splitting the cost if available through purchase.']]),
   N('explain','Preprint servers',[P(`A **preprint server**, also known as a preprint repository, is an online platform designed for the preliminary dissemination of scholarly research articles before formal peer review. These repositories facilitate the rapid sharing and distribution of scientific findings, allowing authors to make their work accessible to the global academic community in a timely manner. The main characteristics of preprint servers include:`),
    L([`**Open Access**: All research is freely accessible to anyone with an internet connection.`,`**No Publication Fees**: Authors typically deposit their work without immediate costs associated with traditional publication.`,`**Version Control**: Different versions of the manuscript can be tracked over time.`])]),
   BR([`**If Google Scholar showed no free version,** Try an author-sharing website or the authors' own web pages next.`,
       `**If you found a version but it looks different from the published article** (different layout, no journal logo, "preprint" or "accepted manuscript" on the first page), it can still be useful. Note the version, and cite the published article when you refer to it.`,
       `**If none of the online routes worked,** Choose between a library request and an email to the author. The email model below can help.`,
       `**If you have no one to share costs with,** Check instead whether a library you can use, or a professional association you belong to, provides access to the journal.`]),
   N('worked','Model email to an author',[{t:'email',text:`Subject: Request for a copy of "[article title]"\n\nDear [title and surname],\n\nI am a [language] teacher working in [type of setting and country], and I am interested in your article "[article title]", published in [journal] in [year]. I do not have access to the journal through my school or a library. Would you be willing to share a copy for my own professional reading?\n\nThank you for considering my request.\n\nKind regards,\n[name]`}]),
   TXT('a1s2-reflect','Your reflection: advantages and limitations you had not thought of in Step 1',{rows:4}),
   SC('a1s2-sc',[`You tried at least one method from the list on a paywalled article from Step 1.`,`You recorded whether it worked, or when you will check again.`,`You can name one advantage and one limitation of the method you tried that you had not thought of in Step 1.`])
  ]},
  {id:'a1s3',title:'Key terms: open access, predatory publishers and more',blocks:[
   P(`In this module we will often encounter terms such as ‘open access’, ‘predatory publisher’ and more. Read the information below, which will help you understand key terms. Then, match the terms with their definitions.`,{instr:true,task:['reading']}),
   SUB('Text 1',[Q(`By 'open access' to the literature, we mean its free availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the internet itself.`,`United Nations Educational, Scientific and Cultural Organization [UNESCO]. (n.d.). Open access. [https://www.unesco.org/en/open-access](https://www.unesco.org/en/open-access)`)]),
   SUB('Text 2',[Q(`The DOAJ (Directory of Open Access Journals) was launched in 2003 with the mission to increase the visibility, accessibility, reputation, usage and impact of quality, peer-reviewed, open access scholarly research journals globally, regardless of discipline, geography or language. When it was started, there were 300 open access journals and it has grown today as a leading directory with 17,282 peer-reviewed open access journals (as on 31.12.2021) covering all branches of knowledge including science, technology, medicine, arts and humanities. The DOAJ contains open access journals from over 130 countries and in 80 languages apart from English. There are more than 12,200 open access journals which are not charging article processing charges and about 7 million articles are available in open access. The DOAJ is financially supported by many libraries, publishers and other like-minded organizations. Today, DOAJ is the major directory available on the Internet where stakeholders of higher education and research can use quality peer reviewed open access journals as DOAJ strictly avoid predatory open access journals. (Rathinasabapathy & Veeranjaneyulu, 2022, p. 3)`,`Rathinasabapathy, G., & Veeranjaneyulu. (2022). Open access journals in agriculture and allied sciences: A study based on Directory of Open Access Journals (DOAJ). *Library Philosophy and Practice*, Article 6815. [https://digitalcommons.unl.edu/libphilprac/6815](https://digitalcommons.unl.edu/libphilprac/6815)`)]),
   SUB('Text 3',[Q(`Predatory journals and publishers are entities that prioritize self-interest at the expense of scholarship and are characterized by false or misleading information, deviation from best editorial and publication practices, a lack of transparency, and/or the use of aggressive and indiscriminate solicitation practices. (Grudniewicz et al., 2019, p. 210)`,`Grudniewicz, A. et al. (2019). Predatory journals: No definition, no defence. *Nature, 576*(7786), 210–212. [https://doi.org/10.1038/d41586-019-03759-y](https://doi.org/10.1038/d41586-019-03759-y)`)]),
   SUB('Text 4',[Q(`It has been suggested that a proportion of the journals publishing within the gold Open Access model are of questionable quality, with no robust peer-review process and unqualified or fictional editorial boards (Beall, 2008). Beall's list of potential, possible, or probable predatory scholarly open access publishers listed hundreds of publishers that allegedly meet a set of criteria including: no formal editorial or review board, insufficient information about author fees (APCs), advertising a fake impact factor, a P.O. box address in a Western country, and evidence that no proof-reading or quality control is in place at the article submission (and eventual publication) stage. (Penn, 2018, p. 42)`,`Penn, L. (2018). Alternative ways of obtaining scholarly articles and the impact on traditional publishing models from a UK/European perspective. *Serials Review, 44*(1), 40–50. [https://doi.org/10.1080/00987913.2018.1433906](https://doi.org/10.1080/00987913.2018.1433906)`)]),
   SUB('Text 5',[SRC('Evaluating scholarly journals infographic','Allen Press. (n.d.). *Evaluating scholarly journals infographic* [Infographic]. FrontMatter. Creative Commons Attribution-NonCommercial 3.0 license.','https://library.stonybrook.edu/scholarly-communication/know-journal-legitimate/')]),
   {t:'match',id:'a1s3-match',label:'Matching activity',
    items:['Predatory journals and publishers','Open access','DOAJ (Directory of Open Access Journals)',"Beall's List",'Gold Open Access'],
    options:[['A','A directory that aims to increase the visibility and accessibility of quality, peer-reviewed, open access journals.'],
             ['B','Entities that prioritise self-interest over scholarship, often characterised by misleading information and lack of transparency.'],
             ['C','The ability to freely read, download, copy and distribute the full texts of articles on the public internet.'],
             ['D','A model of open access publishing where authors or their institutions pay article processing charges (APCs).'],
             ['E','A list that identified publishers that may have been problematic, for example because of a lack of peer review or fake impact factors.']],
    key:['B','C','A','E','D']},
   REV('Check your answers',[
    {t:'matchscore',of:'a1s3-match'},
    P(`**Answers:** 1: B; 2: C; 3: A; 4: E; 5: D`),
    L([`**1 – B (Predatory journals and publishers).** Text 3 describes these as entities that put self-interest ahead of scholarship, give false or misleading information and lack transparency. Definition B paraphrases this. If you chose E, you confused the publishers with a *list* of publishers (see item 4).`,
       `**2 – C (Open access).** Text 1 describes free availability on the public internet, with permission to read, download, copy and distribute. If you chose D, you confused open access itself with one *model* of providing it (see item 5).`,
       `**3 – A (DOAJ).** Text 2 describes the directory's mission to increase the visibility and accessibility of quality, peer-reviewed, open access journals.`,
       `**4 – E (Beall's List).** Text 4 describes a list, no longer maintained, of publishers that allegedly met criteria such as having no editorial board and advertising a fake impact factor.`,
       `**5 – D (Gold Open Access).** None of the texts gives a full definition. Text 4 mentions the "gold Open Access model" in the same passage as author fees (APCs). If you reached this answer by elimination, that is a legitimate strategy, but it tells you this is a term to read more about. Also notice that every journal in the DOAJ is open access, so all of them charge nothing to read. Text 2 adds that more than 12,200 of them also charge authors nothing to publish, so open access does not always mean that authors pay.`]),
    BR([`**5 out of 5:** Continue to Step 4.`,
        `**3 or 4 out of 5:** Re-read the text for each item you missed and write the definition in your own words in one sentence.`,
        `**2 or fewer:** Re-read Texts 1–4 and underline the phrase in each that carries the definition. Then cover the answer key, try the matching again and check once more.`,
        `**If you swapped 1 and 4,** Remind yourself: predatory publishers are the *problem*; Beall's List was one attempt to *identify* them.`,
        `**If you swapped 2 and 5,** Remind yourself: open access is the *outcome* (free availability); gold open access is one *route* to it.`])],{gate:['a1s3-match'],exportLabel:'Answer key and feedback'}),
   TXT('a1s3-own','Definitions you rewrote in your own words (if you missed any)',{rows:3})
  ]},
  {id:'a1s4',title:'Search the DOAJ',blocks:[
   P(`Utilise the Directory of Open Access Journals (DOAJ – [https://doaj.org](https://doaj.org)) to identify one useful publication for each of the domains specified below.`,{instr:true,task:['online']}),
   N('note','What counts as a publication',[P(`A "publication" here can be a journal or a single article. Record which one you chose.`)]),
   N('worked','Worked example: Language Policy',[P(`Here is how you might approach **Language Policy**.`),
    {t:'olist',items:[`On [https://doaj.org](https://doaj.org), choose whether to search for journals (to find a place where research on this topic is regularly published) or for articles (to find a single study). Choose journals.`,
     `Type *language policy* and look through the first page of results.`,
     `For each result that looks promising, check the title and subject area, the language(s) it publishes in and, for journals, whether the information about author fees is shown.`,
     `Choose one result using three criteria: it is clearly about the topic; it publishes in a language you can read; and it seems relevant to your teaching context.`,
     `Record the full title and the link, and write one sentence about why you chose it.`]},
    P(`If you had searched for articles instead, you would also check the year of publication and read the abstract before choosing.`)]),
   GRID('a1s4-doaj','Publications you found',[{h:'Areas of professional knowledge'},{h:'Journal or article?',type:'select',options:['','Journal','Article']},{h:'Full title and link',type:'text',w:220},{h:'Why you chose it',type:'text'}],[['ELT Methodologies'],['Language Policy'],['Reading Instruction']]),
   SC('a1s4-sc',[`You have three entries, one for each area.`,`Each entry has a full title and a working link.`,`Each entry has one sentence explaining why you chose it.`]),
   BR([`**If a search returned too many results,** Add a word that narrows it (e.g. *language policy school*).`,
       `**If a search returned irrelevant results** (e.g. *reading instruction* bringing up first-language literacy or other disciplines), try related terms such as *reading comprehension*, *second language reading* or *EFL reading*.`,
       `**If you found a journal but want something more concrete,** Open its most recent issue and choose one article.`,
       `Remember that being listed in the DOAJ is a signal about a journal's publishing practices (Text 2). It does not tell you whether a particular article is relevant to your classroom.`])
  ]}
 ]},

 /* ================= ACTIVITY 2 ================= */
 {id:'a2',title:'Evaluating the trustworthiness of publications',
  helps:['Identify and distinguish the authority of publications.','Become better at assessing how trustworthy research findings are.','Integrate evaluation of authority, trustworthiness and relevance in your research-related reading.'],
  needs:['A helpful colleague or access to a forum (optional)','Internet access (for Steps 2 and 4)'],
  time:'35–40 minutes',
  steps:[
  {id:'a2s1',title:'Rank the criteria',blocks:[
   P(`Examine the following trustworthiness criteria and rank them according to how important they seem to you.`,{instr:true,task:['reflection','discussion']}),
   N('note','Discussion option',[P(`This step can be implemented as a discussion task with a colleague or in the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community). If you work alone, the voices below take the place of the discussion.`)]),
   {t:'rank',id:'a2s1-rank',label:'Your ranking (1 = very important, 5 = not important at all)',
    items:[['Formality','Formal tone, avoiding colloquialisms and informal expressions'],
     ['Objectivity','Data, research findings and cited sources (e.g., peer-reviewed articles, books, reports) to support claims and arguments, ensuring that conclusions are well-founded.'],
     ['Clarity and Conciseness','Clear and concise expression, using technical vocabulary appropriately while ensuring that the message is easily understandable.'],
     ['Structure and Presentation','Logical structure (e.g., introduction, methods, results, discussion), adhering to specific formatting guidelines (e.g., APA, MLA, Chicago).'],
     ['Precision and Technical Accuracy','Precise language and adherence to the conventions of the field, ensuring technical accuracy and credibility.']]},
   N('voices','Three other teachers’ rankings (invented for this module)',[
    P(`**Teacher A** ranked *Objectivity* first and *Formality* last: "What I need to know is whether the claims are backed by evidence. A text can sound very formal and still have nothing behind it."`),
    P(`**Teacher B** ranked *Structure and Presentation* first: "When I read quickly, a clear structure helps me find the method and the results. If I can't find them, I can't judge the rest."`),
    P(`**Teacher C** ranked *Formality* near the top: "In my school, the head teacher and parents judge a source by how professional it sounds. If I want to use a source to argue for a change, it has to be taken seriously."`)]),
   TXT('a2s1-closest','Whose reasoning is closest to yours?',{rows:2}),
   TXT('a2s1-challenge','Whose reasoning challenges your ranking most?',{rows:2}),
   TXT('a2s1-change','Would you move any criterion after reading these voices? One sentence explaining the change, or why you kept your ranking',{rows:2}),
   REV('Show the commentary',[P(`There is no single correct ranking. Notice, however, that most of these criteria describe *how a text is written*: its tone, clarity, structure and use of conventions. The description under *Objectivity* is the one most directly about whether conclusions are supported by evidence. Keep this in mind for Step 2.`)],{gate:['a2s1-rank','a2s1-change']})
  ]},
  {id:'a2s2',title:'Evaluate an academic and a non-academic text',blocks:[
   P(`Find a publication about a topic that interests you. Evaluate the topic using the following criteria to decide how trustworthy it seems. Does looking ‘academic’ always mean that a publication is useful / professionally relevant?`,{instr:true,task:['online','discussion']}),
   N('note','How to fill in the table',[P(`Find **two** publications on the same topic that interests you: one academic (e.g. a journal article) and one non-academic (e.g. a blog post, magazine article or teacher resource page). Fill in each cell with a symbol and a few words of evidence: ✔ clearly shows this, ~ partly shows this, ✘ does not show this.`),
    P(`*Illustrative rows (invented texts, for format only):*`),
    TAB(['Evaluation criterion','Academic text','Non-academic text'],[['Formality','✔ No contractions or informal expressions','✘ Chatty tone; addresses the reader as "you guys"'],['Objectivity','✔ Reports data and cites many studies','~ Links to one study; mostly personal experience']])]),
   TXT('a2s2-topic','Your topic',{rows:1}),
   TXT('a2s2-academic','Academic text (reference or link)',{rows:1}),
   TXT('a2s2-nonacademic','Non-academic text (reference or link)',{rows:1}),
   GRID('a2s2-grid','Your evaluation',[{h:'Evaluation criterion',w:160},{h:'Academic text',type:'mark'},{h:'Non-academic text',type:'mark'}],[['Formality'],['Objectivity'],['Clarity and Conciseness'],['Structure and Presentation'],['Precision and Technical Accuracy']]),
   TXT('a2s2-reflect','Does looking ‘academic’ always mean that a publication is useful / professionally relevant?',{rows:4}),
   {t:'checks',id:'a2s2-points',label:'Self-check: a thorough answer is likely to include some of these points. Tick the ones your answer covers',selfcheck:true,gate:['a2s2-reflect'],items:[
    `Looking academic can be imitated: Texts 3 and 4 in Activity 1 describe publications that present themselves as scholarly without following good editorial practice.`,
    `An academic text can be carefully produced but concern a context very different from yours, which limits how useful it is to you.`,
    `A non-academic text can be informal but still draw on evidence or experience that matters for your teaching.`,
    `The criteria in this table mostly concern the *form* of a text. Whether you can trust its conclusions also depends on how its evidence was produced, which Step 3 addresses.`]},
   BR([`**If you answered "yes",** Look again at the first point above and re-read Text 3 in Activity 1.`,
       `**If you answered "no" without giving reasons,** Add one concrete example from your two texts.`,
       `**If both your texts scored similarly,** Consider whether you chose two texts of the same kind, and whether a sharper contrast would help.`])
  ]},
  {id:'a2s3',title:'Rate Boyd’s criteria',blocks:[
   P(`Read the following list of criteria for evaluating publications. Rate each criterion depending on how important you think it is. Are there any criteria that you believe apply better to academic work rather than reading for professional purposes? Is there any other criterion that you think should be included in this list?`,{instr:true,task:['reading','reflection']}),
   P(`In a chapter entitled *Teachers' research literacy as research-informed professional judgment*, Pete Boyd (2022) suggests several criteria that you need to consider as you read an article. The list that follows has been adapted from his work, modified to better suit the needs of professional (rather than academic) reading. Note that none of these signals, in itself, is a criterion of ‘quality’, but cumulatively they can help you understand how much trust you can place in a publication.`),
   {t:'olist',id:'boyd',items:[
    `**What type of publication is this?** Look for information about the author(s) and their institutional affiliation(s). Check for any indications that the article has gone through peer review (i.e., that it has been read and approved by other experts). Does it cite and reference other work, or otherwise show what evidence has informed it? Does it appear in a recognised journal, or on a university or government site (look for domain signals like .edu, .ac, or .gov)?`,
    `**What is the research question that the publication addresses?** Think about its scope, geographical focus and other signals that will help you understand how relevant it is to your own information needs.`,
    `**What method(s) did the researcher(s) use to gather their data?** What are the method's strengths and limitations? To what extent is the publication transparent about these? What other methods could have been used instead?`,
    `**Who or what made up the sample?** We are using the word ‘sample’ loosely here, to refer to the participant(s), class or text that was used as a source of evidence for the findings. What can this sample tell you and what can it not? How well does that context match your own setting?`,
    `**What ethical risks can you identify in the study the publication reports?** Are these acknowledged in the publication? Can you find a convincing account of how those risks were managed? Is there evidence that a formal ethical approval process was followed?`,
    `**How were the data analysed?** Is it clear, from the information in the article, what process was followed to reach the conclusions? If you had the resources, could you replicate this process on your own based on the information provided? For qualitative work, look especially for a step-by-step account of how codes and themes were generated.`,
    `**What does the study contribute to you as a teacher?** Look for new findings, theoretical development or an innovative method that you were not aware of before reading the article. What is it that makes this publication relevant to your issue, context, argument, and/or research project?`]},
   P(`Boyd, P. (2022). Teachers' research literacy as research-informed professional judgment. In P. Boyd, A. Szplit, & Z. Zbróg (Eds.), *Developing teachers' research literacy: International perspectives* (pp. 17–43). Wydawnictwo Libron. [https://insight.cumbria.ac.uk/id/eprint/6368](https://insight.cumbria.ac.uk/id/eprint/6368). Shared with a CC BY-ND license.`,{small:true}),
   {t:'rate',id:'a2s3-rate',label:'Your ratings',scale:['Not important','Slightly','Moderately','Very','Essential'],
    items:['1. Type of publication','2. Research question','3. Method(s)','4. Sample','5. Ethical risks','6. Data analysis','7. Contribution to you as a teacher']},
   TXT('a2s3-why','For the two criteria you rated highest and the one you rated lowest, one sentence each explaining your rating',{rows:4}),
   TXT('a2s3-decisive','Reread Boyd’s note that none of these signals is a criterion of quality in itself. Did you treat any single criterion as decisive?',{rows:2}),
   TXT('a2s3-academic','Criteria that apply better to academic work than to reading for professional purposes',{rows:3}),
   TXT('a2s3-missing','Another criterion you think should be included (or why the list is complete)',{rows:2}),
   REV('Show points readers often raise',[L([
    `Criteria about method detail and replicability (questions 3 and 6) are sometimes seen as more important for academic reading, where you may want to build on the study.`,
    `Criteria about the sample and the contribution (questions 4 and 7) are often seen as especially important for professional reading, where the question is whether the findings fit your classroom.`,
    `Criteria that some readers would add include: how recent the publication is; who funded the work and whether there are conflicts of interest; whether the findings agree with other studies; and whether the publication is accessible in language and cost.`])],{gate:['a2s3-rate','a2s3-missing']}),
   SC('a2s3-sc',[`You rated all seven criteria.`,`You explained at least three of your ratings.`,`You proposed at least one additional criterion, or explained why you think the list is complete.`])
  ]},
  {id:'a2s4',title:'Apply Boyd’s questions to a publication',blocks:[
   P(`Find a publication relevant to your interests and apply the prompt questions suggested above to critically evaluate it.`,{instr:true,task:['online','writing']}),
   N('worked','Worked example: an appraisal from an abstract alone',[
    P(`This uses only the information given in Activity 3 (Abstract 4 and its citation), which shows both how the questions work and how much an abstract alone cannot tell you.`),
    P(`**Publication:** Chong, S. W. (2019). A systematic review of written corrective feedback research in ESL/EFL. *Language Education & Assessment*, 2(2), 70–95.`),
    P(`**1. Type of publication.** A journal article with a DOI, by a single author. From the abstract you cannot tell the author's affiliation or whether the article was peer reviewed, so you would check the author information on the article page and the journal's statement about peer review. The abstract cites Petticrew and Roberts (2008), so the work draws on other published sources.`),
    P(`**2. Research question.** The review aims to synthesise recent research on written corrective feedback in ESL and EFL, identify trends and set an agenda for future research. It is relevant to you if you teach writing, but it maps *research trends* rather than telling you which kind of feedback works best.`),
    P(`**3. Method.** A systematic review following seven published stages, with content analysis of abstracts using a text-mining tool. A strength is that the procedure is named and systematic. A limitation is that only abstracts were analysed, not full articles, and only articles in SSCI-indexed journals were included. From the abstract you cannot see the search terms used.`),
    P(`**4. Sample.** The "sample" is 41 abstracts of primary studies. Notice that the abstract refers to "the past decade (2007–2017)" but also to studies "published between 1997 and 2017". You cannot resolve this from the abstract and would check the full text. You cannot tell which teaching contexts the 41 studies came from.`),
    P(`**5. Ethical risks.** The review analyses published texts and involves no participants, so direct ethical risk is low. You would still want to know how studies were selected, because selection shapes the picture the review presents.`),
    P(`**6. Analysis.** Twenty-two concepts were identified and grouped into five themes. You could only replicate this if the full text reports the search and selection criteria and how the software was used.`),
    P(`**7. Contribution to you as a teacher.** An overview of what has been studied and a research agenda. This is probably more useful if you plan your own classroom research on feedback than for an immediate teaching decision.`),
    P(`**Cumulative judgement.** From the abstract alone, you would place provisional trust in this publication: the procedure is systematic and clearly named, but the date discrepancy and the abstract-only analysis are points to check in the full text before relying on it.`)],{collapsed:true}),
   TXT('a2s4-pub','The publication you appraised (full reference)',{rows:2}),
   TXT('a2s4-q1','1. What type of publication is this?',{rows:3}),
   TXT('a2s4-q2','2. What is the research question that the publication addresses?',{rows:3}),
   TXT('a2s4-q3','3. What method(s) did the researcher(s) use to gather their data?',{rows:3}),
   TXT('a2s4-q4','4. Who or what made up the sample?',{rows:3}),
   TXT('a2s4-q5','5. What ethical risks can you identify?',{rows:3}),
   TXT('a2s4-q6','6. How were the data analysed?',{rows:3}),
   TXT('a2s4-q7','7. What does the study contribute to you as a teacher?',{rows:3}),
   TXT('a2s4-judgement','Your cumulative judgement',{rows:3}),
   SC('a2s4-sc',[`You answered all seven questions, writing "cannot tell" where the publication does not give the information.`,
    `For each answer, you can point to where in the publication you found the information (section, page or paragraph).`,
    `You kept apart what the publication *states*, what you *infer* and what you *cannot tell*.`,
    `You identified at least one limitation, whether or not the authors mention it.`,
    `You considered how well the context of the study matches your own.`,
    `Your overall judgement draws on several questions, not on a single signal.`],'Self-check rubric'),
   BR([`**If most of your answers were "cannot tell",** you were probably working from the abstract or a summary. Use a method from Activity 1 to get the full text and try again.`,
       `**If you found no limitations,** Return to question 3 and ask what other methods could have been used, and what they might have shown.`,
       `**If your judgement rested on one signal** (e.g. the journal's name), reread Boyd's note in Step 3.`,
       `**If you found this straightforward,** Try the questions on a publication from a different genre (e.g. a report or a practitioner article) and note which questions need adapting. Activity 5 Step 3 returns to this.`])
  ]},
  {id:'a2s5',title:'Compare a trustworthy and a dubious publication',blocks:[
   P(`Compare one trustworthy publication and one that seems more dubious about a topic that interests you. Use the space below to record some obvious differences.`,{instr:true,task:['online','writing']}),
   N('branch','Where to look',[L([`Search for your topic and look beyond the first page of results.`,
    `Unsolicited emails inviting teachers or researchers to submit to a journal, of the kind Text 3 in Activity 1 describes, can point to journals worth examining.`,
    `Commercial web pages that summarise "research" to promote a product can also offer a useful contrast.`,
    `**If you cannot find a questionable publication within about ten minutes,** Compare a peer-reviewed article with a promotional web page on the same topic. The contrast serves the same purpose.`])]),
   TXT('a2s5-high','High-quality publication (reference or link)',{rows:1}),
   TXT('a2s5-low','Questionable-quality publication (reference or link)',{rows:1}),
   GRID('a2s5-indicators','Indicator checklist (drawn from Texts 3–5 in Activity 1)',[{h:'Indicator',w:260},{h:'High-quality',type:'check'},{h:'Questionable',type:'check'}],[
    [{group:'About the outlet'}],['The editorial board is named, with affiliations you can check.'],['The peer-review process is described.'],['Any author fees are stated clearly.'],['Any impact factor or indexing claims can be verified.'],['Contact information is complete and plausible.'],
    [{group:'About the publication itself'}],['The method is described.'],['Sources are cited and referenced.'],['Claims are proportionate to the evidence.'],['The text appears to have been carefully edited.']]),
   GRID('a2s5-diff','Differences you noticed',[{h:'High-quality',type:'text'},{h:'Questionable quality',type:'text'},{h:'Where you found it',type:'text'}],[[],[],[],[],[],[]],{addable:true}),
   SC('a2s5-sc',[`At least half of the differences you recorded concern evidence, method or transparency, not only appearance.`,`For each difference, you noted where you found it.`]),
   N('resist','Caution',[P(`These indicators are signals, not proof. A single missing item (for example, a journal that is not listed in the DOAJ) does not make a publication predatory, and the boundary is contested. Keep your judgement to your own professional reading and do not publicly label a journal or author on the basis of this exercise.`)])
  ]}
 ]},

 /* ================= ACTIVITY 3 ================= */
 {id:'a3',title:'Extracting information from the literature',
  helps:['Develop strategic reading skills for academic articles.','Extract precise information and make inferences to fully understand texts.','Synthesise information from diverse publications.'],
  needs:['Internet access (for Steps 2, 3 and 4)'],
  time:'35–40 minutes',
  steps:[
  {id:'a3s1',title:'Predict content from abstracts',blocks:[
   P(`Academic articles normally start with a summary of their content, or ‘abstract’, and possibly some key words. This information can help you decide if the article is a good fit for your interests. It can also help you to predict the content of the article. Read one (or more) of the abstracts below, and try to infer the aims of each study, the methods used and the main findings.`,{instr:true,task:['reading','writing']}),
   N('options','Multiple options',[P(`There are four options in this activity, each using a different text. You may choose to engage with any one of these, depending on your strengths, interests and needs.`)]),
   SUB('Abstract 1: Language learning investment',[
    Q(`Second language learning investment relates to the willingness and effort of learners to develop language competencies which will give them a good return in terms of personal or professional benefits. Research has often explored learning investment through learners in the target language context or language teachers. This study, however, explores learning investment with undergraduate learners who are obligated to learn English as a foreign language, regardless of their future profession. To this end, a Likert-scale questionnaire was first designed to examine four investment dimensions which have been identified in previous qualitative research: motivation, necessity, engagement and agency. For validity and reliability purposes, the questionnaire was administered to six second language research professors and 41 students who completed three compulsory English courses in a BA in Inclusive Education. Content, construct and convergent validity procedures were implemented to test the investment dimensions. Regarding reliability, equivalent forms were used to check the stability of answers and to avoid primacy and fatigue effects. In addition, internal consistency and inter-item correlations were checked through Cronbach Alpha coefficients. After the validity and reliability procedures, the four dimensions of learning investment were explored among the language learners. The statistical analyses revealed favorable motivation and engagement results. Nonetheless, they raised some concerns regarding necessity and agency.\n\nKeywords: *learning investment; language learning; higher education; motivation; needs; engagement; agency; L2 quantitative research*`,
     `Dauzón-Ledesma, L., & Izquierdo, J. (2023). Language learning investment in higher education: Validation and implementation of a Likert-scale questionnaire in the context of compulsory EFL learning. *Education Sciences, 13*(4), 370. [https://doi.org/10.3390/educsci13040370](https://doi.org/10.3390/educsci13040370)`),
    abstractGrid(1),
    REV('Show the model answer',[TAB(['','Model answer'],[
     ['Aims','To design and validate a Likert-scale questionnaire on four dimensions of language learning investment (motivation, necessity, engagement and agency), and to use it to explore investment among undergraduates who are obliged to learn English regardless of their future profession.'],
     ['Method(s)','Quantitative. A questionnaire was checked for validity and reliability with six second language research professors and 41 students on a BA in Inclusive Education (content, construct and convergent validity; equivalent forms; Cronbach\'s alpha and inter-item correlations). It was then used to explore the four dimensions.'],
     ['Findings','Results were favourable for motivation and engagement but raised concerns about necessity and agency.']])],{gate:['a3s1-abs1']})]),
   SUB('Abstract 2: Critical feminist pedagogy in English language education',[
    Q(`Based on an action research project, this paper provides innovative teaching approaches for ELT to ensure gender equality through critical pedagogy. The qualitative study focuses on the reconstruction of students' perceptions through the analysis of group/peer talk allowing for the display of changing viewpoints after having dealt with feminist issues in class. Given the still limited representation of multiple individuals not only in society but also in secondary ELT coursebooks, critical educational practices have been concerned with the transformation of exclusionary schooling practices for the purpose of ensuring a just and equal future. Critical language education has been known to promote students' autonomy and sense of responsibility when it comes to the abolition of oppression and marginalization. Likewise, feminist approaches have the goal of fostering feminist principles and ethics of gender equality. The study, conducted in a German secondary school, reveals that the majority of learners welcome an exploration of feminist matters in the ELT classroom, because they recognize the significant connection between language learning and the exploration of societal issues. The implementation of critical and feminist ethics helped students become aware of prevailing gender inequalities; and their willingness for societal transformation highlights a visible increase in learner autonomy.`,
     `Granger, K., & Gerlach, D. (2024). Critical feminist pedagogy in English language education: An action research project on the implementation of feminist views in a German secondary school. *TESOL Quarterly, 58*(2), 954–977. [https://doi.org/10.1002/tesq.3272](https://doi.org/10.1002/tesq.3272)`),
    abstractGrid(2),
    REV('Show the model answer',[TAB(['','Model answer'],[
     ['Aims','To develop teaching approaches for English language teaching that promote gender equality through critical pedagogy, and to examine how students\' perceptions change after working with feminist issues in class.'],
     ['Method(s)','A qualitative action research project in a German secondary school, analysing group and peer talk.'],
     ['Findings','Most learners welcomed exploring feminist issues in English lessons because they saw a connection between language learning and societal issues. Students became aware of gender inequalities, and their willingness for societal change pointed to increased learner autonomy.']])],{gate:['a3s1-abs2']})]),
   SUB('Abstract 3: Emotion regulation and enjoyment in online collaborative writing',[
    Q(`Collaborative learning in online contexts is emotionally challenging for language learners. To achieve successful learning outcomes, language learners need to regulate their emotions and sustain positive emotions during the collaborative learning process. This study investigated language learners’ emotion regulation and enjoyment, the most extensively researched positive emotion in foreign language learning, in an online collaborative English learning environment. In the study, we collected data by surveying 336 Chinese students majoring in English who collaboratively completed a series of English language writing tasks in 108 online groups facilitated by a social media app (WeChat). Principal component analysis revealed two primary types of emotion regulation: peer regulation and group regulation. The analysis also revealed one factor underpinning enjoyment: enjoyment of online collaboration. Correlation analysis showed medium and positive relationships between peer regulation, group regulation, and enjoyment of online collaboration. Structural equation modeling analysis further found that group regulation exerted a medium-sized direct effect on enjoyment of online collaboration. Peer regulation affected enjoyment of online collaboration moderately and indirectly via group regulation. The theoretical and pedagogical implications of the findings can help to optimize face-to-face and online collaborative language learning activities.\n\nKeywords: *emotion regulation; foreign language enjoyment; online collaborative learning; foreign language learners*`,
     `Zhang, Z., Gao, X. (Andy), Liu, T., & Lee, C. B. (2022). Language learners’ emotion regulation and enjoyment in an online collaborative writing program. *Studies in Second Language Learning and Teaching, 12*(3), 459–481. [https://doi.org/10.14746/ssllt.2022.12.3.6](https://doi.org/10.14746/ssllt.2022.12.3.6)`),
    abstractGrid(3),
    REV('Show the model answer',[TAB(['','Model answer'],[
     ['Aims','To investigate language learners\' emotion regulation and enjoyment in an online collaborative English writing environment.'],
     ['Method(s)','A survey of 336 Chinese English majors who completed collaborative writing tasks in 108 online groups on WeChat, analysed with principal component analysis, correlation analysis and structural equation modelling.'],
     ['Findings','Two types of emotion regulation (peer and group) and one enjoyment factor were identified. Both types of regulation were moderately and positively related to enjoyment. Group regulation had a direct effect on enjoyment; peer regulation affected enjoyment indirectly through group regulation.']])],{gate:['a3s1-abs3']})]),
   SUB('Abstract 4: Written corrective feedback',[
    Q(`In the past decade (2007–2017), research on written corrective feedback (WCF) has been proliferating in English-as-a-Second-Language (ESL) and English-as-a-Foreign-Language (EFL) contexts, and new developments in this field of research are evident. To synthesize the latest advancement in WCF research, a systematic review of recent literature on WCF was conducted to identify current research trends and provide an agenda for future WCF studies. This study was conducted following the seven stages of systematic review suggested by Petticrew and Roberts (2008). In this article, content analysis was conducted on abstracts of 41 WCF primary studies published between 1997 and 2017 in SSCI-indexed journals in the fields of TESOL, language learning, and technology and education using a text-mining tool called Leximancer. Twenty-two word-level concepts were identified, which were grouped into five themes: types of WCF, types of writing tasks, demographics of participants, research design/methods, and types of errors. Based on the systematic review, two research tasks are identified to provide an agenda for future research.`,
     `Chong, S. W. (2019). A systematic review of written corrective feedback research in ESL/EFL. *Language Education & Assessment, 2*(2), 70–95. [https://doi.org/10.29140/lea.v2n2.138](https://doi.org/10.29140/lea.v2n2.138)`),
    abstractGrid(4),
    REV('Show the model answer',[TAB(['','Model answer'],[
     ['Aims','To synthesise recent research on written corrective feedback in ESL and EFL, identify research trends and propose an agenda for future research.'],
     ['Method(s)','A systematic review following seven stages, with content analysis of the abstracts of 41 primary studies in SSCI-indexed journals, using the text-mining tool Leximancer.'],
     ['Findings','Twenty-two concepts were grouped into five themes (types of feedback, types of writing tasks, participant demographics, research design and methods, types of errors), and two research tasks were proposed for future work.']])],{gate:['a3s1-abs4']})]),
   N('branch','If your answers differed from the model',[L([
    `**If you placed background information under Findings** (e.g. in Abstract 2, the point that coursebooks still represent people in limited ways), note that such sentences explain *why* the study was done. Findings are usually signalled by verbs such as *reveals*, *found* or *showed*.`,
    `**If you placed the names of statistical procedures under Findings** (e.g. in Abstract 3, "principal component analysis"), note that the procedure is part of the method; what it *revealed* is the finding.`,
    `**If you were unsure how many participants took part in Abstract 1,** you have noticed something real: the abstract describes a validation stage with six professors and 41 students, but does not say clearly who took part in the later exploration. Noticing what an abstract leaves unclear is part of reading it well.`,
    `**If you noticed that Abstract 4 gives two different time spans** (2007–2017 and 1997–2017), you have spotted an inconsistency that you would need to check in the full article.`,
    `**If you could not find the aim because no sentence says "The aim was…",** Look for sentences beginning "This study investigates / explores" or phrases such as "To synthesize…".`,
    `**If your answers matched the model closely,** Try a second abstract without looking at its model answer first, or move to Step 2.`,
    `**If your answers differed in several places,** Choose a second abstract, try again and check once more before moving on.`])])
  ]},
  {id:'a3s2',title:'Summarise an article for a colleague',blocks:[
   P(`Read one of the following articles and summarise its content for a colleague (e.g. “This study aimed to…”, “The main methods used were…”, “The authors found…”).`,{instr:true,task:['reading','writing']}),
   N('options','Multiple options',[P(`There are two articles in this step. You may choose to engage with just one of these, depending on your strengths, interests and needs.`)]),
   SRC('Flipped classrooms in English Language Teaching','Fisher, R., Tran, Q., & Verezub, E. (2024). Teaching English as a foreign language in higher education using flipped learning/flipped classrooms: A literature review. *Innovation in Language Learning and Teaching, 18*(4), 332–351.','https://doi.org/10.1080/17501229.2024.2302984'),
   SRC('Chatbots in language education','Huang, W., Hew, K. F., & Fryer, L. K. (2022). Chatbots for language learning—Are they really useful? A systematic review of chatbot-supported language learning. *Journal of Computer Assisted Learning, 38*(1), 237–257.','https://doi.org/10.1111/jcal.12610'),
   CH('a3s2-article','The article you read',['','Fisher, Tran and Verezub (2024): flipped classrooms','Huang, Hew and Fryer (2022): chatbots']),
   N('note','Who you are writing for',[P(`Write your summary for a particular colleague whom you picture clearly: someone who teaches in a setting like yours and has not read the article. If you prefer, record it as a voice note of about two minutes and write down its main points below.`),
    P(`Both articles are reviews of other studies. When you describe "the main methods used", describe how the *review* was carried out (what kind of review, which studies were included, how they were analysed), not the methods of the studies it reviewed.`)]),
   TXT('a3s2-summary','Your summary',{rows:8,words:true,target:[100,150]}),
   SC('a3s2-sc',[`Your summary is about 100–150 words (or two minutes).`,`It states the aim in one sentence.`,`It describes the review method, not the methods of individual reviewed studies.`,`It gives the two or three most important findings.`,`It is in your own words.`,`Any comment of your own is clearly marked as your view, separately from the findings.`,`It ends with the full reference.`]),
   BR([`**If your summary mentions participants or classroom procedures,** Check whether you are describing the reviewed studies rather than the review itself.`,
       `**If you ran out of time reading the whole article,** Read the abstract, the end of the introduction (where the aims are usually stated), the method section and the conclusion, then write your summary.`])
  ]},
  {id:'a3s3',title:'Compare with a published summary',blocks:[
   P(`The following section presents summaries of the articles from Step 2, using various text types. Compare these summaries with your previous responses to your colleague.`,{instr:true,task:['reading','reflection']}),
   N('note','Which summary to use',[P(`Choose the summary of the article you read in Step 2: the OASIS summary if you read Fisher, Tran and Verezub (2024); the TESOLGraphics infographic if you read Huang, Hew and Fryer (2022).`)]),
   SRC('Flipped classrooms in English Language Teaching [OASIS summary]','OASIS summary of: Fisher, R., Tran, Q., & Verezub, E. (2024). *Teaching English as a foreign language in higher education using flipped learning/flipped classrooms: A literature review.* Innovation in Language Learning and Teaching, 18(4), 332–351.','https://www.oasis-database.org/details/tb09j669p'),
   SRC('Chatbots in language education [TESOLGraphics infographic]','TESOLGraphics infographic of: Huang, W., Hew, K. F., & Fryer, L. K. (2022). Chatbots for language learning—Are they really useful? A systematic review of chatbot-supported language learning. *Journal of Computer Assisted Learning, 38*(1), 237–257.','https://link.kostoulas.com/ReaLiTea209'),
   TXT('a3s3-both','1. What appears in both your summary and the published one?',{rows:3}),
   TXT('a3s3-missed','2. What appears in the published summary but not in yours? Did you miss it, or leave it out on purpose?',{rows:3}),
   TXT('a3s3-mine','3. What appears in yours but not in the published summary? Is it a detail, your own inference or a misreading?',{rows:3}),
   TXT('a3s3-format','4. How does the format shape what is included?',{rows:3}),
   TXT('a3s3-change','One change you would make to your summary, or why you would keep it as it is',{rows:3}),
   SC('a3s3-sc',[`You can name at least one change you would make to your summary, or explain why you would keep it as it is.`]),
   BR([`**If the aims or main findings in your summary differ substantially from the published summary,** Reread the article's abstract and conclusion and revise your summary.`,
       `**If the differences are mainly of emphasis,** your summary may be fine: summaries written for different audiences select different points.`,
       `**If the published summary seems to say something the article does not,** Remember that summaries and infographics are themselves interpretations, and the article is the authority.`])
  ]},
  {id:'a3s4',title:'Follow up references',blocks:[
   P(`Academic articles normally include a list of references. These, too, can be useful sources of information. Review the article below, focusing on its references. Select two citations that seem relevant to your research interests and write them down. Why did you select these publications, and what do you expect to find there?`,{instr:true,task:['reading','writing']}),
   N('explain','Academic references',[P(`**Academic/Bibliographic References** (also known as Citations or Works Cited) are the sources you use to support the arguments, data or information presented in your academic writing, such as research papers, essays, theses, etc. These references typically include:`),
    L([`The name(s) of the author(s)`,`Year of publication`,`Title of the article, book, chapter, etc.`,`Publication details, such as journal name, book publisher, volume, issue number, page numbers (if applicable).`]),
    P(`In this step, a "citation" means an entry in the article's reference list.`)]),
   N('options','Multiple options',[P(`There are four possible texts to read in this activity. You may choose to engage with one of these, depending on your strengths, interests and needs.`)]),
   SRC('Article 1','Kohnke, L., Moorhouse, B. L., & Zou, D. (2023). ChatGPT for language teaching and learning. *RELC Journal, 54*, 537–550.','https://doi.org/10.1177/00336882231162868'),
   SRC('Article 2','Ou Yang, F.-C., & Wu, W.-C. V. (2015). Using mixed-modality learning strategies via e-learning for second language vocabulary acquisition. *Journal of Educational Technology & Society, 18*(3), 309–322.','https://www.jstor.org/stable/jeductechsoci.18.3.309'),
   SRC('Article 3','Stelma, J., & Kostoulas, A. (2024). Revisiting complex dynamic systems theory: Empowering language teachers and teaching. *TESOL Journal, 15*, e790.','https://doi.org/10.1002/tesj.790'),
   SRC('Article 4','Abraham, L. B. (2008). Computer-mediated glosses in second language reading comprehension and vocabulary learning: A meta-analysis. *Computer Assisted Language Learning, 21*(3), 199–226.','https://doi.org/10.1080/09588220802090246'),
   N('worked','Worked example: selecting a reference',[
    P(`Suppose you are reading an article about how teachers find resources outside academic journals, and you see this entry in its reference list:`),
    P(`Lawrence, A., Thomas, J., Houghton, J., & Weldon, P. (2015). Collecting the evidence: Improving access to grey literature and data for public policy and practice. *Australian Academic & Research Libraries, 46*(4), 229–249.`),
    P(`**Why you selected it:** You are interested in finding useful materials beyond journal articles.`),
    P(`**Where it is cited:** Look for "Lawrence et al., 2015" in the article to see what point the authors used it to support.`),
    P(`**What you expect to find:** From the title and the journal (a library journal), you expect a discussion of the difficulties of accessing grey literature, written from a library and public policy perspective rather than a language teaching one.`),
    P(`**How you will check:** Open the article's DOI and read the abstract, then compare it with your expectation. (This source appears again in Activity 4, so you can check your expectation there.)`)],{collapsed:true}),
   CH('a3s4-article','The article you reviewed',['','Article 1: Kohnke, Moorhouse and Zou (2023)','Article 2: Ou Yang and Wu (2015)','Article 3: Stelma and Kostoulas (2024)','Article 4: Abraham (2008)']),
   citeGrid('a3s4-cites'),
   SC('a3s4-sc',[`You copied both references in full and accurately.`,`Your reason for each is linked to a specific interest of yours.`,`Your expectation is specific (not just "useful information").`,`You looked at where each source is cited in the article.`,`You located at least one of the two sources, read its abstract and noted whether your expectation was confirmed, partly confirmed or not confirmed.`]),
   BR([`**If your expectation was not confirmed,** that is common: titles can mislead. Note what in the title or citation led you to expect something different.`,
       `**If you cannot access a source,** Use a method from Activity 1.`,
       `**If the references that interest you are all quite old,** you do not dismiss them: older works are often cited because they are foundational. Check how the article uses them.`])
  ]}
 ]},

 /* ================= ACTIVITY 4 ================= */
 {id:'a4',title:'Broadening reading horizons',
  helps:['Understand what grey literature is','Classify publications as white, grey or black literature','Consider how useful different kinds of literature are for your needs'],
  needs:['Internet access (for Step 2)'],
  time:'20–30 minutes',
  steps:[
  {id:'a4s1',title:'What is grey literature?',blocks:[
   P(`The following texts explain what **grey literature** is. Are there any other texts relevant to your teaching, that you believe should be included in this list?`,{instr:true,task:['reading','reflection']}),
   Q(`Grey literature is defined as: “that which is produced on all levels of government, academics, business and industry in print and electronic formats, but which is not controlled by commercial publishers. [...] As a result of its wide range of formats and scopes, gray [sic] literature is often a rich source of evidence used in systematic reviews and meta-analysis”.`,`Paez, A. (2017). Gray literature: An important resource in systematic reviews. *Journal of Evidence-Based Medicine, 10*, 233–240. [https://doi.org/10.1111/jebm.12266](https://doi.org/10.1111/jebm.12266)`),
   P(`**General categories of literature** (adapted from Lawrence et al., 2015)`),
   TAB(['Published (white) literature','Grey literature','Other (black) literature'],[[
    'Books; Book chapters; Journals; Journal articles; Magazines; Newspaper','Reports; Discussion papers; Briefings and guides; Data-sets; Conference papers; Submissions; Evaluations; Working papers; Blogs','Emails and letters; Personal notes; Minutes; Conversations; Ephemera']],{split:';'}),
   P(`Lawrence, A., Thomas, J., Houghton, J., & Weldon, P. (2015). Collecting the evidence: Improving access to grey literature and data for public policy and practice. *Australian Academic & Research Libraries, 46*(4), 229–249. [https://doi.org/10.1080/00048623.2015.1081712](https://doi.org/10.1080/00048623.2015.1081712)`,{small:true}),
   GRID('a4s1-add','Texts relevant to your teaching that you would add',[{h:'Text type',type:'text'},{h:'Your classification',type:'select',options:['','White','Grey','Black','Not sure']},{h:'Why (and anything that makes it uncertain)',type:'text'}],[[],[],[]],{addable:true}),
   REV('Compare with candidate texts',[
    P(`After making your own suggestions, compare them with these candidates:`),
    TAB(['Text type','Provisional classification','Why'],[
     ['National curriculum or syllabus documents','Grey','Produced by government, not by a commercial publisher'],
     ["Coursebook teacher's guides",'White','Published by commercial publishers'],
     ['Master\'s dissertations and doctoral theses in a university repository','Grey','Produced within academia but not controlled by commercial publishers'],
     ['Council of Europe publications on its website','Grey','Produced by an intergovernmental organisation'],
     ['The Common European Framework of Reference (2001 edition published by Cambridge University Press)','White','The same kind of content becomes white literature when a commercial publisher issues it'],
     ["Teachers' association newsletters",'Grey','Produced by organisations outside commercial publishing'],
     ['Podcasts and recorded webinars','Not in the table; arguably grey','Publicly available, outside commercial publishing, but not a written format'],
     ["Department meeting minutes; a colleague's feedback notes on your lesson",'Black','Not intended for publication']])],{gate:['a4s1-add'],exportLabel:'Candidate texts'}),
   SC('a4s1-sc',[`You added at least one text type relevant to your teaching.`,`For at least one of your suggestions, you noted why its classification was uncertain.`,`You noticed that classification depends on *who publishes the text and how*, not on its content.`])
  ]},
  {id:'a4s2',title:'Search and classify',blocks:[
   P(`Run an internet search to locate publications about a topic that is relevant to your teaching. Which of the entries would you classify as ‘white’, ‘grey’ and ‘black’ respectively? How useful does each seem for your needs? Why?`,{instr:true,task:['online','writing']}),
   N('worked','Decision questions',[{t:'olist',items:[`Was it published by a commercial publisher or in a journal, book or newspaper? → **White**`,`If not: was it produced by a government, university, organisation or individual and made publicly available? → **Grey**`,`If not: was it not intended for publication, or for a small internal audience? → **Black**`]},
    P(`**Borderline cases**`),
    L([`A blog hosted on a commercial publisher's website: Decide by what it is (a blog, usually grey), and note the publisher's involvement.`,`A preprint (see Activity 1): grey, until it is formally published.`])]),
   N('expect','What to expect',[P(`Black literature rarely appears in an internet search, because it is usually not meant to be public. If you find none, write "none found" and instead name one example of black literature from your own work (e.g. department minutes) and how useful it might be.`)]),
   TXT('a4s2-topic','Your topic',{rows:1}),
   GRID('a4s2-grid','Your classification',[{h:'Literature',w:90},{h:'Publication',type:'text',w:220},{h:'How useful for your needs, and why',type:'text'}],[['White'],['Grey'],['Black']]),
   SC('a4s2-sc',[`For each publication, you can say which decision question settled its classification.`,`Your usefulness judgement refers to your needs, not to the colour of the literature. (Grey literature may be the most relevant to your local context.)`])
  ]}
 ]},

 /* ================= ACTIVITY 5 ================= */
 {id:'a5',title:'Thinking about your progress',
  helps:['Evaluate and refine your personal research processes.','Develop critical thinking in information literacy.','Expand your toolkit for finding and assessing professionally relevant publications.'],
  needs:['A recent research question or topic you explored','Three publications you recently used for research','The ReaLiTea Research Literacy Framework'],
  time:'35–40 minutes',
  steps:[
  {id:'a5s1',title:'Reflect using the Framework',blocks:[
   P(`Refer to the [ReaLiTea Research Literacy Framework](https://www.realitea.info/frae) and engage in reflective analysis, considering the questions below.`,{instr:true,task:['reflection']}),
   N('worked','Evidence-anchored self-assessment',[{t:'olist',items:[
    `Open Part II, Section B of the ReaLiTea Research Literacy Framework and find the descriptors this module addresses (B1.3, B2 and B3).`,
    `For each descriptor, start with the **Initial** column. Move to the next column only if you can point to evidence for the one before it.`,
    `Your evidence is a specific product from this module (e.g. "your appraisal in Activity 2 Step 4"), not a general feeling.`,
    `**Checking for over-claiming.** For the highest level you are considering, ask: could you do this again with a new text, without the model answers? To test this, repeat Activity 3 Step 1 with the abstract of one of the articles from Activity 1, without looking at any model answer.`,
    `**Checking for under-claiming.** Ask: did you do anything in this module that you did not count because it felt easy?`,
    `**Noting support.** Record which support you relied on (model answers, criteria lists, worked examples), and compare this with what the descriptor at that level says about support.`,
    `Date your notes and revisit them before your next planned assessment, reading them as if someone else had written them.`]}]),
   TXT('a5s1-before','How confident were you in using advanced search techniques and tools before this module?',{rows:3}),
   TXT('a5s1-now','How do you feel about your ability to utilise these techniques now?',{rows:3}),
   TXT('a5s1-continue','Looking ahead, which skills from this module do you plan to continue using?',{rows:3}),
   TXT('a5s1-improve','What further improvements do you hope to achieve in your professional knowledge-seeking practices?',{rows:3}),
   GRID('a5s1-evidence','Your evidence record',[{h:'Descriptor',w:150},{h:'Level you can evidence',type:'select',options:['','Initial','Emerging','Advancing','Established','Not sure yet']},{h:'Evidence from this module',type:'text',w:200},{h:'Support you relied on',type:'text'}],[
    ['B1.3 Accessing information'],['B2.1 General comprehension skills'],['B2.2 Detailed comprehension'],['B2.3 Note-taking'],['B3.1 Understanding authority'],['B3.2 Evaluating trustworthiness'],['B3.3 Evaluating local relevance'],['B3.4 Evaluating potential impact']]),
   TXT('a5s1-transfer','Transfer test: the abstract you used and how you did without a model answer',{rows:3}),
   N('resist','What this cannot replace',[P(`This procedure reduces the risks of over-claiming and under-claiming, but it cannot replace a second person's view. The Framework recommends that self-assessment be followed by a validating conversation with a knowledgeable other. For claims at Advancing or Established especially, you can ask a mentor or colleague, or use the [ReaLiTea virtual Community of Practice](https://www.realitea.info/community), to look at your evidence. Treat this record as evidence towards your next planned assessment rather than as a reassessment in itself.`)])
  ]},
  {id:'a5s2',title:'A recent research question',blocks:[
   P(`Reflect on a recent research question you had. Complete the following.`,{instr:true,task:['reflection','writing']}),
   N('note','If you have not had a recent research question',[P(`Use the topic you chose in Activity 2 Step 4 or Activity 4 Step 2.`)]),
   TXT('a5s2-goal','Your primary goal for finding information on this topic was…',{rows:2}),
   TXT('a5s2-strategy','The search strategy you initially used was…',{rows:2}),
   TXT('a5s2-easy','The types of resources you found most easily were…',{rows:2}),
   TXT('a5s2-hard','The resources you struggled to find were…',{rows:2}),
   REV('Show an illustrative answer',[P(`*Invented for this module:*`),TAB(['',''],[
    ['Your primary goal for finding information on this topic was…','to decide whether flipped learning could work with a lower-secondary EFL class.'],
    ['The search strategy you initially used was…','typing *flipped classroom English* into a general search engine.'],
    ['The types of resources you found most easily were…','blog posts and commercial pages.'],
    ['The resources you struggled to find were…','studies in similar contexts, and full texts of journal articles.']])],{gate:['a5s2-goal','a5s2-strategy']}),
   SC('a5s2-sc',[`You named a specific search strategy, not just "searched online".`,`You distinguished between types of resources.`,`For each thing you struggled to find, you can name one method from this module that might help.`])
  ]},
  {id:'a5s3',title:'Adapt the criteria to other publications',blocks:[
   P(`Think about the criteria we used to evaluate various publications. To what extent do these apply to publications other than research articles? How might you modify them to be more useful for the kinds of publications that you prefer to read?`,{instr:true,task:['reflection','writing']}),
   N('worked','Worked adaptation: Boyd’s questions for a podcast episode',[L([
    `**Question 1 (type of publication)** becomes: Who are the host and guest, and what is their expertise? Are sources listed in the show notes?`,
    `**Question 3 (method)** becomes: Does the speaker explain how they know what they claim (research, classroom experience, both)?`,
    `**Question 4 (sample)** becomes: Whose classrooms or contexts do the examples come from?`,
    `**Question 5 (ethics)** becomes: Are learners or colleagues discussed in ways that could identify them?`,
    `**Question 6 (analysis)** often does not apply and could be replaced by: Are claims presented as findings or as opinions?`])]),
   TXT('a5s3-type','The kind of publication you read most often',{rows:1}),
   GRID('a5s3-grid','Your adapted criteria',[{h:'Boyd’s question',w:170},{h:'Your adapted question (or "does not apply", with a replacement)',type:'text'}],[
    ['1. Type of publication'],['2. Research question'],['3. Method(s)'],['4. Sample'],['5. Ethical risks'],['6. Data analysis'],['7. Contribution to you as a teacher']]),
   TXT('a5s3-extent','To what extent do these criteria apply to publications other than research articles? How might you modify them?',{rows:3}),
   SC('a5s3-sc',[`You chose the publication type you read most often.`,`You adapted at least three of Boyd's questions for it.`,`You identified at least one question that does not apply and either dropped it or replaced it.`])
  ]},
  {id:'a5s4',title:'Find five publications',blocks:[
   P(`Conduct an internet search for knowledge that is relevant to you as a language teacher, and find five publications. Answer these questions: Which new sources will you draw on mostly? Why is that? How will these sources improve your access to diverse perspectives? What strategies can you use to access paywalled or hard-to-find literature?`,{instr:true,task:['online','writing']}),
   GRID('a5s4-grid','Your five publications',[{h:'Publication (reference or link)',type:'text',w:240},{h:'Kind of literature',type:'select',options:['','White','Grey','Black']},{h:'How you found it',type:'text'}],[[],[],[],[],[]]),
   TXT('a5s4-new','Which new sources will you draw on mostly? Why is that?',{rows:3}),
   TXT('a5s4-diverse','How will these sources improve your access to diverse perspectives?',{rows:3}),
   TXT('a5s4-paywall','What strategies can you use to access paywalled or hard-to-find literature?',{rows:3}),
   SC('a5s4-sc',[`You found five publications.`,`They include at least two kinds of literature (see Activity 4).`,`At least one was located by a route other than a general search engine (e.g. the DOAJ, a reference list or a repository).`,`If any were paywalled, you tried at least one method from Activity 1 Step 2.`,`Your answers to the three questions refer to specific publications from your five.`]),
   N('note','Congratulations',[P(`Congratulations on successfully completing this module! Your engagement demonstrates a commitment to understanding your current capabilities. Prepare to leverage these insights as we move forward!`)])
  ]}
 ]}
 ]
};
})();
