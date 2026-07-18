const cardSelector = ".card";
const changeColorAllCardButton = document.querySelector("#change-color-all-card");
const changeColorCard1Button = document.querySelector("#change-card_1-color");
const card1Selector = ".card_1";

const greenColorHash = "#4CAF50";
const blueColorHash = "#0000ff";

const containerCards = Array.from(document.querySelectorAll(cardSelector));
const card1ContainerCard = document.querySelector(card1Selector);

if (changeColorAllCardButton) {
  changeColorAllCardButton.addEventListener("click", () => {
    containerCards.forEach((card) => {
      if (card) {
        card.style.backgroundColor = greenColorHash;
      }
    });
  });
}

if (changeColorCard1Button && card1ContainerCard) {
  changeColorCard1Button.addEventListener("click", () => {
    card1ContainerCard.style.backgroundColor = blueColorHash;
  });
}

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle)

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com")
  } else {
    return;
  }
}

const outputLogButton = document.querySelector("#output-console-log");

if (outputLogButton) {

  outputLogButton.addEventListener("click", () => outputConsoleLog("Дз №6"))
}

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
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
  })
}

// Если кнопки или карточки нет на странице, код не вызывает ошибок.

