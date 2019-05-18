// ;(function(){
//   "use strict";

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'employees.json', false);

// xhr.send();

// if (xhr.status != 200) {
//   alert( xhr.status + ': ' + xhr.statusText );
// } else {
//   alert( xhr.responseText );
// }

var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4){
				document.getElementById("employeeList").innerHTML = xhr.responseText;
			}
		}

		xhr.open('GET', 'employees.json', false);
		function sendAJAX (){
			xhr.send();
			document.getElementById('load').style.display = "none";
		}

		

// })();

