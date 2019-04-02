;(function(){
	"use strict";

	function showPrimeNumbers() {
		alert('При создании интервала чисел нужно вводить только положительные числа, которые больше нуля и конец интервала не может быть меньше начала. При неправильном введении значений появится сообщение с ошибкой.');
		let firstNumber= +prompt("Введите начало интервала");
		let secondNumber= +prompt("Введите конец интервала");
		function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		if(isNumeric(firstNumber)&&isNumeric(secondNumber)&&firstNumber>0&&secondNumber>0&&secondNumber>firstNumber) {
			let userInterval= [];
			let arrBuilder = firstNumber;
			let primeNumbers = '';
			let counter;
			for(let i=0;i<secondNumber-firstNumber+1;i++){
				userInterval[i]=arrBuilder;
				arrBuilder++;
			}
			for(let j = 0;j<userInterval.length;j++) {
				counter=0;
				for(let f = 1;f<=userInterval[j];f++) {
					if(userInterval[j]%f==0){
						counter++;
					}
					if(counter>2){
						break;
					}
					if(f==userInterval[j]&&counter==2){
						primeNumbers+=userInterval[j] + ', ';
					}
				}
			}
			alert('Простые числа из заданого интервала: '+primeNumbers.slice(0,primeNumbers.length-2)+'.');
		}
		else {
			alert('Что-то было введено неверно');
		}
	}
	showPrimeNumbers();
	
})();