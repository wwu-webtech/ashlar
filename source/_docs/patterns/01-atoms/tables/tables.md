# Tables

## Basic
<table>
  <caption>Table caption to explain what this table is about</caption>
  <thead>
    <tr>
      <th scope="col">Table Header</th>
      <th scope="col">Title</th>
      <th scope="col">Header</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>

```
<table>
  <caption>Table caption to explain what this table is about</caption>
  <thead>
    <tr>
      <th scope="col">Table Header</th>
      <th scope="col">Title</th>
      <th scope="col">Header</th>
      <th scope="col">Category</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

## Complex
While we provide this example of complex table markup, in most cases a better practice is to break complex tables into multiple, simple tables.

<table>
  <caption>An example of a table that has headers both for rows and for columns.</caption>
  <thead>
    <tr>
      <td></td>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>

```
<table>
  <caption>An example of a table that has headers both for rows and for columns.</caption>
  <thead>
    <tr>
      <td></td>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
      <th scope="col">Col Header</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

<table>
  <caption>An example of a complex table, with grouped headers</caption>
  <thead>
    <tr>
      <th id="row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="row-1-col-2" scope="col">Col Header</th>
      <th id="row-1-col-3" colSpan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="row-1-col-4" colSpan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="row-2-col-1" rowSpan="3" scope="row">Row Group</th>
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
      <th id="row-5-col-1" rowSpan="3" scope="row">Row Group</th>
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
  </tbody>
</table>

```
<table>
  <caption>An example of a complex table, with grouped headers</caption>
  <thead>
    <tr>
      <th id="row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="row-1-col-2" scope="col">Col Header</th>
      <th id="row-1-col-3" colspan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

## Custom Classes
<table className="blue auto-layout align-top">
  <caption>Custom classes applied to this table: blue fixed align-top</caption>
  <thead>
    <tr>
      <th id="t1-row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="t1-row-1-col-2" scope="col">Col Header</th>
      <th id="t1-row-1-col-3" colSpan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="t1-row-1-col-4" colSpan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="t1-row-2-col-1" rowSpan="3" scope="row">Row Group</th>
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
      <th id="t1-row-5-col-1" rowSpan="3" scope="row">Row Group</th>
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
  </tbody>
</table>

```
<table class="blue auto-layout align-top">
  <caption>Custom classes applied to this table: blue fixed align-top</caption>
  <thead>
    <tr>
      <th id="t1-row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="t1-row-1-col-2" scope="col">Col Header</th>
      <th id="t1-row-1-col-3" colspan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

<table className="align-bottom font-size--smaller">
  <caption>Custom classes applied to this table: align-bottom font-size--smaller</caption>
  <thead>
    <tr>
      <th id="t2-row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="t2-row-1-col-2" scope="col">Col Header</th>
      <th id="t2-row-1-col-3" colSpan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="t2-row-1-col-4" colSpan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="t2-row-2-col-1" rowSpan="3" scope="row">Row Group</th>
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
      <th id="t2-row-5-col-1" rowSpan="3" scope="row">Row Group</th>
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
  </tbody>
</table>

```
<table class="align-bottom font-size--smaller">
  <caption>Custom classes applied to this table: align-bottom font-size--smaller</caption>
  <thead>
    <tr>
      <th id="t2-row-1-col-1" scope="col"><a href="#">Row Group</a></th>
      <th id="t2-row-1-col-2" scope="col">Col Header</th>
      <th id="t2-row-1-col-3" colspan="2" scope="col"><a href="#">Col Group</a></th>
      <th id="t2-row-1-col-4" colspan="3" scope="col">Col Group</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
```

## Responsive

The responsive table requires a div container with tabindex, role, and aria-label/aria-labelledby attributes.
See [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html#ResponsiveScrollingKeyboard) for more details.

<div className="responsive-table" tabIndex="0" role="region" aria-labelledby="table-example">
    <table>
        <caption id="table-example">Table with responsive-table class</caption>
      <thead>
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
      </thead>
      <tbody>
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
      </tbody>
    </table>
</div>

```
<div class="responsive-table" tabIndex="0" role="region" aria-labelledby="table-example">
    <table>
        <caption id="table-example">Table with responsive-table class</caption>
      <thead>
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
      </thead>
      <tbody>
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
      </tbody>
    </table>
</div>
```