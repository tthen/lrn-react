### Why React?

React.js is a JavaScript library developed by engineers at Facebook. Here are just a few of the reasons why people choose to program with React:

- React is fast. Apps made in React can handle complex updates and still feel quick and responsive.
- React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s maintainability problems.
- React is scalable. Large programs that display a lot of changing data are where React performs best.
- React is flexible. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. There’s [room to explore](https://github.com/jiwonbest/amazing-react-projects).
- React is popular. While this reason has admittedly little to do with React’s quality, the truth is that understanding React will make you more employable.

If you are new to React, then this course is for you—no prior React knowledge is expected. We will start at the very beginning and move slowly. By the end, you will be ready to program in React with a real understanding of what you’re doing.

### What is JSX?

JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

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



