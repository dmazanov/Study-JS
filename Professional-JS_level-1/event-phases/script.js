'use strict';

var divElements = document.querySelectorAll('div');
var button = document.getElementById('clickable');
var clickedElement = null;

var clickHadler = function(evt) {
  console.log(evt);

  if (clickedElement){
    clickedElement.classList.remove('clicked');
  }

  clickedElement = evt.currentTarget;
  clickedElement.classList.add('clicked');
  debugger;
}


// bubbling
for (var i = 0; i < divElements.length; i++) {
  divElements[i].addEventListener('click', clickHadler);
}

button.addEventListener('click', clickHadler);
document.body.addEventListener('click', clickHadler);

// for capturing need to adding to addEventListener mehtod the thirds parametr - true
// button.addEventListener('click', clickHadler, true);