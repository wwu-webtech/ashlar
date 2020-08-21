// On initial play button click
//
// Show alert dialog
// Focus on close button
// Set background to aria-hidden
// remove tabindex from non-dialog elements
// 
// On close button click
// 
// Set focus to play button
// Hide the modal dialog
// 
// for each button
// add click event
// this button is event target
// var lightbox is next dialog sibling


var lbPlayButton = document.querySelectorAll('.play-link');
var playButtonArr = Array.from(lbPlayButton);

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

  // video iframe
var video = document.createElement('div');
video.classList.add('embed-container');

var iframe = document.createElement('iframe');
iframe.setAttribute('title', '');
iframe.setAttribute('src', '');
video.appendChild(iframe);
lbContainer.appendChild(video);

// // end lightbox creation // //

// on button click, open modal
playButtonArr.forEach(function(button){
    var lbVideo = button.dataset.url;
    button.addEventListener('click', showModal);

    function showModal() {
        lbContainer.classList.remove('hidden');
        
        var closeDialog = lbContainer.querySelector('.close-dialog');
        closeDialog.addEventListener('click', function(){
          lbContainer.classList.add('hidden');
    })
  };
});

// var nonDialogContent = document.getElementsByTagName('div');
// var bgFocusable = document.querySelectorAll('a, button:not(.lightbox-close-dialog), textarea, select, input');

// var playButtonFocused;

// lbPlayButton.addEventListener('click', function() {
//     var nonDialogContentArr = Array.from(nonDialogContent);
//     var bgFocusableArr = Array.from(bgFocusable);

//     playButtonFocused = document.activeElement;
//     closeButton.focus();
//     lightbox.classList.remove('hidden');
//     nonDialogContentArr.forEach(function(div){
//       if (!div.hasChildNodes('.lightbox-dialog')) {
//           div.setAttribute('aria-hidden', 'true');
//       }
//     })
//     bgFocusableArr.forEach(function(ui){
//         ui.setAttribute('tabindex', '-1');
//     })
//   });