;(function(){
	"use strict";

	var login = prompt('Введите логин');

	if (login === 'Админ') {
		var password = prompt('Введите пароль');
		if (password === 'Черный Властелин') {
			alert('Добро пожаловать!');
		}
		else if (password === null) {
			alert('Вход отменен');
		}
		else {
			alert('Пароль неверен');
		}
	}
	else if (login === null) {
		alert('Вход отменен');
	}
	else {
		alert('Я вас не знаю');
	}
	
})();