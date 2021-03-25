document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let button = form.querySelector('#guess + input');
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    button.disabled = false;
    form.reset();
  }

  function isValid(guess) {
    return Number.isInteger(guess) && guess <= 100 && guess >= 1;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = Number(input.value);
    let message;

    guesses += 1;

    if (isValid(guess)) {
      if (guess > answer) {
        message = `My number is lower than ${String(guess)}.`;
      } else if (guess < answer) {
        message = `My number is higher than ${String(guess)}.`;
      } else {
        message = `You guessed it! It took you ${guesses} guesses.`;

        button.disabled = true;
      }
    } else {
      message = 'Invalid guess! Guess a number from 1 to 100';
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
