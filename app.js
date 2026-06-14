const realms = {
  logic: {
    stage: "Logic Ruins",
    kicker: "Ancient Greek Trial",
    title: "Logic Ruins",
    description:
      "Children learn how to sort, compare, predict, prove, and build strategies before school subjects get complicated.",
    lessons: [
      ["Pattern", "Spot what repeats"],
      ["Classification", "Group by hidden rules"],
      ["Deduction", "Know what must be true"],
    ],
    challengeTitle: "Which artifact belongs?",
    challengeText:
      "The temple accepts round, red objects. Choose the object that follows both rules.",
    choices: ["Blue circle", "Red triangle", "Red coin", "Green gem"],
    answer: "Red coin",
    sideTitle: "Invent a Board Game",
    sideText:
      "Make a tiny strategy game with three rules, then teach someone how to win.",
    reward: "Pattern Lens",
  },
  language: {
    stage: "Glyph Tomb",
    kicker: "Undeciphered Language",
    title: "Glyph Tomb",
    description:
      "Learners explore sound, syntax, meaning, symbols, roots, and secret languages through scroll puzzles.",
    lessons: [
      ["Sound", "Hear vowels and consonants"],
      ["Syntax", "Change order, change meaning"],
      ["Semantics", "Decode what symbols mean"],
    ],
    challengeTitle: "Decode the scroll",
    challengeText:
      "In the tomb language, 'lu' means light and 'mar' means water. What might 'lu-mar' mean?",
    choices: ["A dark cave", "Moon water", "A fast bird", "A loud drum"],
    answer: "Moon water",
    sideTitle: "Secret Language Club",
    sideText:
      "Create five symbols, five sounds, and teach two people to say a sentence.",
    reward: "Sun Scroll",
  },
  heart: {
    stage: "Skyheart",
    kicker: "Weather of Feelings",
    title: "Skyheart",
    description:
      "Children practice naming emotions, calming the body, understanding others, and making art that communicates feeling.",
    lessons: [
      ["Name It", "Find the feeling"],
      ["Regulate", "Choose a calming tool"],
      ["Express", "Turn feeling into art"],
    ],
    challengeTitle: "Calm the storm",
    challengeText:
      "A friend shouts because their tower fell. Which choice helps de-escalate?",
    choices: ["Shout louder", "Laugh at it", "Ask what happened", "Walk away forever"],
    answer: "Ask what happened",
    sideTitle: "Paint Red",
    sideText:
      "Paint the feeling of seeing red without drawing the color red itself.",
    reward: "Calm Umbrella",
  },
};

const realmScenes = {
  logic: `
    <svg viewBox="0 0 620 680" preserveAspectRatio="none">
      <path class="scene-cloud" d="M64 118 C92 82 150 92 166 132 C210 120 242 146 238 182 C232 224 162 226 132 204 C94 230 34 210 36 166 C38 144 48 128 64 118 Z" />
      <path class="scene-cloud" d="M408 86 C436 54 500 60 518 100 C566 96 600 124 594 164 C588 206 520 204 484 186 C444 210 388 194 386 150 C384 124 394 102 408 86 Z" />
      <path class="scene-grass-dark" d="M0 438 C88 396 160 424 238 384 C348 330 450 382 620 326 L620 680 L0 680 Z" />
      <path class="scene-grass" d="M0 500 C104 438 220 470 310 420 C420 360 516 412 620 372 L620 680 L0 680 Z" />
      <path class="scene-stone" d="M78 448 L250 448 L224 256 L110 256 Z" />
      <path class="scene-stone-dark" d="M58 256 L276 256 L166 166 Z" />
      <rect class="scene-stone" x="106" y="284" width="30" height="142" rx="8" />
      <rect class="scene-stone" x="155" y="284" width="30" height="142" rx="8" />
      <rect class="scene-stone" x="204" y="284" width="30" height="142" rx="8" />
      <circle class="scene-blue-stone" cx="170" cy="354" r="26" />
      <path class="scene-line" d="M140 512 C190 468 238 506 276 460 C324 400 398 404 452 358" />
      <path class="scene-stone" d="M404 504 L520 504 L504 350 L422 350 Z" />
      <path class="scene-stone-dark" d="M392 350 L532 350 L462 292 Z" />
      <rect class="scene-deep" x="446" y="406" width="38" height="98" rx="18" />
      <path class="scene-gold" d="M454 248 l22 -42 l22 42 Z" />
      <circle class="scene-coral" cx="496" cy="286" r="15" />
    </svg>
  `,
  language: `
    <svg viewBox="0 0 620 680" preserveAspectRatio="none">
      <path class="scene-cloud" d="M70 104 C104 66 170 76 188 120 C238 110 276 144 268 186 C260 232 188 228 150 206 C110 236 48 212 46 168 C44 140 54 118 70 104 Z" />
      <path class="scene-blue-stone" d="M0 308 C126 236 230 274 324 214 C422 150 518 220 620 164 L620 680 L0 680 Z" />
      <path class="scene-deep" d="M0 430 C108 376 202 408 310 348 C420 286 520 340 620 286 L620 680 L0 680 Z" />
      <path class="scene-stone" d="M116 544 L116 366 C116 270 194 192 310 192 C426 192 504 270 504 366 L504 544 Z" />
      <path class="scene-stone-dark" d="M164 544 L164 382 C164 306 220 250 310 250 C400 250 456 306 456 382 L456 544 Z" />
      <path class="scene-deep" d="M218 544 L218 400 C218 348 256 312 310 312 C364 312 402 348 402 400 L402 544 Z" />
      <path class="scene-line" d="M158 396 L464 396" />
      <path class="scene-line" d="M178 342 L442 342" />
      <rect class="scene-gold" x="70" y="458" width="96" height="136" rx="18" />
      <path class="scene-line" d="M92 492 H144 M92 528 H132 M92 564 H150" />
      <rect class="scene-gold" x="466" y="438" width="86" height="124" rx="18" />
      <path class="scene-line" d="M486 474 H532 M486 510 H520" />
      <circle class="scene-coral" cx="310" cy="280" r="18" />
      <path class="scene-gold" d="M300 280 l10 -42 l10 42 l42 10 l-42 10 l-10 42 l-10 -42 l-42 -10 Z" />
    </svg>
  `,
  heart: `
    <svg viewBox="0 0 620 680" preserveAspectRatio="none">
      <path class="scene-cloud" d="M58 236 C92 176 188 178 224 232 C282 204 354 238 348 300 C342 374 238 380 186 340 C132 386 36 356 28 286 C24 264 34 246 58 236 Z" />
      <path class="scene-cloud" d="M314 186 C350 120 464 124 496 190 C556 174 616 218 606 280 C594 350 492 348 448 312 C396 360 300 340 294 268 C292 236 298 210 314 186 Z" />
      <path class="scene-cloud" d="M104 492 C152 432 258 448 286 514 C350 486 430 526 418 592 C406 652 286 650 242 616 C176 656 72 632 64 560 C60 532 74 508 104 492 Z" />
      <path class="scene-blue-stone" d="M210 392 C238 332 376 330 408 392 L408 520 L210 520 Z" />
      <rect class="scene-blue-stone" x="250" y="276" width="46" height="170" rx="20" />
      <rect class="scene-blue-stone" x="324" y="240" width="50" height="206" rx="20" />
      <path class="scene-gold" d="M242 276 L274 220 L306 276 Z" />
      <path class="scene-gold" d="M314 240 L350 174 L386 240 Z" />
      <path class="scene-coral" d="M288 456 C288 420 332 420 332 456 C332 494 310 506 310 506 C310 506 288 494 288 456 Z" />
      <path class="scene-line" d="M96 390 C152 338 216 362 252 318" />
      <path class="scene-line" d="M378 356 C432 304 490 332 540 284" />
      <circle class="scene-gold" cx="104" cy="326" r="18" />
      <circle class="scene-coral" cx="516" cy="408" r="16" />
      <circle class="scene-blue-stone" cx="470" cy="516" r="20" />
    </svg>
  `,
};

