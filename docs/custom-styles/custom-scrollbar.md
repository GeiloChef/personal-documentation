---
outline: deep
---

# Custom Scrollbar

To bring the user experience on your web application to the next level, you can add a custom scroll bar,
to differ from other websites.

```css
/* Custom Scrollbar */

/* Firefox Fallback as firefox cant handle changes on the scroll bar  */
@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-width: thin;
        scrollbar-color: #878787 #252727;
    }
}

/* custom scrollbar styles */
@supports selector(::-webkit-scrollbar) {
    /* Chrome, Edge and Safari */
    *::-webkit-scrollbar {
        height: 7px;
        width: 7px;
    }

    *::-webkit-scrollbar-track {
        border-radius: 0px;
        background-color: #252727;
    }

    *::-webkit-scrollbar-track:hover {
        background-color: #252727;
    }

    *::-webkit-scrollbar-track:active {
        background-color: #252727;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background-color: #878787;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #878787;
    }

    *::-webkit-scrollbar-thumb:active {
        background-color: #878787;
    }
}


/* End of custom scrollbar */
```