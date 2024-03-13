---
outline: deep
---

# Hide Scrollbar

You can force-hide the scrollbar for a certain element by adding a custom class.

```css
.hide-scrollbar {
    /* hide scroll bar*/
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}


/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
```

```vue
<div class="hide-scrollbar">
  ...
  context that would create a scroll bar we want to hide
  ...
</div>
```