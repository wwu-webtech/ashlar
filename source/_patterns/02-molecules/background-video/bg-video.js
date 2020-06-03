var bgVideo = $('.bg-video-container', context);
var playPause = bgVideo.siblings('.bg-video--pause');
var vid = playPause.siblings('.bg-video-container').children('video');
vid.addClass('playing');

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
  }
  else {
    vid.get(0).play();
    button.html('Pause animation');
  }
});
