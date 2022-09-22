# Tables

## Basic

<table>
  <caption>Table caption to explain what this table is about</caption>
  <tr>
    <th scope="col">Table Header</th>
    <th scope="col">Title</th>
    <th scope="col">Header</th>
    <th scope="col">Category</th>
    <th scope="col">Date</th>
  </tr>
  <tr>
    <td><a href="#">Link</a></td>
    <td>Data</td>
    <td>Data</td>
    <td>Some text that has a <a href="#">link</a> within in</td>
    <td>Data</td>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
    <td><a href="#">This link may span multiple lines</a></td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>This is some text which has <a href="#">a link that may span multiple lines</a> within it to check line spacing</td>
    <td>Data</td>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table>

    <table>
    <caption>Table caption to explain what this table is about</caption>
    <tr>
        <th scope="col">Table Header</th>
        <th scope="col">Title</th>
        <th scope="col">Header</th>
        <th scope="col">Category</th>
        <th scope="col">Date</th>
    </tr>
    <tr>
        <td><a href="#">Link</a></td>
        <td>Data</td>
        <td>Data</td>
        <td>Some text that has a <a href="#">link</a> within in</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td><a href="#">This link may span multiple lines</a></td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>This is some text which has <a href="#">a link that may span multiple lines</a> within it to check line spacing</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    </table>

## Complex
<table>
  <caption>An example of a table that has headers both for rows and for columns.</caption>
  <tr>
    <td></td>
    <th scope="col">Col Header</th>
    <th scope="col">Col Header</th>
    <th scope="col">Col Header</th>
    <th scope="col">Col Header</th>
    <th scope="col">Col Header</th>
  </tr>
  <tr>
    <th scope="row"><a href="#">Row Header</a></th>
    <td><a href="#">Link</a></td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <th scope="row"><a href="#">Row Header</a></th>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <th scope="row"><a href="#">Row Header</a></th>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <th scope="row"><a href="#">Row Header</a></th>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
  <tr>
    <th scope="row"><a href="#">Row Header</a></th>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table>

    <table>
    <caption>An example of a table that has headers both for rows and for columns.</caption>
    <tr>
        <td></td>
        <th scope="col">Col Header</th>
        <th scope="col">Col Header</th>
        <th scope="col">Col Header</th>
        <th scope="col">Col Header</th>
        <th scope="col">Col Header</th>
    </tr>
    <tr>
        <th scope="row"><a href="#">Row Header</a></th>
        <td><a href="#">Link</a></td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <th scope="row"><a href="#">Row Header</a></th>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <th scope="row"><a href="#">Row Header</a></th>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <th scope="row"><a href="#">Row Header</a></th>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <th scope="row"><a href="#">Row Header</a></th>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    </table>

<table>
  <caption>An example of a complex table, with grouped headers</caption>
  <tr>
    <th id="row-1-col-1" scope="col"><a>Row Group</a></th>
    <th id="row-1-col-2" scope="col">Col Header</th>
    <th id="row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
    <th id="row-1-col-4" colspan="3" scope="col">Col Group</th>
  </tr>
  <tr>
    <th id="row-2-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="row-2-col-2" scope="row">Row Header</th>
    <th id="row-2-col-3" scope="col">Col Header</th>
    <th id="row-2-col-4" scope="col">Col Header</th>
    <th id="row-2-col-5" scope="col">Col Header</th>
    <th id="row-2-col-6" scope="col">Col Header</th>
    <th id="row-2-col-7" scope="col">Col Header</th>
  </tr>
  <tr>
    <th id="row-3-col-2" scope="row">Row Header</th>
    <td headers="row-1-col-3 row-2-col-1 row-3-col-2 row-2-col-3"><a href="#">Link</a></td>
    <td headers="row-1-col-3 row-2-col-1 row-3-col-2 row-2-col-4"><a href="#">Link</a></td>
    <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
    <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-6">Data</td>
    <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="row-4-col-2" scope="row">Row Header</th>
    <td headers="row-1-col-3 row-2-col-1 row-4-col-2 row-2-col-3">More words taking up a single cell on table</td>
    <td headers="row-1-col-3 row-2-col-1 row-4-col-2 row-2-col-4">Supercalifragilisticexpialidocious</td>
    <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-5">Data</td>
    <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-6">Data</td>
    <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="row-5-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="row-5-col-2" scope="row">Row Header</th>
    <td headers="row-1-col-3 row-5-col-1 row-5-col-2 row-2-col-3">Data</td>
    <td headers="row-1-col-3 row-5-col-1 row-5-col-2 row-2-col-4">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-5">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-6">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="row-6-col-2" scope="row">Row Header</th>
    <td headers="row-1-col-3 row-5-col-1 row-6-col-2 row-2-col-3">Data</td>
    <td headers="row-1-col-3 row-5-col-1 row-6-col-2 row-2-col-4">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-5">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-6">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="row-7-col-2" scope="row">Row Header</th>
    <td headers="row-1-col-3 row-5-col-1 row-7-col-2 row-2-col-3">Data</td>
    <td headers="row-1-col-3 row-5-col-1 row-7-col-2 row-2-col-4">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-5">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-6">Data</td>
    <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-7">Data</td>
  </tr>
