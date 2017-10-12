// get all divs with box class
// generate random number between 0 and length of array -1
// add picker class to div

var button = document.querySelector('.button');
var started = false;

button.addEventListener('click', function() {
  if (!started) {
    picker();
    started = true;
  }
  else {
    //console.log('timeout id', this.timeoutID);
    started = false;
  }
});

function picker() {
  var divArr = document.querySelectorAll('.box');
  var interval = 75;
  var i;

  (function timeout(iPrev) {
    setTimeout(function () {
      //console.log('timeoutid', this.timeoutID);
      iPrev = iPrev || 0;
      divArr[iPrev].setAttribute('class', 'box');
      i = Math.round(Math.random() * (divArr.length - 1));
      divArr[i].setAttribute('class', 'picker box');
      timeout(i);
    }, interval);
  })();
}

//picker();
