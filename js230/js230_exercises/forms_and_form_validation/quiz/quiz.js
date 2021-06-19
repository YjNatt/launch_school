document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

  const App = {
    questions: questions,
    answerKey: answerKey,
    template: (function() {
      let source = document.querySelector('#quiz-template').innerHTML;
      return Handlebars.compile(source);
    })(),
    renderMessage(id) {
      let li = document.querySelector(`[data-id="${id}"]`);
      let paragraphResult = li.querySelector('.result');
      let input = li.querySelector('input:checked');
      let correctAnswer = this.answerKey[id];

      if (input) {
        if (correctAnswer === input.value) {
          paragraphResult.classList.add('correct');
          paragraphResult.textContent = 'Correct Answer';
        } else {
          paragraphResult.classList.add('incorrect');
          paragraphResult.textContent = `Wrong Answer. The correct answer is: "${correctAnswer}"`;
        }
      } else {
        paragraphResult.classList.add('incorrect');
        paragraphResult.textContent = `You didn't answer this question. The correct answer is: "${correctAnswer}"`;
      }
    },
    handleSubmitClick(event) {
      event.preventDefault();
      let form = event.target;
      let questionIds = Object.keys(this.answerKey);
      form.querySelector('button[type="submit"]').setAttribute('disabled', true);
      form.querySelector('.reset').removeAttribute('disabled');

      questionIds.forEach(id => this.renderMessage(id));
    },
    handleResetClick(event) {
      event.preventDefault();
      let form = document.querySelector('form');
      let paragraphResults = document.querySelectorAll('.result');
      form.querySelector('.reset').setAttribute('disabled', true);
      form.querySelector('button[type="submit"]').removeAttribute('disabled');
      form.reset();

      paragraphResults.forEach(p => {
        p.textContent = '';
        p.classList.remove('correct', 'incorrect');
      });
    },
    init() {
      document.querySelector('ul').innerHTML = this.template({questions: this.questions});
      document.querySelector('form').addEventListener('submit', this.handleSubmitClick.bind(this));
      document.querySelector('.reset').addEventListener('click', this.handleResetClick.bind(this));
    },
  };

  App.init();
});
