;(function(){
  "use strict";
function responsiveNav(){
	let navList = document.getElementById("cahee-nav");
	if(navList.className === "first-screen__nav") {
		navList.className += " responsive";
	}else {
		navList.className = "first-screen__nav";
	}

}

let navMenu = document.querySelector('.first-screen__item-menu');
navMenu.onclick = responsiveNav;


})();