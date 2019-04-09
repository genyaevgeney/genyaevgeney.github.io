;(function(){
  "use strict";

  let area = document.createElement('div');
  area.classList.add('area');
  document.body.appendChild(area);
  let content;

  function createTextarea(e){
    // console.dir(e);
    if(e.ctrlKey && e.keyCode == 69) {
      content = area.innerHTML;
      area.parentNode.removeChild(area);
      area = document.createElement('textarea');
      area.classList.add('area');
      document.body.appendChild(area);
      area.value = content;
    }
  }

  function backToDiv(e){
    if(e.keyCode == 27 && area.tagName == "TEXTAREA") {
      area.parentNode.removeChild(area);
      area = document.createElement('div');
      area.classList.add('area');
      document.body.appendChild(area);
      area.innerHTML = content;
    }
  }

  function saveChanges(e){
    if(e.ctrlKey && e.keyCode == 83) {
      let text = area.value;
      area.parentNode.removeChild(area);
      area = document.createElement('div');
      area.classList.add('area');
      document.body.appendChild(area);
      area.innerHTML = text;
    }
  }

  document.body.addEventListener('keydown',createTextarea);
  document.body.addEventListener('keydown',saveChanges);
  document.body.addEventListener('keydown',backToDiv);
})();