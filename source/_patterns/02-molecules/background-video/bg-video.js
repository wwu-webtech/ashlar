var bgVideo = $('.bg-video-container', context);
var playPause = bgVideo.children('button');
var vid = playPause.siblings('video');
playPause.addClass('bg-video--pause')
vid.addClass('playing');

function vidList() {
  playPause.each(function(){
    vid.toArray();
  }
)};

playPause.on('click', function() {
  var vid = $(this).siblings('video');

  $(this).toggleClass('bg-video--play bg-video--pause');
  vid.toggleClass('paused playing');
  vidList();

  if (vid.hasClass('paused')) {
    vid.get(0).pause();
    $(this).html('Resume animation');
  }
  else {
    vid.get(0).play();
    $(this).html('Pause animation');
  }
});