</table>

    <table>
    <caption>An example of a complex table, with grouped headers</caption>
    <tr>
        <th id="row-1-col-1" scope="col"><a>Row Group</a></th>
        <th id="row-1-col-2" scope="col">Col Header</th>
        <th id="row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
        <th id="row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
    <tr>
        <th id="row-2-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="row-2-col-2" scope="row">Row Header</th>
        <th id="row-2-col-3" scope="col">Col Header</th>
        <th id="row-2-col-4" scope="col">Col Header</th>
        <th id="row-2-col-5" scope="col">Col Header</th>
        <th id="row-2-col-6" scope="col">Col Header</th>
        <th id="row-2-col-7" scope="col">Col Header</th>
    </tr>
    <tr>
        <th id="row-3-col-2" scope="row">Row Header</th>
        <td headers="row-1-col-3 row-2-col-1 row-3-col-2 row-2-col-3"><a href="#">Link</a></td>
        <td headers="row-1-col-3 row-2-col-1 row-3-col-2 row-2-col-4"><a href="#">Link</a></td>
        <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
        <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-6">Data</td>
        <td headers="row-1-col-4 row-2-col-1 row-3-col-2 row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="row-4-col-2" scope="row">Row Header</th>
        <td headers="row-1-col-3 row-2-col-1 row-4-col-2 row-2-col-3">More words taking up a single cell on table</td>
        <td headers="row-1-col-3 row-2-col-1 row-4-col-2 row-2-col-4">Supercalifragilisticexpialidocious</td>
        <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-5">Data</td>
        <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-6">Data</td>
        <td headers="row-1-col-4 row-2-col-1 row-4-col-2 row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="row-5-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="row-5-col-2" scope="row">Row Header</th>
        <td headers="row-1-col-3 row-5-col-1 row-5-col-2 row-2-col-3">Data</td>
        <td headers="row-1-col-3 row-5-col-1 row-5-col-2 row-2-col-4">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-5">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-6">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-5-col-2 row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="row-6-col-2" scope="row">Row Header</th>
        <td headers="row-1-col-3 row-5-col-1 row-6-col-2 row-2-col-3">Data</td>
        <td headers="row-1-col-3 row-5-col-1 row-6-col-2 row-2-col-4">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-5">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-6">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-6-col-2 row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="row-7-col-2" scope="row">Row Header</th>
        <td headers="row-1-col-3 row-5-col-1 row-7-col-2 row-2-col-3">Data</td>
        <td headers="row-1-col-3 row-5-col-1 row-7-col-2 row-2-col-4">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-5">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-6">Data</td>
        <td headers="row-1-col-4 row-5-col-1 row-7-col-2 row-2-col-7">Data</td>
    </tr>
    </table>

