const navbar = document.querySelector('header > ul');
const main = document.querySelector('main');
const articles = main.querySelectorAll('article');

function findArticle(id) {
  return [...articles].find(article => article.id === id);
}

function removeCurrentHighlight() {
  let element = document.querySelector('.highlight');
  if (element) {
    element.classList.remove('highlight');
  }
}

document.addEventListener('click', event => {
  removeCurrentHighlight();
  main.classList.add('highlight');
});

navbar.addEventListener('click', event => {
  event.stopPropagation();
  const href    = event.target.getAttribute('href');
  let article;

  if (href) {
    removeCurrentHighlight();
    article = findArticle(href.slice(1));
    article.classList.add('highlight');
  }
});

[...articles].forEach(article => {
  article.addEventListener('click', event => {
    event.stopPropagation();
    removeCurrentHighlight();
    event.currentTarget.classList.add('highlight');
  });
});

// Launch school solution

function highlight({target}) {
  let element;
  let id;

  removeHighlight();

  if (target.tagName === 'A') {
    id = target.href.match('#article-[0-9]+')[0];
    element = document.querySelector(id);
  } else {
    element = document.querySelector('main');
  }

  element.classList.add('highlight');
}

function removeHighlight() {
  const highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

const nav = document.querySelector('header ul');
const main = document.querySelector('main');

nav.addEventListener('click', highlight);
document.addEventListener('click', highlight);
main.addEventListener('click', event => {
  event.preventDefault();
  let article = event.target;
  if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

  if (article.tagName === 'ARTICLE') {
    e.stopPropagation();
    removeHighlight();
    article.classList.add('highlight');
  }
});
