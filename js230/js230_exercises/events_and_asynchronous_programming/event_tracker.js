const tracker = function() {
  const events = [];

  return {
    list() {
      return [...events];
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
}();

function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}

const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');
