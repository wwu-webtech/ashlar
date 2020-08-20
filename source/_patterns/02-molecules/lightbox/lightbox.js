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
// 
// 
//

var lightboxContainer = document.querySelectorAll('.lightbox-video-container');
var lbPlayButton = document.querySelectorAll('.play-link');
var closeButton = document.querySelectorAll('.lightbox-close-button');

for (i = 0; i < lbPlayButton.length; i++) {
    lbPlayButton[i].addEventListener('click', showModal, false);
}

function showModal() {
    var button = this;
    var lightbox = button.nextElementSibling;
    console.log('I was clicked');
    console.log(this.nextElementSibling);
}
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