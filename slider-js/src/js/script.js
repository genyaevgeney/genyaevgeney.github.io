;(function($){
	"use strict";

	$(function(){
		$('.section__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			// centerMode: true,
			// dots: true,
			// focusOnSelect: true
		});
	})
})(jQuery); 