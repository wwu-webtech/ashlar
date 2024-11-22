---
sidebar_position: 1
---

# Variables

These are the css variables that are available for use in the theme.

## Breakpoints

Media queries don't allow you to use CSS variables, so they are only available as SASS variables. These are the theme's breakpoints.

```
$xsmall: 320px;
$small: 580px;
$medium: 950px;
$large: 1300px;
```

It is okay to use pixel values in media queries when making CSS styles overrides in-page. We recommend sticking to these breakpoint values for consistency. Whenever possible, use *mobile-first* design and adjust styles with *min-width* media queries:

```
@media (min-width: 581px) {   }
@media (min-width: 951px) {   }
@media (min-width: 1301x) {   }
```

There are a few cases where you need to override a style specifically at a smaller screen. In these cases, max-width queries are acceptable:

```
@media (max-width: 580px) {   }
@media (max-width: 950px) {   }
@media (max-width: 1300px) {   }
```


## Color

This is a complete list of color variables in the theme. We highly recommend that if you are altering color on something, you use a variable rather than a hex or rgb value, with a possible exception for rgba values that need alpha transparency.

<div className="messages">
<div className="messages--warning" role="alert" >
<span class="material-icons" aria-hidden="true">warning</span>&nbsp;
If you alter an element's color, you *must* make sure that element meets contrast requirements both in light mode and in dark mode. You may need to add an alternate style for dark mode.
</div>
</div>

```
.change-color {
color: var(--blue--darker--80);
}

[data-theme="dark"] .change-color {
color: var(--blue--lighter--80);
}
```

### Brand Colors 
```
--black: #262b2f;
--gray--darker--80: #14181b;
--gray--darker--60: #293036;
--gray--darker--40: #3d4950;
--gray--darker--20: #52616b;
--gray: #667986;
--gray--lighter--20: #8394a0;
--gray--lighter--40: #a2afb8;
--gray--lighter--60: #c1cad0; 
--gray--lighter--80: #e0e4e7; 
--gray--lighter--90: #f0f2f3;
--white: #fff;

--dark-blue--darker--80: #000d1b;
--dark-blue--darker--60: #001936;
--dark-blue--darker--40: #002651;
--dark-blue--darker--20: #00326c; 
--dark-blue: #003f87;
--dark-blue--lighter--20: #0062d2;
--dark-blue--lighter--40: #1e87ff;
--dark-blue--lighter--60: #69afff; 
--dark-blue--lighter--80: #b4d7ff; 

--blue--darker--80: #001828;
--blue--darker--60: #003150;
--blue--darker--40: #004978; 
--blue--darker--20: #0062a0; 
--blue: #007ac8;
--blue--lighter--20: #079eff;
--blue--lighter--40: #45b6ff; 
--blue--lighter--60: #83cfff;
--blue--lighter--80: #c1e7ff;

--dark-green--darker--80: #00150d;
--dark-green--darker--60: #002b19;
--dark-green--darker--40: #004026;
--dark-green--darker--20: #005632;
--dark-green: #006b3f;
--dark-green--lighter--20: #338965;
--dark-green--lighter--40: #66a68c;
--dark-green--lighter--60: #99c4b2;
--dark-green--lighter--80: #cce1d9;

--green--darker--80: #0f1a06;
--green--darker--60: #1e340c;
--green--darker--40: #2c4e12;
--green--darker--20: #3b6818;
--green: #4a821e;
--green--lighter--20: #6e9b4b;
--green--lighter--40: #92b478;
--green--lighter--60: #b7cda5;
--green--lighter--80: #dbe6d2;

--light-green--darker--80: #252b02;
--light-green--darker--60: #4a5604;
--light-green--darker--40: #708206;
--light-green--darker--20: #95ad08;
--light-green: #bad80a;
--light-green--lighter--20: #c8e03b;
--light-green--lighter--40: #d6e86c; 
--light-green--lighter--60: #e3ef9d;
--light-green--lighter--80: #f1f7ce;
```

