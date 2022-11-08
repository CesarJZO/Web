# Responsive

## Mobile first philosophy

The idea is to make all the css stuff designed by default with mobile devices in mind, and use media queries to make the design fit in a computer screen, for example

```css
body {
  font-size: 16px;
  margin: 10px;
}

h1, h2 {
  font-size: 24px;
}

@media screen and (min-width: 1000px) {
  body {
    font-size: 20px;
  }
  h1, h2 {
    font-size: 36px;
  }
}
```

Notice that the `min-width` sets the minimum screen size required to make som elements bigger. This can be used to make some other adjustments such as the layout.
