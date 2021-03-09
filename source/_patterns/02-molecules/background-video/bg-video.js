/* Prevent multiple calls in Drupal */
if (context !== document) {
  return;
}

var play_pause_button = Array.from(
  document.querySelectorAll(".bg-video-container + button")
);
var material_play =
  '<span class="material-icons" aria-hidden="true">play_arrow</span>';
var material_pause =
  '<span class="material-icons" aria-hidden="true">pause</span>';

play_pause_button.forEach(function (button) {
  var video = button.previousElementSibling.childNodes[3];
  var custom_classes = button.closest(".block");

  if (custom_classes.classList.contains("paused")) {
    video.pause();
    button.classList.add("bg-video--pause");
    button.innerHTML = material_play + "Resume animation";
  } else {
    button.innerHTML = material_pause + "Pause animation";
  }

  button.addEventListener("click", function () {
    var video_elm = button
      .closest(".block")
      .querySelector(".bg-video-container video");

    video_elm.classList.toggle("paused");
    button.classList.toggle("bg-video--pause");

    if (button.classList.contains("bg-video--pause")) {
      video_elm.pause();
      button.innerHTML = material_play + "Resume animation";
    } else {
      video_elm.play();
      button.innerHTML = material_pause + "Pause animation";
    }
  });
});
