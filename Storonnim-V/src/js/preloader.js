let preloader = document.getElementById("preloader");
window.addEventListener('load',function() {
	setTimeout(function() { 
		preloader.style.opacity = '0';
	}, 2000);
	setTimeout(function() { 
		preloader.style.display =  'none';
	}, 3000);
})