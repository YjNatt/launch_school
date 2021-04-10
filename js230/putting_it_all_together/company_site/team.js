const memberDescriptions = {
  'Kevin Wang': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed scelerisque metus, vitae pellentesque nisi. Donec in sem varius, sollicitudin orci hendrerit, egestas enim. Donec ullamcorper, nulla nec volutpat mollis, nulla nibh molestie dui, non lobortis orci elit pulvinar mauris.',
  'Louis Burton': 'Donec in sem varius, sollicitudin orci hendrerit, egestas enim. Donec ullamcorper, nulla nec volutpat mollis, nulla nibh molestie dui, non lobortis orci elit pulvinar mauris. Phasellus mattis euismod felis at efficitur.',
  'Kasper Salto': 'Donec ullamcorper, nulla nec volutpat mollis, nulla nibh molestie dui, non lobortis orci elit pulvinar mauris. Phasellus mattis euismod felis at efficitur. Donec hendrerit sapien ante, a faucibus turpis mattis nec. Ut eu convallis erat. Maecenas in orci eu ex ullamcorper lobortis eu at nisi.',
  'Chris Lee': 'Sed ac massa mollis, ullamcorper magna non, rutrum diam. Suspendisse vitae pellentesque ante. Aliquam vitae urna at metus congue viverra. Sed posuere luctus diam, eu euismod justo blandit quis.',
};

document.addEventListener('DOMContentLoaded', () => {
  const Modal = {
    init(modalElement) {
      this.node = modalElement;
      this.header = modalElement.querySelector('h3');
      this.paragraph = modalElement.querySelector('p');
      this.img = modalElement.querySelector('a + img');
      return this;
    },
    populate(name, description, imgPath) {
      this.header.textContent = name;
      this.paragraph.textContent = description;
      this.img.setAttribute('src', imgPath);
      this.img.setAttribute('alt', name);
    },
    reset() {
      this.header.textContent = '';
      this.paragraph.textContent = '';
      this.img.setAttribute('src', '');
      this.img.setAttribute('alt', '');
    },
    show() {
      this.node.classList.remove('hide');
    },
    hide() {
      this.node.classList.add('hide');
    }
  };

  const team = document.querySelector('#team ul');

  team.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'IMG') {
      return;
    }

    const modal = Object.create(Modal).init(document.querySelector('#modal'));
    const modalLayer = document.querySelector('#modal-layer');
    const member = event.target.parentNode;
    const name = member.dataset.name;
    const imgPath = member.dataset.image;

    modal.populate(name, memberDescriptions[name], imgPath);
    modal.show();
    modalLayer.classList.remove('hide');

    [modalLayer, modal.node.querySelector('a > img')].forEach(node => {
      node.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target === node) {
          modal.reset();
          modal.hide();
          modalLayer.classList.add('hide');
        }
      });
    });

    document.addEventListener('keyup', event => {
      event.preventDefault();
      if (event.key === 'Escape') {
          modal.reset();
          modal.hide();
          modalLayer.classList.add('hide');
      }
    });
  });
});
