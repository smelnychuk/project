"use strict";

// let a = 10;
// console.log(a);

// let number = 5;
// const leftBorderWith = 1;

// number = 10;

// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple=.bmp'];

// console.log(arr[0]);

// alert('Hello');

// const result = confirm('Are you here?');

// console.log(result);

// const answer = +prompt('Are you 18 years old?', 'Yes');

// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Какая у вас фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof (answers));

// console.log(4 + " - object");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%4);

// console.log(2*4 === 8);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);