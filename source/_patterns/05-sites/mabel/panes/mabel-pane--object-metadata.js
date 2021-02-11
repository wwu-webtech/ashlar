/* For compound object pages */

/* When the third tab is clicked, move things from the first two into it */
var firstTab = document.getElementById('mabel-object-switch-button-1');
var secondTab = document.getElementById('mabel-object-switch-button-2');
var thirdTab = document.getElementById('mabel-object-switch-button-3');

var firstContainer = document.getElementById('mabel-object-switch-content-1');
var secondContainer = document.getElementById('mabel-object-switch-content-2');
var thirdContainerLeft = document.getElementById('mabel-viewer-container');
var thirdContainerRight = document.getElementById('mabel-metadata-container');

var imageViewer = document.getElementsByClassName('islandora-large-image-content-wrapper');
var metadata = document.getElementsByClassName('islandora-metadata');

function splitContent() {
  for(var i = 0; i < imageViewer.length; i++) {
    firstContainer.appendChild(imageViewer[i]);
  }

  for(var i = 0; i < metadata.length; i++) {
    secondContainer.appendChild(metadata[i]);
  }
}

function mergeContent() {
  for(var i = 0; i < imageViewer.length; i++) {
    thirdContainerLeft.appendChild(imageViewer[i]);
  }

  for(var i = 0; i < metadata.length; i++) {
    thirdContainerRight.appendChild(metadata[i]);
  }
}

firstTab.addEventListener("click", splitContent);
secondTab.addEventListener("click", splitContent);
thirdTab.addEventListener("click", mergeContent);
