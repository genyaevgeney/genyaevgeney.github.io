;(function($){
	"use strict";
	$(".section__tab-item").not(":first").hide();
	$(".section__card .section__tab").click(function() {
		$(".section__card .section__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".section__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
})(jQuery);
;(function(){
  "use strict";

  let diagram = document.querySelector(".section__diagram");
  let rating = +document.querySelector('.section__rating').innerText;
  function showDiagram(val,maxVal) {
const maxValue = maxVal;
const remain = maxValue - val;
var oilData = {
    datasets: [
        {
            data: [val,remain],
            backgroundColor: [
                "#1ae780",
                "#212534"
            ],
            borderWidth: 0
        }]
};
var pieChart = new Chart(diagram, {
  type: 'pie',
  data: oilData,
  options: {
  	legend: {
      display: false
    },
    tooltips: {enabled: false},
    hover: {mode: null},
  }
});
}
showDiagram(rating,12);
})();