### Special Use Colors
```
--red: #cc2d30;

--yellow: #ffc61e;
--yellow--lighter--40: #ffe38f;

--purple--lighter--80: #ebcfee;
--purple--lighter--60: #d79fdc;
--purple--lighter--40: #c26fcb;
--purple--lighter--20: #ae3fb9;
--purple: #9a0fa8;

--table-blue: #edf8ff;
--table-blue--darker--10: #daecf8;
--table-blue--darker--15: #c5dff0;
--table-blue--darker--5: #e4f2fb;
--table-gray: #ffffff;
--table-gray--darker--10: #eeeeee;
--table-gray--darker--15: #e4e4e4;
--table-gray--darker--5: #f5f5f6;
```

### RGB Values

For easy use with rgba/transparency, added only as needed.

```
--black--rgb: 28, 32, 35;
--blue--rgb: 0, 122, 200;
--dark-blue--darker--40--rgb: 0, 38, 81;
--green--rgb: 93, 162, 37;
--light-green--rgb: 186, 216, 10;
--red--rgb: 204, 45, 48;
--yellow--rgb: 255, 198, 30;
--white--rgb: 255, 255, 255;
```

### Gradients 
```
--gradient--vertical--light-blue: linear-gradient(
to bottom,
var(--blue--lighter--40) 0,
var(--blue--lighter--60) 100%
);

--gradient--vertical--dark-blue: linear-gradient(
to bottom,
var(--dark-blue--darker--40) 0,
var(--dark-blue) 100%
);

--gradient--vertical--light-green: linear-gradient(
to bottom,
var(--light-green--lighter--20) 0,
var(--light-green) 100%
);

--gradient--vertical--blue-to-dark-blue: linear-gradient(
to bottom,
var(--blue),
rgba(var(--dark-blue--darker--40--rgb), 0.9)
);

--gradient--horizontal--dark-blue-to-transparent: linear-gradient(
to right,
rgba(var(--dark-blue--darker--40--rgb), 1) 0%,
rgba(var(--dark-blue--darker--40--rgb), 0.5) 100%
);

--gradient--diagonal--blue-to-dark-blue: linear-gradient(
to right bottom,
#002f5e,
#003266,
#00356d,
#003875,
#003b7d,
#004186,
#01478e,
#004d97,
#0058a3,
#0063b0,
#006ebc,
#007ac8
);
--gradient--diagonal--dark-blue-to-black: linear-gradient(
to left bottom,
#1c2023,
#18242d,
#122738,
#0a2a44,
#022d4f,
#00335c,
#013a69,
#044077,
#074e8b,
#085c9f,
#066bb3,
#007ac8
);
```


## Typography

### Font families 
```
--font--sans-serif: "Fira Sans", sans-serif;
--font--serif: "PT Serif", serif;
--font--hyperlegible: "Atkinson Hyperlegible", sans-serif;
--font--dyslexia-friendly: "Open Dyslexic", sans-serif;
--font--title: "Montserrat", sans-serif;
```

### Font weights
```
--font-weight--light: 300;
--font-weight--regular: 400;
--font-weight--semibold: 600;
--font-weight--bold: 700;
--font-weight--black: 900;
```

### Font sizes 

We use Fluid Typography, so our font sizes scale directly with the viewport size. Our font sizes are based on major second scale, with a few small adjustments.

```
--font-size--xs: 0.75em;
--font-size--sm: 0.9em;
--font-size--md: 1em;
--font-size--lg: 1.125em;
--font-size--xl: 1.266em;
--font-size--2xl: 1.424em;
--font-size--3xl: 1.602em;
--font-size--4xl: 1.802em;
--font-size--5xl: 2.027em;
--font-size--6xl: 2.281em;
--font-size--7xl: 2.566em;
--font-size--8xl: 3.653em;
--font-size--9xl: 4.11em;
```

