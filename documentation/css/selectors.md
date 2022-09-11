# Selectors

# Type selector

```css
tag {
  attribute: value;
}
```

## Class selector

In html, a class is defined with the `class` attribute

```html
<div class="article">
	<h1>Title</h1>
	<p>Mucho texto</p>
</div>
```

In order to reference that from the `css` file, the selector need to be preceded by a `.`

```css
.article {
  color: white;
}
```

It also can be specified using a tab, so the syntax would be as follows

```css
html_tag.class_name {
  attribute: value;
}
```

To apply styles to specifics tags inside a class, put a space after the name of the class and the desired tags

```css
.class tag {
  attribute: value;
}
```

Going even more deeply and specific, we can affect only a tag inside other tag who has a class. The space is like inheritance

```css
.class tag child tag {
  attribute: value;
}
```

## ID selector

To use an `id` from an html file, we can reference it by preceding the identifier with an `#`

```css
#identifier {
  attribute: value;
}
```
##

# Universal selector

Selects all elements

```css
* {
  attribute: value;
}
```
