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

Here’s an example of a JSX <h1> element, nested inside of a JSX <a> element:

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

<!-- 
Instructions
Checkpoint 1 Enabled

1. Declare a new variable named myDiv. Set myDiv equal to a JSX <div> element.

Wrap the <div></div> in parentheses, and use indentation and line breaks like in the examples. In between the <div></div> tags, nest an <h1></h1> containing the text Hello world.
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums

Here are some helpful links to the top questions asked by coders about this exercise:

    Why do we need parentheses around multi-line JSX expressions?

Still have questions? View this exercise's thread in the Codecademy Forums.
-->
