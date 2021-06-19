document.addEventListener('DOMContentLoaded', () => {
  function showError(input) {
    const errorMessages = {
      valueMissing() {
        return `${this.textContent} is a required field`;
      },
      patternMismatch() {
        return `Please enter a valid ${this.textContent}`;
      },
      tooShort() {
        return `${this.textContent} must be at least 10 characters long`;
      },
    };

    const errors = Object.keys(errorMessages);
    let errorMessage;

    for (let index = 0; index < errors.length; index += 1) {
      if (input.validity[errors[index]]) {
        errorMessage = errorMessages[errors[index]].call(input.parentNode.previousElementSibling);
        break;
      }
    }

    return errorMessage;
  }

  function handleFocusout(event) {
    const input = event.target;
    const error = input.nextElementSibling;
    
    if (input.checkValidity()) {
      input.classList.remove('error');
      error.textContent = '';
    } else {
      input.classList.add('error');
      error.textContent = showError(input);
    }

    if (document.querySelector('form').checkValidity()) {
      document.querySelector('p.error').textContent = '';
    }
  }

  function handleFocus(event) {
    const input = event.target;
    const error = input.nextElementSibling;

    input.classList.remove('error');
    error.textContent = '';
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formError = document.querySelector('p.error'); 
    const inputs = document.querySelectorAll('input');

    if (!form.reportValidity()) {
      formError.textContent = 'Form cannot be submitted until errors are corrected';
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          const error = input.nextElementSibling;
          input.classList.add('error');
          error.textContent = showError(input);
        }
      });
    } else {
      const request = new XMLHttpRequest();
      const inputs = [...form.querySelectorAll('input')];
      const keyAndValues = [];

      inputs.forEach(input => {
        console.log(input.name);
        if (keyAndValues.length > 0 && keyAndValues[keyAndValues.length - 1][input.name]) {
          keyAndValues[keyAndValues.length - 1][input.name] += input.value;
        } else {
          let keyAndValue = {}
          keyAndValue[input.name] = input.value;
          keyAndValues.push(keyAndValue);
        }
      });

      let data = keyAndValues.map(keyAndValue => {
        let key = Object.keys(keyAndValue)[0];
        let value = keyAndValue[key];
        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
      }).join('&');

      document.querySelector('div > p').textContent = data;
    }
  }

  function handleInputKeypress(event) {
    if (/[^a-zA-Z'\s]/.test(event.key)) {
      event.preventDefault();
    }
  }

  function bindInputEvents(input) {
    input.addEventListener('focusout', handleFocusout);
    input.addEventListener('focus', handleFocus);
  }

  function handleCardKeypress(event) {
    if (/[^0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  function handleCardKeyup(event) {

    if(event.shiftKey && event.key === 'Tab' && event.target.previousElementSibling) {
      event.target.previousElementSibling.focus();
    } else if (event.key === 'Tab' || event.key === 'Shift') {
      return;
    }

    if (event.target.value.length === event.target.maxLength && event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  }

  document.querySelector('input[name="firstName"]').addEventListener('keypress', handleInputKeypress);
  document.querySelector('input[name="lastName"]').addEventListener('keypress', handleInputKeypress);
  document.querySelectorAll('input[name="card"]').forEach((input, index) => {
    input.addEventListener('keypress', handleCardKeypress);
    
    if (index < 3) {
      input.addEventListener('keyup', handleCardKeyup);
    }
  });

  bindInputEvents(document.querySelector('input[name="firstName"]'));
  bindInputEvents(document.querySelector('input[name="lastName"]'));
  bindInputEvents(document.querySelector('input[name="email"]'));
  bindInputEvents(document.querySelector('input[name="password"]'));
  bindInputEvents(document.querySelector('input[name="phone"]'));
  document.querySelector('form').addEventListener('submit', handleFormSubmit);
});
