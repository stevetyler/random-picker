// get all divs with box class
// generate random number between 0 and length of array -1
// add picker class to div


function picker() {
  var divArr = document.querySelectorAll('.box');
  var interval = 500;
  var iPrev = 0;

  (function timeout() {
    setTimeout(function () {
      var iNext = Math.round(Math.random() * (divArr.length - 1));
      divArr[iNext].setAttribute('class', 'picker box');
      timeout();
    }, interval);
  })();
}

picker();
