const BTN = document.getElementById('load');
const LIST = document.getElementById("employeeList");
const HEADING = document.querySelector(".corp__heading");
let xhr = new XMLHttpRequest();

BTN.addEventListener("click",sendAJAX);
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4){
		let respone = JSON.parse(xhr.responseText);
		let employeeList = respone['employees'];

		employeeList.forEach(function(employee) {
			let item = document.createElement('li');
			let name = document.createElement('span');
			name.classList.add("name");
			let icon = document.createElement('span');
			item.appendChild(icon);
			item.appendChild(name);
			name.innerText = employee.name;
			if(employee.inoffice) icon.classList.add("in");
			else icon.classList.add("out");
			LIST.appendChild(item);
		});
	}
}

xhr.open('GET','https://my-json-server.typicode.com/genyaevgeney/fakeserver/db', true);

function sendAJAX (){
	let db = document.createElement('a');
	db.setAttribute('href', 'https://my-json-server.typicode.com/genyaevgeney/fakeserver/db');
	db.innerText = "Database link";
	db.style.marginLeft = "50px";
	db.style.textDecoration = "none";
	db.style.color = "lightgreen";
	HEADING.appendChild(db);
	xhr.send();
	BTN.style.display = "none";
}

