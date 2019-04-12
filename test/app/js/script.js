/* canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight; */
let diagram = document.querySelector(".section__diagram");
/* let ctx = diagram.getContext("2d");
ctx.canvas.width = 60;
ctx.canvas.height = 60;
ctx.render(); */
function showDiagram(val,maxVal) {
const maxValue = maxVal;
const remain = maxValue - val;
var oilData = {
    datasets: [
        {
            data: [val,remain],
            backgroundColor: [
                "#FF6384",
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
showDiagram(7.8,12);