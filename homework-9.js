import { socialMediaComments } from './comments.js';

console.log(socialMediaComments);

// №2 Создаем массив чисел от 1 до 10. Отфильтровываем, что бы получить массив чисел, начиная с 5.
const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);

// №3 Создал строку массива , относящуюся к сущности. Проверверяем, есть ли в массиве какая-то определенная сущность.
const books = [
  { id: 1, title: "Белый пороход", author: "Чингиз Айтматов", year: 1970, genre: "Повесть" },
  { id: 2, title: "Приключения Шерлока Холмса", author: "Артур Конан Дойл", year: 1892, genre: "Детектив" },
  { id: 3, title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, genre: "Роман" },
  { id: 4, title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, genre: "Мистика" }
];

const hasBook = books.some(book => book.genre === "Роман");

console.log(hasBook);

// №4 Функция, которая аргументом принимает массив и изменяет его порядок на противоположный.
// Два вышеуказанных массива переворачиваем с помощью этой функции.
function reverseArray(arr) {
  return arr.toReversed();
}

const invertedNumbers = reverseArray(numbers);

const invertedBooks = reverseArray(books);

console.log("Перевернутые числа:", invertedNumbers);
console.log("Перевернутые книги:", invertedBooks);

// №7 Выводим в консоль массив тех комментариев, у которых почта содержит ".com".
const comComments = socialMediaComments.filter(comment =>
  comment.email.endsWith('.com')
);

console.log(comComments);

// №8 Добавил postId (меньше или равно 5 >2, иначе > 1)
const commentsWithPostId = socialMediaComments.map(comment => {
  let currentPostId;
  if (comment.id <= 5) {
    currentPostId = 2;
  } else {
    currentPostId = 1;
  }
  return {
    ...comment,
    postId: currentPostId
  };
});

console.table(commentsWithPostId);

// №9 Перебрал массив, что бы объекты состояли только из id и имен.
const idAndNames = socialMediaComments.map(comment => ({
  id: comment.id,
  name: comment.author
}));

console.table(idAndNames);

// №10 Использую свойство isInvalid. Проверяею: если длина сообщения больше 180 символов - устанавливаю true, меньше - false.
const commentsWithInvalidFlag = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.text.length > 180
}));

console.table(commentsWithInvalidFlag);

// №11 Используя метод массива reduce, выводим массив почт и с помощью метода map.
const emails = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emails);

const emailsUsingMap = socialMediaComments.map(comment => comment.email);

console.log(emailsUsingMap);

// №12 Методы toString(), join(). Перебираем массив с задания №11, приводим его к строке.
console.log("toString():", emails.toString());
console.log("join(', '):", emails.join(', '));
console.log("join(' | '):", emails.join(' | '));
console.log("join('; '):", emails.join('; '));
