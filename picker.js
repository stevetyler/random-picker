// get all divs with box class
// generate random number between 0 and length of array -1
// add picker class to div


function picker() {
  var divArr = document.querySelectorAll('.box');
  var divCount = divArr.length;
  var interval = 1000;

  (function timeout() {
    //divArr[i].setAttribute('class', 'box');
    //console.log('index', index);
    setTimeout(function () {
      var iNext = Math.round(Math.random() * (divCount - 1));
      divArr[iNext].setAttribute('class', 'picker box');
      timeout(iNext);
    }, 500);
  })();
}

picker();
