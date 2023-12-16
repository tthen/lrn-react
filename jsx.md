### Why React?

React.js is a JavaScript library developed by engineers at Facebook. Here are just a few of the reasons why people choose to program with React:

- React is fast. Apps made in React can handle complex updates and still feel quick and responsive.
- React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s maintainability problems.
- React is scalable. Large programs that display a lot of changing data are where React performs best.
- React is flexible. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. There’s [room to explore](https://github.com/jiwonbest/amazing-react-projects).
- React is popular. While this reason has admittedly little to do with React’s quality, the truth is that understanding React will make you more employable.

If you are new to React, then this course is for you—no prior React knowledge is expected. We will start at the very beginning and move slowly. By the end, you will be ready to program in React with a real understanding of what you’re doing.

### What is JSX?

[JSX](https://www.codecademy.com/resources/docs/react/jsx) is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

What does “syntax extension” mean?

In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!

If a JavaScript file contains JSX code, then that file will have to be compiled. This means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

Codecademy’s servers already have a JSX compiler installed, so you don’t have to worry about that for now. Eventually we’ll walk through how to set up a JSX compiler on your personal computer.

### JSX Elements

A basic unit of JSX is called a JSX element.

Here's an example of a JSX element:

```
<h1>Hello world</h1>
```

This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.

In `app.js`, write a JSX <p> element containing the text, Hello world. Use the example code above as a guide.

```jsx
<p>Hello world</p>
```

### JSX Elements And Their Surroundings

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array… you name it.

Here’s an example of a JSX element being saved in a variable:

```
const navBar = <nav>I am a nav bar</nav>;
```

Here’s an example of several JSX elements being stored in an object:

```jsx
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

### Attributes In JSX

JSX elements can have attributes, just like how HTML elements can.

A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:

```javascript
my-attribute-name="my-attribute-value"
```

Here are some JSX elements with attributes:

```jsx
<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
```

A single JSX element can have many attributes, just like in HTML:

```jsx
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'>;
```

Example, `app.js` file

```jsx
const p1 = <p id = 'large'>foo</p>;
const p2 = <p id = 'small'>bar</p>;
```

### Nested JSX

You can nest JSX elements inside of other JSX elements, just like in HTML.

Here's an example of a JSX `<h1>` element, nested inside of a JSX `<a>` element:

```jsx
<a href="https://www.example.com"><h1>Click me!</h1></a>
```

To make this more readable, you can use HTML-style line breaks and indentation:

```jsx
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

```jsx
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```

Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can! Here’s an example of a nested JSX expression being saved as a variable:

```jsx
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```

Example, `app.js` file

```jsx
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);
```

### JSX Outer Elements

There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

In other words, this code will work:

```jsx
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

But this code will not work:

```jsx
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

It’s easy to forget about this rule and end up with errors that are tough to diagnose.

If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a `<div>` element.

**Can I wrap multi-line JSX expressions in an element other than a `<div>`?**

**Answer**

JSX expressions can be wrapped in an element other than a `<div>` element to be sure that the first opening tag and final closing tag of a JSX expression belong to the same element.

This element can be an HTML element where the nesting is valid according to HTML5 specifications (see MDN documentation to check for permitted content in a specific element) or, this element can be custom components that have child components or other HTML elements nested inside.

[Fragments](https://react.dev/reference/react/Fragment)

**Short Syntax**

There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>        <td>Hello</td>
        <td>World</td>
      </>    );
  }
}
```


You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

**Keyed Fragments**

Fragments declared with the explicit `<React.Fragment>` syntax may have keys. A use case for this is mapping a collection to an array of fragments — for example, to create a description list:

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

**Example` blog.js`**

```jsx
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
```

### Rendering JSX

You've learned how to write JSX elements! Now its time to learn how to render them.

To render a JSX expression means to make it appear on screen.

**Example app.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```

```terminal
https://localhost:8000
Hello world
```

**Concept review**

Want to quickly review some of the concepts you’ve been learning? Take a look at this material's [cheatsheet!](https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet)


### Rendering JSX Explained

Let's examine the code that you just wrote in the last exercise.

