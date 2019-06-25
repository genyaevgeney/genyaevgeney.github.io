function paddingHack(items){
	const gridWidth = $(items).parent().width();

	function setPadding(){
		$(items).each(function() {
			const img = $(this).find('img');
			if(!img[0]) return;
			$(this).css({
				position: 'relative',
				width: '100%',
				paddingTop: `${Math.floor(parseFloat(img[0].naturalHeight / gridWidth * 100))}%`
			});
			$(img).css({
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'bottom': '0',
				'left': '0',
				'width': '100%',
				'height': '100%',
				'object-fit': 'cover'
			});
		});
	}

	return {
		init: setPadding
	}
}

const paddingHackEl = paddingHack('.slider__item-pic');

paddingHackEl.init();



$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		// autoplay: true,
	});
});