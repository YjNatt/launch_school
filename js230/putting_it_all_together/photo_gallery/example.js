document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('li > img');
  const slideshowLi = [...document.querySelectorAll('.slideshow ul li')];

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');
      slideshowLi.find(node => node.classList.contains('show')).classList.remove('show');
      slideshowLi[index].classList.add('show');
      thumbnail.classList.add('active');
    });
  });
});
