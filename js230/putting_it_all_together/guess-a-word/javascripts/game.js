document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector('#message');
  const guesses = document.querySelector('#guesses');
  const letters = document.querySelector('#spaces');
  const apples  = document.querySelector('#apples');
  const replay  = document.querySelector('#replay');

  const randomWord = (function() {
    const words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      const word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    };
  })();

  const Game = {
    init() {
      this.incorrect = 0;
      this.letters_guessed = [];
      this.correct_spaces = 0;
      this.word = randomWord();
      console.log(this.word);
      if (!this.word) {
        this.displayMessage("Sorry, I've run out of words!");
        return;
      }
      this.word = this.word.split('');
      this.createBlanks();
      this.bindEvents();
      return this;
    },
    createBlanks() {
      let spaces = (new Array(this.word.length + 1)).join('<span></span>');

      let spans = letters.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    },
    displayMessage(text) {
      message.textContent = text;
    },
    fillWordBlank(letterGuess) {
      const spaces = letters.querySelectorAll('span');

      this.word.forEach((letter, index) => {
        if (letterGuess === letter) {
          spaces[index].textContent = letter;
        }
      });
    },
    lose() {
      document.body.classList.add('lose');
    },
    win() {
      document.body.classList.add('win');
    },
    reset() {
    },
    replayEvent(event) {
      event.preventDefault();
      this.displayMessage('');
      document.body.classList.remove(document.body.classList[0]);
      guesses.querySelectorAll('span').forEach(guess => guess.remove());
      letters.querySelectorAll('span').forEach(guess => guess.remove());
      this.init();
    },
    guess(event) {
      const key = event.key.toLowerCase();
      if (/^[a-z]{1}$/.test(key)) {
        if (this.letters_guessed.includes(key)) {
          return;
        }

        this.letters_guessed.push(key);
        guesses.insertAdjacentHTML('beforeend', `<span>${key}</span>`);

        if (this.word.includes(key)) {
          this.fillWordBlank(key);
        } else {
          this.incorrect += 1;
          apples.classList.remove(apples.classList[0]);
          apples.classList.add(`guess_${this.incorrect}`);
        }

        if (this.incorrect === 6) {
          this.displayMessage('You lose!');
          this.lose();
          this.unbindEvents();
        } else if (this.word.every(letter => this.letters_guessed.includes(letter))) {
          this.displayMessage('You win!');
          this.win();
          this.unbindEvents();
        }
      }
    },
    bindEvents() {
      this.replayEvent = this.replayEvent.bind(this);
      this.guess = this.guess.bind(this);

      document.addEventListener('keyup', this.guess);
      replay.addEventListener('click', this.replayEvent);
    },
    unbindEvents(eventListenrs) {
      document.removeEventListener('keyup', this.guess);
    },
  };

  const game = Object.create(Game).init();
});

document.addEventListener('DOMContentLoaded', event => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');

  const randomWord = function() {
    let words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      const word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    };
  }();

  function Game() {
    this.incorrect = 0;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      this.hideReplayLink();
      return this;
    }

    this.word = this.word.split("");
    this.init();
  }

  Game.prototype = {
    guesses: 6,
    createBlanks: function() {
      let spaces = (new Array(this.word.length + 1)).join('<span></span');

      let spans = letters.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    },
    fillBlanksFor(letter) {
      this.word.forEach((l, i) => {
        if (letter === l) {
          this.spaces[i].textContent = letter;
          this.correctSpaces += 1;
        }
      });
    },
    emptyGuesses() {
      let spans = guesses.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
    },
    renderGuess(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      guesses.appendChild(span);
    },
    renderIncorrectGuess(letter) {
      this.incorrect += 1;
      this.renderGuess(letter);
      this.setClass();
    },
    setClass() {
      apples.classList.remove(...apples.classList);
      apples.classList.add('guess_' + this.incorrect);
    },
    displayMessage(text) {
      message.textContent = text;
    },
    showReplayLink() {
      replay.classList.add('visible');
    },
    hideReplayList() {
      replay.classList.remove('visible');
    },
    processGuess(e) {
      let letter = e.key;
      if(notALetter(letter)) { return; }
      if (this.duplicateGuess(letter)) { return; }

      if (this.word.includes(letter)) {
        this.fillBlanksFor(letter);
        this.renderGuess(letter);

        if (this.correctSpaces === this.spaces.length) {
          this.win();
        }
      } else {
        this.renderIncorrectGuess(letter);
      }
      if (this.incorrect === this.guess) {
        this.lose();
      }
    },
    win() {
      this.unbind();
      this.displayMessage('You win!');
      this.showReplayLink();
      this.setGameStatus('win');
    },
    lose() {
      this.unbind();
      this.displayMessage("Sorry! You're out of guesses");
      this.showReplayLink();
      this.setGameStatus('lose');
    },
    setGameStatus(status) {
      document.body.classList.remove('win', 'lose');
      if (status) {
        document.body.classList.add(status);
      }
    },
    bind() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    },
    unbind() {
      document.removeEventListener('keyup', this.processGuessHandler);
    },
    init() {
      this.bind();
      this.setClass();
      this.hideReplayLink();
      this.emptyGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage('');
    },
  };

  function notALetter(letter) {
    return letter < 'a' || letter > 'z';
  }

  new Game();

  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });
});
