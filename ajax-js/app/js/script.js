;(function(){
  "use strict";

let xhr = new XMLHttpRequest();

xhr.open('GET', 'employees.json', false);

xhr.send();

if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText );
} else {
  alert( xhr.responseText );
}

})();