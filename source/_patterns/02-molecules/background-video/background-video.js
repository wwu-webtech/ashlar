/* Prevent multiple calls in Drupal */
if (context !== document) {
  return;
}

var play_pause_button = Array.from(
  document.querySelectorAll(".bg-video-container > button")
);
var videos = Array.from(document.querySelectorAll(".bg-video-container video"));
var material_play =
  '<span class="material-icons" aria-hidden="true">play_arrow</span>';
var material_pause =
  '<span class="material-icons" aria-hidden="true">pause</span>';
var motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");

function playVideo(vid, btn) {
  vid.play().catch(function (error) {
    console.log(error);
  });
  vid.classList.remove("paused");
  btn.innerHTML = material_pause + "Pause animation";
}

function pauseVideo(vid, btn) {
  vid.pause();
  vid.classList.add("paused");
  btn.innerHTML = material_play + "Resume animation";
}

function prefersReducedMotion() {
  videos.forEach(function (video) {
    if (motionQuery.matches) {
      video.play().catch(function (error) {
        console.log(error);
      });
    } else {
      video.pause();
    }
  });
  play_pause_button.forEach(function (button) {
    if (motionQuery.matches) {
      button.classList.add("bg-video--pause");
      button.innerHTML = material_pause + "Pause animation";
    } else {
      button.classList.add("bg-video--play");
      button.innerHTML = material_play + "Resume animation";
    }
  });
}

play_pause_button.forEach(function (button) {
  var custom_classes = button.closest(".block");
  var video = custom_classes.querySelector(".bg-video-container video");

  if (custom_classes.classList.contains("paused")) {
    pauseVideo(video, button);
    button.classList.add("bg-video--pause");
  } else {
    playVideo(video, button);
  }

  button.addEventListener("click", function () {
    var video_elm = button
      .closest(".block")
      .querySelector(".bg-video-container video");

    video_elm.classList.toggle("paused");
    button.classList.toggle("bg-video--pause");

    if (button.classList.contains("bg-video--pause")) {
      pauseVideo(video_elm, button);
    } else {
      playVideo(video_elm, button);
    }
  });
});

prefersReducedMotion();
try {
  motionQuery.addEventListener("change", prefersReducedMotion);
} catch (error) {
  motionQuery.addListener(prefersReducedMotion);
  console.log(error);
}
