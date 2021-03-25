document.querySelector('html').addEventListener('click', event => {
  const container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container = 'display: none';
  }
});

