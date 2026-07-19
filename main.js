const ALL_CARD_SELECTOR = ".card";
const FIRST_CARD_SELECTOR = ".card_1";

const changeAllCardColorButton = document.querySelector("#change-all-card-color");
const changeFirstCardColorButton = document.querySelector("#change-first-card-color");

const greenColorHash = "#4CAF50";
const blueColorHash = "#0000ff";

const allCards = Array.from(document.querySelectorAll(ALL_CARD_SELECTOR));
const firstCard = document.querySelector(FIRST_CARD_SELECTOR);

if (changeAllCardColorButton) {
  changeAllCardColorButton.addEventListener("click", () => {
    allCards.forEach((card) => {
      if (card) {
        card.style.backgroundColor = greenColorHash;
      }
    });
  });
}

if (changeFirstCardColorButton && firstCard) {
  changeFirstCardColorButton.addEventListener("click", () => {
    firstCard.style.backgroundColor = blueColorHash;
  });
}

const openGoogleButton = document.querySelector("#open-google");

if (openGoogleButton) {
  openGoogleButton.addEventListener("click", openGoogle);
}

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  }
}

const outputLogButton = document.querySelector("#output-console-log");

if (outputLogButton) {
  outputLogButton.addEventListener("click", () => outputConsoleLog("Дз №6"));
}

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const mainTitle = document.querySelector(".layout__title");

if (mainTitle) {
  mainTitle.addEventListener("mouseenter", () => {
    console.log(mainTitle.textContent);
  });
}

const toggleButton = document.querySelector("#toggle-color-button");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
  });
}

