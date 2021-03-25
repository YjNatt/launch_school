function randomizer(...callbacks) {
  const count = 1;

  const countInterval = setInterval(() => {
    console.log(count);
    count += 1;

    if (count > callbacks.length * 2) {
      clearInterval(countInterval);
    }
  }, 1000);

  callbacks.forEach(callback => {
    const delay = Math.floor(Math.random() * callbacks.length * 2) * 1000;
    setTimeout(callback, delay);
  });

  
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);
