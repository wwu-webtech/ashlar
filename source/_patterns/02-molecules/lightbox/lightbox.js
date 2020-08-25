// Lightbox modal component, replaces featherlight video functionality

var body = document.querySelector('body');
var lbPlayButton = document.querySelectorAll('.play-link');
var playButtonArr = Array.from(lbPlayButton);
var bgFocusable = document.querySelectorAll('a, button:not(.lightbox-close-dialog), textarea, select, input');
var playButtonFocused;
var pageBackground = document.querySelectorAll('div:not(.lightbox-dialog):not(.lightbox-content), .skip-link');

// // create lightbox container // //
var lbContainer = document.createElement('div');
lbContainer.classList.add('lightbox-dialog', 'hidden');
lbContainer.setAttribute('role', 'dialog');
lbContainer.setAttribute('id', 'dialog-1');
lbContainer.setAttribute('aria-labelledby', 'dialog-heading');

var overlay = document.createElement('div');
overlay.classList.add('lightbox-overlay', 'hidden');

body.append(lbContainer, overlay);

// add child elements of container

  // close button
var closeButton = document.createElement('button');
closeButton.classList.add('lightbox-close-dialog', 'alt');
closeButton.innerHTML = '<span class="material-icons" aria-hidden="true">clear</span> <span class="visually-hidden">Close dialog</span>'
lbContainer.appendChild(closeButton);

  // video iframe
var content = document.createElement('div');
content.classList.add('embed-container', 'lightbox-content');
content.setAttribute('id', 'lightbox-content');

var iframe = document.createElement('iframe');
iframe.setAttribute('title', '');
iframe.setAttribute('src', '');

content.appendChild(iframe);
lbContainer.appendChild(content);

  // visually-hidden heading, needed to name dialog
var lbHeading = document.createElement('h2');
lbHeading.innerHTML = 'Lightbox';
lbHeading.setAttribute('id', 'dialog-heading');
lbHeading.classList.add('visually-hidden');

iframe.parentNode.insertBefore(lbHeading, iframe);

// // end lightbox creation // //

// on button click, open modal

playButtonArr.forEach(function(button){
    button.addEventListener('click', function(){
      playButtonFocused = document.activeElement;

      // set aria and tabindex attrs
      for (var i = 0; i < pageBackground.length; i++) {
          pageBackground[i].setAttribute('aria-hidden', 'true');
        }
      for (var i = 0; i < bgFocusable.length; i++) {
        bgFocusable[i].setAttribute('tabindex', '-1');
      }
      // add iframe src and titles
      if (this.dataset.title === '') {
        iframe.setAttribute('title', 'Video');
      }
      else {
        iframe.setAttribute('title', this.dataset.title);
      }
      iframe.setAttribute('src', this.dataset.url);

       // reveal modal
      lbContainer.classList.replace('hidden', 'shown');
      overlay.classList.remove('hidden');

      var closeDialog = lbContainer.querySelector('.lightbox-close-dialog');
      closeDialog.focus();
      
      closeDialog.addEventListener('click', function(){
        closeModal();
      });
   });
});

document.addEventListener('keydown', function(e) {
  if (!e.keyCode || e.keyCode == 27) {
    closeModal();
  }
});

overlay.addEventListener('click', function(e) {
  if (e.target == this) {
    closeModal(e);
  }
 }, false);

function closeModal() {
  // on close, return focus to button pressed
  // clear out sources to avoid conflict
  lbContainer.classList.replace('shown', 'hidden');
  overlay.classList.add('hidden');
  iframe.setAttribute('title', '');
  iframe.setAttribute('src', '');
  for (var i = 0; i < pageBackground.length; i++) {
    pageBackground[i].removeAttribute('aria-hidden');
  }
  for (var i = 0; i < bgFocusable.length; i++) {
    bgFocusable[i].removeAttribute('tabindex');
  }  
  playButtonFocused.focus();
}