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

Wha's a self-closing tag?

Most HTML elements use two tags: an opening tag (`<div>`), and a closing tag (`</div>`). However, some HTML elements such as `<img>` and `<input>` use only one tag. The tag that belongs to a single-tag element isn't an opening tag or a closing tag; it's a self-closing tag.

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


**Example app.js**

```jsx
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />
      I specialize in creating React applications.
    </article>
  </div>
);
```

### JavaScript In Your JSX In Your JavaScript

So far, we've focused on writing JSX expressions. It's similar to writing bits of HTML, but inside of a JavaScript file.

In this lesson, we're going to add something new: regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.

**Example app.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>2 + 3</h1>);
```

**Question**

Why would we want to put JavaScript in our JSX?

**Answer**

We want to use JavaScript in our JSX to render logic!

When we inject JS into JSX we can make this process of rendering logic (based on things like data, events, and data changing over time) more seamless by putting our markup, the HTML part of JSX, that is based on our logic, the JS part of JSX, together in the same file.

### Curly Braces in JSX

The code in the last exercise didn't behave as one might expect. Instead of adding 2 and 3, it printed out “2 + 3” as a string of text. Why?

This happened because 2 + 3 is located in between `<h1>` and `</h1>` tags.

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers—it reads them as text, just like HTML.

You need a way to write code that says, “Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.”

You can do this by wrapping your code in curly braces.

Add a pair of curly braces to the code from the last exercise so that your JSX expression looks like this:

```jsx
<h1>{2 + 3}</h1>
```

Everything inside of the curly braces will be treated as regular JavaScript.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>);
```

### 20 Digits of Pi in JSX

You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

- The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
- Find `<div>` on line 5. From there, up through `</div>`, the code will be treated as JSX.
- Find `Math.` From there, up through (20), the code will be treated as regular JavaScript again.
- The curly braces themselves won’t be treated as JSX or as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

### Variables in JSX

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.

```jsx
// Declare a variable:
const name = 'Gerdo';

// Access your variable inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

**Example app.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);
```

**Question**

When should I assign a variable to a JavaScript expression that I want to use in a JSX expression?

**Answer**

The use of variables to store JavaScript expressions will largely be based on preference. However, we will usually want to use variables assigned to our JS expressions when our JS code would otherwise be hard to read/follow before using our JS expression inside of our JSX.

For example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>two + two = {2 + 2}</h1>, document.getElementById('app'));
//Here, the JavaScript expression `2+2` is easy to read and understand what's going on in the code
```

vs.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const myFunc  = (a, b) => {
  //do some logic or calculations with parameters here
}


ReactDOM.render(<h1>{myFunc(3,4)}</h1>, document.getElementById('app')); 
//Here, we assign a function to the variable `myFunc` then call the myFunc
//fuction from inside our JSX - this is especially useful if the logic inside
//myFunc would be difficult to read and understand from inside a JSX expression
```

