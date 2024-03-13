---
outline: deep
---

# Target style to iOS only

In certain situation in can be handy to apply a style only to iOS devices only. This can be done by the 
css-selector `@supports (-webkit-hyphens:none)`

```css
@supports (-webkit-hyphens:none) {
    .your-custom-class {
        height: 1.25rem!important;
    }
}
```

The css-selector `@supports` can also be handy to target other browsers / engines.