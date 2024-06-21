const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_IMG = "../static/images/Lacto.png";
const PERSON_IMG = "../static/images/mother.png";
const BOT_NAME = "Lactomama";
const PERSON_NAME = "You";

const predefinedResponses = {
  "Muraho": "Muraho neze! Nabafasha gute?",
  "Bite":"ni byiza! mwebwe mumeze mute?",
  "mwaramutse": "Mwaramutse neza! Nabafasha gute",
  "mwiriwe":"Mwiriwe neza! Nabafasha gute",
  "Umeze ute":"Meze neza",
  "who developed you?": "Its Ajolla Inovelle Group",
  "Murabeho": "Murabeho! Mugire umunsi mwiza!",
  "Bye":"Bye! Mugire ibihe byiza",
  "what is your name": "lactomama",
 "Hello": "Hello there! How can I help you?",
"Hi": "Hello there! How can I help?",
"How are you": "I am fine until internet goes off",
"Ni ikihe kigaragaza ko mfite ihungabana ryo nyuma yo kubyara?": "Ibimenyetso birimo kumva wihebye, guhangayika cyane, no kutiyumvamo umwana.",
"Ni nini kinachoonyesha nina huzuni baada ya kujifungua?": "Dalili ni pamoja na huzuni nyingi, wasiwasi mwingi, na kutohisi upendo kwa mtoto.",
"ni ryari nkwiye gushaka ubufasha bw'umwuga?": "Niba ibimenyetso byibasiye ubuzima bwawe bwa buri munsi.",
"Ni lini niitafute msaada wa kitaalamu?": "Ikiwa dalili zinathiri maisha yako ya kila siku.",
"Ni izihe nama zagufasha kurwanya ihungabana ryo nyuma yo kubyara?": "Kuganira n'inshuti cyangwa umuryango, gukora imyitozo ngororamubiri, no kuruhuka bihagije.",
"Ni ushauri gani unaweza kusaidia kupambana na huzuni baada ya kujifungua?": "Kuzungumza na marafiki au familia, kufanya mazoezi, na kupumzika vya kutosha.",
"Ni gute umuryango wanjye wambera inkunga?": "Kumva neza ibibazo byawe no kukunganira mu mirimo y'urugo.",
"Familia yangu inaweza kunisaidiaje?": "Kusikiliza matatizo yako na kukusaidia kazi za nyumbani.",
  "Ni ryari nkwiye kubona muganga ku ihungabana ryo nyuma yo kubyara?": "Niba ibimenyetso byarushijeho kuba bibi cyangwa bidashira.",
"Ni lini niende kwa daktari kuhusu huzuni baada ya kujifungua?": "Ikiwa dalili zinakuwa mbaya zaidi au haziondoki.",
"Ni izihe ngamba zo kwirinda ihungabana ryo nyuma yo kubyara?": "Gufata umwanya wo kuruhuka, kubona ubufasha igihe cyose ukeneye, no gukora imyitozo.",
"Ni hatua zipi za kuzuia huzuni baada ya kujifungua?": "Kupumzika, kupata msaada wakati wowote unahitaji, na kufanya mazoezi.",
"Ni gute inshuti zanjye zanyunganira?": "Kumva neza ibibazo byawe no kukunganira mu bikorwa bya buri munsi.",
"Marafiki zangu zinaweza kunisaidiaje?": "Kusikiliza matatizo yako na kukusaidia katika shughuli za kila siku.",
"Ni izihe nama zafasha abagabo kumenya ko abagore babo bafite ihungabana ryo nyuma yo kubyara?": "Kwita ku mihindagurikire y'imico n'imyitwarire y'abagore babo no kumva ibibazo byabo.",
"Ni ushauri gani unaweza kusaidia wanaume kujua kama wake zao wana huzuni baada ya kujifungua?": "Kuzingatia mabadiliko ya tabia na mwenendo wa wake zao na kusikiliza matatizo yao.",
"Ni ryari ihungabana ryo nyuma yo kubyara rishobora kugaragara?": "Rishobora kugaragara mu minsi mike cyangwa amezi nyuma yo kubyara.",
"Ni lini huzuni baada ya kujifungua inaweza kutokea?": "Inaweza kutokea siku chache au miezi baada ya kujifungua.",
"Ni gute nakwita ku buzima bwanjye nyuma yo kubyara?": "Kurya neza, gukora imyitozo ngororamubiri, no kubona umwanya wo kuruhuka.",
"Ninawezaje kutunza afya yangu baada ya kujifungua?": "Kula vizuri, kufanya mazoezi, na kupata muda wa kupumzika.",
"Ni izihe ngamba zo kwirinda gusubira mu buzima busanzwe nyuma yo kubyara?": "Kugabanya umuvuduko, kubona ubufasha, no gukora gahunda itunganye.",
"Ni hatua zipi za kurudi katika maisha ya kawaida baada ya kujifungua?": "Kupunguza kasi, kupata msaada, na kufanya ratiba nzuri.",
"Ni ryari nkwiye gutangira imyitozo nyuma yo kubyara?": "Nyuma yo kubona uburenganzira bwa muganga wawe.",
"Ni lini niweze kuanza kufanya mazoezi baada ya kujifungua?": "Baada ya kupata ruhusa kutoka kwa daktari wako.",
"Ni gute umugabo wanjye yambera inkunga mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwibutsa ko uri umubyeyi mwiza.",
"Mume wangu anaweza kunisaidiaje wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukukumbusha kuwa wewe ni mzazi mzuri.",
"Ni izihe ngamba zo gukumira ihungabana ryo nyuma yo kubyara?": "Kurya indyo yuzuye, gukora imyitozo ngororamubiri, no gushaka ubufasha igihe cyose ukeneye.",
"Ni hatua zipi za kuzuia huzuni baada ya kujifungua?": "Kula chakula kamili, kufanya mazoezi, na kutafuta msaada wakati wowote unahitaji.",
"Ni gute nshobora kuganiriza muganga ku bibazo byanjye by'ihungabana ryo nyuma yo kubyara?": "Kubwira muganga ibimenyetso ufite, uko wiyumva, n'uko bikugiraho ingaruka.",
"Ninawezaje kuzungumza na daktari kuhusu matatizo yangu ya huzuni baada ya kujifungua?": "Mwambie daktari dalili ulizonazo, jinsi unavyohisi, na jinsi zinavyokuathiri.",
"Ni izihe nama zagufasha kugabanya ihungabana ryo nyuma yo kubyara?": "Gufata umwanya wo kuruhuka, gukora imyitozo ngororamubiri, no kuganira n'abandi babyeyi.",
"Ni ushauri gani unaweza kusaidia kupunguza huzuni baada ya kujifungua?": "Kupumzika vya kutosha, kufanya mazoezi, na kuzungumza na wazazi wengine.",
"Ni ryari nkwiye kuganira n'umugabo wanjye ku ihungabana ryo nyuma yo kubyara?": "Igihe cyose wumva ukeneye inkunga ye kandi utisanzuye.",
"Ni lini niweze kuzungumza na mume wangu kuhusu huzuni baada ya kujifungua?": "Wakati wowote unahitaji msaada wake na hujisikii vizuri.",
"Ni izihe nama z'ingenzi ku babyeyi bashya bafite ihungabana ryo nyuma yo kubyara?": "Gusaba ubufasha, kuganira n'abandi babyeyi, no kwita ku buzima bwawe.",
"Ni ushauri gani muhimu kwa wazazi wapya walio na huzuni baada ya kujifungua?": "Kuomba msaada, kuzungumza na wazazi wengine, na kujitunza.",
"Ni gute nshobora kwirinda kugwa mu gahinda k'ihungabana ryo nyuma yo kubyara?": "Kwitabira ibikorwa bishimishije, gukora imyitozo ngororamubiri, no kubona ubufasha igihe cyose ukeneye.",
"Ninawezaje kuepuka huzuni baada ya kujifungua?": "Kushiriki katika shughuli za kufurahisha, kufanya mazoezi, na kupata msaada wakati wowote unahitaji.",
"Ni izihe nama zafasha umuryango wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia familia yangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni ryari nkwiye kuganira n'umuganga ku byerekeye ihungabana ryo nyuma yo kubyara?": "Igihe cyose wumva ibimenyetso byiyongera cyangwa bidashira.",
"Ni lini niweze kuzungumza na daktari kuhusu huzuni baada ya kujifungua?": "Wakati wowote unahisi dalili zinaongezeka au haziondoki.",
"Ni gute nshobora gusaba ubufasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kuganira n'umuryango, inshuti, cyangwa umujyanama w'ubuzima bwo mu mutwe.",
"Ninawezaje kupata msaada wakati wa huzuni baada ya kujifungua?": "Kuzungumza na familia, marafiki, au mshauri wa afya ya akili.",
"Ni izihe ngamba zo kwirinda ihungabana ryo nyuma yo kubyara?": "Gufata umwanya wo kuruhuka, kubona ubufasha igihe cyose ukeneye, no gukora imyitozo.",
"Ni hatua zipi za kuzuia huzuni baada ya kujifungua?": "Kupumzika vya kutosha, kupata msaada wakati wowote unahitaji, na kufanya mazoezi.",
"Ni ryari nkwiye gutangira kwiyitaho mu gihe cyo kubyara?": "Ushobora gutangira kwiyitaho igihe cyose ukimara kumva ubikeneye.",
"Ni lini niweze kuanza kujitunza wakati wa kujifungua?": "Unaweza kuanza kujitunza wakati wowote unapohisi unahitaji.",
"Ni izihe nama z'ubuzima zagufasha kurwanya ihungabana ryo nyuma yo kubyara?": "Kurya indyo yuzuye, gukora imyitozo ngororamubiri, no kuganira n'abandi babyeyi.",
"Ni ushauri gani wa afya unaweza kusaidia kupambana na huzuni baada ya kujifungua?": "Kula chakula kamili, kufanya mazoezi, na kuzungumza na wazazi wengine.",
"Ni ryari nkwiye gushaka ubufasha bw'umwuga?": "Niba ibimenyetso byibasiye ubuzima bwawe bwa buri munsi.",
"Ni lini niitafute msaada wa kitaalamu?": "Ikiwa dalili zinathiri maisha yako ya kila siku.",
"Ni gute nakwita ku buzima bwanjye nyuma yo kubyara?": "Kurya neza, gukora imyitozo ngororamubiri, no kubona umwanya wo kuruhuka.",
"Ninawezaje kutunza afya yangu baada ya kujifungua?": "Kula vizuri, kufanya mazoezi, na kupata muda wa kupumzika.",
"Ni izihe nama zafasha umugabo wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia mume wangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni ryari nkwiye gushaka ubufasha bw'umwuga?": "Niba ibimenyetso byibasiye ubuzima bwawe bwa buri munsi.",
"Ni lini niitafute msaada wa kitaalamu?": "Ikiwa dalili zinathiri maisha yako ya kila siku.",
"Ni izihe nama zafasha umugabo wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia mume wangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni gute inshuti zanjye zanyunganira mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe no kukunganira mu bikorwa bya buri munsi.",
"Marafiki zangu zinaweza kunisaidiaje wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako na kukusaidia katika shughuli za kila siku.",
"Ni ryari nkwiye gushaka ubufasha bw'umwuga ku ihungabana ryo nyuma yo kubyara?": "Niba ibimenyetso byarushijeho kuba bibi cyangwa bidashira.",
"Ni lini niende kwa daktari kuhusu huzuni baada ya kujifungua?": "Ikiwa dalili zinakuwa mbaya zaidi au haziondoki.",
"Ni gute nshobora kuganiriza muganga ku bibazo byanjye by'ihungabana ryo nyuma yo kubyara?": "Kubwira muganga ibimenyetso ufite, uko wiyumva, n'uko bikugiraho ingaruka.",
"Ninawezaje kuzungumza na daktari kuhusu matatizo yangu ya huzuni baada ya kujifungua?": "Mwambie daktari dalili ulizonazo, jinsi unavyohisi, na jinsi zinavyokuathiri.",
"Ni ryari nkwiye kuganira n'umuganga ku byerekeye ihungabana ryo nyuma yo kubyara?": "Igihe cyose wumva ibimenyetso byiyongera cyangwa bidashira.",
"Ni lini niweze kuzungumza na daktari kuhusu huzuni baada ya kujifungua?": "Wakati wowote unahisi dalili zinaongezeka au haziondoki.",
"Ni izihe nama z'ubuzima zagufasha kurwanya ihungabana ryo nyuma yo kubyara?": "Kurya indyo yuzuye, gukora imyitozo ngororamubiri, no kuganira n'abandi babyeyi.",
"Ni ushauri gani wa afya unaweza kusaidia kupambana na huzuni baada ya kujifungua?": "Kula chakula kamili, kufanya mazoezi, na kuzungumza na wazazi wengine.",
"Ni izihe nama zafasha umuryango wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia familia yangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni ryari nkwiye kuganira n'umugabo wanjye ku ihungabana ryo nyuma yo kubyara?": "Igihe cyose wumva ukeneye inkunga ye kandi utisanzuye.",
"Ni lini niweze kuzungumza na mume wangu kuhusu huzuni baada ya kujifungua?": "Wakati wowote unahitaji msaada wake na hujisikii vizuri.",
"Ni izihe nama z'ingenzi ku babyeyi bashya bafite ihungabana ryo nyuma yo kubyara?": "Gusaba ubufasha, kuganira n'abandi babyeyi, no kwita ku buzima bwawe.",
"Ni ushauri gani muhimu kwa wazazi wapya walio na huzuni baada ya kujifungua?": "Kuomba msaada, kuzungumza na wazazi wengine, na kujitunza.",
"Ni ryari nkwiye gutangira imyitozo nyuma yo kubyara?": "Nyuma yo kubona uburenganzira bwa muganga wawe.",
"Ni lini niweze kuanza kufanya mazoezi baada ya kujifungua?": "Baada ya kupata ruhusa kutoka kwa daktari wako.",
"Ni gute nshobora kwirinda kugwa mu gahinda k'ihungabana ryo nyuma yo kubyara?": "Kwitabira ibikorwa bishimishije, gukora imyitozo ngororamubiri, no kubona ubufasha igihe cyose ukeneye.",
"Ninawezaje kuepuka huzuni baada ya kujifungua?": "Kushiriki katika shughuli za kufurahisha, kufanya mazoezi, na kupata msaada wakati wowote unahitaji.",
"Ni gute umuryango wanjye wambera inkunga mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva ibibazo byawe no kukunganira mu mirimo y'urugo.",
"Familia yangu inaweza kunisaidiaje wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako na kukusaidia kazi za nyumbani.",
"Ni izihe nama zafasha umugabo wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia mume wangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni izihe nama zafasha umuryango wanjye kumfasha mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe, kukunganira mu mirimo y'urugo, no kukwereka urukundo.",
"Ni ushauri gani unaweza kusaidia familia yangu kunisaidia wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako, kukusaidia kazi za nyumbani, na kukuonyesha upendo.",
"Ni izihe nama z'ubuzima zagufasha kurwanya ihungabana ryo nyuma yo kubyara?": "Kurya indyo yuzuye, gukora imyitozo ngororamubiri, no kuganira n'abandi babyeyi.",
"Ni ushauri gani wa afya unaweza kusaidia kupambana na huzuni baada ya kujifungua?": "Kula chakula kamili, kufanya mazoezi, na kuzungumza na wazazi wengine.",
"Ni ryari nkwiye kuganira n'umuganga ku byerekeye ihungabana ryo nyuma yo kubyara?": "Igihe cyose wumva ibimenyetso byiyongera cyangwa bidashira.",
"Ni lini niweze kuzungumza na daktari kuhusu huzuni baada ya kujifungua?": "Wakati wowote unahisi dalili zinaongezeka au haziondoki.",
"Ni izihe nama z'ingenzi ku babyeyi bashya bafite ihungabana ryo nyuma yo kubyara?": "Gusaba ubufasha, kuganira n'abandi babyeyi, no kwita ku buzima bwawe.",
"Ni ushauri gani muhimu kwa wazazi wapya walio na huzuni baada ya kujifungua?": "Kuomba msaada, kuzungumza na wazazi wengine, na kujitunza.",
"Ni gute nshobora kwirinda kugwa mu gahinda k'ihungabana ryo nyuma yo kubyara?": "Kwitabira ibikorwa bishimishije, gukora imyitozo ngororamubiri, no kubona ubufasha igihe cyose ukeneye.",
"Ninawezaje kuepuka huzuni baada ya kujifungua?": "Kushiriki katika shughuli za kufurahisha, kufanya mazoezi, na kupata msaada wakati wowote unahitaji.",
"Ni ryari nkwiye gushaka ubufasha bw'umwuga ku ihungabana ryo nyuma yo kubyara?": "Niba ibimenyetso byarushijeho kuba bibi cyangwa bidashira.",
"Ni lini niende kwa daktari kuhusu huzuni baada ya kujifungua?": "Ikiwa dalili zinakuwa mbaya zaidi au haziondoki.",
"Ni gute inshuti zanjye zanyunganira mu gihe cy'ihungabana ryo nyuma yo kubyara?": "Kumva neza ibibazo byawe no kukunganira mu bikorwa bya buri munsi.",
"Marafiki zangu zinaweza kunisaidiaje wakati wa huzuni baada ya kujifungua?": "Kusikiliza matatizo yako na kukusaidia katika shughuli za kila siku.",
"Ni izihe nama zagufasha kurwanya ihungabana ryo nyuma yo kubyara?": "Kuganira n'inshuti cyangwa umuryango, gukora imyitozo ngororamubiri, no kuruhuka bihagije.",
"Ni ushauri gani unaweza kusaidia kupambana na huzuni baada ya kujifungua?": "Kuzungumza na marafiki au familia, kufanya mazoezi, na kupumzika vya kutosha.",

  
};

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  botResponse(msgText);
});

function botResponse(userInput) {
  const input = userInput.toLowerCase();
  let response = "I'm sorry, I don't understand that.";

  for (const keyword in predefinedResponses) {

if (input.includes(keyword.toLowerCase())) {
  response = predefinedResponses[keyword];
  break;
}
}

appendMessage(BOT_NAME, BOT_IMG, "left", response);
}

function appendMessage(name, img, side, text) {
const msgHTML = `
  <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubble">
      <div class="msg-info">
        <div class="msg-info-name">${name}</div>
        <div class="msg-info-time">${formatDate(new Date())}</div>
      </div>

      <div class="msg-text">${text}</div>
    </div>
  </div>
`;

msgerChat.insertAdjacentHTML("beforeend", msgHTML);
msgerChat.scrollTop += 500;
}

function get(selector, root = document) {
return root.querySelector(selector);
}

function formatDate(date) {
const h = "0" + date.getHours();
const m = "0" + date.getMinutes();

return `${h.slice(-2)}:${m.slice(-2)}`;
}
