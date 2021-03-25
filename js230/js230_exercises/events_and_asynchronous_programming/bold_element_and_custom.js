function makeBold(element) {
  element.style.fontWeight = 'bold';
  const event = new CustomEvent('bolded');

  element.dispatchEvent(event);
}

const sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', (event) => {
  alert(event.target.tagName);
  event.target.classList.add('highlight');
});

makeBold(sectionElement);
