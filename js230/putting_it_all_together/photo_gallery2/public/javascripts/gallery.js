document.addEventListener('DOMContentLoaded', () => {
  const templates = {};
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl.id] = Handlebars.compile(tmpl.innerHTML);
  });

  document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    Handlebars.registerPartial(tmpl.id, tmpl.innerHTML);
  });

  document.querySelector('section > header').addEventListener('click', event => {
    event.preventDefault();
    let button = event.target;
    let buttonType = button.getAttribute('data-property');
    if (buttonType) {
      let href = button.getAttribute('href');
      let dataId = button.getAttribute('data-id');
      let text = button.textContent;

      fetch(href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'photo_id=' + dataId
      })
      .then(response => response.json())
      .then(json => {
        let photo = photos.find(photo => photo.id === Number(dataId));
        photo[buttonType] = json.total;
        button.textContent = text.replace(/\d+/, json.total);
      });
    }
  });

  document.querySelector('#comments form').addEventListener('submit', event => {
    event.preventDefault();
    let form = event.target;
    let href = form.getAttribute('action');
    let method = form.getAttribute('method');
    let data = new FormData(form);
    let currentSlideId = slideshow.currentSlide.getAttribute('data-id');
    data.set('photo_id', currentSlideId);

    fetch(href,
      {
        method: method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams([...data]),
      })
      .then(response => response.json())
      .then(json => {
        let commentsList = document.querySelector('#comments ul');
        commentsList.insertAdjacentHTML('beforeend', templates.photo_comment(json));
        form.reset();
      });
  });

  fetch('/photos')
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photos[0].id);
      slideshow.init();
    });


  function renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
    slides.querySelector('figure').classList.add('show');
  }

  function renderPhotoInformation(id) {
    let photo = photos.find(item => item.id === id);
    let header = document.querySelector('section > header');
    header.innerHTML = '';
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }

  function getCommentsFor(id) {
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comment_json => {
        let comments_list = document.querySelector('#comments ul');
        comments_list.innerHTML = '';
        comments_list.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment_json }));
      });
  }

  function renderPhotoComments(comment) {
    let comments = document.querySelector('#comments');
    comments.insertAdjacentHTML('beforeend', templates.photo_comment(comment));
  }

  const slideshow = {
    prevSlide(event) {
      event.preventDefault();
      let prev = this.currentSlide.previousElementSibling;
      if (!prev) {
        prev = this.lastSlide;
      }
      this.fadeOut(this.currentSlide);
      this.fadeIn(prev);
      this.renderPhotoContent(prev.getAttribute('data-id'));
      this.currentSlide = prev;
    },
    nextSlide(event) {
      event.preventDefault();
      let next = this.currentSlide.nextElementSibling;
      if (!next) {
        next = this.firstSlide;
      }
      this.fadeOut(this.currentSlide);
      this.fadeIn(next);
      this.renderPhotoContent(next.getAttribute('data-id'));
      this.currentSlide = next;
    },
    fadeOut(slide) {
      slide.classList.add('hide');
      slide.classList.remove('show');
    },
    fadeIn(slide) {
      slide.classList.remove('hide');
      slide.classList.add('show');
    },
    renderPhotoContent(id) {
      renderPhotoInformation(Number(id));
      getCommentsFor(id);
    },
    bind() {
      let prevButton = this.slideshow.querySelector('a.prev');
      let nextButton = this.slideshow.querySelector('a.next');
      prevButton.addEventListener('click', event => { this.prevSlide(event) });
      nextButton.addEventListener('click', event => { this.nextSlide(event) });
    },
    init() {
      this.slideshow = document.querySelector('#slideshow');
      let slides = this.slideshow.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    }
  };
});
