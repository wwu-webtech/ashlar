$(document).ready(function() {
  var $breadcrumb_list = $('.breadcrumb ol');
  var $current_page = $breadcrumb_list.find('li:last-child');

  $current_page.attr('aria-current', 'page');
});
