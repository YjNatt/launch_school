document.addEventListener('DOMContentLoaded', () => {
  let TodoListManager = function() {
    const todoItems = [
      { id: 1, title: 'Homework' },
      { id: 2, title: 'Shopping' },
      { id: 3, title: 'Calling Mom' },
      { id: 4, title: 'Coffee with John '}
    ];

    return {
      todos() {
        return [...todoItems];
      },
      delete(todoId) {
        let index = todoItems.findIndex(({id}) => id === todoId);
        return todoItems.splice(index, 1)[0];
      },
    };
  }();

  let todoList = document.querySelector('ul');
  let overlay = document.querySelector('.overlay');
  let promptDiv = document.querySelector('.prompt');
  let nav = document.querySelector('nav');

  function closePrompt() {
    overlay.classList.add('hide');
    promptDiv.setAttribute('data-todo-id', '');
    promptDiv.classList.add('hide');
  }

  document.addEventListener('click', event => {
    if (!nav.classList.contains('hide')) {
      nav.classList.add('hide');
    }
  });

  overlay.addEventListener('click', event => {
    closePrompt();
  });

  promptDiv.addEventListener('click', event => {
    let btn = event.target;
    let div;
    let id;

    if (btn.tagName !== 'BUTTON') {
      return;
    }

    if (btn.textContent === 'Yes') {
      div = btn.closest('div');
      id = Number(div.getAttribute('data-todo-id'));
      TodoListManager.delete(id);
      document.querySelector(`li[data-id="${String(id)}"]`).remove();
    }

    closePrompt();
  });

  TodoListManager.todos().forEach(todo => {
    let li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.textContent = todo.title;
    todoList.appendChild(li);
  });

  todoList.addEventListener('contextmenu', event => {
    let id;

    if (event.target.tagName === 'LI') {
      event.preventDefault();
      id = event.target.closest('li').getAttribute('data-id');
      nav.querySelector('ul').setAttribute('data-todo-id', id);
      nav.style.top = `${event.pageY}px`;
      nav.style.left = `${event.pageX}px`;
      nav.classList.remove('hide');
    }
  });

  nav.addEventListener('click', event => {
    if (event.target.textContent === "Delete") {
      let id = event.target.closest('ul').getAttribute('data-todo-id');
      promptDiv.classList.remove('hide');
      promptDiv.setAttribute('data-todo-id', id);
      overlay.classList.remove('hide');
    }
  });
});
