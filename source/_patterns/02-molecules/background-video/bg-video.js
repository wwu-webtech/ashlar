var bgVideo = $('.bg-video-container', context);
var playPause = bgVideo.siblings('.bg-video--pause');
var vid = playPause.siblings('.bg-video-container').children('video');
var materialPlay = '<span class="material-icons" aria-hidden="true">play_arrow</span>';
var materialPause = '<span class="material-icons" aria-hidden="true">pause</span>'

// stop video on tablet size or smaller devices

var $window = $(window, context);
$window.on('resize', function() {
  if ($window.width() <= 1075) {
    vid.addClass('paused');
    vid.removeClass('playing');
    vid.each(function(){
      $(this).get(0).pause();
    });
  }
  else {
    vid.addClass('playing');
    vid.removeClass('paused');
    vid.each(function(){
      $(this).get(0).pause();
    });
  }
});

$(document).ready(function(){
  $window.trigger('resize');
})

// play/pause functionality
playPause.prepend(materialPause);

function vidList() {
  playPause.each(function(){
    vid.toArray();
  }
)};

playPause.on('click', function() {
  var button = $(this);
  var vid = button.prev('.bg-video-container').children('video');

  button.toggleClass('bg-video--play bg-video--pause');
  vid.toggleClass('paused playing');
  vidList();

  if (vid.hasClass('paused')) {
    vid.get(0).pause();
    button.html('Resume animation');
    button.prepend(materialPlay);
  }
  else {
    vid.get(0).play();
    button.html('Pause animation');
    button.prepend(materialPause);
  }
});
