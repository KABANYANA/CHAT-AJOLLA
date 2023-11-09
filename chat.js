const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_IMG = "../static/images/Lacto.png";
const PERSON_IMG = "../static/images/mother.png";
const BOT_NAME = "Ajolla";
const PERSON_NAME = "You";

const predefinedResponses = {
  "hello": "Hello there! How can I help you?",
  "how are you": "I am fine until internet goes off",
  "who developed you?": "Its Ajolla Inovelle Group",
  "goodbye": "Goodbye! Have a nice day!",
  "do you know a joke":"hhhhhh, You are funny",
  "what is your name": "lactomama",
  "what is the role of a lactation consultant?" : "a lactation consultant is a professional who provides support and guidance to new mothers in breastfeeding and lactation-related issues.",
"how can a lactation consultant help a first-time mother?" :"A lactation consultant can help a first-time mother with breastfeeding techniques, addressing any challenges or concerns, and providing education on proper latch, milk supply, and pumping.",
"what are some common breastfeeding challenges faced by first-time mothers?":"Some common challenges include sore nipples, low milk supply, engorgement, mastitis, and difficulty with latching",
"what are some tips for increasing milk supply?" :"Tips for increasing milk supply include frequent breastfeeding or pumping, ensuring proper latch, staying hydrated, eating a balanced diet, and getting enough rest.",
"how long should a first-time mother breastfeed her baby?" : "The World Health Organization recommends exclusive breastfeeding for the first six months, followed by continued breastfeeding along with complementary foods for up to two years or beyond.",
 "what are some signs that a baby is getting enough breast milk?" :"Signs include steady weight gain, six or more wet diapers a day, regular bowel movements, and contentment after feeding.",
"can a lactation consultant help with breastfeeding positions?" :"Yes, a lactation consultant can demonstrate different breastfeeding positions that can help improve latch and comfort for both the mother and baby.",
 "what are some common misconceptions about breastfeeding?" :"Some misconceptions include that breastfeeding is always easy, that formula is just as good as breast milk, and that breastfeeding will cause sagging breasts.",
"how can a first-time mother prevent or treat sore nipples?" : "Proper latch, using lanolin cream, air-drying nipples after feeding, and using breast shells or nipple shields can help prevent or treat sore nipples.",
"what are some benefits of breastfeeding for both the mother and baby?" :"Benefits for the baby include receiving optimal nutrition, improved immune system, reduced risk of infections, and bonding with the mother. Benefits for the mother include reduced risk of certain cancers, faster postpartum recovery, and bonding with the baby.",
"can a lactation consultant help with breastfeeding after a C-section?" :"Yes, a lactation consultant can provide guidance on breastfeeding positions that are comfortable for mothers who have had a C-section and help address any challenges that may arise.",
"what are some common myths about breastfeeding?" :" Some myths include that small breasts produce less milk, that breastfeeding is painful, and that breastfeeding will prevent the mother from getting pregnant.",
"how can a first-time mother manage breastfeeding in public?" :"A lactation consultant can provide tips on discreet breastfeeding techniques, using nursing covers or clothing, and finding comfortable and private spaces for feeding.",
"what are some signs that a baby is not latching properly?" : "Signs include pain or discomfort for the mother during feeding, clicking sounds while nursing, and poor weight gain for the baby.",
"can a lactation consultant help with pumping and storing breast milk?" :" Yes, a lactation consultant can provide guidance on proper pumping techniques, storage guidelines, and how to maintain milk supply while pumping.",
"what are some common reasons for low milk supply?" :" Some common reasons include ineffective latch, infrequent or inconsistent breastfeeding or pumping, certain medications, and high levels of stress.",
"can a lactation consultant help with weaning a baby from breastfeeding?" :"Yes, a lactation consultant can provide guidance on gradual weaning techniques and address any concerns or challenges that may arise during the process.",
"what are some tips for breastfeeding twins or multiples?" :" Tips include using a nursing pillow, feeding both babies simultaneously, seeking support from a lactation consultant, and ensuring an adequate milk supply through frequent feeding or pumping.",
"can a lactation consultant help with breastfeeding after returning to work?" :" Yes, a lactation consultant can provide guidance on maintaining milk supply, pumping schedules, and transitioning the baby to bottle feeding while still breastfeeding when together.",
"what are some signs that a baby is not getting enough breast milk?": "Signs include excessive crying, poor weight gain, fewer wet diapers than usual, and signs of dehydration.",
"can a lactation consultant help with breastfeeding positions for mothers with large breasts?" :"Yes, a lactation consultant can provide guidance on positions that are comfortable and effective for mothers with large breasts.",
"what are some tips for managing engorgement?":" Tips include frequent breastfeeding or pumping, applying warm compresses before feeding, using cold compresses after feeding, and massaging the breasts to relieve pressure.",
"can a lactation consultant help with breastfeeding after a premature birth?":" Yes, a lactation consultant can provide specialized support and guidance for mothers of premature babies, including techniques to stimulate milk production and strategies for feeding in the neonatal intensive care unit (NICU).",
"what are some common breastfeeding positions?" :"Common positions include cradle hold, cross-cradle hold, football hold, side-lying position, and laid-back breastfeeding.",
"can a lactation consultant help with breastfeeding while dealing with postpartum depression?" :"Yes, a lactation consultant can provide emotional support, resources, and guidance on breastfeeding techniques that can help alleviate symptoms of postpartum depression.",
"what are some tips for managing oversupply of breast milk?" :"Tips include feeding on one breast per feeding, using breast compression to control flow, and pumping for comfort rather than to empty the breasts completely.",
"can a lactation consultant help with breastfeeding after breast surgery?" :" Yes, a lactation consultant can provide guidance on breastfeeding after breast surgery, including techniques to improve latch and milk transfer.",
"what are some tips for breastfeeding in the early days after birth?" :" Tips include frequent feeding, ensuring proper latch, seeking support from a lactation consultant, and taking care of oneself by staying hydrated and getting enough rest.",
"can a lactation consultant help with transitioning from breastfeeding to solid foods?" :"Yes, a lactation consultant can provide guidance on introducing solid foods, maintaining breastfeeding alongside solids, and addressing any concerns or challenges that may arise.",
"what are some tips for managing a baby's reflux while breastfeeding?":" Tips include feeding in an upright position, burping frequently during and after feeds, and avoiding overfeeding.",
"can a lactation consultant help with breastfeeding after a tongue tie or lip tie revision?" :"Yes, a lactation consultant can provide guidance on proper latch and feeding techniques after a tongue tie or lip tie revision, ensuring optimal milk transfer.",
"what are some tips for breastfeeding a baby with a cleft lip or palate?":" Tips include using specialized feeding devices, seeking support from a lactation consultant experienced in cleft feeding, and maintaining milk supply through pumping.",
"can a lactation consultant help with breastfeeding after a baby's hospitalization?" :"Yes, a lactation consultant can provide guidance on maintaining milk supply, pumping schedules, and techniques to support breastfeeding when the baby is in the hospital.",
"what are some tips for managing a baby's food allergies while breastfeeding?":" Tips include eliminating allergenic foods from the mother's diet, seeking guidance from a healthcare professional, and monitoring the baby's symptoms.",
"can a lactation consultant help with breastfeeding after a baby's tongue or lip tie diagnosis?":" Yes, a lactation consultant can provide guidance on feeding techniques, referral to specialists for evaluation and revision, and ongoing support throughout the process.",
"what are some tips for breastfeeding a baby with a high palate?" :" Tips include experimenting with different breastfeeding positions, seeking guidance from a lactation consultant, and ensuring proper latch and milk transfer.",
"can a lactation consultant help with breastfeeding after a baby's NICU stay?":"Yes, a lactation consultant can provide guidance on pumping, milk storage, transitioning to breastfeeding, and addressing any challenges that may arise after a baby's NICU stay."
  
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
    if (input.includes(keyword)) {
      response = predefinedResponses[keyword];
      break;
    }
  }

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", response);
  }, 1000);
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