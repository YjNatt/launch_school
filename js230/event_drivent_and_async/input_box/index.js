let cursorInterval;
let focusedTextField;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let contentDiv   = document.querySelector('.content');

  textField.addEventListener('click', event => {
    event.stopPropagation();

    focusedTextField = textField;
    textField.classList.add('focused');

    cursorInterval ||= setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('keydown', event => {
    let key;

    if (focusedTextField) {
      key = event.key;
      
      if (key === 'Backspace') {
        contentDiv.textContent = contentDiv.textContent.slice(0, -1);
      } else if (key.length === 1) {
        contentDiv.textContent += event.key;
      }
    }
  });
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);

  if (focusedTextField) {
    focusedTextField.classList.remove('focused');
    focusedTextField.classList.remove('cursor');
    focusedTextField = null;
  }
});

