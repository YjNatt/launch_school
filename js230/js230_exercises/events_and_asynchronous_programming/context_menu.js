const main = document.querySelector('main');

main.addEventListener('contextmenu', event => {
  alert(event.target.tagName === 'MAIN' ? 'Main' : 'Sub');
  event.preventDefault();
});
