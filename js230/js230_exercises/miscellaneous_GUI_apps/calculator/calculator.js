document.addEventListener('DOMContentLoaded', () => {
  const Calculator = function() {
    let operationWindow = document.querySelector('.operation-window');
    let entryWindow = document.querySelector('.entry-window');
    let controlBtns = document.querySelectorAll('.control');
    let operationBtns = document.querySelectorAll('.operation');
    let digitBtns = document.querySelectorAll('.digit');
    let resultBtn = document.querySelector('.result');
    let entryReset = false;

    function handleDigitClick(event) {
      event.preventDefault();
      if (entryReset) {
        resetEntryWindow();
      }

      if (entryWindow.textContent === '0') {
        entryWindow.textContent = event.target.textContent
      } else {
        entryWindow.textContent += event.target.textContent
      }
    }

    function resetOperationWindow() {
      operationWindow.textContent = '';
    }

    function resetEntryWindow() {
      entryWindow.textContent = '0';
      entryReset = false;
    }

    function toggleNeg() {
      let numberChars = entryWindow.textContent.split('');

      if (numberChars[0] === '-') {
        numberChars.shift();
      } else {
        numberChars.unshift('-');
      }

      entryWindow.textContent = numberChars.join('');
    }

    function toggleDecimal() {
      let numberChars = entryWindow.textContent.split('');

      if (!numberChars.includes('.')) {
        numberChars.push('.');
      } else if (numberChars[numberChars.length - 1] === '.') {
        numberChars.pop();
      }

      entryWindow.textContent = numberChars.join('');
    }

    function handleControlClick(event) {
      event.preventDefault();
      switch(event.target.textContent) {
        case 'CE':
          resetOperationWindow();
        case 'C':
          resetEntryWindow();
          break;
        case 'NEG':
          toggleNeg();
          break;
        case '.':
          toggleDecimal();
          break;
      }
    }

    function calculateTotal(digitsAndOperations) {
      const operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        'x': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
        '%': (num1, num2) => num1 % num2,
      };

      let num;
      let operation;

      digitsAndOperations.forEach(char => {
        if (/\d/.test(char)) {
          if (operation) {
            num = operations[operation](num, Number(char))
          } else {
            num = Number(char);
          }
        } else {
          operation = char;
        }
      });

      return num;
    }

    function handleOperationClick(event) {
      event.preventDefault();

      let digitsAndOperationsString = operationWindow.textContent;
      let entryNumberString = entryWindow.textContent;
      let total;

      if (digitsAndOperationsString === '') {
        digitsAndOperationsString = entryNumberString + ' ' + event.target.textContent;
        total = entryNumberString;
      } else {
        digitsAndOperationsString += ' ' + entryNumberString;
        total = calculateTotal(digitsAndOperationsString.split(' '));
        digitsAndOperationsString += ' ' + event.target.textContent;
      }

      operationWindow.textContent = digitsAndOperationsString;
      entryWindow.textContent = total;
      entryReset = true
    };

    function handleResultClick(event) {
      event.preventDefault();
      let digitsAndOperations = operationWindow.textContent.split(' ');
      digitsAndOperations.push(entryWindow.textContent);

      let total = calculateTotal(digitsAndOperations);
      resetOperationWindow();
      entryWindow.textContent = total;
      entryReset = true;
    }

    return {
      init() {
        entryWindow.textContent = 0;
        digitBtns.forEach(btn => btn.addEventListener('click', handleDigitClick));
        controlBtns.forEach(btn => btn.addEventListener('click', handleControlClick));
        operationBtns.forEach(btn => btn.addEventListener('click', handleOperationClick));
        resultBtn.addEventListener('click', handleResultClick);
      },
    };
  }();

  Calculator.init();
});