```jsx
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
```

Before we get started it is essential to understand that React relies on two things to render: what content to render and where to place the content.

With that in mind, let's look at the first line:

```jsx
const container = document.getElementById('app')
```

This line:

- Uses the `document` object which represents our web page.

- Uses the `getElementById()` method of `document` to get the `Element` object representing the HTML element with the passed in id (`app`).

- Stores the element in `container`.

In the next line:

```jsx
const root = createRoot(container)
```

we use `createRoot()` from the `react-dom/client` library, which creates a React root from `container` and stores it in `root`. `root` can be used to render a JSX expression. This is the “where to place the content” part of React rendering.

Finally, the last line:

```jsx
root.render(<h1>Hello world</h1>)
```

uses the `render()` method of `root` to render the content passed in as an argument. Here we pass an `<h1>` element, which displays Hello world. This is the “what content to render” part of React rendering.

### Passing a Variable to `render()`

In the previous exercise, we saw how we can create a React `root` using `createRoot()` and use its `render()` method to render JSX.

The `render()` method's argument doesn't need to be JSX, but it should evaluate to a JSX expression. The argument could also be a variable, so long as that variable evaluates to a JSX expression.

In this example, we save a JSX expression as a variable named `toDoList`. We then pass `toDoList` as the argument of `render()`:

```jsx
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);
```

**Example `app.js`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
    <li>One</li>
    <li>Two</li>
  </ul>
);
root.render(myList);
```

### The Virtual DOM

One special thing about a React root's `render()` method is that it only updates DOM elements that have changed.

That means that if you render the exact same thing twice in a row, the second render will do nothing:

```jsx
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));
```

This is significant! Only updating the necessary DOM elements is a large part of what makes React so successful. This is accomplished using React's virtual DOM.


**Why is DOM manipulation so slow?**

Answer

When there is a change to an element in the DOM, the DOM has to re-render the element and all of the element’s children to the DOM - making DOM manipulation very slow in comparison to the Virtual DOM.

Actual DOM works on tree structure, which means if user interact with website and make any changes, it’ll update the entire DOM (tree structure), while virtual DOM is based on JavaScript object which compares present and previous versions of DOM and update only the specific nodes of the DOM, hence making it fast, optimized performance

One of the main causes of slow DOM manipulation is accessing the DOM too frequently or unnecessarily, as each time you use a method like document. getElementById, document. querySelector, or document. createElement, you are triggering a reflow or repaint.

See more in [Análisis del navegador web moderno (parte 1)](https://developer.chrome.com/blog/inside-browser-part1?hl=es-419)

### Review

Congratulations! You’ve learned to create and render JSX elements! This is the first step toward becoming fluent in React.

In this lesson, we learned that:

- React is a modular, scalable, flexible, and popular front-end framework.
- JSX is a syntax extension for JavaScript which allows us to treat HTML as expressions.
  -  They can be stored in variables, objects, arrays, and more!
- JSX elements can have attributes and be nested within each other, just like in HTML.
- JSX must have exactly one outer element, and other elements can be nested inside.
- `createRoot()` from `react-dom/client` can be used to create a React `root` at the specified DOM element.
- A React root's `render()` method can be used to render JSX on the screen.
- A React root's `render()` method only updates DOM elements that have changed using the virtual DOM.

As you continue to learn more about React, you'll learn some powerful things you can do with JSX, some common JSX issues, and how to avoid them.

### React: The Virtual DOM

Learn how React’s virtual DOM prevents wasteful DOM manipulation.

**The Problem**

DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.

This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

As an example, let’s say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. That’s ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem.

To address this problem, the people at React popularized something called the virtual DOM.

**The Virtual DOM**

Here is a refresher of what happens behind the scenes in The Virtual DOM.

In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

**How It Helps**

When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has been updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item and leave the rest of your list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens when you try to update the DOM in React:

1. The entire virtual DOM gets updated.
2.  The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3.  The changed objects, and the changed objects only, get updated on the real DOM.
4.  Changes on the real DOM cause the screen to change.


<!-- 
-->


\n