## Custom Classes
<table class="light-blue auto-layout align-top">
  <caption>Custom classes applied to this table: light-blue fixed align-top</caption>
  <tr>
    <th id="t1-row-1-col-1" scope="col"><a>Row Group</a></th>
    <th id="t1-row-1-col-2" scope="col">Col Header</th>
    <th id="t1-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
    <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>
  </tr>
  <tr>
    <th id="t1-row-2-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="t1-row-2-col-2" scope="row">Row Header</th>
    <th id="t1-row-2-col-3" scope="col">Col Header</th>
    <th id="t1-row-2-col-4" scope="col">Col Header</th>
    <th id="t1-row-2-col-5" scope="col">Col Header</th>
    <th id="t1-row-2-col-6" scope="col">Col Header</th>
    <th id="t1-row-2-col-7" scope="col">Col Header</th>
  </tr>
  <tr>
    <th id="t1-row-3-col-2" scope="row">Row Header</th>
    <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="#">Link</a></td>
    <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="#">Link</a></td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-6">Data</td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t1-row-4-col-2" scope="row">Row Header</th>
    <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-3">More words taking up a single cell on table</td>
    <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-4">Supercalifragilisticexpialidocious</td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-5">Data</td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-6">Data</td>
    <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t1-row-5-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="t1-row-5-col-2" scope="row">Row Header</th>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-3">Data</td>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-4">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-5">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-6">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t1-row-6-col-2" scope="row">Row Header</th>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-3">Data</td>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-4">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-5">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-6">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t1-row-7-col-2" scope="row">Row Header</th>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-3">Data</td>
    <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-4">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-5">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-6">Data</td>
    <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-7">Data</td>
  </tr>
</table>

    <table class="light-blue auto-layout align-top">
    <caption>Custom classes applied to this table: light-blue fixed align-top</caption>
    <tr>
        <th id="t1-row-1-col-1" scope="col"><a>Row Group</a></th>
        <th id="t1-row-1-col-2" scope="col">Col Header</th>
        <th id="t1-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
        <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
    <tr>
        <th id="t1-row-2-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="t1-row-2-col-2" scope="row">Row Header</th>
        <th id="t1-row-2-col-3" scope="col">Col Header</th>
        <th id="t1-row-2-col-4" scope="col">Col Header</th>
        <th id="t1-row-2-col-5" scope="col">Col Header</th>
        <th id="t1-row-2-col-6" scope="col">Col Header</th>
        <th id="t1-row-2-col-7" scope="col">Col Header</th>
    </tr>
    <tr>
        <th id="t1-row-3-col-2" scope="row">Row Header</th>
        <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="#">Link</a></td>
        <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="#">Link</a></td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-6">Data</td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t1-row-4-col-2" scope="row">Row Header</th>
        <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-3">More words taking up a single cell on table</td>
        <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-4">Supercalifragilisticexpialidocious</td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-5">Data</td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-6">Data</td>
        <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t1-row-5-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="t1-row-5-col-2" scope="row">Row Header</th>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-3">Data</td>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-4">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-5">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-6">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-5-col-2 t1-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t1-row-6-col-2" scope="row">Row Header</th>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-3">Data</td>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-4">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-5">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-6">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-6-col-2 t1-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t1-row-7-col-2" scope="row">Row Header</th>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-3">Data</td>
        <td headers="t1-row-1-col-3 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-4">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-5">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-6">Data</td>
        <td headers="t1-row-1-col-4 t1-row-5-col-1 t1-row-7-col-2 t1-row-2-col-7">Data</td>
    </tr>
    </table>

<table class="lightest-gray align-bottom font-size--smaller">
  <caption>Custom classes applied to this table: lightest-gray align-bottom font-size--smaller</caption>
  <tr>
    <th id="t2-row-1-col-1" scope="col"><a>Row Group</a></th>
    <th id="t2-row-1-col-2" scope="col">Col Header</th>
    <th id="t2-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
    <th id="t2-row-1-col-4" colspan="3" scope="col">Col Group</th>
  </tr>
  <tr>
    <th id="t2-row-2-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="t2-row-2-col-2" scope="row">Row Header</th>
    <th id="t2-row-2-col-3" scope="col">Col Header</th>
    <th id="t2-row-2-col-4" scope="col">Col Header</th>
    <th id="t2-row-2-col-5" scope="col">Col Header</th>
    <th id="t2-row-2-col-6" scope="col">Col Header</th>
    <th id="t2-row-2-col-7" scope="col">Col Header</th>
  </tr>
  <tr>
    <th id="t2-row-3-col-2" scope="row">Row Header</th>
    <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-3"><a href="#">Link</a></td>
    <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-4"><a href="#">Link</a></td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-6">Data</td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t2-row-4-col-2" scope="row">Row Header</th>
    <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-3">More words taking up a single cell on table</td>
    <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-4">Supercalifragilisticexpialidocious</td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-5">Data</td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-6">Data</td>
    <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t2-row-5-col-1" rowspan="3" scope="row">Row Group</th>
    <th id="t2-row-5-col-2" scope="row">Row Header</th>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-3">Data</td>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-4">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-5">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-6">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t2-row-6-col-2" scope="row">Row Header</th>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-3">Data</td>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-4">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-5">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-6">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-7">Data</td>
  </tr>
  <tr>
    <th id="t2-row-7-col-2" scope="row">Row Header</th>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-3">Data</td>
    <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-4">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-5">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-6">Data</td>
    <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-7">Data</td>
  </tr>
