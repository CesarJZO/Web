# CSS: Cascading Style Sheets

## Basic structure

```css
style-rule ::=
  selectors-list {
    properties-list
  }
```

Where

```css
selectors-list ::=
  selector[:pseudo-class] [::pseudo-element]
  [, selectors-list]

properties-list ::=
  [property : value] [; properties-list]
```

### Examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

## Info

- It's called *Cascade* because if there's another selector of the same tag, it will override its properties

## General structure

```css
/* General */
body {
  margin: 30px;
}
p {
  font-size: 18px;
}

/* Typographic styles */
.sample {
  font-size: 24px;
}

p.sample {
  font-size: 12px;
}

/* Heading */
.navigation {
  /* attributes */
}

.logo { }

/* Structure */
.container { }

/* Foot */
.foot { }

/* Page */
.about { }
```
