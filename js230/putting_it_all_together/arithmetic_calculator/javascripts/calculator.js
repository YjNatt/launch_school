document.addEventListener('DOMContentLoaded', () => {
  const Calculate = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  };

  const form = document.querySelector('form');
  const getValueOf = (selector) => form.querySelector(selector).value;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const firstNumber = Number(getValueOf('#first-number'));
    const secondNumber = Number(getValueOf('#second-number'));
    const operator = getValueOf("#operator");
    const calculate = Calculate[operator];
    const answer = calculate(firstNumber, secondNumber);
    document.querySelector("#result").textContent = String(answer);
  });
});
