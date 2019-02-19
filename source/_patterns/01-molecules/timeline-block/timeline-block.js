function set_block_height() {
  $('.timeline-block').each(function() {
    $(this).css('min-height', $(this).children('.timeline-heading').innerWidth());
  });
}

set_block_height();

$(window).resize(set_block_height);
