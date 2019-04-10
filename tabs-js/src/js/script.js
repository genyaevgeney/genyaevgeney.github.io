;(function($){
	"use strict";
	$(".section__tab-item").not(":first").hide();
	$(".section__card .section__tab").click(function() {
		$(".section__card .section__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".section__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
})(jQuery);