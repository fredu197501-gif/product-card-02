// 1) "Кафе с напитками"
// 3) Создаем абстрактный класс Drink.
class Drink {
  #temperature;

  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} \u20bd`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  #brewDrinks() {
    console.log(`[Готовим напиток]: Из "${this.drinkType}" при температуре ${this.getTemperature()}\u00b0C`);
    this.isReady = true;
  }

  serve() {
    this.#brewDrinks();
    if (this.isReady) {
      console.log(`Ваш напиток "${this.name}" с "${this.hasAdditive()}" готов!`);
    }
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, grainType, hasMilk) {
    super(name, size, price);
    this.drinkType = grainType;
    this.hasAdditive = () => hasMilk;
    this.setTemperature(temperature);
  }
}

const firstCoffee = new Coffee("Капучино", "M", 150, 70, "молотого кофе, сорта Арабика", "молоком");

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, hasLemon) {
    super(name, size, price);
    this.drinkType = teaType;
    this.setTemperature(temperature);
    this.hasAdditive = () => hasLemon;
  }
}

const firstTea = new Tea("Черный чай", "S", 100, 80, "крупно листового Цейлонского чая", "лимоном");

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, hasIce) {
    super(name, size, price);
    this.drinkType = flavor;
    this.setTemperature(temperature);
    this.hasAdditive = () => hasIce;
  }
}

const firstLemonade = new Lemonade("Лимонад", "XL", 120, 5, "свежевыжатого лимонного сока", "льдом");

console.log("--- Заказ 1: Кафе---");
console.log(firstCoffee.getInfo());
firstCoffee.serve();
console.log("--- Заказ 2: Кафе---");
console.log(firstTea.getInfo());
firstTea.serve();
console.log("--- Заказ 3: Кафе---");
console.log(firstLemonade.getInfo());
firstLemonade.serve();

// 4) Создаем класс "Кафе". Он у нас будет принимать 2 параметра, название кафе и его месторасположение.
class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: ${this.name}, Местоположение: ${this.location}`;
  }

  orderBeverage(beverage) {
    console.log(`\n--- Новый заказ в кафе "${this.name}"---`);
    console.log(`[Клиент]: Я хочу заказать ${beverage.getInfo()} с ${beverage.hasAdditive()}`);
    beverage.serve();
  }
}

const myCafe = new Cafe("Мое Кафе", "ул. Абая, д. 73");
console.log(myCafe.getInfo());

// Делаем заказ напитка, получаем информацию про напиток
myCafe.orderBeverage = function (beverage) {
  console.log(`[Заказать]: В кафе "${this.name}" заказан напиток: ${beverage.name}, размер: ${beverage.size}, цена: ${beverage.price} \u20bd`);
  beverage.serve();
}

class Beverage {
  constructor(name, size, price,) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} \u20bd`;
  }
  serve() {
    console.log(`Ваш напиток "${this.name}" готов!`);
  }
}

const myCoffee = new Beverage("Капучино", "M", 150);
const myTea = new Beverage("Черный чай", "S", 100);
const myLemonade = new Beverage("Лимонад", "XL", 120);

myCafe.orderBeverage(myCoffee);
myCafe.orderBeverage(myTea);
myCafe.orderBeverage(myLemonade);