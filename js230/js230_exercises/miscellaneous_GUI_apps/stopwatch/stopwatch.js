document.addEventListener('DOMContentLoaded', () => {
  /*
  const Timer = {
    hourSpan: document.querySelector('.hours'),
    minuteSpan: document.querySelector('.minutes'),
    secondSpan: document.querySelector('.seconds'),
    centisecondSpan: document.querySelector('.centiseconds'),
    toggleBtn: document.querySelector('.toggle'),
    resetBtn: document.querySelector('.reset'),
    hours: 0,
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
    increment() {
      this.centiseconds += 1;

      if (this.centiseconds === 99) {
        this.seconds += 1;
        this.centiseconds = 0;
      }

      if (this.seconds == 60) {
        this.minutes += 1
        this.seconds = 0;
      }

      if (this.minutes === 60) {
        this.hours += 1
        this.minutes = 0;
      }

      if (this.hours === 99) {
        this.reset();
      }
    },
    reset() {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.centiseconds = 0;
    },
    display() {
      this.hourSpan.textContent = this.formatTime(String(this.hours));
      this.minuteSpan.textContent = this.formatTime(String(this.minutes));
      this.secondSpan.textContent = this.formatTime(String(this.seconds));
      this.centisecondSpan.textContent = this.formatTime(String(this.centiseconds));
    },
    formatTime(time) {
      return Number(time) < 10 ? `0${time}` : time;
    },
    init() {
      const start = function() {
        return setInterval(() => {
          this.increment();
          this.display();
        }, 10);
      }.bind(this);

      this.toggleBtn.addEventListener('click', event => {
        let btn = event.target;
        if (btn.textContent === 'Start') {
          btn.textContent = 'Stop';
          this.timerId = start();
        } else {
          clearInterval(this.timerId);
          btn.textContent = 'Start';
        }
      });
      this.resetBtn.addEventListener('click', event => {
        clearInterval(this.timerId);
        this.reset();
        this.toggleBtn.textContent = 'Start';
        this.display();
      });
      this.display();
    },
  };
  Timer.init();
  */
  const App = {
    toggleButton: document.querySelector('.toggle'),
    resetButton: document.querySelector('.reset'),
    isOn: false,
    centiSecs: 0,
    secs: 0,
    mins: 0,
    hours: 0,

    startStop() {
      if (this.isOn) {
        this.stop();
      } else {
        this.start();
      }
    },
    
    start() {
      this.interval = setInterval(this.addTime.bind(this), 10);
      console.log(this.interval);
      this.toggleButton.textContent = 'Stop';
      this.isOn = true;
    },

    stop() {
      clearInterval(this.interval);
      this.toggleButton.textContent = 'Start';
      this.isOn = false;
    },

    addTime() {
      this.centiSecs += 1;
      if (this.centiSecs === 100) {
        this.centiSecs = 0;
        this.secs += 1;

        if (this.secs === 60) {
          this.secs = 0;
          this.mins += 1;

          if (this.mins === 60) {
            this.mins = 0;
            this.hours += 1;
          }
        }
      }

      this.displayTime();
    },

    reset() {
      this.isOn && this.stop();

      this.centiSecs = 0;
      this.secs = 0;
      this.mins = 0;
      this.hours = 0;
      this.displayTime();
    },

    displayTime() {
      let centisecondsSpan = document.querySelector('.centiseconds');
      let secondsSpan = document.querySelector('.seconds');
      let minutesSpan = document.querySelector('.minutes');
      let hoursSpan = document.querySelector('.hours');

      centisecondsSpan.textContent = (this.centiSecs < 10 ? '0' : '') + this.centiSecs;
      secondsSpan.textContent = (this.secs < 10 ? '0' : '') + this.secs;
      minutesSpan.textContent = (this.mins < 10 ? '0' : '') + this.mins;
      hoursSpan.textContent = (this.hours < 10 ? '0' : '') + this.hours;
    },

    init() {
      this.toggleButton.addEventListener('click', this.startStop.bind(this));
      this.resetButton.addEventListener('click', this.reset.bind(this));
    },
  }

  App.init();
});