const navItems = document.querySelectorAll(".nav-item");
const realmButtons = document.querySelectorAll("[data-realm]");
const homePanel = document.querySelector("#home-panel");
const realmPanel = document.querySelector("#realm-panel");
const realmVisual = document.querySelector("#realm-visual");
const realmScene = document.querySelector("#realm-scene");
const stageTitle = document.querySelector("#stage-title");
const lessonStrip = document.querySelector("#lesson-strip");
const choiceGrid = document.querySelector("#choice-grid");

function activateRealm(realmName) {
  if (realmName === "home") {
    homePanel.classList.remove("hidden");
    realmPanel.classList.add("hidden");
    stageTitle.textContent = "Choose a Realm";
  } else {
    const realm = realms[realmName];
    homePanel.classList.add("hidden");
    realmPanel.classList.remove("hidden");
    stageTitle.textContent = realm.stage;
    realmVisual.className = `realm-visual ${realmName}`;
    realmScene.innerHTML = realmScenes[realmName];
    document.querySelector("#realm-kicker").textContent = realm.kicker;
    document.querySelector("#realm-title").textContent = realm.title;
    document.querySelector("#realm-description").textContent = realm.description;
    document.querySelector("#challenge-title").textContent = realm.challengeTitle;
    document.querySelector("#challenge-text").textContent = realm.challengeText;
    document.querySelector("#side-title").textContent = realm.sideTitle;
    document.querySelector("#side-text").textContent = realm.sideText;
    document.querySelector("#side-reward").textContent = realm.reward;

    lessonStrip.innerHTML = realm.lessons
      .map(([label, text]) => `<div class="lesson-pill"><span>${label}</span><strong>${text}</strong></div>`)
      .join("");

    choiceGrid.innerHTML = realm.choices
      .map((choice) => `<button type="button">${choice}</button>`)
      .join("");

    choiceGrid.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        choiceGrid.querySelectorAll("button").forEach((item) => {
          item.classList.remove("correct", "wrong");
        });
        button.classList.add(button.textContent === realm.answer ? "correct" : "wrong");
      });
    });
  }

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.realm === realmName);
  });
}

realmButtons.forEach((button) => {
  button.addEventListener("click", () => activateRealm(button.dataset.realm));
});

document.querySelector("#ask-button").addEventListener("click", () => {
  const input = document.querySelector("#curiosity-input");
  const fairyLine = document.querySelector("#fairy-line");
  const question = input.value.trim();

  if (!question) {
    fairyLine.textContent = "Try asking about a pattern, a word, a feeling, or a mystery you noticed today.";
    return;
  }

  fairyLine.textContent =
    "Great question. I would turn that into a quest: notice three examples, make one guess, then test it like a tiny scientist.";
  input.value = "";
});

activateRealm("home");
