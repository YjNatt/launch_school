document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('figure > img');
  images.forEach(image => {
    const figCaption = image.nextElementSibling;
    const displayFunction = () => {
      figCaption.style.display = 'block';
    };
    let timer;

    image.addEventListener('mouseover', () => {
      timer = setTimeout(displayFunction, 1000);
    });

    image.addEventListener('mouseout', () => {
      clearTimeout(timer);
      figCaption.style.display = 'none';
    });
  });
});
