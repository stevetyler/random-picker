// get all divs with box class
// generate random number between 0 and length of array -1
// add picker class to div

var button = document.querySelector('.button');
console.log(button);

button.addEventListener('click', function() {
  if (!picker.timeoutID) {
    picker.start();
    button.setAttribute('class', 'button stop');
    button.innerHTML = 'Stop';
  }
  else {
    picker.stop();
    button.setAttribute('class', 'button start');
    button.innerHTML = 'Start';
  }
});

var picker = {
  init: function() {
    this.elemArr = document.querySelectorAll('.box');
  },
  interval: 75,
  start: function() {
    var self = this;

    if (this.iLast) {
      this.elemArr[this.iLast].setAttribute('class', 'box');
    }

    if (typeof this.timeoutID === 'number') {
      this.stop();
    }

    (function timeout(iPrev) {
      self.timeoutID = window.setTimeout(function () {
        iPrev = iPrev || 0;
        self.elemArr[iPrev].setAttribute('class', 'box');
        i = Math.round(Math.random() * (self.elemArr.length - 1));
        self.iLast = i;
        self.elemArr[i].setAttribute('class', 'picker box');
        timeout(i);
      }, self.interval);
    })();
  },
  stop: function() {
    window.clearTimeout(this.timeoutID);
    this.timeoutID = undefined;
  }
};

picker.init();
