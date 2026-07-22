// функция которая принимает два параметра.
function displayWether(city, temperature) {
  const message = `Сейчас в ${city}, Температура: ${temperature}\u00B0C по Цельсию`;
  console.log(message);
}
displayWether("Бишкеке", 40);


// Переменная функция скорость света
function checkSpeedOfLight(speed) {
  const speed_of_light = 299792458;


  if (speed > speed_of_light) {
    console.log("Сверхсветовая скорость");
  } else if (speed === speed_of_light) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  }
}

checkSpeedOfLight(300000000);
checkSpeedOfLight(299792458);
checkSpeedOfLight(200000000);

// Переменная функция покупка
const produkt = "Самокат:";
const prise = 1000;

function buyProdukt(budget) {
  if (budget >= prise) {
    console.log(`${produkt} Самокат приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = budget - prise;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

console.log("--- Test 1: Баланса достаточно ---");
buyProdukt(1100);

console.log("--- Test 2: Баланса не достаточно ---");
buyProdukt(900);

// Вычислитель возроста
function checkAge(name, birthYear) {
  const cyrrenYear = 2026;
  const age = cyrrenYear - birthYear;
  console.log(`${name} Ваш возрост ${age} лет.`);
}

checkAge("Хабиб", 2000);
checkAge("Conor", 1990);

// Три переменных, на мое усмотрение
const athleteName = "Тимур";
let goldMedels = 3;
const isActive = true;
