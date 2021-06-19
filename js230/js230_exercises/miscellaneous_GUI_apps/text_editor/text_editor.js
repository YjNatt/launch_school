document.addEventListener('DOMContentLoaded', () => {
  class App {
    constructor() {
      this.textarea = document.querySelector('.textarea');
      let align_left = document.querySelector('.align_left');
      this.toggleButton(align_left);
      this.toggleTextFormat('justifyLeft');
      this.bindEvents();
    }

    toggleButton(button) {
      this.textarea.focus();
      button.classList.toggle('active');
    }

    toggleTextFormat(type, content = null) {
      document.execCommand(type, false, content);
    }

    handleBoldClick(event) {
      this.toggleButton(event.target);
      this.toggleTextFormat('bold');
    }

    handleItalicClick(event) {
      this.toggleButton(event.target);
      this.toggleTextFormat('italic');
    }

    handleUnderlineClick(event) {
      this.toggleButton(event.target);
      this.toggleTextFormat('underline');
    }

    handleStrikeClick(event) {
      this.toggleButton(event.target);
      this.toggleTextFormat('strikethrough');
    }

    handleUlClick(event) {
      let ol = document.querySelector('.ol');
      if (ol.classList.contains('active')) {
        this.toggleButton(ol);
      }

      this.toggleButton(event.target);
      this.toggleTextFormat('insertUnorderedList');
    }

    handleOlClick(event) {
      let ul = document.querySelector('.ul');
      if (ul.classList.contains('active')) {
        this.toggleButton(ul);
      }

      this.toggleButton(event.target);
      this.toggleTextFormat('insertOrderedList');
    }

    handleLinkClick(event) {
      let selection = document.getSelection().toString();
      let url;

      if (selection.length === 0) return;

      url = prompt('Enter the URL to Link to:');
      if (url) {
        this.toggleTextFormat('createLink', encodeURIComponent(url));
      }
    }

    toggleOffJustifyBtns() {
      let buttons = []
      buttons.push(document.querySelector('.align_left'));
      buttons.push(document.querySelector('.align_right'));
      buttons.push(document.querySelector('.align_center'));
      buttons.push(document.querySelector('.align_justify'));

      let activeBtn = buttons.find(btn => btn.classList.contains('active'));
      activeBtn && activeBtn.classList.remove('active')
    }

    handleAlignLeftClick(event) {
      this.toggleOffJustifyBtns();
      this.toggleButton(event.target);
      this.toggleTextFormat('justifyLeft');
    }

    handleAlignRightClick(event) {
      this.toggleOffJustifyBtns();
      this.toggleButton(event.target);
      this.toggleTextFormat('justifyRight');
    }

    handleAlignCenterClick(event) {
      this.toggleOffJustifyBtns();
      this.toggleButton(event.target);
      this.toggleTextFormat('justifyCenter');
    }

    handleAlignJustifyClick(event) {
      this.toggleOffJustifyBtns();
      this.toggleButton(event.target);
      this.toggleTextFormat('justifyFull');
    }
    
    btnActiveSelectionChange(btn, isActive) {
      if (isActive) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }

    handleSelectionChange(event) {
      let isBold = document.queryCommandState('bold');
      let isItalic = document.queryCommandState('italic');
      let isUnderline = document.queryCommandState('underline');
      let isStrikethrough = document.queryCommandState('strikeThrough');
      let isCreateLink = document.queryCommandState('createLink');
      let isOl = document.queryCommandState('insertOrderedList');
      let isUl = document.queryCommandState('insertUnorderedList');
      let isAlignLeft = document.queryCommandState('justifyLeft');
      let isAlignRight = document.queryCommandState('justifyRight');
      let isAlignCenter = document.queryCommandState('justifyCenter');
      let isAlignJust = document.queryCommandState('justifyFull');

      this.btnActiveSelectionChange(document.querySelector('.bold'), isBold);
      this.btnActiveSelectionChange(document.querySelector('.italic'), isItalic);
      this.btnActiveSelectionChange(document.querySelector('.underline'), isUnderline);
      this.btnActiveSelectionChange(document.querySelector('.strikethrough'), isStrikethrough);
      this.btnActiveSelectionChange(document.querySelector('.link'), isCreateLink);
      this.btnActiveSelectionChange(document.querySelector('.ul'), isUl);
      this.btnActiveSelectionChange(document.querySelector('.ol'), isOl);
      this.btnActiveSelectionChange(document.querySelector('.align_left'), isAlignLeft);
      this.btnActiveSelectionChange(document.querySelector('.align_right'), isAlignRight);
      this.btnActiveSelectionChange(document.querySelector('.align_center'), isAlignCenter);
      this.btnActiveSelectionChange(document.querySelector('.align_justify'), isAlignJust);
    }

    bindEvents() {
      document.addEventListener('selectionchange', this.handleSelectionChange.bind(this));
      document.querySelector('.bold').addEventListener('click', this.handleBoldClick.bind(this));
      document.querySelector('.italic').addEventListener('click', this.handleItalicClick.bind(this));
      document.querySelector('.underline').addEventListener('click', this.handleUnderlineClick.bind(this));
      document.querySelector('.strikethrough').addEventListener('click', this.handleStrikeClick.bind(this));
      document.querySelector('.ul').addEventListener('click', this.handleUlClick.bind(this));
      document.querySelector('.ol').addEventListener('click', this.handleOlClick.bind(this));
      document.querySelector('.link').addEventListener('click', this.handleLinkClick.bind(this));
      document.querySelector('.align_left').addEventListener('click', this.handleAlignLeftClick.bind(this));
      document.querySelector('.align_right').addEventListener('click', this.handleAlignRightClick.bind(this));
      document.querySelector('.align_center').addEventListener('click', this.handleAlignCenterClick.bind(this));
      document.querySelector('.align_justify').addEventListener('click', this.handleAlignJustifyClick.bind(this));
    }
  }

  new App();
});
