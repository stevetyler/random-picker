// get all divs with box class
// generate random number between 0 and length of array -1
// add picker class to div

function picker() {
  var divArr = document.querySelectorAll('.box');
  var interval = 75;

  (function timeout(iPrev) {
    setTimeout(function () {
      iPrev = iPrev || 0;
      divArr[iPrev].setAttribute('class', 'box');

      var i = Math.round(Math.random() * (divArr.length - 1));
      divArr[i].setAttribute('class', 'picker box');
      timeout(i);
    }, interval);
  })();
}

picker();
