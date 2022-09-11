# Structure

## Using divisors

### Margin

Affects the out side of the `div`. Instead of using `margin-top`, `margin-left` and so on, all of it can be summarized in one line using `margin`. These values are applied clockwise

```css
div {
  margin: 20px 30px 10px 15px;
}
```

If only two values are applied, the first one is used to the *top* and *bottom* margins and de second one to the *left* and *right* margins

```css
div {
  margin: 20px 30px;
}
```

Finally, if one value is used, it's gonna affect all margins

```css
div {
  margin: 20px;
}
```

### Padding

Affects the intern side of the box, and has the same use as the `margin`

```css
div {
  padding: 20px 30px 10px 15px;
  padding: 20px 30px;
  padding: 20px;
}
```

## Display

It forces the render mode of a tag. It can make a `div` look like a `span` and vice versa. Also, it can hide elements

```css
div {
  display: inline;
}
/* or */
span {
  display: block;
}

div, span {
  display: none;
}
```

## Overflow


