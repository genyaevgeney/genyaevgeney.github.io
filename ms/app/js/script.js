;(function(){
  "use strict";

  let num =1;

  while(true) {
    alert(`Деталь ${num} поступила на вход и находится на позиции нагрева`);
    alert(`Транспортер перестал работать, включился нагрев и таймер 1 начал отсчет`);
    alert(`Таймер 1 сработал и нагрев закончился`);
    alert(`Включилось охлождение и таймер 2 начал отсчет`);
    alert(`Таймер 2 сработал и охлождение закончилось`); 
    var next = prompt(`Обработать следующую деталь? (да/нет)\nОбработанных деталей: ${num}`);
    num++;
    if (next === 'да') {} 
      else return;
  }

  // var login = prompt('Введите логин');

  // if (login === 'Админ') {
  //   var password = prompt('Введите пароль');
  //   if (password === 'Черный Властелин') {
  //     alert('Добро пожаловать!');
  //   }
  //   else if (password === null) {
  //     alert('Вход отменен');
  //   }
  //   else {
  //     alert('Пароль неверен');
  //   }
  // }
  // else if (login === null) {
  //   alert('Вход отменен');
  // }
  // else {
  //   alert('Я вас не знаю');
  // }
  
})();