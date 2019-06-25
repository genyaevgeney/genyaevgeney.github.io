const cards = document.querySelectorAll('.portfolio-section__link');
for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove', startRotate)
	card.addEventListener('mouseout', stopRotate)
}

function startRotate(event) {
	const cardItem = this.querySelector('.portfolio-section__img');
	const halfHeight = cardItem.offsetHeight / 2;
	const halfWidth = cardItem.offsetWidth / 2;
	let rotateXdeg = -(event.offsetY - halfHeight)/6;
	let rotateYdeg = (event.offsetX - halfWidth)/6;
	cardItem.style.transform = 'rotateX('+rotateXdeg+'deg) rotateY('+rotateYdeg+'deg)';
}

function stopRotate(event) {
	const cardItem = this.querySelector('.portfolio-section__img');
	cardItem.style.transform = 'rotate(0)';
}