const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'Python',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ',
  }
];

document.addEventListener('DOMContentLoaded', () => {
  function formatDescription(description) {
    if (description.length > 120) {
      description = description.slice(0, 120) + ' ...';
    }

    return description;
  }

  Handlebars.registerHelper('formatDescription', formatDescription);
  Handlebars.registerHelper('tooLong', description => description.length > 120);

  let section = document.querySelector('section');
  let source = document.querySelector('#language-template').innerHTML
  let template = Handlebars.compile(source);
  section.insertAdjacentHTML('beforeend', template({languages: languages}));

  section.addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return;

    let btn = event.target;
    let btnLength = btn.getAttribute('data-description-length');
    let container = btn.parentNode;
    let id = container.getAttribute('data-id');

    if (btnLength === 'short') {
      btn.textContent = 'Show Less';
      btn.setAttribute('data-description-length', 'long');
      container.querySelector('p').textContent = languages[id].description;
    } else {
      btn.textContent = 'Show More';
      btn.setAttribute('data-description-length', 'short');
      container.querySelector('p').textContent = formatDescription(languages[id].description);
    }
  });
});