### Headings

Heading sizes and colors are set using the font size and color variables above. These are their default values the :root

```
--h1-color: var(--blue--darker--80);
--h1-size: var(--font-size--7xl);
--h2-color: var(--blue--darker--60);
--h2-size: var(--font-size--4xl);
--h3-color: var(--blue--darker--40);
--h3-size: var(--font-size--3xl);
--h4-color: var(--blue--darker--20);
--h4-size: var(--font-size--2xl);
--h5-color: var(--blue);
--h5-size: var(--font-size--xl);
--h6-color: var(--blue);
--h6-size: var(--font-size--lg);
```

When altering heading styles, the recommended method is to reset the heading variables in the highest possible **containing element** and using **css variables**, rather than on a heading element itself. This helps keep selector specificity and overall CSS complexity lower. We also recommend resetting values with provided theme variables, rather than direct hex/pixel/em values, for consistency with brand, accessibility, and overall scaling.

In other words, do this:

```
.some-container {
--h2-size: var(--font-size-md);
--h2-color: var(--blue);
}
```

Not this:
```
h2 {
font-size: 20px;
color: #007ac8;
}
```

<div className="messages">
<div className="messages--warning" role="alert" >
<span class="material-icons" aria-hidden="true">warning</span>&nbsp;
Remember: if you adjust <strong>any</strong> colors, you need to make sure that you account for and test in both light and dark mode!
</div>
</div>
```
.some-container {
--h2-color: var(--blue);
}
[data-theme="dark"] .some-container {
--h2-color: var(--blue--lighter--20);
} 
```


## Page layout
### Spacing 
```
--space--2xs: 0.25rem;
--space--xs: 0.5rem;
--space--sm: 0.75rem;
--space--md: 1rem;
--space--lg: 1.5rem;
--space--xl: 2rem;
--space--2xl: 3rem;
--space--3xl: 4rem;
```

### Content areas
```
--content-area-max-width: 60rem; 
--content-area-max-width--sm: 40rem;
```

### Content area grids 
```
--grid-columns--sm: var(--space--sm) 1fr var(--space--sm);
--grid-columns--lg: 1fr var(--content-area-max-width) 1fr;
```

## Decoration
### Borders and outlines
```
--border-width--sm: 0.0625rem; 
--border-width--md: 0.125rem; 
--border-width--lg: 0.1875rem; 
--border-radius--roundest: 6.25rem;
--border-radius--rounder: 0.625rem;
--border-radius--round: 0.125rem;
```

### Shadows 
```
--shadow--hard: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.4),0 0.0625rem 0.125rem rgba(0, 0, 0, 0.5);
--shadow--soft: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16),
0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);
--shadow--soft--hover: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12),
0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);
--shadow--dark-mode: 0 0.1875rem 0.375rem rgba(0, 122, 200, 0.7),
0 0.1875rem 0.375rem rgba(0, 63, 135, 0.9);
--shadow--dark-mode--hover: 0 0.0625rem 0.1875rem rgba(0, 122, 200, 0.12),
0 0.0625rem 0.125rem rgba(0, 63, 135, 0.24);
```

### Icons
```
--icon-size--2xs: 1rem;
--icon-size--xs: 1.125rem;
--icon-size--sm: 1.5rem;
--icon-size--md: 2.25rem; 
--icon-size--lg: 3rem;
```

### Touch Targets
```
--touch-target--aa: 24px;
--touch-target--aaa: 44px;
```

### Logo
```
--logo-size: 8rem;
--logo--horizontal--width: 25rem;
--logo--horizontal--height: 6.25rem;
```

### Forms
```
--checkbox-size: 1rem;
```

## Animation
```
--transition-speed--slow: 800ms;
--transition-speed--md: 400ms;
--transition-speed--fast: 200ms;
--ease--standard: ease;
```