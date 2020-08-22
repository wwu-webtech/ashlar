// To do
// style container

var lbPlayButton = document.querySelectorAll('.play-link');
var playButtonArr = Array.from(lbPlayButton);
var bgFocusable = document.querySelectorAll('a, button:not(.close-dialog), textarea, select, input');
var playButtonFocused;

// // create lightbox container // //
var lbContainer = document.createElement('div');
lbContainer.classList.add('lightbox-dialog', 'hidden');
lbContainer.setAttribute('role', 'dialog');
lbContainer.setAttribute('id', 'dialog-1');
lbContainer.setAttribute('aria-labelledby', 'dialog-heading');
document.querySelector('body').appendChild(lbContainer);

// add child elements of container

  // close button
var closeButton = document.createElement('button');
closeButton.classList.add('close-dialog')
closeButton.innerHTML = '<span class="material-icons" aria-hidden="true">clear</span> <span class="visually-hidden">Close dialog</span>'
lbContainer.appendChild(closeButton);

  // visually-hidden heading, needed to name dialog
var lbHeading = document.createElement('h2');
lbHeading.innerHTML = 'Lightbox';
lbHeading.setAttribute('id', 'dialog-heading');
lbHeading.classList.add('visually-hidden');
lbContainer.appendChild(lbHeading);

  // video iframe
var video = document.createElement('div');
video.classList.add('embed-container', 'lightbox-content');
video.setAttribute('id', 'lightbox-content')

var iframe = document.createElement('iframe');
iframe.setAttribute('title', '');
iframe.setAttribute('src', '');

video.appendChild(iframe);
lbContainer.appendChild(video);

// // end lightbox creation // //

// on button click, open modal

playButtonArr.forEach(function(button){
    var lbVideo = button.dataset.url;
    button.addEventListener('click', lightboxModal);

    function lightboxModal() {
        var pageBackground = document.querySelectorAll('div:not(.lightbox-dialog), .skip-link');
        playButtonFocused = document.activeElement;

        // set aria and tabindex attrs
        for (var i = 0; i < pageBackground.length; i++) {
            pageBackground[i].setAttribute('aria-hidden', 'true');
          }
        for (var i = 0; i < bgFocusable.length; i++) {
          bgFocusable[i].setAttribute('tabindex', '-1');
        }
        // add iframe src and titles
        iframe.setAttribute('title', this.dataset.title);
        iframe.setAttribute('src', this.dataset.url);
        lbContainer.classList.replace('hidden', 'shown'); // reveal modal

        var closeDialog = lbContainer.querySelector('.close-dialog');
        closeDialog.focus();
        
        // on close, return focus to button pressed
        closeDialog.addEventListener('click', function(){
          lbContainer.classList.replace('shown', 'hidden');
          iframe.setAttribute('title', '');
          iframe.setAttribute('src', '');
          for (var i = 0; i < pageBackground.length; i++) {
            pageBackground[i].removeAttribute('aria-hidden');
          }
          for (var i = 0; i < bgFocusable.length; i++) {
            bgFocusable[i].removeAttribute('tabindex');
          }  
          playButtonFocused.focus();
        })
    };
});