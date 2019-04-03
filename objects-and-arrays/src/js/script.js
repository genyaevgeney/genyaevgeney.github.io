;(function(){
	"use strict";

	alert('Возведение элемнтов массива в куб.');

	let arr=[6,2,4];

	function getCube(x) {
		return x*x*x;
	}

	function map(fn,array) {
		let mainArr = [];
		for(let i = 0;i<array.length;i++) {
			mainArr[i]=fn(arr[i]);
		}
		return 'Новый массив: ' + mainArr;
	}

	alert(map(getCube,arr));
	alert('Старый массив: '+arr);

})();