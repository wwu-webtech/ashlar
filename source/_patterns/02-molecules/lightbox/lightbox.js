// Lightbox dialog component, replaces featherlight video functionality
var body = document.querySelector('body');
var main = body.querySelector('.page-content');

// 'if': Make this work in Pattern Lab
// 'else if': other async scripts are on page, delay lightbox loading in case scripts load focusable items, so this one can set tabindex="-1" as needed. 
// Last resort since we can't access iframe objects for traditional modal focus traps.
if (main == null) {
  lightbox();
}
else if (main.getElementsByTagName('script')) {
  window.setTimeout(function(){
    lightbox();
  }, 3000);
}
else {
  lightbox();
}

function lightbox() {
  var lbPlayButton = document.querySelectorAll('.play-link');
  var playButtonArr = Array.from(lbPlayButton);
  var bgFocusable = document.querySelectorAll('a, button:not(.lightbox-close-dialog), textarea, select, input');
  var playButtonFocused;
  var pageBackground = document.querySelectorAll('div:not(.lightbox-dialog):not(.lightbox-content), .skip-link');

  // // create lightbox container // //

  var lbContainer = document.createElement('div');
  lbContainer.classList.add('lightbox-dialog');
  lbContainer.setAttribute('role', 'dialog');
  lbContainer.setAttribute('id', 'dialog-1');
  lbContainer.setAttribute('aria-labelledby', 'dialog-heading');
  
  var overlay = document.createElement('div');
  overlay.classList.add('lightbox-overlay', 'invisible');
  
  overlay.appendChild(lbContainer);
  body.appendChild(overlay);
  
  // add child elements of container
  
    // close button
  var closeButton = document.createElement('button');
  closeButton.classList.add('lightbox-close-dialog', 'alt');
  closeButton.innerHTML = '<span class="material-icons" aria-hidden="true">clear</span> Close <span class="visually-hidden">dialog</span>'
  lbContainer.appendChild(closeButton);

    // video iframe
  var content = document.createElement('div');
  content.classList.add('embed-container', 'lightbox-content');
  content.setAttribute('id', 'lightbox-content');

  var iframe = document.createElement('iframe');
  iframe.setAttribute('title', '');
  iframe.setAttribute('src', '');
  iframe.setAttribute('allowfullscreen', '');

  content.appendChild(iframe);
  lbContainer.appendChild(content);
  
  // visually-hidden heading, needed to name dialog
  var lbHeading = document.createElement('h2');
  lbHeading.innerHTML = '';
  lbHeading.setAttribute('id', 'dialog-heading');
  lbHeading.classList.add('visually-hidden');

  iframe.parentNode.insertBefore(lbHeading, iframe);

  // // end lightbox creation // //
  
  // on button click, open dialog

  playButtonArr.forEach(function(button){
    button.addEventListener('click', function(){
      playButtonFocused = document.activeElement;
    
      // add iframe src and titles, heading title
      if (this.dataset.title === '') {
        iframe.setAttribute('title', 'Video');
        lbHeading.innerHTML = 'Lightbox';
      }
      else {
        iframe.setAttribute('title', this.dataset.title);
        lbHeading.innerHTML = this.dataset.title;
      }
      iframe.setAttribute('src', this.dataset.url);

      // reveal dialog
      overlay.classList.replace('invisible', 'shown');
      closeButton.focus();
      
      // set aria and tabindex attrs
      for (var i = 0; i < pageBackground.length; i++) {
          pageBackground[i].setAttribute('aria-hidden', 'true');
        }
      for (var i = 0; i < bgFocusable.length; i++) {
        bgFocusable[i].setAttribute('tabindex', '-1');
      }
  
      // Press close button, close dialog
      closeButton.addEventListener('click', closeDialog);
    });
  });
  
  // Press Esc, close dialog
  document.addEventListener('keydown', function(e) {
    if (!e.keyCode || e.keyCode == 27) {
      closeDialog();
    }
  });
  
  // Click outside of dialog, close dialog
  overlay.addEventListener('click', function(e) {
    if (e.target == this) {
      closeDialog(e);
    }
   }, false);
  
  // on close, return focus to button pressed
  // clear out sources to avoid conflict
  
  function closeDialog() {
    overlay.classList.replace('shown', 'invisible');
    for (var i = 0; i < pageBackground.length; i++) {
      pageBackground[i].removeAttribute('aria-hidden');
    }
    for (var i = 0; i < bgFocusable.length; i++) {
      bgFocusable[i].removeAttribute('tabindex');
    }
    iframe.setAttribute('title', '');
    iframe.setAttribute('src', '');
    lbHeading.innerHTML = '';
    playButtonFocused.focus();
  }
}

// end lightbox 