// №3 Объект на основе данных. 
const student = {
  name: "Уланбек",
  secondname: "Токтонбаев",
  mail: "fredu197501@gmail.com",
  job: "Тренер по дзюдо",
  status: "В разводе",
  age: 53,
  city: "Бишкек",
  country: "Кыргызстан",
};

console.log(student);

// №4 Объект хранящий данные автомобиля
const auto = {
  brand: "Toyota",
  model: "Estima",
  year: 2000,
  color: "Серебро",
  transmission: "Автомат",
};

auto.owner = student;

console.log(auto);

// №5 Функция проверяющая свойство объекта
function checkMaxSpeed(autoObject) {
  if (`maxSpeed` in autoObject) {
    return;
  } else {
    autoObject.maxSpeed = 180;
  }
}

checkMaxSpeed(auto);

console.log(auto.maxSpeed);

// №6 Функция выводящая объект и свойства объекта
function printPropertyValue(object, key) {
  console.log(object[key]);
}

printPropertyValue(auto, "brand");
printPropertyValue(auto, "model");
printPropertyValue(auto, "transmission");

// №7 Массив продуктов
const products = ["Масло", "Мыло", "Крем"];

console.log(products);

// №8 Создание массива объектов - книг
const books = [
  {
    title: "Белый пороход",
    author: "Чингиз Айтматов",
    year: 1970,
    coverColor: "Синий",
    genre: "Повесть"
  },
  {
    title: "Приключения Шерлока Холмса",
    author: "Артур Конан Дойл",
    year: 1892,
    coverColor: "Коричневый",
    genre: "Детектив"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Чёрный",
    genre: "Роман"
  }
];
const newBook = {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "Синий",
  genre: "Мистика"
};
books.push(newBook);

console.log(books);

// №9 Создание второго массива - книг
const fantasyBooks = [
  {
    title: "Хоббит, или Туда и обратно",
    author: "Дж. Р. Р. Толкин",
    year: 1937,
    coverColor: "Зелёный",
    genre: "Фэнтези"
  },
  {
    title: "Властелин колец: Братство кольца",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Золотой",
    genre: "Фэнтези"
  }
];
const allBooks = [...books, ...fantasyBooks];

console.log(allBooks);

// №10 Функция, использующая метод - map, что бы добавить новое свойство для объекта "isRare"
function getBooksRarity(booksArroy) {
  return booksArroy.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const getBooks = getBooksRarity(allBooks);

console.table(getBooks);