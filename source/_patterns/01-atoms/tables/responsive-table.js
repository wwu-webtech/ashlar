var data_cell = $('td');
data_cell.attr('data-header', '');

function mobileHeader() {
  var table_column = $('table tr th[scope="col"]');
  var table_row = $('table tr');

  table_row.each(function() {
    var cell = 
    var col_text = $(this).text();
  });
  };

// var data = Array();
//
// $("table tr").each(function(i){
//     data[i] = Array();
//     $(this).children('td').each(function(ii, vv){
//         data[i][ii] = $(this).attr('data-header', column_header[i] + ': ');
//     });
//   });
//
// var $mobile_column_header = $column_header.text() + ': ';

mobileHeader();