</table>

    <table class="lightest-gray align-bottom font-size--smaller">
    <caption>Custom classes applied to this table: lightest-gray align-bottom font-size--smaller</caption>
    <tr>
        <th id="t2-row-1-col-1" scope="col"><a>Row Group</a></th>
        <th id="t2-row-1-col-2" scope="col">Col Header</th>
        <th id="t2-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
        <th id="t2-row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
    <tr>
        <th id="t2-row-2-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="t2-row-2-col-2" scope="row">Row Header</th>
        <th id="t2-row-2-col-3" scope="col">Col Header</th>
        <th id="t2-row-2-col-4" scope="col">Col Header</th>
        <th id="t2-row-2-col-5" scope="col">Col Header</th>
        <th id="t2-row-2-col-6" scope="col">Col Header</th>
        <th id="t2-row-2-col-7" scope="col">Col Header</th>
    </tr>
    <tr>
        <th id="t2-row-3-col-2" scope="row">Row Header</th>
        <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-3"><a href="#">Link</a></td>
        <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-4"><a href="#">Link</a></td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-6">Data</td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-3-col-2 t2-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t2-row-4-col-2" scope="row">Row Header</th>
        <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-3">More words taking up a single cell on table</td>
        <td headers="t2-row-1-col-3 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-4">Supercalifragilisticexpialidocious</td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-5">Data</td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-6">Data</td>
        <td headers="t2-row-1-col-4 t2-row-2-col-1 t2-row-4-col-2 t2-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t2-row-5-col-1" rowspan="3" scope="row">Row Group</th>
        <th id="t2-row-5-col-2" scope="row">Row Header</th>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-3">Data</td>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-4">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-5">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-6">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-5-col-2 t2-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t2-row-6-col-2" scope="row">Row Header</th>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-3">Data</td>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-4">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-5">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-6">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-6-col-2 t2-row-2-col-7">Data</td>
    </tr>
    <tr>
        <th id="t2-row-7-col-2" scope="row">Row Header</th>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-3">Data</td>
        <td headers="t2-row-1-col-3 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-4">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-5">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-6">Data</td>
        <td headers="t2-row-1-col-4 t2-row-5-col-1 t2-row-7-col-2 t2-row-2-col-7">Data</td>
    </tr>
    </table>

## Responsive 

<div class="responsive-table" tabindex="0">
    <table>
        <caption>Table with responsive-table class</caption>
    <tr>
        <th scope="col">Table Header</th>
        <th scope="col">Title</th>
        <th scope="col">Header</th>
        <th scope="col">Category</th>
        <th scope="col">Date</th>
        <th scope="col">Range</th>
        <th scope="col">Priority</th>
        <th scope="col">Rank</th>
        <th scope="col">Etc.</th>
        <th scope="col">Etc.</th>
    </tr>
    <tr>
        <td><a href="#">Link</a></td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
    </tr>
    </table>
</div>

    <div class="responsive-table" tabindex="0">
        <table>
            <caption>Table with responsive-table class</caption>
        <tr>
            <th scope="col">Table Header</th>
            <th scope="col">Title</th>
            <th scope="col">Header</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">Range</th>
            <th scope="col">Priority</th>
            <th scope="col">Rank</th>
            <th scope="col">Etc.</th>
            <th scope="col">Etc.</th>
        </tr>
        <tr>
            <td><a href="#">Link</a></td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
        </tr>
        </table>
    </div>