### class vs className

This lesson will cover more advanced [JSX](https://www.codecademy.com/resources/docs/react/jsx). You'll learn some powerful tricks and some common errors to avoid.

Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. The most frequent of these involves the word `class`.

In HTML, it's common to use `class` as an attribute name:

```jsx
<h1 class="big">Title</h1>
```

In JSX, you can't use the word `class`! You have to use `className` instead:

```jsx
<h1 className="big">Title</h1>
```

This is because JSX gets translated into JavaScript, and `class` is a reserved word in JavaScript.

When JSX is rendered, JSX `className` attributes are automatically rendered as `class` attributes.


**Example app.js**

```JSX
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>;
root.render(myDiv)
```

**Question**

Are there any other HTML attributes that are reserved keywords in JavaScript that I wont be able to use in JSX?

**Answer**

In JSX, some HTML attributes will use camelCase and/or a different attribute name, but the two main attributes to be aware of (as we’ll use these most often and because their original HTML attribute name is a reserved JavaScript keyword) are:

    class - which will be className in JSX
    for - which will be htmlFor in JSX

To read about more HTML attributes that use different names in JSX, check the React documentation for Tags and Attributes.

### Self-Closing Tags

Another common JSX error involves self-closing tags.

What’s a self-closing tag?

Most HTML elements use two tags: an opening tag (<div>), and a closing tag (</div>). However, some HTML elements such as <img> and <input> use only one tag. The tag that belongs to a single-tag element isn’t an opening tag or a closing tag; it’s a self-closing tag.

When you write a self-closing tag in HTML, it is optional to include a forward slash immediately before the final angle bracket:

```jsx
// Fine in HTML with a slash:
<br />

// Also fine, without the slash:
<br>
```

But, in JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

```jsx
// Fine in JSX:
<br />

// NOT FINE AT ALL in JSX:
<br>
```