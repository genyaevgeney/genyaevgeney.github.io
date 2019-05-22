;(function(){
  "use strict";

  while(true) {
    alert(`Расчет количества событий за единицу времени.`);
    var hours = prompt(`Укажите количество часов`);
    var events = prompt(`Укажите количество событий`);
    let answer = events/hours;
    alert(`Примерное количество событий, которое будет происходить за единицу времени: ${Math.round(answer)}`);
    var next = prompt(`Продолжить? (да/нет)`);
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