let header = document.querySelector('body > header');
let h1 = document.querySelector('h1');
header.insertAdjacentElement('afterbegin', h1);
document.body.insertBefore(header, document.querySelector('body > main'));

let section = document.getElementById('content');
let figures = section.querySelectorAll('figure');
let [babyImg, chinStickImg] = section.querySelectorAll('img');

figures[0].insertAdjacentElement('afterbegin', chinStickImg);
figures[1].insertAdjacentElement('afterbegin', babyImg);

section.querySelector('article').appendChild(figures[0]);
section.querySelector('article').appendChild(figures[1]);

