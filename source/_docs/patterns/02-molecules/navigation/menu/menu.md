# Menus

## Default
<ul  className="menu">
    <li>
        <a href="">Menu item 1</a>
    </li>
    <li>
        <a href="">Menu item 2</a>
    </li>
    <li>
        <a href="" aria-current="page">Active Menu item 3</a>
    </li>
</ul>

```
<ul class="menu">
      <li><a href="#">Menu item 1</a></li>
      <li><a href="#">Menu item 2</a></li>
      <li><a href="#" aria-current="page">Active Menu item 3</a></li>
</ul>
```

## Horizontal
Will display as default on mobile/small screens.

<ul className="menu horizontal">
      <li>
            <a href="#">Menu item 1</a>
      </li>
      <li>
            <a href="#">Menu item 2</a>
      </li>
      <li>
            <a href="#" aria-current="page">Active Menu item 3</a>
      </li>
</ul>

```
<ul class="menu horizontal">
      <li><a href="#">Menu item 1</a></li>
      <li><a href="#">Menu item 2</a></li>
      <li><a href="#" aria-current="page">Active Menu item 3</a></li>
</ul>
```

## In Page Menu Block

<nav className="wwu-page-menu" aria-labelledby="heading--page-menu--1">
    <h2 className="title">Menu Title</h2>
    
    <ul  class="menu">
        <li>
            <a href="">Menu item 1</a>
        </li>
        <li>
            <a href="">Menu item 2</a>
        </li>
        <li>
            <a href="">Menu item 3</a>
        </li>
    </ul>
</nav>