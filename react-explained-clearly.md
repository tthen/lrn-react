<!-- 
REACT EXPLAINED CLEARLY
All You Need to Build Great
React.js Apps
Oluwatobi Sofela 
-->

# Introduction

The best way to learn is through progressive practice. In other words, 
the easiest way to understand React is to proactively write React 
codes - rather than merely reading or watching videos.

Never be discouraged if you get stucked at any point in time. Instead,
go back to the lessons top re-learn the concepts necessary to continue 
the projects.

Don'te let the projects type scare you off! You are for an exciting 
ride -- where you will learn the fundamental concepts needed to build 
any React application. So, give it a chance.

# Intro to React - Useful key points about React


wwhat is React ?

React is a component-based JavaScript library used to build user 
interfaces (UI) efficiently.


Why use React ?

Developers primarily use ReactJS to build independent, reusable 
components that you combine with other isolated user interfaces to 
create highly scalable applications.

For example the youtube page.

In other words, React helps to build complex UIs from small, isolated 
components that you can easily reuse in multiple different 
applications.

Essentially, each independent componente tells React the exact 
element you want to see displayed on-screen.


Is React a framework ?

No, it is a library -- not a framework. React serves only as an 
add-on feature to your application. It is not designed to be used as 
an app's primary support system.


Is React only a web Technology ?

No, it is no only used on the web.

For instance, ReactDOM helps to build web applications. And React 
Native helps to build mobile applications.

Do you need to use React only in certain parts of your site ? 
No problem! You can add it to specific sections of your website where 
you whish to use it.

Or perhaps you aim to build a React-powered app. Great! You can 
configure it to manage your entire project.

No matter how massive or miniature your project  may be, React is 
well-suited to help you develop interactive user interfaces 
efficiently.

# React with no toolchain - How to add React Directly to a website

Ypu would use the steps below to add React component to a specific 
part to an HTML page.


Step 1. Cread a DOM container

-In the snippet above, we created a `<div>` container—inside which we 
want React to display and manage a donation button.
- The div’s id attribute is the reference we would later use in a 
JavaScript code to find the container and tell React to display a
donation component inside it.
- Although most developers use a `<div>` tag as the DOM container, you 
can use other HTML elements like the `<main>` tag if you wish.
- You can have multiple DOM containers anywhere inside the `<body>` 
element.
- A DOM container is usually left empty as React will overwrite any 
content inside it.


Step 2. Import the React library and your component

- In the snippet above, we used the first two `<script>` tags to load 
React and ReactDOM.
- At the same time, we used the third tag to import our donation 
component (which we will create in the next step).
- Whenever you are ready to deploy your project, replace all instances 
of "development.js" in the src attributes with "production.min.js".
- Suppose you prefer to load a different version of React and ReactDOM. 
In that case, replace 17 in each of the src attributes with the version 
number you wish to load.
- It's best to set the crossorigin attribute in the scripts used to 
load React and ReactDOM to enable a better error handling experience 
in React 16 and later.


Step 3. Create your component

- Create a JavaScript file, called “DonationButton.js”, inside the 
same folder your HTML file is located.
1. We defined a component named DonateButton.
2. We assigned a donated property to DonateButton’s state object.
3. Programmed the component to return "Thank you so much for the
support! It really makes a difference." if the state’s donated
property is true. Otherwise, it should create a button element and 
append an onClick event and a “☕ Buy me a coffee” text on it.
4. Initialized the domContainer variable with the `<div>` container 
we added to our HTML file in step 1.
5. Used the ReactDOM API to display the DonateButton component 
inside our DOM’s `<div>` container.


And That’s It!

You’ve successfully added your first React component to your 
website. Check it out by opening the HTML file in the browser. You
can also see mine on [StackBlitz](https://stackblitz.com/edit/web-platform-ph3amu?file=index.html).

* You can display a component in multiple sections of your HTML page.
* In the example above, we used JavaScript codes that browsers support 
natively. However, an alternative option is to use JSX.
* Most React developers find it easier to build and manage React 
elements with the JSX syntax.

Quick Overview

This chapter discussed adding React components directly to your 
website without using Create React App (CRA).


# CREATE REACT APP - How to Configure a New React Project


There are several ways to configure a React application depending 
on your project’s objectives.

Amongst all the options available, the Create React App package 
offers  the best way to learn React or build a new single-page React 
application.

The Create React App (CRA) package helps set up React projects 
easily without troubling yourself configuring build tools like 
Webpack or Babel.

How To Configure The Create React App Package

Step 1: Get The Right Node And NPM Version 

Ensure you have Node 10.16 (or greater) and NPM 5.6 (or greater) 
installed on your system.

* Use this guide to install, update, or verify your Node version.
* If you prefer to use Yarn, ensure you have Yarn 0.25 (or greater).

Step 2: Navigate To Your Project’s Abode

Use the terminal to go to the directory wherein you want your new 
project to reside.

$ cd path/to/the/home/of/your/project

Step 3: Create A New React Project

You can create a new React app through NPM or Yarn.

Note:

* Yarn is a package manager (an alternative to NPM) that automatically 
helps find and execute a specified package.
* The choice between NPM or Yarn is totally up to you. Feel free to 
test both package managers to decide which you prefer to use.
In this book, I will show you how to create a new React project with 
both NPM and Yarn so that you can have a taste of both ways.



How To Create A React App With NPM

Use NPM to create a new React app by running the following code on 
your terminal:

$ npx create-react-app my-project

Note: npx is node’s package runner tool. It helps to automatically 
find and execute a specified package (create-react-app in this case).



How To Create React App With Yarn

Use Yarn to create a new React app by running the following code on 
your terminal:

$ yarn create react-app my-project



What Happens Once You Initiate The Creation Of A New React App?

% // page 32

Once you use the NPX (or Yarn) code to create a new app, the package 
manager will:

1. Create a `my-project` directory inside the current folder (the 
directory you navigated to in step 2).
2. Locally install react, react-dom, reactscripts, and other 
transitive dependencies into `my-project` directory.
3. Generate an initial project structure that looks like so:

my-project
├── .git
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
└── src
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
└── setupTests.js

Step 4: Go Inside Your Project Directory

After you’ve created a new React app, navigate into your project 
directory like so:

$ cd my-project

Step 5: Run Your Application

Start your application by running:

$ npm start

Or, if your package manager is Yarn, run:


$ yarn start


Step 6: See Your App Running Live In The Browser!

Open http://localhost:3000 in your browser to view your app running 
live!

## Info 1: Useful Commands

Use `npm start` (or `yarn start`) to run your project in development mode.

Once your app starts running, open `http://localhost:3000` in the
browser to view it.

After running `npm start`, your currently opened terminal will 
continue to process your server’s activities. As such, you won’t be 
able to input any command on that terminal until you stop the server.

However, you can open a new terminal window to use simultaneously 
with the one processing the server. That is, use one terminal to run 
the server and another to input commands.

To stop the server, use `ctrl + c` on window or `cmd + c` on mac.

<!-- page 36 -->

The `create-react-app` installation configured your app to reload 
automatically. Therefore, each change you make to your app will 
reflect in the browser immediately.

Use `npm test` (or `yarn test`) to run React’s test runner in 
watch mode.

Use `npm run build` (or `yarn build`) to create a minified bundle of 
your application. This process makes your app ready for deployment.

## Info 2: You Can Use A Template To Create Your React App

Suppose you prefer to use a specific file as a template for your new 
project. In such a case, you can append `--template [template-name]` 
to the project configuration command like so:

```terminal
$ npx create-react-app my-project --template your-template-name
```

If you do not specify a template, React will use its base template to 
create your project.

You can learn how to build your own template by following this 
[guide](https://create-react-app.dev/docs/custom-templates/).


## Info 3: How To Update Your Project's Create React App Package

Whenever you wish to update your project’s Create React App package 
to a newer version, navigate inside the app’s directory and run:

```terminal
npm install react-scripts@latest
```


# BUILD REACT APP - How to Develop a ReactJS Application


*How To Clean Up React’s Boilerplates*


Go inside the src directory of your newly configured React project 
and delete all the files in it.

Note: Do not delete the src folder. Only delete the files inside it. 
You will populate the folder with your own file in the subsequent 
section of this guide.


*Create Your Index.js File*

In the src directory, create an `index.js` file.


*Import React And ReactDOM*

Open your `index.js` file and import the React and ReactDOM libraries 
like so:

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
```

Note: The `react` and `react-dom` libraries were part of the modules 
that got installed during the project configuration stage. You can 
confirm this by searching through your project’s `node_modules` 
directory for a `react` and `react-dom` folder.


*How To Display Content On A Webpage*

Use the ReactDOM API to insert an `<h1>` element into your HTML page’s 
root DOM like so:

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>,
document.getElementById("root"));
```

The code in the snippet above instructs React to render 
`<h1>Hello World!</h1>` into the HTML DOM element with an
`id="root"` attribute.

Note: During the project configuration, React created an HTML file in 
your project’s `public` directory.

Inside that file, you will find a `<div>` element with the attribute 
`id="root"`. It is in this element React will insert the 
`<h1>Hello World!</h1>` code at build time.


*Run Your Application*

Take a look at your app in the browser by running:

```terminal
npm start
```

Or, if your package manager is Yarn, run:

```terminal
yarn start
```

You can also see mine on [StackBlitz](https://stackblitz.com/edit/react-lga5df?file=src%2Findex.js).


*Why Use HTML Inside JavaScript?*

Are you wondering why we are writing HTML inside JavaScript? Well, 
that HTML-like code is called JSX. Let’s learn more about it in the 
next chapter.


# WHAT IS JSX? - How Is It Used in ReactJS?

JSX (JavaScript and XML) is a syntax extension to JavaScript that 
allows you to build React elements with HTML-like syntax right inside 
your JavaScript code.

Although JSX makes it easier to create user interfaces (UI), it is 
not mandatory to use it with React. In other words, whatever you can
do with JSX, you can do the same with plain JavaScript.

For instance, consider the two examples below. The first includes JSX 
syntax, while the second contains regular JavaScript syntax.

*Example 1: React element created and rendered with JSX syntax*

```javascript
function MyBio(props) {
    return <h1>My name is Oluwatobi.</h1>;
}

ReactDOM.render(<MyBio />,
document.getElementById("root"));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-8cgxyc?file=src%2Findex.js)


In the snippet above, `<h1>My name is Oluwatobi.</h1>` and `<MyBio />` 
are JSX code.


*Example 2: React element created and rendered with regular JavaScript syntax*

```javascript
function MyBio(props) {
    return React.createElement("h1", null,
    "My name is Oluwatobi.");
}

ReactDOM.render(React.createElement(MyBio),
document.getElementById("root"));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-hd3n7q?file=src%2Findex.js)

Everything in the snippet above is regular JavaScript code.


*What Is The React.createElement() Code?*

Under the hood, the `React.createElement()` method creates an object 
conventionally called "React element".

A simplified version of a React element looks like so:

```javascript
const myBioReactElement = {
    type: "h1",
    props: {
        className: null,
        children: "My name is Oluwatobi."
    }
};
```
<!-- // page 50 -->

Therefore, if you wish to avoid the compilation step in your build 
environment, use React without JSX. However, doing so would make it 
harder to read your code.

## Info 2: JSX Still Needs The React Library In Its Scope

Since JSX compiles into a `React.createElement()` call, it means you 
must always have the React library in scope whenever you use the JSX 
syntax.

For instance, consider the code below:

```javascript
import React from "react";

function MyBio(props) {
  return <h1>My name is Oluwatobi.</h1>;
}
```

In the snippet above, notice that `MyBio` does not reference React 
explicitly. However, the `import React` statement is still necessary
because MyBio’s JSX code will compile into a `React.createElement()` 
call at runtime.

## Info 3: JSX Is Not HTML

While JSX looks a lot like HTML, it is not HTML. Instead, it enables 
you to use HTML-like syntax along with all the strengths of
JavaScript.


## How To Use JSX

The seven tips below are some of the ways to use JSX.

*Tip 1: Use JSX like any JavaScript expression*

At [execution time](https://codesweetly.com/web-tech-glossary#h-execution-time), 
JSX transpiles into plain JavaScript. Therefore, 
it is acceptable to use JSX like any other JavaScript expression.
In other words, you can store JSX expressions in variables, use them 
in if statements, or make them the return value of functions.

Here's an example:

```javascript
import React from "react";
import ReactDOM from "react-dom";

const firstName = false;
const myFirstName = <h1>My first name is Oluwatobi.</h1>;
const mylastName = <h1>My last name is Sofela.</h1>;

function DisplayMyName(props) {
  if (firstName) {
    return myFirstName;
  } else {
    return mylastName;
  }
}

ReactDOM.render(<DisplayMyName />, document.getElementById("root"));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-yuuvvb?file=src%2Findex.js)



*Tip 2: Wrap multi-line JSX in parentheses*

Suppose you wish to write your JSX code on multiple lines. It is 
recommended—but not compulsory—to wrap the code in parentheses. By so 
doing, you will make your code readable and avoid the automatic
semicolon insertion's [pitfalls](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi).

Here's an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const myName = (
  <div>
    <h1>My name is Oluwatobi.</h1>
  </div>
);

ReactDOM.render(myName, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-j3g8tg?file=src%2Findex.js)


*Tip 3: Wrap expressions in curly braces*

To write JavaScript expressions in JSX, use the curly braces like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const JavaScriptVsJSX = (
  <h3>JSX makes it {10 * 2} times faster to build React UIs.</h3>
);

ReactDOM.render(JavaScriptVsJSX, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-z4hkla?file=src%2Findex.js)

Note: React reads contents inside curly braces ({...}) as JavaScript 
code.


*Tip 4: Use camelCase to name attributes*

When writing attribute names in JSX, use the camelCase naming 
convention—instead of the HTML attribute naming convention. 

For instance, instead of writing `class`, use `className`. Likewise, 
instead of using `for`, write `htmlFor`. By so doing, React will get 
access to JavaScript’s `className` and `htmlFor` APIs.

Here's an example:

```javascript
const myName = (
  <div>
    <h1 className="about-me">My name is Oluwatobi.</h1>
  </div>
);
```

Note: React DOM uses the camelCase convention because JSX is much 
like JavaScript than HTML. In other words, under the hood, JSX uses 
JavaScript’s Web APIs.


*Tip 5: Use lowercase to name custom attributes*

Suppose you wish to create a custom attribute. In that case, use 
lowercase like so:

```javascript
const myName = (
  <div>
    <h1 mycustomattribute="about-me">My name is Oluwatobi.</h1>
  </div>
);
```

*Tip 6: Close empty JSX tags properly*

Always remember to close empty JSX tags appropriately with />, 
just like you would do in XML.

Here's an example:

```javascript
const emptyJSXElement = <input type="button" value="Click me" />;
```


*Tip 7: Place multiple JSX elements inside a parent element*

Suppose you wish to create a UI with two or more elements. In that 
case, place those elements inside a parent element. Otherwise, JSX 
will throw an error.

Example:

```javascript
const myButtonsUI = (
  <div>
    <button className="test-btn">Test JSX</button>
    <button className="practicebtn"> Practice JSX</button>
  </div>
);
```

In the expression above, the `<div>` tag is the parent element used to 
contain two (2) `<button>` tags.

## Time To Practice With JSX

Here is your moment to practice the concepts you've learned on JSX.

In this exercise, your goal is to convert the regular JavaScript 
code below to its JSX equivalence.

```javascript
function NameRequest(props) {
return React.createElement(
"div",
{ className: "name-request-div" },
"Enter your full name:",
React.createElement("input", {
id: "name-request-input",
type: "text",
placeholder: "Your last name first"
})
);
}

ReactDOM.render(
React.createElement(NameRequest),
document.getElementById("root")
);
```

Note: To accomplish this task, you need to:

1. Set up a new React project.
2. Import React and ReactDOM libraries.
3. Convert all the regular JavaScript in the snippet above to JSX.
4. Run your application!

Remember: You will benefit much from this tutorial if you do the 
exercises yourself.

If you get stuck at any point, don’t be discouraged. Instead, review 
the lessons and give the exercise another try.

Once you’ve given it your best shot (you’d only cheat yourself if 
you don’t!), go ahead to see how I approached it on 
[StackBlitz](https://stackblitz.com/edit/react-vhjnbf?file=src%2Findex.js)



# WHAT IS A COMPONENT? - How Is It Used in ReactJS?

<!-- // page59 -->

React component is a JavaScript function (or class) that can accept 
arbitrary inputs (called "props") and returns an element (UI).

Note: The element returned by a component tells React what you want 
it to display onscreen.

Types Of Components

There are two equivalent types of React components: function and 
class components.


What Is A Function Component?

A function component is a regular JavaScript function that can accept 
a single properties object (props) as its parameter and emits a React 
element as its return value.

Here's an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyBio(props) {
  return React.createElement('h1', null, 'My name is Oluwatobi.');
}

ReactDOM.render(React.createElement(MyBio), document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-hd3n7q?file=src%2Findex.js)

The code in the snippet above is a function component that accepts a 
single properties object (props) and returns a React element.

The JSX alternative to the function component above is:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyBio(props) {
  return <h1>My name is Oluwatobi.</h1>;
}

ReactDOM.render(<MyBio />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-8cgxyc?file=src%2Findex.js)


*What Is A Class Component?*

A class component is a plain JavaScript Class that extends a 
user-defined class to the builtin `React.Component` class located 
inside the React library.

Here's an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class MyBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('h1', null, 'My name is Oluwatobi.');
  }
}

ReactDOM.render(<MyBio />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-ka5d5z?file=src%2Findex.js)

## Important Stuff To Know About Class Components

Keep these four essential pieces of info in mind whenever you choose 
to use a class component.

<!-- // page 62 -->

*Info 1: You must extend your class component*


In a class component, the `extends React.Component` code is a required 
statement used to extend your component to React’s built-in `Component`  
class. This extension makes it possible for your component to use 
`React.Component`’s methods such as `constructor()`,
`static getDerivedStateFromProps()`, `render()`, and 
`componentDidMount()`.



*Info 2: The constructor() method is not compulsory in a class component*


Implementing a class component’s `constructor()` is not mandatory. 
You only need it for two purposes:

* To initialize the component’s local state by setting its `this.state` 
property to an object.

* To bind event handlers to instances of the component.


*Info 3: Always call super() before other statements*


Whenever you use the `constructor()` method in a class component, it 
is essential to call `super(props)` before any other statement. 
Otherwise, the constructor’s `this.props` value will be undefined, 
which can cause bugs within your app.


*Info 4: super() makes React’s built-in methods available to you*


`super(props)` serves to invoke `React.Component`’s constructor 
method—which allows your component to inherit `React.Component`’s 
built-in methods.


## How To Invoke React Components

There are three common ways to invoke React components: without 
props, with props, or with the dot notation.


*How To Invoke Components Without Props*


You can invoke a component without passing any property (props) 
into it like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyBio(props) {
  return <h1>My name is Oluwatobi.</h1>;
}

ReactDOM.render(<MyBio />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-8cgxyc?file=src%2Findex.js)


In the snippet above, `<MyBio />` component tag is used—without 
any props—to invoke MyBio component.


*How To Invoke Components With Props*


Suppose you wish to pass some properties into a component. In such a 
case, invoke the component like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyBio(props) {
  return <h1>My name is {props.firstName}.</h1>;
}

ReactDOM.render(
  <MyBio firstName="Oluwatobi" />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-kqsqbh?file=src%2Findex.js)

In the snippet above, `<MyBio firstName="Oluwatobi" />` component tag 
is used to invoke MyBio component with `firstName="Oluwatobi"` passed 
in as an argument to the `props` parameter.


Note:

* During `MyBio`’s invocation, React will turn the `firstName="Oluwatobi"`
attribute into an object `({ firstName: "Oluwatobi" })`.

* If you wish to specify two or more arguments, separate each with 
whitespace

like so:

<MyBio firstName="Oluwatobi" lastName="Sofela" website="codesweetly.com" />


In the snippet above, we invoked `MyBio`. At the same time, we passed 
into it three attributes—which React will convert into a regular 
JavaScript object `({ firstName:"Oluwatobi", lastName:"Sofela", website:"codesweetly.com" })`.


*How To Invoke Components With The Dot Notation*


Suppose your component is inside an object. In that case, use the dot 
notation to invoke it like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Define two components inside an object:
const MyBio = {
  FirstName: function FirstName(props) {
    return <h1>My first name is {props.firstName}.</h1>;
  },

  LastName: function LastName(props) {
    return <h1>My last name is {props.lastName}.</h1>;
  }
};

// Invoke the LastName component:
ReactDOM.render(
  <MyBio.LastName lastName="Sofela" />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-v6wdpg?file=src%2Findex.js)



In the snippet above, `<MyBio.LastName lastName="Sofela" />` tells 
React that: In `MyBio` object, invoke `LastName` component and pass in 
`lastName="Sofela"` as its `props` argument.

Note: You cannot use the bracket notation to invoke a component. In 
other words, React will throw an error if you write
`<MyBio[LastName]lastName="Sofela" />.

## Time To Practice With React Components

Here is your moment to practice the concepts you've learned on React 
components.

In this exercise, your goal is to convert the function component 
below into its class equivalence.

```javascript
function NameRequest(props) {
  return ( 
    <div className="name-request-div">
      Enter your full name:
      <input
        id="name-request-input"
        type="text"
        placeholder="Your last name first"
      />
    </div>
  );
}

ReactDOM.render(<NameRequest />,
document.getElementById("root"));
```

Note: To accomplish this task, you need to:

1. Set up a new React project.

2. Import React and ReactDOM libraries.

3. Convert the function component to a class component.
4. Run your application!

Remember: You will benefit much from this tutorial if you do the 
exercises yourself.

If you get stuck at any point, don’t be discouraged. Instead, review 
the lessons and give the exercise another try.

Once you’ve given it your best shot (you’d only cheat yourself if you 
don’t!), go ahead to see how I approached it on 
[StackBlitz](https://stackblitz.com/edit/react-r4mjna?file=src%2Findex.js).


## Function Vs. Class Components—What’s The Difference?


Here are the three main differences between a function and a class 
component:


*Diff 1: Simplicity*


A function component is shorter, simpler, and easier to read and debug 
than a class component.

For instance, consider this function component:

```javascript
function MyName(props) {
  return <h1>My name is Oluwatobi.</h1>;
}
```

The class equivalence of the function component above is this:

```javascript
class MyName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>My name is Oluwatobi.
    </h1>;
  }
}
```

Notice that the two components above are equivalent and produce the 
same result. However, the function component is shorter and easier 
to understand.


*Diff 2: "this" keyword*

You can do without the keyword `this` in function components. However, 
in class components, you are bound to use it considerably.

Therefore, if you are uncomfortable with the keyword `this`, you will 
find it better to stick with function components.

Note: See my article on the keyword this for a simplified 
[guide](https://codesweetly.com/javascript-this-keyword/).


*Diff 3: Most developer’s choice*


Before React 16.8 (February 6, 2019), most developers preferred class 
components because it was the only way to add local states and 
lifecycle methods to React components.

However, with the introduction of Hooks in 2019, React expects the 
combination of function components and Hooks to be the primary way 
people write React components.

### Which Is Better—Function Or Class Components?


The best component type largely depends on your taste—as React sees 
the two UI types as an equivalent way of defining React components. 
Moreover, you can use both function and class components in the same
project.

Nevertheless, it is essential to note that most developers (including 
the React team) prefer function components because they are easier 
to understand than class components.


### Important Stuff To Know About React Components

Irrespective of your chosen component type, keep these three essential 
pieces of info in mind whenever you decide to create React components.

1. Always begin your component’s name with uppercase lettering.

2. Ensure your component never modify its own props.

3. It is best to split long components into smaller chunks to make 
individual parts easy to read, manage, and reuse. 

Let's now discuss the difference between a React component and a 
React element.



*React Component Vs. Element —What’s The Difference?*


React component is a JavaScript function (or class) that can accept 
a single properties object (props) as its parameter and emits a
React element as its return value.

Here's an example:

```javascript
function ReactComponent(props) {
  return (
    <p>I am a {props.nodeType} React
    element inside a React component.</p>
  );
}
```

A component helps to think about each UI in isolation. It also helps 
to split UIs into independent, reusable chunks of code.

Note: A component is composed of one or more React elements.

React element is the specific user interface (UI) you want to see 
displayed on-screen.

Here's an example:

```javascript
const reactElement = <p>I am a React element</p>;
```

Useful [Resource](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

See Dan Abramov’s article for more on the differences between React 
components and elements.


# RENDERING ELEMENTS - How to Render React Element to a Webpage
<!-- page 77 -->

To render (insert) an element into a webpage, React provides a 
rendering method called `ReactDOM.render()`.


*How Does The React Rendering Method Work?*

`ReactDOM.render()` accepts two arguments. Here is its syntax:

```javascript
ReactDOM.render(First argument, Second argument);
```

First argument: The React element The first argument accepted by the 
`ReactDOM.render()` method is the specific element you wish to render 
to your HTML root DOM.

Here’s an example:

```javascript
ReactDOM.render(<p>First argument</p>);
```

The snippet above tells React to render a paragraph element.

Second argument: The DOM element The second argument accepted by the 
`ReactDOM.render()` method is the HTML DOM container wherein you want 
to render (insert) your React element.


Here's an example:

```javascript
ReactDOM.render(<p>First argument</p>,
document.getElementById("root"));
```

The snippet above tells React to render a paragraph element inside an 
HTML element with `id="root"`.

Here’s another example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = <h1>Hello 👋, I am Oluwatobi Sofela</h1>;

ReactDOM.render(reactElement, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-2xub41?file=src%2Findex.js)

In the snippet above, we used the `ReactDOM.render()` method to tell 
React to render `reactElement` into the root DOM node with `id="root"`.
As such, React will insert `reactElement`'s content inside your HTML 
file’s `div` element with `id="root"`.


### Important Stuff To Know About Rendering React Elements

Keep these two essential pieces of info in mind whenever you choose 
to render React elements.


*Info 1: The root DOM node can be any HTML element*

The "root DOM node" is the name popularly used for whatever HTML DOM 
element you choose to use to contain your React elements.

People use that name because it is the root (first) of all the DOM 
nodes "React" will manage in a specific project.

Note: It is not compulsory to use a `<div>` tag for the root DOM node. 
Likewise, "root" is not a mandatory name for your root node’s id.

Try it Yourself: Change the name and type of your project’s root DOM 
like so:


1. Go inside the React project you recently completed.

2. Inside your project’s public directory, open the index.html file.

3. Within the page’s `<body>` element, substitute `<div id="root"></div>` 
with `<main id="user-name"></main>`.

4. Go into your src directory and open the `index.js` file.

5. Within the `ReactDOM.render()` method, substitute
`document.getElementById("root")` with
`document.getElementById("user-name")`.

6. Go ahead to run your application and check its output in your 
browser. Notice that although you’ve changed the root DOM's default 
tag type and id attribute name, however, the application's output 
remains the same!


That is to say, the "root DOM node" is merely a conventional name for 
any HTML element you create for React to manage.



*Info 2: All React projects need both React and ReactDOM libraries*

Always remember to import the `React` and `ReactDOM` libraries into 
your project. Otherwise, your app will not render.


## Time To Practice With Rendering Elements

Here is your moment to practice the concepts you've learned on 
rendering React elements.

In this exercise, your goal is to render an ordered list of your 
three (3) favorite colors.

Note: To accomplish this task, you need to:

1. Set up a new React project.

2. Import React and ReactDOM libraries.

3. Create the logic to render your ordered list.

4. Run your application!

Remember: You will benefit much from this tutorial if you do the 
exercises yourself.

If you get stuck at any point, don’t be discouraged. Instead, review 
the lessons and give the exercise another try.

Once you’ve given it your best shot (you'd only cheat yourself if you 
don’t!), go ahead to see how I approached it below.



### How Did You Go About Rendering Your Ordered List?


Below is one feasible way to render an ordered list in ReactJS.


*Step 1: Create a new React app*


Setup the project by using npm’s `create-react-app` package to create 
a new React app `called colors-app`:

```terminal
npx create-react-app colors-app
```

Alternatively, you can use Yarn to create a new React app like so:

```terminal
yarn create react-app colors-app
```


*Step 2: Clean up the src folder*


Inside the app’s src directory, delete all files except `index.js`.


*Step 3: Render three colors to the DOM*


Inside `index.js`, render an ordered list of three colors to the DOM 
element with `id="root"`:

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ol>
    <li>Blue</li>
    <li>White</li>
    <li>SaddleBrown</li>
  </ol>,

  document.getElementById("root")
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-gkaeqq?file=src%2Findex.js)


Keep in mind that you can refactor the code by moving the ordered list 
element into a separate variable like so:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

const myFavColors = [
  <ol>
    <li>Blue</li>
    <li>White</li>
    <li>SaddleBrown</li>
  </ol>
];

ReactDOM.render(myFavColors[0], document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-yelvkj?file=src%2Findex.js)


Alternatively, you can use a component to store the ordered list like so:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

function MyFavColors() {
  return (
    <ol>
      <li>Blue</li>
      <li>White</li>
      <li>SaddleBrown</li>
    </ol>
  );
}

ReactDOM.render(<MyFavColors />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-nxpbju?file=src%2Findex.js)


*Step 4: Run the application*


Take a look at the app in the browser by running:

```
npm start
```

Or, if your package manager is Yarn, run:

```
yarn start
```

*How To Update A Rendered Element*


React elements are immutable objects that you cannot change once 
you’ve created them. You can only update a React element by creating 
a new one and rendering it with `ReactDOM.render()`.

Once you’ve used the rendering method to render your new user 
interface (UI), React DOM will update only the necessary part. It 
will do so by comparing the new element to the previous one and apply 
just the difference.


# CREATING LIST OF ELEMENTS - How to Create a List of React Elements from an Array

<!-- // page 89 -->

Suppose you wish to use the items in a specific JavaScript array to 
create a list of React elements. In such a case, you can use the 
`map()` method.


For instance, consider the code below:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Define the bestColors array:
const bestColors = ['Blue', 'White', 'Peru'];

// Use the bestColors array to create a list of React elements:
const bestColorsElements = bestColors.map(color => (
  <li className="template-list">{color}</li>
));

// Render the element array to the root DOM:
ReactDOM.render(<ul>{bestColorsElements}</ul>, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-ys73px?file=src%2Findex.js)



In the snippet above, we used `map()` to create a new list of React 
elements by converting each of `bestColors` items to `<li>` elements.


Notice that we rendered the list of elements directly in the 
`ReactDOM.render()` method. However, in most cases, you would use a 
component to do such rendering.


So, let’s refactor the previous example by moving the 
`bestColorsElements` variable and the `<ul>` element into a component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Define the bestColors array:
const bestColors = ['Blue', 'White', 'Peru'];

function BestColor(props) {
  const bestColorsDup = props.myBestColors;
  const bestColorsElements = bestColorsDup.map(color => (
    <li className="template-list">{color}</li>
  ));
  return <ul>{bestColorsElements}</ul>;
}

// Render the BestColor component to the root DOM:
ReactDOM.render(
  <BestColor myBestColors={bestColors} />,
  document.getElementById('root')
);
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-z7ravq?file=src%2Findex.js)


Observe that the script above creates the same elements as the 
previous example. But in this scenario, we made the array of React 
elements the output of our component. Then, we instructed the 
computer to render the component to the root DOM.

If you now run the code, all will appear fine. However, we’ve got a 
slight issue. Let’s discuss the problem.



*Each React Element In An Array Needs A Key!*


If you check your console, you will see a warning message that says: 
"Each child in an array or iterator should have a unique "key" prop". 
The message means that whenever you create an array of elements, 
React needs you to specify a unique identity for each item in the 
list.

The unique identity keys help React identify which array items have 
been changed, added, or removed.

Therefore, let’s refactor the previous snippet so that each element 
in the `bestColorsElements` will have a unique key attribute.


*How To Add Unique Keys To Each React Element*


There are two common ways to assign unique keys to each element of 
an array. The first is the unrecommended way. While the second is
the best technique.


*The Unrecommended Way To Assign Keys To An Array Of React Elements*

One way to add unique keys is to use each item’s index as its key 
attribute value.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Use the bestColors array to create a list of React elements:
function BestColor(props) {
  const bestColorsDup = props.myBestColors;

  // Use each item’s index as its key attribute value:
  const bestColorsElements = bestColorsDup.map((color, index) => (
    <li key={index} className="template-list">
      {color}
    </li>
  ));
  return <ul>{bestColorsElements}</ul>;
}

// Define the bestColors array:
const bestColors = ['Blue', 'White', 'Peru'];

// Render the BestColor component to the root DOM:
ReactDOM.render(
  <BestColor myBestColors={bestColors} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-bubvpe?file=src%2Findex.js)


In the snippet above, we specified a key attribute on each `<li>` 
element. We then used each item’s index as the attribute’s value.

Note:

* React does not recommend using indexes as an item’s key. Only use 
it as a last resort when you do not have stable IDs.

* Whenever you use an index as the key attribute’s value, ensure the 
order of items in the array never changes. Otherwise, you may have 
severe issues with performance and component state.

<!-- // page 95 -->


*The Best Way To Assign Keys To An Array Of React Elements*


The best way to add unique keys is to use stable IDs.

Typically, in real projects, you will use IDs from a database. 
However, when you do not have access to a database, you can install a
package that helps to generate unique ids.  In this tutorial, I will 
use the `uniqid NPM` package to illustrate how you may use stable
IDs as keys to an array of React elements.



*What Is Uniqid?*

`Uniqid` is an id generator package that creates unique ids based on 
your current time, process, and machine’s name.

*How To Use Uniqid*

Follow the steps below to learn how to use the uniqid package.


*Step 1: Configure a new React project* 

Set up a new React project.

Remember: It is best practice for your project’s name to reflect its 
purpose.


Note: It would help if you attempted the configuration on your own 
first. Afterward, if you need a refresher, revisit chapter three—
where we dealt with the easiest way to set up a new React project. 


*Step 2: Clean up the src folder*


Inside the src directory of your project, delete all files except 
`index.js`.


*Step 3: Install uniqid*


While you are in your project’s folder, run:

```
npm install uniqid
```

Or, if your package manager is Yarn, run:

```
yarn add uniqid
```


*Step 4: Import and use uniqid in your project*


Open your `index.js` file and replicate the code below:

```javascript
// Import React, ReactDOM, and uniqid:
import React from 'react';
import ReactDOM from 'react-dom';
import uniqid from 'uniqid';

// Use the bestColors array to create a list of React elements:
function BestColor(props) {
  const bestColorsDup = props.myBestColors;

  // Use uniqid to generate each item’s key attribute value:
  const bestColorsElements = bestColorsDup.map(color => (
    <li key={uniqid()} className="template-list">
      {color}
    </li>
  ));
  return <ul>{bestColorsElements}</ul>;
}

// Define the bestColors array:
const bestColors = ['Blue', 'White', 'Peru'];

// Render the BestColor component to the root DOM:
ReactDOM.render(
  <BestColor myBestColors={bestColors} />,
  document.getElementById('root')
);
```

In the snippet above, we imported the `uniqid` package. Then, we used 
it to generate unique id keys for each list item.


*Step 5: Run your application*


Go ahead to run your application and check its output in your browser.

You can also see mine on 
[StackBlitz](https://stackblitz.com/edit/react-rek4lj?file=src%2Findex.js).


## Important Stuff To Know About Assigning Keys

Keep these two essential pieces of info in mind whenever you assign 
keys to an array of React elements. They will help you avoid 
unnecessary headaches.


*Info 1: Set each array element’s key while creating the array*


The right time to specify each array element’s unique key is during 
the array’s creation.

In other words, suppose you extract your template element into a 
separate component.

In such a case, you should set the key attribute on the component’s 
invocation tag—not on the extracted template element.

For instance, here is incorrect placement of the key attribute:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import uniqid from 'uniqid';

function ColorListElement(props) {
  const color = props.currColor;
  // The key is wrongly placed here:
  return (
    <li key={uniqid()} className="template-list">
      {color}
    </li>
  );
}

function BestColor(props) {
  const bestColorsDup = props.myBestColors;
  const bestColorsElements = bestColorsDup.map(color => (
    // The key attribute above should have been set here:
    <ColorListElement currColor={color} />
  ));
  return <ul>{bestColorsElements}</ul>;
}

const bestColors = ['Blue', 'White', 'Peru'];
ReactDOM.render(
  <BestColor myBestColors={bestColors} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-dsbknq?file=src%2Findex.js)


In the snippet above, observe that we incorrectly set each item’s key 
outside the `map()` method. You should avoid such a mistake!

Always set the key attribute while creating the array of elements.
So, in the example above, we should have set the key on the component 
invocation tag—in the `map()` method.

Therefore, let’s refactor the script like so:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import uniqid from 'uniqid';

function ColorListElement(props) {
  const color = props.currColor;
  return <li className="template-list">{color}</li>;
}

function BestColor(props) {
  const bestColorsDup = props.myBestColors;
  const bestColorsElements = bestColorsDup.map(color => (
    // The key attribute is rightly specified here:
    <ColorListElement key={uniqid()} currColor={color} />
  ));
  return <ul>{bestColorsElements}</ul>;
}

const bestColors = ['Blue', 'White', 'Peru'];

ReactDOM.render(
  <BestColor myBestColors={bestColors} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-h4cxie?file=src%2Findex.js)



*Info 2: Keys don’t get passed to React components*


React neither transfers the key attribute to components nor includes 
it as an attribute of a rendered element.

React uses keys solely to know the state of array items. They help 
React identify which elements have changed, are added, or removed from 
the list.

Therefore, if you need to use a specific key’s value in your component 
or on your DOM element, you must explicitly pass it as the value of 
a different attribute.

Here’s an example:

```javascript
const bestColorsElementArray = bestColorsArr.map(color =>
  <ColorListElement
    key={color}
    id={color}
    currColor={color} />
);
```

In the snippet above, we initialized `id` with the same value as the 
`key` attribute.

By so doing, we can access `props.id` in the `ColorListElement` 
component, but not `props.key`.



# REACT DOM TAG VS COMPONENT TAG - What Is the Difference?

The difference between React DOM tags and component tags is that a 
DOM tag begins with lowercase lettering. In contrast, a component 
tag starts with an uppercase lettering.

Let’s talk more about these differences.


*DOM Tags Begin With Lowercase Lettering*


If you start your tag name with a lowercase letter, React will treat 
such a name as an HTML element tag name.

Here’s an example:

```javascript
<div />;
```

React will interpret the tag in the snippet above as an HTML element 
tag because it begins with a lowercase letter.


Note: At runtime, Babel will compile the DOM tag above to
`React.createElement("div")`—where the "div" string represents the
HTML `div` tag.


*Component Tags Start With Uppercase Lettering*


If you begin your tag name with an uppercase letter, React will 
consider such a name as a user-defined component tag name.

Here’s an example:

```javascript
<Div />;
```

React will read the tag in the above snippet as a React component tag 
because it begins with an uppercase letter.

Note: At runtime, Babel will compile the component tag above to
`React.createElement(Div)`—where the Div text references the Div component
you defined in your JavaScript file.


## Important Stuff To Know About React Component Tags

Keep these two essential pieces of info in mind whenever you choose 
to use React component tags.


*Info 1: You cannot use an expression as a component tag*


Keep in mind that you cannot use an [expression](https://codesweetly.com/javascript-statement#what-is-a-javascript-expression-statement) 
as a React component tag. For instance, consider the code below:

```javascript
// Import the React and ReactDOM libraries:
import React from "react";
import ReactDOM from "react-dom";
// Define a function component:
function FirstName(props) {
  return <h1>My first name is {props.firstNameText}.</h1>;
}
// Define another function component:
function LastName(props) {
  return <h1>My last name is {props.lastNameText}</h1>;
}

const bioComponents = {
  firstNameComponent: FirstName,
  lastNameComponent: LastName
};
// Use a third function component to invoke the two components defined above:
function ComponentInvocator(props) {
  return (
    // Wrong! Your component tag cannot be an expression.
    <bioComponents[props.componentName]
      firstNameText={props.firstNameText}
      lastNameText={props.lastNameText}
    />
  );
}
// Render the ComponentInvocator component to the root DOM:
ReactDOM.render(
  <ComponentInvocator
    componentName="lastNameComponent"
    firstNameText="Oluwatobi"
    lastNameText="Sofela"
  />,
  document.getElementById("root")
);
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-wma3x7?file=src%2Findex.js)



In the script above, observe that we incorrectly used an expression 
as a component tag. So, when you run the script, React will throw an 
error.

The correct way to use an expression to express the name of a 
component tag is to set it as a variable. Let’s see how below.


*Info 2: You can use a variable as a component tag*


Suppose you wish to use an expression to express the name of a 
component tag. In such a case, assign that expression to a capitalized 
variable. By so doing, you can use the variable as the component tag.

For instance, consider the code below:


```javascript
// Import the React and ReactDOM libraries:
import React from 'react';
import ReactDOM from 'react-dom';
// Define a function component:
function FirstName(props) {
  return <h1>My first name is {props.firstNameText}.</h1>;
}
// Define another function component:
function LastName(props) {
  return <h1>My last name is {props.lastNameText}</h1>;
}
// Set the components above as the value of two different properties:
const bioComponents = {
  firstNameComponent: FirstName,
  lastNameComponent: LastName
};
// Use a third function component to invoke the two components defined above:
function ComponentInvocator(props) {
  // Assign an expression to a capitalized variable:
  const ComponentToBeInvoked = bioComponents[props.componentName];
  return (
    // Correct! A component tag can be a capitalized variable.
    <ComponentToBeInvoked
      firstNameText={props.firstNameText}
      lastNameText={props.lastNameText}
    />
  );
}
// Render the ComponentInvocator component to the root DOM:
ReactDOM.render(
  <ComponentInvocator
    componentName="lastNameComponent"
    firstNameText="Oluwatobi"
    lastNameText="Sofela"
  />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-gxhbvu?file=src%2Findex.js)



The code in the script above is the right way to use an expression to 
reference the name of a component tag.


Note:

* The `const ComponentToBeInvoked = bioComponents[props.componentName]`
code instructs the computer to initialize the `ComponentToBeInvoked` 
variable with the output of the `bioComponents[props.componentName]`
expression.

* As per the script above, `bioComponents[props.componentName]`
output will be the `LastName` function component because we passed
`componentName="lastNameComponent"` to `ComponentInvocator`’s `props`
parameter.


# CHAPTER 10: REUSABLE COMPONENTS - How to Split React Components into Reusable Files

<!-- // page 113 -->

Suppose you have a complex component or one that has elements you wish 
to reuse. In that case, it’s best to split such components into smaller 
chunks. You can then separate the extracts into individual files.

So how exactly does this work? Let's see with an example.


Example Of A Splittable Component


Consider this `RandomImageGenerator` component below:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
      <div className="image">
        <img src={props.imageData.url} alt={props.imageData.title} />
      </div>
      <div className="image-title">
        <p>
          <strong>{props.imageData.title}</strong>
        </p>
      </div>
      <div className="image-description">
        <p>{props.imageData.description}</p>
      </div>
    </div>
  );
}

const data = {
  url: 'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.',
};

ReactDOM.render(
  <RandomImageGenerator imageData={data} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-wsxvuy?file=src%2Findex.js)

<!-- // page 115 -->


The snippet above programmed the `RandomImageGenerator` component to 
render an `imageInfo` div which contains three nested divs (`image`, 
`image-title`, and `image-description`).

The issue with `RandomImageGenerator`'s definition is that it is hard 
to reuse its nested elements.

For instance, suppose you want to reuse the `image-title` div in a 
different project. In such a case, you must duplicate or rewrite the
code because its definition in `RandomImageGenerator` makes it hard
to reuse.

A better way to define the `RandomImageGenerator` UI is to split its
reusable parts into separate files. By so doing, you will have a 
palette of reusable components that will save you a considerable
amount of coding time—especially in larger projects.


## How To Split The RandomImageGenerator Component

Follow the steps below to learn how you can split `RandomImageGenerator` 
into smaller chucks.


*Step 1: Configure a new project*

Set up a new React project.

Remember: It is best practice for your project’s name to reflect its 
purpose.


Note: It will help if you attempt the configuration on your own first. 
Afterward, if you need a refresher, revisit chapter three—where we 
dealt with the easiest way to set up a new React project.


*Step 2: Clean up the src folder*


Inside the src directory of your project, delete all files except 
`index.js`.


*Step 3: Create a `RandomImageGenerator.js` file*


While you are in the src directory, create a new file called
`RandomImageGenerator.js`.


*Step 4: Define the `RandomImageGenerator` component*


Open your `RandomImageGenerator.js` file and define a
`RandomImageGenerator` component in it like so:


```javascript
import React from 'react';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
      <div className="image">
        <img src={props.imageData.url} alt={props.imageData.title} />
      </div>
      <div className="image-title">
        <p> <strong>{props.imageData.title}</strong></p>
      </div>
      <div className="image-description">
        <p>{props.imageData.description}</p>
      </div>
    </div>
  );
}

const data = { url: 'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```


*Step 5: Create an Image.js file*


In the src directory, create a new file called `Image.js`.


*Step 6: Extract the image div into the `Image.js` file*


Open your `Image.js` file and extract into it the image div from the
`RandomImageGenerator` component like so:


```javascript
import React from "react";

function Image(props) {
  return (
    <div className="image">
      <img src={props.imageData.url} alt={props.imageData.title} />
    </div>
  );
}

export default Image;
```

Your  RandomImageGenerator.js` file should now look like so:


```javascript
import React from 'react';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
      <div className="image-title">
        <p>
          <strong>{props.imageData.title}</strong>
        </p>
      </div>
      <div className="image-description">
        <p>{props.imageData.description}</p>
      </div>
    </div>
  );
}


const data = {url:'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```

*Step 7: Create an ImageTitle.js file*


In the `src` directory, create a new file called `ImageTitle.js`.


*Step 8: Extract the `image-title` div into the `ImageTitle.js` file*


Open your `ImageTitle.js` file and extract into it the `image-title` 
div from the `RandomImageGenerator` component like so:


```javascript
import React from "react";

function ImageTitle(props) {
  return (
    <div className="image-title">
      <p><strong>{props.imageData.title}</strong></p>
    </div>
  );
}

export default ImageTitle;
```

Your `RandomImageGenerator.js` file should now look like so:

```javascript
import React from 'react';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
      <div className="image-description">
        <p>{props.imageData.description}</p>
      </div>
    </div>
  );
}

const data = {url:'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```


*Step 9: Create an `ImageDescription.js` file*


In the `src` directory, create a new file called `ImageDescription.js`.



*Step 10: Extract the `image-description` div into the `ImageDescription.js` file*


Open your `ImageDescription.js` file and extract into it the 
`image-description` div from the `RandomImageGenerator` component 
like so:


```javascript
import React from "react";

function ImageDescription(props) {
  return (
    <div className="image-description">
      <p>{props.imageData.description}</p>
    </div>
  );
}

export default ImageDescription;
```


Your `RandomImageGenerator.js` file should now look like so:


```javascript
import React from 'react';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo"></div>
  );
}

const data = {url:'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```


*Step 11: Import your extracted components into the `RandomImageGenerator.js` file*


Import the `Image`, `ImageTitle`, and `ImageDescription` components into 
your `RandomImageGenerator.js` file and invoke them like so:

```javascript
import React from 'react';

// Import Image, ImageTitle, and ImageDescription:
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';

function RandomImageGenerator(props) {
return (
  <div className="imageInfo">
    {/** Invoke Image, ImageTitle, and ImageDescription: */}
    <Image imageData={data} />
    <ImageTitle imageData={data} />
    <ImageDescription imageData={data} />
  </div>
  );
}

const data = {url:'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```

Note:

* In the snippet above, observe that while we imported the components, 
we included each file’s relative path (that is, ./). You must always 
do so for files that are not third-party dependencies. By so doing, 
JavaScript will know precisely where to locate the imported module.


If you omit the relative path, JavaScript will automatically look 
anywhere for any file with the specified name—which may cause your
app to malfunction.

* In "./Image", the dot (.) means current. While the slash (/) means 
directory. Therefore, "./Image" means in the current directory, look 
for the component file named Image.

* We omitted the `.js` extension because the `import` statement looks 
for JavaScript files by default. So, you only need to include the
file extension for non-JavaScript files.


*Step 12: Render the `RandomImageGenerator` component to the DOM*


Import the `RandomImageGenerator` component into your `index.js` file 
and render it to the root DOM like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import RandomImageGenerator from './RandomImageGenerator';

ReactDOM.render(<RandomImageGenerator />,
document.getElementById('root'));
```


*Step 13: Run your application*


Go ahead to run your application and check its output in your browser.

You can also see mine on [StackBlitz](https://stackblitz.com/edit/react-qf7eba?file=src%2Findex.js).


And that’s it!


You’ve successfully extracted the reusable portion of the 
`RandomImageGenerator` component into individual parts that are easier 
to read, manage, and reuse!


Note:

* By convention, React developers typically use one file for just one 
component. By so doing, it makes each UI easy to reuse in multiple 
projects.

* It is best to use uppercase for the first letter of a component’s 
filename. This practice helps to quickly differentiate a React 
component file from a regular JavaScript file.

* React developers typically create a components directory for storing 
all of a project’s component files for effective organization.


In other words, you can create a components folder to store the 
`RandomImageGenerator`, `Image`, `ImageTitle`, and `ImageDescription`
components. When you do so, remember to update each file’s relative 
path. For instance, instead of "`./Image`", you will use
"`./components/Image`".

* A common practice is to use an App component as the parent 
(container) of all other components in a project. And `index.js` 
(the entry file) is typically used to render the App component to 
the root DOM. So, for instance, you may choose to rename the 
`RandomImageGenerator` component (and file) to `App`.


## Time To Practice With Reusable Components


Here is your moment to practice the concepts you’ve learned on 
reusable components.

In this exercise, your goal is to render four (or more) checkboxes to 
the webpage. Ensure each checkbox has its associated text next to it.


Note:

To accomplish this task, you need to:

1. Set up a new React project.

2. Import React and ReactDOM libraries.

3. Create the required logic to render four (or more) checkboxes to 
the webpage.

4. Run your application!


Remember:


You will benefit much from this tutorial if you do the exercises yourself.


If you get stuck at any point, don’t be discouraged. Instead, review the 
lessons and give the exercise another attempt.


Once you’ve given it your best shot (you’d only cheat yourself if you 
don’t!), go ahead to see how I approached it below.



### How Did You Go About Creating Your Checkboxes?


Below is one feasible way to render multiple checkboxes to the webpage.


*Step 1: Create a new React app*


Setup the project by using npm’s `create-react-app` package to create 
a new React app called checkboxes-app:

```
npx create-react-app checkboxes-app
```


*Step 2: Clean up the src folder*


Inside the src directory, delete all files except `index.js` and `App.js`.



*Step 3: Create a components directory*


While you are in the src directory, create a new folder called 
`components` and move `App.js` inside it.



*Step 4: Create a Checkbox.js file*


Go into the `src/components` directory and create a new file called 
`Checkbox.js`.



*Step 5: Create the Checkbox component*


Open the `Checkbox.js` file. Then, create a `Checkbox` function 
component that returns a `<div>` element containing an `<input>` 
element and a <label> element:


```javascript
// Checkbox.js
import React from "react";

function Checkbox(props) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.text}</label>
    </div>
  );
}

export default Checkbox;
```



*Step 6: Create an App component*


Open your `App.js` file. Then, create an App component that returns 
a `<div>` element containing a `<p>` element and four (4) `<Checkbox>` 
components:


```javascript
// App.js
import React from "react";
import Checkbox from "./Checkbox";

function App() {
  return (
    <div className="techSubjectsQuestionnaire">
      <p><strong>What tech subjects are you learning?</strong></p>
      <Checkbox id="javascript" text="JavaScript" />
      <Checkbox id="css" text="CSS" />
      <Checkbox id="html" text="HTML" />
      <Checkbox id="react" text="ReactJS" />
    </div>
  );
}

export default App;
```



*Step 7: Render the App component*


Open your `index.js` file and render the App component to the DOM 
like so:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
```


*Step 8: Run the application*


Take a look at the app in the browser by running:

```
npm start
```

You can also see mine on [StackBlitz](https://stackblitz.com/edit/react-32pyep?file=src%2Findex.js).


Keep in mind that had we not separated the `checkbox` div element into 
a separate file, our `App` component would have looked like so:

```javascript
// App.js
import React from 'react';
import Checkbox from './Checkbox';

function App() {
  return (
    <div className="techSubjectsQuestionnaire">
      <p>
        <strong>What tech subjects are you learning?</strong>
      </p>
      <div className="checkbox">
        <input type="checkbox" id="javascript" />
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="css" />
        <label htmlFor="css">CSS</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="html" />
        <label htmlFor="html">HTML</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="react" />
        <label htmlFor="react">ReactJS</label>
      </div>
    </div>
  );
}

export default App;
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-rqp1ik?file=src%2Fcomponents%2FApp.js)

Notice how long-winded and unreadable the App component looks. Such 
is the disadvantage of not splitting your UI into reusable files.


# CHAPTER 11: REACT PROPS - What Exactly Is props in ReactJS?

<!-- // page 136 -->

React props are parameters used to pass arguments (objects) to 
components. Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>My name is {this.props.firstName}.</h1>;
  }
}

ReactDOM.render(
  <MyName firstName="Oluwatobi" />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-hsvwqz?file=src%2Findex.js)



In the snippet above, we defined MyName’s constructor with a single 
properties (props) parameter. And we also passed the props parameter 
into the super() method.

Note that the function component equivalence of the code above is this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyName(props) {
  return <h1>My name is {props.firstName}.</h1>;
}

ReactDOM.render(
  <MyName firstName="Oluwatobi" />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-aumrkv?file=src%2Findex.js)



## Important Stuff To Know About React Props


Keep these two essential pieces of info in mind whenever you choose to 
use React props.


*Info 1: You can set default props on a component*


Suppose you wish to define a default properties object (props) on your 
component. In such a case, you can use the `defaultProps` property.

Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Create a class component:
class MyName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>My name is {this.props.fullName}.</h1>;
  }
}

// Set a default props on MyName:
MyName.defaultProps = {
  fullName: 'Oluwatobi Sofela'
};

ReactDOM.render(<MyName />, document.getElementById('root'));
```


If you now invoke MyName without providing any value for `props.fullName`,

React will default to "Oluwatobi Sofela".

For instance, when you run the code below, `MyName` will return the 
`defaultProps`’ value.


```javascript
// Invoke MyName without any props:
<MyName />;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-g2txfg?file=src%2Findex.js)


The function component way of setting default properties is like so:


```javascript
// Create a function component:
function MyName(props) {
  return <h1>My name is {props.fullName}.</h1>;
}

// Set a default props on MyName:
MyName.defaultProps = {
  fullName: 'Oluwatobi Sofela'
};

// Invoke MyName without any props:
ReactDOM.render(<MyName />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-fnpzwo?file=src%2Findex.js)



Keep in mind that you can also set default properties right inside 
your class component.

Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Create a class component:
class MyName extends React.Component {
  constructor(props) {
    super(props);
  }

  // Set a default props on MyName:
  static defaultProps = {
    fullName: 'Oluwatobi Sofela'
  };

  render() {
    return <h1>My name is {this.props.fullName}.</h1>;
  }
}

// Invoke MyName without any props:
ReactDOM.render(<MyName />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-eyemex?file=src%2Findex.js)


Note: defaultProps works for undefined props only—not for null props.

In other words, suppose we had invoked `<MyName fullName={null} />`. 
In that case, `props.fullName` will remain null.


*Info 2: Do not copy props into your state*


To prevent bugs in your app, never copy props into state like so:

```javascript
this.state = { fullName: props.fullName};
```

If you make the common mistake of writing your code as in the snippet 
above, the state object will not reflect updates to the `fullName` 
prop—which may cause your app to malfunction.

Check this [blog post](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) to learn more about the common problems you may 
encounter if you copy props into the state object.



# CHAPTER 12: REACT STATE - What Exactly Is the State Object?

<!-- // page 143 -->

React state is a built-in object used to store a component’s values 
that are likely to change over time.

React provides two different ways to access the state object. The 
specific technique you will employ depends on the type of component 
you prefer to use. Below is an overview of the two approaches.


*The First Way To Access React State (The Class Component Way)*


Suppose your UI is a class component. In that case, you can use 
`this.state` in the `constructor()` method to access React state.

Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { companyName: 'CodeSweetly' };
  }

  render() {
    return <h1>About {this.state.companyName}</h1>;
  }
}

ReactDOM.render(<AboutUs />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-qw5mzp?file=src%2Findex.js)



In the snippet above, we stored a `companyName` property inside the
component’s state object.

Over time, if you decide to update any of the state’s properties, you 
can do so via React’s `setState()` method like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyAge: 2
    };
    this.updateCompanyAge = this.updateCompanyAge.bind(this);
  }

  updateCompanyAge() {
    this.setState({ companyAge: this.state.companyAge + 1 });
  }

  render() {
    return (
      <div>
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName} is {this.state.companyAge} years old!
        </p>
        <button type="button" onClick={this.updateCompanyAge}>
          Click to update age
        </button>
      </div>
    );
  }
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-yag3ie?file=src%2Findex.js)



In the snippet above, whenever `updateCompanyAge()` gets triggered, 
`this.setState()` will update AboutComp’s state object.

Note:

* You should always define your class component’s state in the 
`constructor()` method.

* Unless your class component’s event handler is a class field or an 
arrow function, you should use bind to define the handler’s operating 
context. You will see exactly why in chapter fifteen.

Just in case you are wondering how the `setState()` method works, 
let’s discuss it below.



*How Does The `SetState()` Method Work?*


`setState()` is the method used to update a class component’s state.
The method enqueues updates to a component's state, and alerts React 
of the need to re-render the UI with the updated state.

It is best to think of `setState()` as a request—not an immediate 
command—to update a component’s state because React may accomplish the 
update asynchronously.

Therefore, there’s no guarantee that the state update will happen 
immediately.


Note: Unless `shouldComponentUpdate()` returns false, `setState()` 
will trigger a re-rendering of your class component.

So now that we know what `setState()` is, we can talk about its syntax.



*SetState’s Syntax*


`setState()` accepts two arguments: an updater and an optional 
callback function. 

```javascript
setState(updater, callback);
```


## What Is SetState’s Updater Argument?


An updater is the first argument accepted by the  setState()` method. 
It is a required argument for specifying the new value you want to 
merge with the component’s current state.

Keep in mind that the updater argument can be an object or a function.


*How to set an object as setState’s updater argument*


The `setState()` syntax with an updater object looks like so:

```javascript
this.setState({ propertyName:
propertyValue });
```

In the snippet above, we specified an object as `setState()`’s 
updater argument.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'CodeSweetly' };
  }

  updateName = () => {
    this.setState({ name: 'Oluwatobi' });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>The name state is: {this.state.name}</h1>
        <button type="button" onClick={this.updateName}>
          Click to update state
        </button>
        <p>
          <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-6ueac1?file=src%2Findex.js)

<!-- // page 150 -->




In the snippet above, observe that we specified an object as 
setState()’s updater argument.

In other words, we used an updater object to update AboutComp’s name 
state from “CodeSweetly” to “Oluwatobi”.

Let’s now see how to set a function as setState()’s updater argument.



*How to set a function as setState’s updater argument*


The setState syntax with an updater function looks like so:


```javascript
this.setState((currState, currProps) => {
  return { ... };
});
```


In the snippet above, we specified a function as setState()’s updater 
argument.


Note:

* The updater function’s first parameter (currState) refers to the 
component’s current state at the time setState is applying the 
state’s update.

* The updater function’s second parameter (currProps) refers to the 
component’s current props when setState is applying the state’s update.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Oluwatobi' };
  }

  updateName = () => {
    this.setState((currState, currProps) => ({
      name: currState.name + ' ' + currProps.lastName
    }));
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>The name state is: {this.state.name}</h1>
        <button type="button" onClick={this.updateName}>
          Click to update state
        </button>
        <p>
          <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <AboutComp lastName="Sofela" />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-k9cxta?file=src%2Findex.js)



In the snippet above, we specified a function as setState()’s updater 
argument.

In other words, we used an updater function to update AboutComp’s name 
state from “Oluwatobi” to “Oluwatobi Sofela”.

Let’s now discuss setState’s second argument.




*What Is SetState's Callback Argument?*


A callback function is the second argument accepted by the `setState()` 
method.

The callback argument is optional and will run only after `setState() `
has completed its task, and the component is re-rendered.

Note: React recommends `componentDidUpdate()` as a better alternative 
to setState’s callback argument.



## Important Stuff To Know About State In A Class Component


Keep these three essential pieces of info in mind whenever you choose 
to use state in a class component.


*Info 1: Always modify state with the `setState()` method*


The built-in `setState()` method makes React know that you have 
modified your component’s state. Consequently, it ensures React 
invokes the UI’s `render()` method (and other lifecycle methods) 
with the updated state.


Therefore, to avoid bugs in your React app, always use `setState()` 
to alter your states —not the assignment operator (=).

In other words, never modify state like so: 


```javascript
this.state.companyAge = 32.
```

Instead, update your state object like so:

```javascript
this.setState({ companyAge: 32 }).
```



*Info 2: setState()’s object argument gets merged into the UI’s current state*


`setState()` merges whatever object you provided as its argument with 
the properties currently in the component’s state.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyAge: 2,
      companyWebsite: 'www.codesweetly.com'
    };
  }

  updateCompanyAge = () => {
    this.setState({ companyAge: 175 });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName} is {this.state.companyAge} years old!
        </p>
        <button type="button" onClick={this.updateCompanyAge}>
          Click to update age
        </button>
        <p>
          <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-xglq4d?file=src%2Findex.js)



In the snippet above, `setState` will merge `{ companyAge: 175 }` with 
the component’s current state.

In other words, `{ companyAge: 175 `}` will totally replace
`this.state.companyAge`.



*Info 3: Use an updater function for successive state updates*


Whenever you update a component’s state multiple times in the same 
cycle, React may accomplish such updates asynchronously. So, you may 
get an erroneous result if you use an object as setState’s argument.


Therefore, it is best to use an updater function —not an updater 
object—whenever you need to use multiple successive `setState()` 
calls to modify a specific state. 

For instance, consider the scenario below where I used two updater 
objects in the same cycle to update a component’s state:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyAge: 5
    };
  }

  updateCompanyAge = () => {
    this.setState({ companyAge: this.state.companyAge + props.numbA });
    this.setState({ companyAge: this.state.companyAge + props.numbB });
  };

  render() {
    return (
      <div>
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName} is {this.state.companyAge} years old!
        </p>
        <button type="button" onClick={this.updateCompanyAge}>
          Click to update age
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <AboutComp numbA={10} numbB={1} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-cywe9t?file=src%2Findex.js)

<!-- // page 157 -->


Only the second `this.setState()` code may eventually update the UI’s 
state because React will run the two codes asynchronously.

As such, subsequent calls will override values from previous calls. 
Therefore, the component’s state will update erroneously.

To ensure successive `setState()` codes update your component’s state 
appropriately, you must use a function as setState’s argument.



For instance, consider the scenario below where I used two updater 
functions in the same cycle to update a component’s state:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyAge: 5
    };
  }

  updateCompanyAge = () => {
    this.setState((currState, currProps) => ({
      companyAge: currState.companyAge + currProps.numbA
    }));
    this.setState((currState, currProps) => ({
      companyAge: currState.companyAge + currProps.numbB
    }));
  };

  render() {
    return (
      <div>
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName} is {this.state.companyAge} years old!
        </p>
        <button type="button" onClick={this.updateCompanyAge}>
          Click to update age
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <AboutComp numbA={10} numbB={1} />,
  document.getElementById('root')
);
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-3bcewm?file=src%2Findex.js)



In the snippet above, I used two updater functions inside two separate 
`setState()` methods to update AboutComp’s state reliably.


Remember:

* The updater function’s first parameter (`currState`) refers to the 
component’s current state at the time `setState` is applying the 
state’s update.

* The updater function’s second parameter (`currProps`) refers to the 
component’s current props at the time `setState` is applying the 
state’s update.


Let’s now discuss the second way to access React state.


## The Second Way To Access React State (The Function Component Way)


Suppose your component is a function component. In such a case, you 
can use `useState` (the state hook) to access React state.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyName] = React.useState('CodeSweetly');
  return <h1>About {companyName}</h1>;
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-jydgqe?file=src%2Findex.js)




In the snippet above, we stored a “CodeSweetly” string inside the 
component’s state object. Then, we set the state object as 
`companyName`’s initial value.

Over time, if you decide to update any of the state’s properties, 
you can do so via the state’s updater function like so:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyName] = React.useState('CodeSweetly');
  const [companyAge, setCompanyAge] = React.useState(2);

  function updateCompanyAge() {
    setCompanyAge(companyAge + 1);
  }

  return (
    <div>
      <h1>About {companyName}</h1>
      <p>
        {companyName} is {companyAge} years old!
      </p>
      <button type="button" onClick={updateCompanyAge}>
        Click to update age
      </button>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-pctpwn?file=src%2Findex.js)


In the snippet above, whenever `updateCompanyAge()` gets triggered,
`setCompanyAge()` will update `AboutComp`’s state object.


Note: A typical naming convention is to prefix the updater function’s 
name with “set”.  So, for instance, if the state’s name is color, the 
updater’s name will be `setColor`.


So now that we’ve seen both ways to access the state object, we can 
discuss the differences between a class component’s state and that of 
a function component.


## Class Component’s State Vs. Function Component’s State


Below are the differences between a class component’s state and that 
of a function component.



*Difference 1: What Data Type Can You Assign To The State Object?*


In a class component, you must always initialize and update state with 
an object data type.

However, in a function component, you can initialize and update state 
with various data types such as string, number, array, object, and 
Boolean.

For instance, consider this example of a class component:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyAge: 2
    };
    this.updateCompanyAge = this.updateCompanyAge.bind(this);
  }

  updateCompanyAge() {
    this.setState({ companyAge: this.state.companyAge + 1 });
  }

  render() {
    return (
      <div>
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName} is {this.state.companyAge} years old!
        </p>
        <button type="button" onClick={this.updateCompanyAge}>
          Click to update age
        </button>
      </div>
    );
  }
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-yag3ie?file=src%2Findex.js)




Notice that the component’s state got initialized and updated with 
objects (`{companyName: "CodeSweetly", companyAge: 2`} and 
`{companyAge:this.state.companyAge + 1 }`).

Such is the requirement of a class component’s state: you must always 
assign it an object data type.

Now, consider this example of a function component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyName] = React.useState('CodeSweetly');
  const [companyAge, setCompanyAge] = React.useState(2);

  function updateCompanyAge() {
    setCompanyAge(companyAge + 1);
  }

  return (
    <div>
      <h1>About {companyName}</h1>
      <p>
        {companyName} is {companyAge} years old!
      </p>
      <button type="button" onClick={updateCompanyAge}>
        Click to update age
      </button>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-pctpwn?file=src%2Findex.js)



Observe that the component’s state got initialized and updated with 
numbers (2 and companyAge + 1). Such is the dynamic nature of a 
function component’s state: you are free to assign it a number, 
Boolean, string, object, or array data type.




*Difference 2: Will Both Function And Class Components Auto-Merge A New State Into The Current One?*


A class component’s updater function will auto-merge the new state 
into the UI’s current state.

However, a function component’s updater function will not auto-merge 
the new and old states together.

Instead, you must use the [spread operator](https://codesweetly.com/spread-operator/) to merge states manually. 
Otherwise, the new state will completely overwrite the old one.


For instance, consider the class component example below:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: 'CodeSweetly',
      companyFounder: 'Oluwatobi Sofela'
    };
  }

  updateCompanyBio = () => {
    this.setState({ companyWebsite: 'www.codesweetly.com' });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>About {this.state.companyName}</h1>
        <p>
          {this.state.companyName}’s founder is {this.state.companyFounder}.
        </p>
        {this.state.companyWebsite ? (
          <p>Our website is: {this.state.companyWebsite}.</p>
        ) : null}
        <button type="button" onClick={this.updateCompanyBio}>
          Click to update bio
        </button>
        <p>
          <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-s2efuj?file=src%2Findex.js)



In the snippet above, AboutComp’s current state is 
`{ companyName:"CodeSweetly", companyFounder:"Oluwatobi Sofela" }`.

When the component’s button gets clicked, React will auto-merge the 
new state with the current state.

Therefore, setState will update the current state to 

`{ companyName:"CodeSweetly", companyFounder:"Oluwatobi Sofela"`,
`companyWebsite:"www.codesweetly.com" }`.



Now, consider this instance of a function component:



```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp() {
  const [companyBio, setCompanyBio] = useState({
    companyName: 'CodeSweetly',
    companyFounder: 'Oluwatobi Sofela'
  });

  function updateCompanyBio() {
    setCompanyBio({ companyWebsite: 'www.codesweetly.com' });
  }

  return (
    <div>
      {console.log(companyBio)}
      <h1>About {companyBio.companyName}</h1>
      <p>
        {companyBio.companyName}’s founder is {companyBio.companyFounder}.
      </p>
      {companyBio.companyWebsite ? (
        <p>Our website is: {companyBio.companyWebsite}.</p>
      ) : null}
      <button type="button" onClick={updateCompanyBio}>
        Click to update bio
      </button>
      <p>
        <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
      </p>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```




Try it on [StackBlitz](https://stackblitz.com/edit/react-nvatuf?file=src%2Findex.js)



In the snippet above, AboutComp’s current state is 
`{ companyName:"CodeSweetly", companyFounder:"Oluwatobi Sofela" }`.

When the component’s button gets clicked, React will not auto-merge 
the new state with the current state.

Therefore, `setCompanyBio` will update the current state to 
`{companyWebsite:"www.codesweetly.com"}`.

Notice that the update completely replaced the previous state. The 
overwriting of the new on the old happened because React does not
auto-merge a function component’s states.

To merge a function component’s new state with the old one, you must 
use the [spread operator](https://codesweetly.com/spread-operator/). Let’s see how below.




### How To Use The Spread Operator To Merge A Function Component’s State 


Consider the code below:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp() {
  const [companyBio, setCompanyBio] = useState({
    companyName: 'CodeSweetly',
    companyFounder: 'Oluwatobi Sofela'
  });

  function updateCompanyBio() {
    setCompanyBio({ ...companyBio, companyWebsite: 'www.codesweetly.com' });
  }

  return (
    <div>
      {console.log(companyBio)}
      <h1>About {companyBio.companyName}</h1>
      <p>
        {companyBio.companyName}’s founder is {companyBio.companyFounder}.
      </p>
      {companyBio.companyWebsite ? (
        <p>Our website is: {companyBio.companyWebsite}.</p>
      ) : null}
      <button type="button" onClick={updateCompanyBio}>
        Click to update bio
      </button>
      <p>
        <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
      </p>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-uzmndw?file=src%2Findex.js)



The snippet above first used the spread operator `(...)` to copy 
`companyBio`'s content. Then, it merged the duplicated state with the 
new one.

Therefore, `setCompanyBio` will update the current state to 
`{ companyName:"CodeSweetly", companyFounder:"Oluwatobi Sofela",`
`companyWebsite:"www.codesweetly.com" }`.


Note: React recommends calling the state hook multiple times rather 
than putting all your function component’s states into a single
object.

By so doing, it becomes easy later to extract some related logic into 
a custom Hook.

So, for a mini practice, see if you can split `companyName`, 
`companyFounder`, and `companyWebsite` into individual state variables.


Keep in mind that the spread operator works the same way when your 
function component’s state is an array. For instance, consider the 
example below.



*Example of how to use spread to merge a function component’s state array data types*

Suppose your function component’s state is an array. In that case, 
you can use the spread operator to merge the component’s new state
with the old one like so:


```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp() {
  const [companyBio, setCompanyBio] = useState([
    'CodeSweetly',
    'Oluwatobi Sofela'
  ]);

  function updateCompanyBio() {
    setCompanyBio([...companyBio, 'www.codesweetly.com']);
  }

  return (
    <div>
      {console.log(companyBio)}
      <h1>About {companyBio[0]}</h1>
      <p>
        {companyBio[0]}’s founder is {companyBio[1]}.
      </p>
      {companyBio[2] ? <p>Our website is: {companyBio[2]}.</p> : null}
      <button type="button" onClick={updateCompanyBio}>
        Click to update bio
      </button>
      <p>
        <strong>⬇⬇⬇ Check the console ⬇⬇⬇</strong>
      </p>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```



Try it on [StackBlitz](https://stackblitz.com/edit/react-4ihnuh?file=src%2Findex.js)



The snippet above first used the spread operator `(...)` to copy 
`companyBio`'s content. Then, it merged the duplicated state
array with the new value.

Therefore, `setCompanyBio` will update the current state to 
`["CodeSweetly","Oluwatobi Sofela","www.codesweetly.com"]`.


So now that we understand the differences between a class component’s 
state and that of a function component, we can talk about what
makes React state different from a JavaScript variable.




*React State Vs. JavaScript Variable*


React state and JavaScript variable are two similar storage systems. 
You can use both to store a component’s values that are likely to
change over time.

The main difference between the two boils down to how React knows when 
to re-render your component.

Essentially, React knows you have updated your component’s values when 
you modify them using the `setState()` method or `useState`'s updater 
function. But React does not keep track of updates to JavaScript
variables.


Remember: Unless `shouldComponentUpdate()` returns `false, setState()` 
and `useState`'s updater function will trigger a re-rendering of
your component.

So, when is the best time to use React state instead of a JavaScript 
variable? Let’s find out below.




*When Is The Best Time To Use React State Instead Of A JavaScript Variable?*


Keep in mind that React will not trigger a re-rendering of your 
component if you do not use the state hook or the `setState()` method 
to update your values.

Therefore, to ascertain whether to use React state or a JavaScript 
variable to store a specific value, ask yourself this question:

Should React trigger a re-rendering of this component when I update 
this value?

If yes, then use React state to store that value. If no, then use 
JavaScript variable to store that value.

Note: React will not keep any record of your JavaScript variable 
across renders. In other words, a variable will disappear whenever its
function exits.

Therefore, define the variable outside your component if you wish to 
retain its data across render. By so doing, you will ensure the 
variable’s value is preserved entirely by JavaScript—not React.




## Time To Practice With React State


Here is your moment to practice the concepts you’ve learned on React 
state.

In this exercise, your goal is to create a button element that allows 
users to log in and out of an app.

You should also create an H1 text that shows if the user is logged in 
or logged out.


Note:

To accomplish this task, you need to:

1. Set up a new React project.

2. Import React and React DOM libraries.

3. Create the required logic to create the login (out) button.

4. Run your application!


Remember:


You will benefit much from this tutorial if you do the exercises 
yourself.

If you get stuck at any point, don’t be discouraged. Instead, 
review the lessons and give the exercise another attempt.

Once you’ve given it your best shot (you’d only cheat yourself if you 
don’t!), go ahead to see how I approached it below.



### How Did You Go About Creating Your Login (Out) Button?

Below is one feasible way to get the exercise done.


*Step 1: Create a new React app*

Setup the project by using npm’s create-react-app package to create 
a new React app called login-button-app:

```
npx create-react-app login-button-app
```


*Step 2: Clean up the src folder*


Inside the src directory, delete all files except `index.js` and 
`App.js`.



*Step 3: Create the App component*


Open your `App.js` file. Then, create an App component that contains 
a `<button>` element whose `onClick` event handler updates the UI’s 
state:



```javascript
// App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const buttonText = this.state.isLoggedIn ? 'Log out' : 'Log in';
    const displayText = buttonText === 'Log in' ? 'out' : 'in';
    return (
      <div>
        <h1>You are logged {displayText}</h1>
        <button onClick={this.changeState}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
```


*Step 4: Render the App component*



Open your `index.js` file and render the `App` component to the DOM 
like so:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```


*Step 5: Run the application*


Take a look at the app in the browser by running:

```
npm start
```


You can also see mine on [StackBlitz]()



# CHAPTER 13: REACT PROPS VS. STATE - What’s the difference?

So now that we know what state and props are, let’s discuss their 
differences.

<!-- // page 183 -->


*Difference 1: What Is The Purpose Of React Props And The State Object?*


React props is a parameter used to pass an object into a component.
In contrast, React state is a built-in object used inside a component 
to store properties that can change over time.



*Difference 2: Is It Okay To Mutate Props And State?*



React props is a read-only parameter, so you should never attempt to 
modify its content.

However, it is okay to use the `setState()` method or the state hook 
to modify React
state.



*Difference 3: How Does Data Exchange Work With Props And State?*


The props parameter is effective for data exchange from one component 
to another, whereas state is not.

The state object is internally available to store a component’s values 
that are likely to change over time.

For instance, consider the code below:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// First component
class PageTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageSEOTitle: this.props.pageSEOTitle };
  }

  render() {
    return <h1>This is the {this.state.pageSEOTitle} page.</h1>;
  }
}

// Second component
function PageDescription() {
  return (
    <div>
      <PageTitle pageSEOTitle="About" />
      <p>Excellence is our culture.</p>
    </div>
  );
}

ReactDOM.render(<PageDescription />, document.getElementById('root'));
```

Try it on [StackBlitz]



In the snippet above, we used PageTitle’s props parameter to exchange 
data between PageTitle and PageDescription.


At the same time, we used PageTitle’s state object to store the 
component’s pageSEOTitle property.



# CHAPTER 14: REACT LIFECYCLE METHODS - What Exactly Are They?

<!-- // page 187 -->

Lifecycle methods are the inbuilt React methods you can use to operate 
on your components during their lifecycle in the DOM.


Note: You can invoke lifecycle methods only in class components—not 
inside function components. However, you can use Hooks to access 
lifecycle methods in a function component.

We will talk more about React Hooks in the next chapter. For now, 
though, let's discuss what lifecycle means in ReactJS.



*What Exactly Does Lifecycle Mean In React?*


A component's lifecycle refers to the series of stages a component 
instance goes through from its creation to its total removal from the 
DOM.

Each React component has four (4) lifecycle phases:

* Mounting Phase

* Updating Phase

* Unmounting Phase

* Error Handling Phase

Let’s discuss each of these lifecycle phases, starting with the 
mounting phase.



*What Is The Mounting Phase?*


A component’s mounting phase is when the component instance is being 
created and rendered into the DOM.

During the mounting phase, React will call the four methods below in 
the specified order:


*First Mounting Phase Lifecycle Method: Constructor()*


Use the constructor() method to initialize your component’s local 
state and for binding event handlers to the component’s instance.

Note: It is best to avoid side-effects or subscriptions in the 
`constructor()`. Instead, use `componentDidMount()` for such use 
cases.



*Second Mounting Phase Lifecycle Method: Static GetDerivedStateFromProps()*


The static `getDerivedStateFromProps()` method is one of the rarely 
used lifecycle methods. It exists only for the single purpose of 
allowing a component to update its internal state due to changes in 
its props.

Note: See this [post](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props) 
for an example of the `getDerivedStateFromProps` method.



*Third Mounting Phase Lifecycle Method: Render()*



Use the `render()` method to specify the content a component should 
display on the screen.

Keep in mind that `render()` must be pure and must not create any side 
effects.

In other words, do not use `render()` to either modify your component’s 
state or interact directly with the browser.

Note: Amongst the four methods React will call during the mounting 
phase, `render()` is the only required one. The others are optional 
mounting methods that React will call if you define them.



*Fourth Mounting Phase Lifecycle Method: ComponentDidMount()*



Use `componentDidMount()` to run code on a component immediately after 
it has been mounted (inserted into the DOM tree).


Typical usage of `componentDidMount()` are:

* Implementations that require DOM nodes. For instance, addEventListener()s

* Data fetching from remote endpoints

* Subscription configurations


Note:

* You can call setState() in componentDidMount(). If you do so, 
beware that such action will trigger a new rendering of your component. 
But the rendering will occur before the browser updates the display 
onscreen.

As such, even though render() will get invoked twice, the user will 
only see componentDidMount()’s rendering—not the intermediate one.

* React recommends using setState() inside componentDidMount() with
caution—as it often causes performance issues. Preferably, assign your 
initial state in the constructor() method.

* A good use case of setState() in componentDidMount() is when you
need to measure a DOM node before rendering something that relies on 
its position or size. Examples of such cases are tooltips and modals.



*What Is The Updating Phase?*



A component’s updating phase is the period when the component instance 
is being updated.

In other words, the updating phase takes place whenever there is a 
change to the component’s props (or state).

During the updating phase, React will call the five methods below in 
the specified order:



**First Updating Phase Lifecycle Method: Static**

GetDerivedStateFromProps() The static getDerivedStateFromProps()
method is one of the rarely used lifecycle methods. It exists only 
for the single purpose of allowing a component to update its internal 
state due to changes in its props.

Note: See this post for an example of the getDerivedStateFromProps 
method.



**Second Updating Phase Lifecycle Method: ShouldComponentUpdate()**


shouldComponentUpdate() is one of the rarely used lifecycle methods. 
Use it to notify React whether it should update (re-render) your 
component after a modification to its state (or props).

By default, React re-renders a component each time setState() gets 
called, and in most cases, you should rely on the default behavior.

But if you feel strongly about using shouldComponentUpdate(). In that 
case, you can make the method return false by comparing this.props 
with nextProps and this.state with nextState. By so doing, React will 
know it can skip updating your component.


Here’s an example:

```javascript
shouldComponentUpdate(nextProps, nextState) {
  return (
    this.props.userEmail !==
    nextProps.userEmail ||
    this.state.userName !==
    nextState.userName
  )
}
```


A logic like in the snippet above helps to change 
shouldComponentUpdate()’s default from true to false—thereby making 
React know it can skip re-rendering your component.

Note: In the future, shouldComponentUpdate() may still re-render your 
component, so do not depend on it to prevent an update to your UI.



**Third Updating Phase Lifecycle Method: Render()**


Use the render() method to specify the content a component should 
display on the screen.

Keep in mind that render() must be [pure](https://codesweetly.com/pure-function-vs-impure-function/) 
and must not create any [side effects](https://codesweetly.com/side-effect/).

In other words, do not use render() to either modify your component’s 
state or interact directly with the browser.

Note: Amongst the five methods React will call during the updating 
phase, render() is the only required one. The others are optional
updating methods that React will call if you define them.



**Fourth Updating Phase Lifecycle Method: GetSnapshotBeforeUpdate()**


getSnapshotBeforeUpdate() is one of the rarely used lifecycle methods. 
Use it to snapshot some information from the DOM right before your 
component gets updated.

For instance, you can use getSnapshotBeforeUpdate() to snapshot the 
page’s scroll position before your component re-renders.

After the snapshot, any value returned by getSnapshotBeforeUpdate() 
will get passed to componentDidUpdate()’s third parameter.



**Fifth Updating Phase Lifecycle Method: ComponentDidUpdate()**


Use componentDidUpdate() to run code on your component immediately 
after an update occurs on it. Some typical usages of the method are:

* Operating on the DOM immediately after the component’s update.

* Network requests.



## Important Stuff To Know About ComponentDidUpdate()

Keep these four essential pieces of info in mind whenever you choose 
to use componentDidUpdate().


*Info 1: React invokes componentDidUpdate() immediately after an update*


React does not call componentDidUpdate() for the initial render. The 
method only gets invoked immediately after an update.



*Info 2: Always compare current props to the previous props*


Whenever you use componentDidUpdate(), always compare the component’s 
current props to the previous one—as a network request may be
unnecessary if the props parameter has not changed.

For instance, consider the code below:


```javascript
componentDidUpdate(prevProps) {
  // Typical usage: Remember always to   compare the props:
  if (this.props.userEmail !==
    prevProps.userEmail) {
      this.fetchData(this.props.userEmail);
  }
}
```

In the snippet above, we instructed React to fetch userEmail only if 
the current props’ userEmail differs from the previous one. By so 
doing, we’ve prevented an infinite loop of data fetching.



*Info 3: It is okay to use setState() in componentDidUpdate()*



You can use setState() in componentDidUpdate(). If you do so, keep in 
mind that you must use the setState() method inside a conditional 
statement (like in info 2’s example). Otherwise, you will cause an
infinite loop of state updates.



*Info 4: The false state of shouldComponentUpdate() stops componentDidUpdate()’s invocation*


Suppose shouldComponentUpdate() returns the Boolean value false. In 
such a  case, React will not run componentDidUpdate().

So now that we know what the mounting and updating phase means, we 
can talk about the unmounting phase.


## What Is The Unmounting Phase?


A component’s unmounting phase is when the component’s instance is 
being removed from the DOM.

To handle the unmounting phase, React provides only the 
componentWillUnmount() lifecycle method.



**How Does ComponentWillUnmount() Work?**


Use componentWillUnmount() to run code on a component right before 
the computer unmounts it from the DOM and destroys it.

A typical task performed in componentWillUnmount() is cleaning up of 
logics created in componentDidMount().


Examples of such cleanups are:

* Subscription cancellation

* Network request termination

* Event listener removal

* Cache clearance

* Timer invalidation

Note: Avoid calling setState() in componentWillUnmount() because
componentWillUnmount() will never re-render your component.



## What Is The Error Handling Phase?


A component’s error handling phase is the period when an error occurs 
in any of the following cases:

* During the component instance’s rendering

* In a lifecycle method of the component

* In any child component’s constructor To handle errors, React 
provide two lifecycle methods: static getDerivedStateFromError() and 
componentDidCatch().



**First Error Handling Lifecycle Method: Static GetDerivedStateFromError()**


Use the static getDerivedStateFromError() method to:


1. Receive errors thrown by a descendant component

2. Return a value that the component will use to update its state


Note: The main difference between getDerivedStateFromError() and 
componentDidCatch() is that static getDerivedStateFromError() does 
not permit side-effects because the method gets called during the 
render phase.



**Second Error Handling Lifecycle Method: ComponentDidCatch()**



Use componentDidCatch() to catch errors thrown by a descendant 
component without the error crashing your app.


Note:

* componentDidCatch() permits side-effects as the method gets called 
during the commit phase.

* Nick Karnik gave a good overview of componentDidCatch() in this 
[video](https://www.youtube.com/watch?v=m_mtV4YaI8c&t=976s).




# CHAPTER 15: REACT HOOKS - What Exactly Are Hooks in ReactJS?

<!-- // page 206 -->

React Hooks are functions used in a function component to hook into 
React’s state object, lifecycle methods, and other React features 
without writing a class component.

The two commonly used Hooks are the State Hook and Effect Hook.


Note:

* You cannot use Hooks in a class component.

* Hooks works only at the top level of a function component. In other 
words, you cannot call Hooks inside conditional statements, loops 
statements, or nested functions.

In the following sections, we will discuss the two commonly used Hooks 
starting with the State Hook.


## What Exactly Is The State Hook?


The State Hook (useState) allows a function component hook into 
React’s state object.

Below are some of the use cases of the State Hook.


### Use Case 1: State Hook Without An Argument


Consider the code below:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const myName = useState();
  console.log(myName);
  return null;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```

Try it on [StackBlitz]


When React renders AboutMe, the console.log() statement will log
[undefined, ƒ()] to the browser’s console.


#### What Happened In The Snippet Above?


Below is an explanation of use case 1’s snippet.



**The first occurrence in Use Case 1's snippet**


We used the import React, { useState } from "react" statement to 
import the React library and the useState function (the State Hook) 
into our program.

Keep in mind that the useState function exists in the React library. 
Therefore, an alternate importation technique to the {useState } one 
above is to call React.useState() directly inside AboutMe function.


Here’s an example:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const myName = React.useState();
  console.log(myName);
  return null;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```


Try it on [StackBlitz]


However, the { useState } named importation technique is more popular.



**The second occurrence in Use Case 1's snippet**


We initialized myName variable with the returned value of the 
useState() function.


**The third occurrence in Use Case 1's snippet**


We used the console.log(myName) code to output myName’s content to 
the browser’s console.


#### Why Did The Console Statement Write Out [Undefined, Ƒ()]?


Notice that we passed no argument to the useState() method.
Also, keep in mind that React has programmed useState() to return an
array containing the Hook’s argument and a function.

Therefore, since we provided no argument to the State Hook, AboutMe’s 
console.log statement correctly logged [undefined, ƒ()] to the console.
Note: In [undefined, ƒ()], the computer set the first array item to
undefined because we did not pass any argument to the useState() 
function.


### Use Case 2: State Hook With An Argument

useState() can accept only a single argument as its initial state value.

Here’s an example:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const myName = useState('Oluwatobi');
  console.log(myName);
  return null;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-xwmxqy?file=src%2Findex.js)


When React renders AboutMe, the console.log() statement will log
["Oluwatobi", ƒ()] to the browser’s console.



#### What Happened In The Snippet Above?



Below is an explanation of use case 2’s snippet.


**The first occurrence in Use Case 2's snippet**


We used the import React, {useState } from "react" statement to import 
the React library and the useState function (the State Hook) into 
our program.


**The second occurrence in Use Case 2's snippet**


We initialized myName with useState()’s return value while passing 
"Oluwatobi" as the Hook’s initial state.



**The third occurrence in Use Case 2's snippet**


We used the console.log(myName) code to output myName’s content to the
browser’s console.


#### Why Did The Console Statement Write Out ["Oluwatobi", Ƒ()]?

Notice that we passed "Oluwatobi" as an argument to the useState() 
method.

Also, remember that React has programmed useState() to return an array 
containing the Hook’s argument and a function.

Therefore, since we provided "Oluwatobi" as an argument to the State 
Hook, AboutMe’s console.log statement correctly logged 
["Oluwatobi", ƒ()] to the console.

Note: In ["Oluwatobi", ƒ()], the computer set the first array item to
"Oluwatobi" because it was the value we passed in as an argument to the
useState() function.

Just in case you are wondering why useState() always returns an array, 
let’s discuss it below.

<!-- // page 214 -->

#### Why Does UseState() Return An Array?


React programmed useState to return an array because they advocate 
using [array destructuring](https://codesweetly.com/destructuring-array/) 
to access a function component’s state.


Let’s use two examples to understand this reason better.


**Example 1: How To Retrieve UseState()’S Argument With The Bracket Notation**


Consider the code below:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const myName = useState('Oluwatobi');
  return <h1>Hi! 👋 I am {myName[0]}.</h1>;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-qd4zxc?file=src%2Findex.js)


In the snippet above, notice that we first initialized myName with 
useState’s returned array.

Afterward, we used the array bracket notation (myName[0]) to get the 
first index value inside myName array.

Therefore, when React renders AboutMe, the <h1>Hi! I am {myName[0]}.
</h1> code will display Hi! I am Oluwatobi.

Let’s now see how to retrieve the State Hook’s argument with array 
destructuring.


**Example 2: How To Retrieve UseState()’S Argument With Array Destructuring**


Consider the code below:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const [myName] = useState('Oluwatobi');
  return <h1>Hi! 👋 I am {myName}.</h1>;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-cpn9a8?file=src%2Findex.js)



In the snippet above, we used array destructuring to initialize myName 
variable with the first index value of useState’s returned array.

Therefore, when React renders AboutMe, the <h1>Hi! I am {myName}.</h1>
code will display Hi! I am Oluwatobi. 

The React team advocates using array destructuring to access a function
component’s state because using the bracket notation is a bit confusing.


So now that we know why useState() returns an array, we can talk about 
how to update a component’s state object via the State Hook.


#### How To Update A Function Component’s State Via The State Hook


I mention earlier that React programmed useState() to return an array 
containing the Hook’s argument and a function. For instance, consider 
this code below: 

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutMe() {
  const myName = useState('Oluwatobi');
  console.log(myName);
  return null;
}

ReactDOM.render(<AboutMe />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-xwmxqy?file=src%2Findex.js)



When React renders AboutMe, the console.log() statement will log 
["Oluwatobi", ƒ()] to the browser’s console.


In the ["Oluwatobi", ƒ()] array, the first index value ("Oluwatobi") 
is the State Hook’s argument.


At the same time, the second index value (ƒ()) is the state’s updater 
function which you may use to update the state.

Note:

* The State Hook’s argument represents the value you wish to set as 
the initial state.

* A typical naming convention is to prefix the updater function’s name 
with “set”. So, for instance, if the state’s name is color, the 
updater’s name will be  setColor.


Here’s an example:


```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyAge, setCompanyAge] = React.useState(2);

  function updateCompanyAge() {
    setCompanyAge(companyAge + 1);
  }

  return (
    <div>
      <h3>CodeSweetly is {companyAge} years old!</h3>
      <button type="button" onClick={updateCompanyAge}>
        Click to update age
      </button>
    </div>
  );
}

ReactDOM.render(<AboutComp />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-syvghp?file=src%2Findex.js)


In the snippet above, whenever updateCompanyAge() gets triggered,
setCompanyAge() will update AboutComp’s state.



## Important Stuff To Know About The State Hook


Keep these four essential pieces of info in mind whenever you choose 
to use the State Hook.


**Info 1: A function component’s updater function does not auto-merge a new state to the old one**


A function component’s state can be a string, number, object, array, 
or Boolean. However, useState’s updater function will not 
automatically merge a new state into the previous one.

See the class component’s state vs. function component’s state section 
of chapter twelve to learn more.



**Info 2: You can use the spread operator to merge React states manually**


Suppose you need to merge a new state with the old one. In such a 
case, ensure to use the [spread operator](https://codesweetly.com/spread-operator/) 
to copy the previous object’s
content before specifying the new content.

Otherwise, the new object will completely overwrite the previous one.
See the class component’s state vs. function component’s state section 
of chapter twelve to learn more.



**Info 3: You can call useState() multiple times**



Suppose you prefer not to use the spread operator. In that case, you 
can call useState() multiple times in the same component.

Note: React [recommends](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables) 
splitting state into multiple state variables 
based on which values tend to change together.



**Info 4: For successive state updates, pass a function into your state’s updater method**


Whenever you update a component’s state multiple times in the same 
cycle, React may accomplish such an update asynchronously.

So, you may get an erroneous result if you use the current state as 
the updater method’s argument.

Therefore, whenever you need to use multiple successive updater 
method calls to modify a specific state. In that case, it is best to 
use a function—not the current state—as an argument.

For instance, consider the scenario below where I used the current 
state in the same cycle to update a component’s state:


```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyName, setCompanyName] = useState('CodeSweetly');
  const [companyAge, setCompanyAge] = useState(5);

  function updateCompanyAge() {
    setCompanyAge(companyAge + props.numbA);
    setCompanyAge(companyAge + props.numbB);
  }

  return (
    <div>
      <h1>About {companyName}</h1>
      <p>
        {companyName} is {companyAge} years old!
      </p>
      <button type="button" onClick={updateCompanyAge}>
        Click to update age
      </button>
    </div>
  );
}

ReactDOM.render(
  <AboutComp numbA={10} numbB={1} />,
  document.getElementById('root')
);
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-8tuecr?file=src%2Findex.js)



Only the second setCompanyAge code may eventually update the UI’s 
state because React will run the two codes asynchronously.
As such, subsequent calls will override values from previous calls. 
Therefore, the component’s state will update erroneously.

To ensure successive updater methods update your component’s state 
appropriately, you must use a function as each updater method’s
argument.

For instance, consider the scenario below where I used two functions 
in the same cycle to update a component’s state:



```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AboutComp(props) {
  const [companyName, setCompanyName] = useState('CodeSweetly');
  const [companyAge, setCompanyAge] = useState(5);

  function updateCompanyAge() {
    setCompanyAge(currState => currState + props.numbA);
    setCompanyAge(currState => currState + props.numbB);
  }

  return (
    <div>
      <h1>About {companyName}</h1>
      <p>
        {companyName} is {companyAge} years old!
      </p>
      <button type="button" onClick={updateCompanyAge}>
        Click to update age
      </button>
    </div>
  );
}

ReactDOM.render(
  <AboutComp numbA={10} numbB={1} />,
  document.getElementById('root')
);
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-442ejp?file=src%2Findex.js)



In the snippet above, I used two functions inside two separate 
setCompanyAge() methods to update companyAge’s state reliably.


Note:

* currState refers to the component’s current state at the time
setCompanyAge() is applying the state’s update.

* React will trigger a re-rendering of your component every time you 
use useState’s updater method to modify your state.


Now that we know the State Hook, let’s discuss the other commonly used 
ReactJS Hook: The Effect Hook.



#### What Exactly Is The Effect Hook?


The Effect Hook (useEffect) allows a function component to hook into 
React’s lifecycle features for performing side effects.

Class components typically use componentDidMount, componentDidUpdate, 
and componentWillUnmount lifecycle methods to implement side effects 
like data fetching, subscription configuration, cleanups, and manual 
DOM manipulation.

However, in a function component, you can perform side effects with 
just the Effect Hook.


Here’s an example:


```javascript
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser’s document.title API:
    document.title = `You clicked me ${count} times`;
  });

  return (
    <div>
      <h1>You clicked me {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(<Title />, document.getElementById('root'));

// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-j6afyg?file=src%2Findex.js)
See it [Live](https://react-j6afyg.stackblitz.io/)



In the snippet above, the useEffect() code instructs React to use the 
given effect (that is, useEffect’s argument) after rendering the 
component.

In other words, the useEffect() method will run after every render. 
And the argument you pass into it is the effect you wish to happen 
after React has rendered the component into the DOM.

Note:

* The useEffect code in the snippet above combines class component’s
componentDidMount and componentDidUpdate functionalities.

In other words, useEffect will run after the component gets mounted 
to the DOM. And after each update to the component. So, in basic terms, 
useEffect runs after each render.


* In some cases, running effects after each render might cause 
performance issues.

Therefore, React allows you to pass in an array as an optional second 
argument to the useEffect Hook to skip the effect. We will go through 
how to ignore running effects in a later section of this chapter.


Just in case you are wondering how the class component equivalence of 
the previous snippet looks, let’s see it below:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked me ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked me ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h1>You clicked me {this.state.count} times</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Title />, document.getElementById('root'));

// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-24itpb?file=src%2Findex.js)
See it [Live](https://react-24itpb.stackblitz.io/)



Notice how we used componentDidMount and componentDidUpdate to tell 
React to perform the side effects (update the document’s title) after 
rendering the class component to the DOM.

So now that we know what the Effect Hook does, we can talk about the 
typical side effects in ReactJS.



**Typical Types Of Side Effects In ReactJS**


There are two typical types of side effects in React components.
The first types of side effects are those that require cleanup—for 
instance, subscription configurations.

The second types are those that do not require any cleanup. For 
instance, DOM manipulations like the document.title code we used 
in the previous snippet to update the document’s title.

But how do I know the sides effects that require cleanup, I hear 
you ask? Let’s find out below.



**How To Know The Side Effects That Require Cleanup**


Whatever you initially added to the DOM after a component's rendering, 
which you also wish to remove later, is a side effect that needs 
cleanup.

Typical examples are event listeners, subscription configurations, 
timeouts, intervals, and asynchronous tasks.

Now, let’s see how to know the side effects that do not require any 
cleanup.



**How To Know The Side Effects That Do Not Require Any Cleanup**


Any code used to update DOM elements (or that doesn't interface with 
the DOM) is a side effect that doesn't require cleanup.

Typical examples are manual DOM manipulation, logging, and data 
fetching.

Note: Whenever you use a side effect that requires cleanup, you must 
remember to do the cleaning up. Otherwise, you may introduce a memory 
leak!

Let’s now see how to do cleanups in a function component.



**How To Cleanup Effects In A Function Component**


In class components, cleanups typically get done inside 
componentWillUnmount. However, in a function component, you can
get cleanups done by programming your effect to return a 
function—which React will invoke when it’s time to clean up.


Here’s an example:

```javascript

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect by returning a function to serve as the cleanup tool:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id,
      handleStatusChange);
    };
  });

  // This component’s return statement:
  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}
// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```


The snippet above passed an arrow function (our effect) to the 
useEffect() Hook. 

Inside the effect, we configured a subscription and used the returned 
function as a cleanup mechanism for the effect.



Note:

* Your effect does not have to return a named function. We used the 
name cleanup in the snippet above to clarify the function’s purpose. 
But you can use any other name (or return an anonymous function).

* In a function component, React cleans up the previous effects right 
before it applies the next ones.

* Feel free to use multiple Effect Hooks in a single component. It is 
a great way to separate unrelated logic.


Just in case you are wondering how the class component equivalence of 
the previous snippet looks, here it is below:


```javascript

import React from 'react';

class FriendStatus extends React.Component {
constructor(props) {
super(props);
this.state = { isOnline: null };
this.handleStatusChange =
this.handleStatusChange.bind(this);
}
componentDidMount() {
ChatAPI.subscribeToFriendStatus(
this.props.friend.id,
this.handleStatusChange
);
}
componentDidUpdate(prevProps) {
// Unsubscribe from the previous
friend.id
ChatAPI.unsubscribeFromFriendStatus(
prevProps.friend.id,

this.handleStatusChange
);
// Subscribe to the next friend.id
ChatAPI.subscribeToFriendStatus(
this.props.friend.id,
this.handleStatusChange
);
}
componentWillUnmount() {
ChatAPI.unsubscribeFromFriendStatus(
this.props.friend.id,
this.handleStatusChange
);
}
handleStatusChange(status) {
this.setState({
isOnline: status.isOnline
});
}
render() {
if (this.state.isOnline === null) {
return 'Loading...';
}
return this.state.isOnline ? 'Online'
: 'Offline';
}
}
// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```


The snippet above used componentWillUnmount as a cleanup mechanism for 
the effects we configured in componentDidMount and componentDidUpdate.

In some cases, running effects after each render might cause 
performance issues.

Therefore, the React team made it possible to specify when you want an 
effect to run. Let’s see how.



#### How To Make Effects Run Only When A Component Gets Updated—Not After Every Render


React’s default setting is to run a function component’s effect each 
time the component gets rendered. This default prevents a common bug 
in class components that occurs when people forget to handle
componentDidUpdate properly.

However, in some cases, running effects on each update do cause 
performance problems.

As such, React provides a way to specify how you want the effect 
argument to run. The following sections will discuss how you may skip 
running an effect argument if specific states have not changed 
between re-renders.

Let’s start by discussing how to apply effects only if a class 
component’s state changes.



#### How To Run Effects Only If A Class Component’s State Changes


You can skip running an effect in class components by comparing 
prevState (or prevProps) inside componentDidUpdate.

Here’s an example:

```javascript
componentDidUpdate() {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}

// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```

In the snippet above, we instructed React to re-run the document.title 
effect only if count’s value changes.

Let’s now see how to run effects only if a function component’s state 
changes.



#### How To Run Effects Only If A Function Component’s State Changes


You can skip running an effect in function components by passing an 
array to the useEffect Hook as an optional second argument.

Here’s an example:

```javascript
useEffect(() => {
  document.title = `You clicked ${count}times`;
}, [count]); 

// Only re-run the effect if count changes
// Credit: This snippet is from React’s “Using the Effect Hook” doc.
```


In the snippet above, we used [count] to instruct React to re-run the 
document.title effect only if count’s value changes.

Note: The array containing count is technically called the 
dependencies array.


You can consider the dependencies array as a container for storing 
references to items on which your effect depends.

In other words, use the dependencies array to direct React to all 
the values the effect must monitor for changes.

For instance, in the previous snippet, [count] tells React that our 
effect depends on the count state.

Note:

* You can specify multiple items in your dependencies array.

* Suppose you provide multiple items in a dependencies array. In that 
case, React will re-run the effect anytime any one of those
items changes.

* Suppose you use the dependencies array to optimize performance. In 
such a case, ensure the array includes all the component’s values 
(such as state, props, and contexts) that you used in the effect, 
which are prone to change over time. Otherwise, your code will 
malfunction.


Let’s now see how to run effects only after a function component’s 
mounting and unmounting.



#### How To Run Effects Only After A Function Component’s Mounting And Unmounting


Suppose you wish to run your effect and clean it up only once (that 
is, only when the component gets mounted and unmounted). In such a 
case, you can pass in an empty array ([]) as useEffect’s second 
argument.


By so doing, you are effectively telling React that your effect does 
not depend on any values from the component’s state or props. 

Therefore, the computer never needs to re-run the effect.
In that case, useEffect will work like the class component’s 
componentDidMount and componentWillUnmount lifecycle methods.


Here’s an example:


```javascript
useEffect(() => {
  document.title = `You clicked ${count}times`;
}, []); 

// Only re-run the effect after component’s mounting and unmounting
```


In the snippet above, we used the empty array ([]) to instruct React 
to re-run the document.title effect only after the component’s 
mounting and unmounting. 


Note:

* In this chapter, we learned about the two commonly used Hooks. 
However, there are other types of Hooks that, although not common, 
you might find useful. Examples of such are the useContext and 
useReducer Hooks.

* React allows you to create your own Hooks! Find out more in the 
Building Your Own Hooks doc.

<!-- // page 244 hasta -->



# CHAPTER 16: HANDLING EVENTS IN REACT - How to Manage ReactJS Events

Handling events in React is similar to the way you manage events on 
DOM elements. However, there are a few differences. 

Let’s discuss some of the main differences below.


## HTML Vs. ReactJS Events: What’s The Difference?


Here are some of the main differences between events in HTML and those 
in ReactJS:


**Difference 1: What naming convention should you use to write an event?**


We write DOM events in lowercase. However, you must use camelCase to 
write event names in ReactJS.

So, for instance, instead of writing onsubmit, you would write 
onSubmit in ReactJS.

Note: React’s event naming convention mimics JavaScript’s Web APIs.


**Difference 2: What data type should you use to specify an event handler?**

<!-- // page 246 -->

In HTML, you specify an executed string function as the event handler. 
However, in React, you must specify a real JavaScript function—without 
invoking it.

So, for instance, here is how you will typically handle events on an 
HTML DOM element:

```html
<!-- index.html -->
<html>
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <button onclick="handleClickEvent()">Try me</button>

    <script>
      function handleClickEvent() {
        alert('You clicked me!');
      }
    </script>
  </body>
</html>
```

Try it on [StackBlitz](https://stackblitz.com/edit/web-platform-8gl5zd?file=index.html)



Notice that we wrote onclick in lowercase. And the event handler 
(that is, “handleClickEvent()”) is an executed string function.

Let’s now see the React equivalence of the snippet above.




```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

function Button() {
  return <button onClick={handleClickEvent}>Try me</button>;
}

function handleClickEvent() {
  alert('You clicked me!');
}

ReactDOM.render(<Button />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-yeagbj?file=src%2Findex.js)


Observe that in the React snippet above, we wrote onClick in camelCase. 
And the event handler (that is, handleClickEvent) is a real JavaScript 
function—that we have not invoked.


Keep in mind that the class component equivalence of the snippet above 
is like so:


```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  handleClickEvent = () => {
    alert('You clicked me!');
  };

  render() {
    return <button onClick={this.handleClickEvent}>Try me</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-v8543c?file=src%2Findex.js)


Suppose you prefer to use class components. In that case, ensure to 
use bind(), class field, or arrow function to explicitly define
the operating context of a class component’s event handler. 
Otherwise, the handler’s this keyword will be undefined.

So, why exactly is it necessary to bind a class component’s event 
handler? Let’s find out below.



## Why Is It Necessary To Bind A Class Component’s Event Handler?

It is necessary to bind a class component’s event handler mainly 
because of how the JavaScript’s this keyword works.

In most cases, JavaScript’s this keyword refers to the object that 
owns the [method](https://codesweetly.com/web-tech-glossary/#h-method) 
containing the keyword this.

In other words, JavaScript will refer an unbound handler’s this 
keyword to the object that owns the keyword’s method—which may be the 
window object, HTML button, or the likes.

Therefore, bind, class fields, and arrow functions allow you to change 
the runtime binding of your event handler’s keyword to the class 
component’s object instance. 

Note: You can learn more about this keyword [here](https://codesweetly.com/javascript-this-keyword/).


So now that we know why we need to bind a class component’s event 
handler, we can discuss how.


## How To Use Bind() To Bind A Class Component’s Event Handler


You can use [bind()](https://codesweetly.com/call-apply-bind-javascript/#what-is-the-bind---method) 
to specify the specific object you want your component’s event handler 
to be bounded.

For instance, in the snippet below, we used bind(), in the constructor, 
to explicitly bind the event handler (whatObjAmIBoundTo()) to the class
component’s object instance.

In other words, the bind() method makes whatObjAmIBoundTo’s keyword this
refer to CheckObj’s instance.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class CheckObj extends React.Component {
  constructor(props) {
    super(props);
    this.whatObjAmIBoundTo = this.whatObjAmIBoundTo.bind(this);
  }

  whatObjAmIBoundTo() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.whatObjAmIBoundTo}>
          Click to see my event handler's parent object!
        </button>
        <h3>Check the console ⬇⬇⬇</h3>
      </div>
    );
  }
}

ReactDOM.render(<CheckObj />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-zk8vxe?file=src%2Findex.js)


Suppose we did not bind `whatObjAmIBoundTo` to `CheckObj`’s instance. In 
that case, the event handler’s this keyword would refer to the
`<button>` object. Because the `<button>` object is whatObjAmIBoundTo’s 
[lexical object](https://codesweetly.com/javascript-lexical-scope/).



Moreover, since the body of a class gets executed in strict mode, 
JavaScript would have assigned undefined to whatObjAmIBoundTo’s 
keyword this. Note: In onClick’s `this.whatObjAmIBoundTo` code, the 
keyword this refers to the object that owns the render() method 
(that is, the CheckObj component’s instance) because render() is the 
method housing the keyword.


## How To Use A JavaScript Class Field To Bind A Class Component’s Event Handler


Whenever you use a JavaScript class field to bind a component’s event 
handler, the field’s this keyword will refer to the class instance
automatically.

As an example, let’s see what the keyword this refers to inside a 
regular JavaScript class field and in an object:


```javascript
// Define a class with two instance class fields:
class MyNameClassWithTwoClassFields {
  myName = 'Oluwatobi';
  myNameAgain = this.myName;
}

// Create an instance of MyNameClassWithTwoInstanceFields:
const myNameClassInstance = new MyNameClassWithTwoClassFields();

// Define an object with two properties:
const myNameObjWithTwoProps = {
  myName: 'Oluwatobi',
  myNameAgain: this.myName,
};

// Invoke myNameClassInstance’s myName property:
console.log(myNameClassInstance.myName);
// The invocation above will return: "Oluwatobi"
// Invoke myNameObjWithTwoProps’s myName property:
console.log(myNameObjWithTwoProps.myName);
// The invocation above will return: "Oluwatobi"
console.log(myNameClassInstance.myNameAgain);
// The invocation above will return: "Oluwatobi"
// Invoke myNameObjWithTwoProps’s myNameAgain property:
console.log(myNameObjWithTwoProps.myNameAgain);
// The invocation above will return: undefined
```

Try it on [StackBlitz](https://stackblitz.com/edit/web-platform-mabwyq?file=script.js)




In the JavaScript snippet above, observe that 
myNameObjWithTwoProps.myNameAgain returned undefined. Whereas
myNameClassInstance.myNameAgain returned “Oluwatobi”.

The different output is because this will refer to the global Window 
object whenever you use the keyword outside a method.

However, a class field’s this keyword always refers to the class 
instance—regardless of how you use the keyword.

So, what does this mean in ReactJS? Let’s see with an example.



## Example Of How To Use A JavaScript Class Field To Bind A Class Component’s Event Handler


You can use a JavaScript class field in ReactJS to bind a component’s 
event handler to the component’s instance.

For instance, in the snippet below, we used the class field to 
explicitly bind the event handler (whatObjAmIBoundTo) to the
class component’s object instance.

In other words, the class field makes whatObjAmIBoundTo’s keyword this
refer to CheckObj’s instance.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class CheckObj extends React.Component {
  whatObjAmIBoundTo = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.whatObjAmIBoundTo}>
          Click to see my event handler's parent object!
        </button>
        <h3>Check the console ⬇⬇⬇</h3>
      </div>
    );
  }
}

ReactDOM.render(<CheckObj />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-pjnqds?file=src%2Findex.js)



Suppose whatObjAmIBoundTo is a regular function—not a class field. In 
that case, its keyword this will refer to the `<button>` object. 
Because the `<button>` object is whatObjAmIBoundTo’s lexical object.

Moreover, since the body of a class gets executed in strict mode, 
JavaScript would have assigned undefined to whatObjAmIBoundTo’s 
keyword this. Note: In onClick’s this.whatObjAmIBoundTo code, the 
keyword this refers to the object that owns the render() method (that 
is, the CheckObj component’s instance) because render() is the method 
housing the keyword.




## How To Use An Arrow Function To Bind A Class Component’s Event Handler


Whenever you use an arrow function to bind a component’s event 
handler, the keyword this will refer to the this value of the
function’s enclosing [lexical context](https://codesweetly.com/javascript-lexical-scope/).

<!-- // page 258 -->

As an example, let’s see what the keyword this refers to inside a 
regular JavaScript method and in an arrow function:



```javascript
// Define an object containing a property and a regular function method:
const myBio = {
  website: 'www.codesweetly.com',
  displayWebsite: function () {
    return this.website;
  },
};

// Define an object containing a property and an arrow function method:
const compBio = {
  website: 'www.codesweetly.com',
  displayWebsite: () => {
    return this.website;
  },
};

// Invoke myBio’s displayWebsite property:
console.log(myBio.displayWebsite());
// The invocation above will return: "www.codesweetly.com"
// Invoke myComp’s displayWebsite property:
console.log(compBio.displayWebsite());
// The invocation above will return: undefined
```


Try it on [StackBlitz](https://stackblitz.com/edit/web-platform-rcmxv2?file=script.js)



In the JavaScript snippet above, observe that myBio.displayWebsite() 
returned “www.codesweetly.com”. But compBio.displayWebsite() returned
undefined.

The different output is because the keyword this inside a regular 
function method refers to the object that owns the method. In contrast, 
the keyword this inside an arrow function method references the this
value of the function’s enclosing lexical context.

In other words, since myBio’s displayWebsite is a regular function
method, its keyword this referenced myBio object—which has a firstName
property with the value “www.codesweetly.com”.

However, since compBio’s displayWebsite is an arrow function method, 
its keyword this referenced compBio’s this value. As such, because 
compBio’s this value is the global Window object—which does not have 
any property named website, this.website correctly returned undefined.

So, what does this mean in ReactJS? Let’s see with an example.


### Example Of How To Use An Arrow Function To Bind A Class Component’s Event Handler


You can use an arrow function in ReactJS to bind a component’s event 
handler to the component’s instance.

For instance, in the snippet below, we used an arrow function to 
explicitly bind the event handler (whatObjAmIBoundTo()) to the class 
component’s object instance.

In other words, the arrow function makes whatObjAmIBoundTo’s keyword 
this refer to CheckObj’s instance.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class CheckObj extends React.Component {
  whatObjAmIBoundTo() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.whatObjAmIBoundTo()}>
          Click to see my event handler's parent object!
        </button>
        <h3>Check the console ⬇⬇⬇</h3>
      </div>
    );
  }
}

ReactDOM.render(<CheckObj />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-cu1xrm?file=src%2Findex.js)


In the snippet above, observe that onClick got assigned an arrow 
function.

In the arrow function’s this.whatObjAmIBoundTo code, the keyword this 
references the this value of the arrow function’s enclosing lexical
context.

Keep in mind that the lexical context of the arrow function is the 
`<button>` object. As such, the arrow function’s this keyword refers 
to the `<button>` object’s this value. And `<button>`’s this value is 
the CheckObj component’s instance.

Note: A caveat with the arrow function technique is that React will 
create a different callback each time it renders CheckObj. So, 
depending on how the callback gets used, your app might experience 
some performance issues.

Therefore, React recommends using either the bind() technique or the 
class fields syntax.

Now, what if you need to pass arguments to your component’s event 
handler. How would you get it done? Let’s find out below.


## How To Pass Arguments To A Component’s Event Handler


Suppose you wish to pass some arguments to the parameters of your 
event handler. In such a case, React provides two options.

**Option 1: Use an arrow function**


React allows you to use an arrow function to pass an argument to your 
event handler.

Here’s an example:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class NameButton extends React.Component {
  showName(name) {
    alert('My name is ' + name);
  }

  render() {
    return (
      <button onClick={() => this.showName('Oluwatobi')}>Click me!</button>
    );
  }
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-wqbcpz?file=src%2Findex.js)



In the snippet above, we used an arrow function to pass an argument
(“Oluwatobi”) to the showName event handler.

Here’s the function component equivalence of the snippet above:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function NameButton() {
  return <button onClick={() => showName('Oluwatobi')}>Click me!</button>;
}

function showName(name) {
  alert('My name is ' + name);
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-1jsv1a?file=src%2Findex.js)


**Option 2: Use the bind() method**


You can pass arguments to your event handler using the bind() method.

Here’s an example:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class NameButton extends React.Component {
  showName(firstName, lastName) {
    alert('My name is ' + firstName + ' ' + lastName);
  }

  render() {
    return (
      <button onClick={this.showName.bind(this, 'Oluwatobi', 'Sofela')}>
        Click me!
      </button>
    );
  }
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-ygckrk?file=src%2Findex.js)



In the snippet above, we used the bind() method to pass two arguments
(“Oluwatobi” and “Sofela”) to the showName event handler.


Note:

* Make sure bind’s first argument is the keyword this. By so doing, 
showName will always reference the NameButton instance’s showName 
function. If you replace this with another object, the runtime 
binding of showName will change to that object’s scope.

* Suppose you omit bind in the snippet above—so, for instance, if you 
write this.showName(this, “Oluwatobi” , “Sofela”). In that case, 
showName will immediately execute after the page is loaded—without 
waiting for a click of the button.

Also, the computer will use this, “Oluwatobi”, and “Sofela” as
arguments to the showName function’s parameters.




Here’s the function component equivalence of the snippet above:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function NameButton() {
  return (
    <button onClick={showName.bind(this, 'Oluwatobi', 'Sofela')}>
      Click me!
    </button>
  );
}

function showName(firstName, lastName) {
  alert('My name is ' + firstName + ' ' + lastName);
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-jshxgz?file=src%2Findex.js)




Keep in mind that React allows your event handler to access the event 
listener that triggered it.


So, what exactly does this mean? Let’s find out below.




## How To Access The Event Listener That Triggered An Event Handler

Suppose you wish to access the event listener that triggered a specific 
event handler. In such a case, React provides two options.


**Option 1: Send the event manually via an arrow function**


You can give your event handler access to the event listener that 
triggered it by using an arrow function to pass the event object to 
the handler.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class NameButton extends React.Component {
  showName(action, e) {
    alert(`I was ${action} by the ${e.type} event listener.`);
  }

  render() {
    return (
      <button onClick={evt => this.showName('triggered', evt)}>
        Click me!
      </button>
    );
  }
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-3zjjzb?file=src%2Findex.js)



In the snippet above, evt represents the event object that triggered 
the showName() event handler.

In other words, we manually passed the event object to the handler 
(as its second argument). 

Therefore, once the button gets clicked, “I was triggered by the click
event listener.” will display as an alert.


The function component equivalence of the snippet above is like so:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function NameButton() {
  return (
    <button onClick={(evt) => showName('triggered', evt)}>Click me!</button>
  );
}

function showName(action, e) {
  alert(`I was ${action} by the ${e.type} event listener.`);
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-ssvkn5?file=src%2Findex.js)



**Option 2: Send events automatically with bind()**


An alternate way to give your event handler access to the listener 
that triggered it is to use bind() to pass the event object to the
handler.


Here’s an example:


```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class NameButton extends React.Component {
  showName(action, e) {
    alert(`I was ${action} by the ${e.type} event listener.`);
  }

  render() {
    return (
      <button onClick={this.showName.bind(this, 'triggered')}>Click me!</button>
    );
  }
}

ReactDOM.render(<NameButton />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-bgemij?file=src%2Findex.js)


In the snippet above, React will automatically forward the click event 
object to showName’s last parameter.

Therefore, when the button gets clicked, “I was triggered by the click
event listener.” will display as an alert.


The function component equivalence of the snippet above is like so:


```javascript
import React from "react";
import ReactDOM from "react-dom";
function NameButton() {
return (
<button onClick={showName.bind(this,
"triggered")}>
Click me!
</button>
);
}
function showName(action, e) {
alert(`I was ${action} by the ${e.type}
event listener.`);
}
ReactDOM.render(<NameButton />,
document.getElementById("root"));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-9uiyvc?file=src%2Findex.js)


Note: You can get the complete list of the
events React supports [here](https://reactjs.org/docs/events.html#supported-events).






# CHAPTER 17: FORMS IN REACTJS - How to Create React Forms

<!-- // page 276 -->

Forms are an essential part of many web apps, so knowing how to create 
one is vital.

In this chapter, you will learn all it takes to create forms in ReactJS.

Let’s begin by discussing the difference between HTML and React form 
elements.



## HTML Vs. ReactJS Forms: What’s The Difference?


In HTML, form elements, such as `<select>`, `<input>`, and `<textarea>`, 
generally maintain and update their own state based on a user’s input.

However, in React, a form element’s state gets stored in a component’s 
state object. And it gets updated with an event handler’s `setState()` 
(or state hook) method. For instance, the React snippet below 
specifies that whenever a user types a value (state) into the input 
field, React should use the `handleChange()` event handler to update 
the component’s state object.


```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { bestColor: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('The best color is: ' + this.state.bestColor);
  };

  handleChange = (event) => {
    this.setState({ bestColor: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Best Color Is: {this.state.bestColor}</h1>
        <label>
          <span>Enter your best color: </span>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.bestColor}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-p3ebaz?file=src%2Findex.js)


So, on every keystroke, handleChange’s `setState()` code will update 
the component’s state with the new value of the input field.

In other words, React exclusively maintains the `<input>` element’s 
state in the component’s state object.


Note:

* The `event.preventDefault()` method inside `handleSubmit()` prevents 
the submit button’s default behavior of submitting the form and 
reloading the browser.

* `event.target` references the element that triggered a specific event. 
So, for instance, in the snippet above, `event.target.value` referenced 
`<input>`’s value because it was the input element that invoked the 
`onChange` event.



Keep in mind that for most use cases, React recommends using 
controlled components to implement form elements. But what exactly 
are controlled components? Let’s find out below.



## What Is A Controlled Component?

A controlled component is a component whose form's data React controls 
exclusively. In other words, if React is responsible for storing, 
updating, and displaying your form element's data. In such an instance, 
that form's component is a controlled UI because its form's data is 
under React's total control. 

Here’s an example:


```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { bestColor: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('The best color is: ' + this.state.bestColor);
  };

  handleChange = (event) => {
    this.setState({ bestColor: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Best Color Is: {this.state.bestColor}</h1>
        <label>
          <span>Enter your best color: </span>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.bestColor}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-p3ebaz?file=src%2Findex.js)


The snippet above used `onChange={this.handleChange}` to specify that 
each time the input element’s value changes, React should update
BestColorForm’s state with the input field’s data.

Furthermore, `value={this.state.bestColor}` tells React to use the 
component’s state as the input field’s displayed value. In other 
words, the component’s state—not the DOM—manages `<input>`'s value
exclusively.

Therefore, `BestColorForm`'s state is the "single source of truth" 
determining the form element's actual value.

Beware that, at times, using controlled components may not be ideal. 
For instance, suppose you are integrating a React application with a 
non-React library. In such a case, controlled components may not be 
your best option—as you may find it annoying to implement.

Instead, using an uncontrolled component may be better in such a 
situation. But what exactly is an uncontrolled component? Let’s find 
out below.



## What Exactly Is An Uncontrolled Component?

An uncontrolled component is a component whose form's data React does 
not control exclusively. In other words, if React is not responsible 
for storing, updating, and displaying your form element’s data. In 
such an instance, that form's component is an uncontrolled UI because 
its form's data is not under React's control. Instead, the DOM manages 
such form's data.


Here’s an example:


```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { bestColor: '' };
    this.myBestColor = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ bestColor: this.myBestColor.current.value });
    alert('The best color is: ' + this.myBestColor.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Best Color Is: {this.state.bestColor}</h1>
        <label>
          <span>Enter your best color: </span>
          <input type="text" ref={this.myBestColor} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-9ysvzb?file=src%2Findex.js)


The snippet above used `React.createRef()` to initialize `myBestColor` 
property with an object containing a current property (that is, 
`{"current": null }`).

We also used `ref={this.myBestColor}` to pass the constructor’s 
`this.myBestColor` object to the input element’s ref property.
Consequently, React will substitute the initial ref property’s value 
with a shallow copy of the actual DOM’s input node at runtime.

So, `ref={{ "current": null }}` will become 
`ref={{"current": <input type="text">}}—where <input type="text"> `
is a [shallow copy](https://codesweetly.com/web-tech-glossary/#shallow-copy-js) 
of the DOM’s input node.
Note that any change to the DOM’s input node will reflect in React’s 
copy since ref’s `<input>` element is a shallow copy of the DOM’s 
own. Meaning that the `BestColorForm` component does not manage its 
form’s data—the DOM does it instead.

In other words, `BestColorForm` is an uncontrolled component because 
its input field’s data is stored, updated, and displayed by the 
DOM—not React.

Therefore, the DOM becomes the "single source of truth" that 
determines the form element's actual value.

Remember: The `<input> element in the snippet above is a JSX 
element that React will later convert to a regular

```
React.createElement("input",
{type: "text", ref:this.bestColor}) 
```
JavaScript code.

You may have observed that the ref property is a vital part of an 
uncontrolled component. But how exactly does it work? Let’s find 
out below.



## How Exactly Does React’s Ref Property Work?

The ref property makes the DOM’s input element accessible to an 
uncontrolled React component. So, for instance, `ref={this.myBestColor}` 
makes `this.myBestColor.current.value` accessible.

In other words, suppose your uncontrolled component needs to access the 
DOM’s input field’s data. In that case, you must use the ref property as 
a medium to get the DOM’s `<input>` node.

Here is a simplified example of how the ref property works under 
the hood:

```javascript
// Define an object that contains a createRef and a createElement properties:
const Oluwatobi = {
  // Program createRef() to return an object:
  createRef: function () {
    return { current: null };
  },

  // Define a function that creates a DOM element:
  createElement: function (elementType, obj, children) {
    const newEle = document.createElement(elementType);
    if (children) {
      newEle.innerText = children;
    }
    if (obj.ref) {
      obj.ref.current = newEle;
    }
  },
};

// Initialize myBestColor with an initial value of {current: null}:
const myBestColor = Oluwatobi.createRef();
console.log(myBestColor);

// Update myBestColor’s value to {current: <input>}:
Oluwatobi.createElement('input', { ref: myBestColor }, null);
console.log(myBestColor);
```

Try it on [StackBlitz]


Here’s what’s happening in the snippet above:

1. `myBestColor` got initialized with `Oluwatobi.createRef()`'s return
value.

2. `Oluwatobi.createElement()` got invoked with three arguments 
`("input", { ref: myBestColor }, and null)`.

3. The computer initialized newEle with an `<input>` element because 
we specified "input" as the `elementType` parameter’s argument.

4. The `if (children) {...}` conditional statement will not run 
because children is null.

5. The `obj.ref.current = newEle` code updates `myBestColor` with a 
shallow copy of `newEle`'s `<input>` element.


When you run the snippet, the first `console.log()` will 
output `{current: null }`, while the second one will return 
`{ current: <input> }`.

Keep in mind that you can use one event handler for multiple `<input>` 
elements. So, how exactly does that work? Let’s find out.




## How To Use One Event Handler For Multiple `<Input>` Elements

Suppose you prefer to use only one event handler to manage updates to 
the state of multiple `<input>` elements. In such a case, you can add 
a name attribute on each `<input>` element.

Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bestColor: '', hexCode: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The best color is: ${this.state.bestColor} (${this.state.hexCode}).`
    );
  };

  handleChange = (event) => {
    const inputEleName = event.target.name;
    const inputEleValue = event.target.value;
    this.setState({ [inputEleName]: inputEleValue });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          My Best Color Is: {this.state.bestColor} {this.state.hexCode}
        </h1>
        <div>
          <span>Enter your best color: </span>
          <input
            type="text"
            name="bestColor"
            value={this.state.bestColor}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <span>Enter your best color’s HEX code: </span>
          <input
            type="text"
            name="hexCode"
            value={this.state.hexCode}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-hqpbin?file=src%2Findex.js)



Here’s an explanation of the snippet above:

1. We specified a name attribute on each `<input>` element.

2. We used `event.target` to retrieve the name and value of the 
`<input>` element the user is currently using.

3. `this.setState({[inputEleName]: inputEleValue})` updates 
`BestColorForm`'s state with the name and value of the `<input>` 
element the user is currently using.

Note:

* The `[inputEleName]:inputEleValue` syntax used in the snippet
above is JavaScript’s computed property name syntax. We used it to 
dynamically generate the new state’s key based on `inputEleName`'s 
current value.

* It is not mandatory to use one event handler for multiple input 
elements.

In other words, you can use one handler for the `bestColor` input and 
another for the `hexCode` input.

However, React recommends using a single handler to handle multiple 
controlled input elements because it makes your code cleaner.

Observe that we’ve only discussed the `<input>` element. However, 
there are times you may need to create forms containing a 
`<textarea>` element. But is there any difference between HTML's 
`<textarea>` and that of React? Let’s find out.


## HTML Vs. React's `<Textarea>` Element—What's The Difference?


The main difference between HTML's `<textarea>` and that of ReactJS 
is that in HTML, you position a `<textarea>`'s text in-between the 
opening and closing tag.


Here’s an example:

```
<textarea>
I am a plain text placed between a
textarea’s opening and closing tag.
</textarea>
```


However, in React, you must use a value attribute on the `<textarea>` 
tag to specify the element’s text.

Here’s an example:

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { aboutBestColor: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Here is the story about my best color: ${this.state.aboutBestColor}`
    );
  };

  handleChange = (event) => {
    this.setState({ aboutBestColor: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>An Amazing Story About My Best Color</h1>
        <textarea
          placeholder="Please write your story here..."
          value={this.state.aboutBestColor}
          onChange={this.handleChange}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-ixodo7?file=src%2Findex.js)

Another element we’ve not discussed is the `<select>` element. Let’s 
see how the HTML version compares with that of ReactJS.


## HTML Vs. React’s `<Select>` Element—What’s The Difference?

In HTML, suppose you wish to specify the `<option>` you want the 
browser to select by default. In that case, you must place a 
selected attribute on your desired `<option>` element.

Here’s an example:

```html
<html>

<head>
  <meta charset="UTF-8">
</head>

<body>
  <form>
    <h1>Select Your Best Color</h1>
    <select>
      <option value="Orange">Orange</option>
      <option value="Pink" selected>Pink</option>
      <option value="White">White</option>
    </select>
  </form>
</body>

</html>
```

Try it on [StackBlitz](https://stackblitz.com/edit/web-platform-a54v5q?file=index.html)


The HTML snippet above used the selected attribute to specify that the 
browser should pre-select the Pink option when the page loads.

However, in React, you must use a value attribute on the `<select>` 
element’s opening tag to specify a default option.


Here’s an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class BestColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bestColor: 'Pink' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('The best color is: ' + this.state.bestColor);
  };

  handleChange = (event) => {
    this.setState({ bestColor: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Select Your Best Color</h1>
        <select value={this.state.bestColor} onChange={this.handleChange}>
          <option value="Orange">Orange</option>
          <option value="Pink">Pink</option>
          <option value="White">White</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<BestColorForm />, document.getElementById('root'));
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-hg3zk3?file=src%2Findex.js)

The React snippet above used the value attribute on the root 
`<select>` tag to tell the browser to pre-select the Pink option 
when the page loads.


## Time To Practice With React Forms

Here is your moment to practice the concepts you’ve learned on React 
forms.

In this exercise, your goal is to use function components to create 
an application that allows users to input and submit a list of
tasks.

Note:

* Your app should contain two components (an App component and a 
ListMaker component).

* Use the App component to render an input field and a submit button.

* Use the ListMaker component to create a list item for each task 
the user submits.

* The submit button should allow users to add the input field’s 
content to a “tasks array” managed in the component’s state.

* For each task in the tasks array, render an HTML list element to 
the webpage.

Remember: You will benefit much from this tutorial if you do the 
exercises yourself.

If you get stuck at any point, don’t be discouraged. Instead, review 
the lessons and give the exercise another attempt.

Once you’ve given it your best shot (you’d only cheat yourself if you 
don’t!), go ahead to see how I approached it below.


### How Did You Go About Creating Your Form App?

Below is one feasible way to create a React form app.


**Step 1: Create a new React app**

Setup the project by using npm’s `create-react-app` package to create 
a new React app called my-task-app:

```
npx create-react-app my-task-app
```

**Step 2: Clean up the src folder**


Inside the `src` directory, delete all files except `index.js` and 
`App.js`.


**Step 3: Create a components directory**


In the `src` directory, create a new folder called `components` and move 
`App.js` inside it.

**Step 4: Render the App component**

Open your `index.js` file and render the App component to the DOM 
like so:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Note: The `<React.StrictMode>` code enables strict mode checks for 
the App component.


**Step 5: Create the App component**

Open your `App.js` file. Then, create an App function component that 
renders an input field and a submit button.

```javascript
// App.js
import React, { useState } from 'react';
import ListMaker from './ListMaker';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Enter a Task:</h2>
        <input type="text" value={task} name="task" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>{task ? `▶ Your input is: ${task}` : '▶'}</h3>
      <ul>
        <ListMaker items={tasks} />
      </ul>
    </div>
  );
}

export default App;
```

Note: The `event.preventDefault()` method inside `handleSubmit()` 
prevents the submit button’s default behavior of submitting the 
form and reloading the browser.


**Step 6: Create a ListMaker.js file**


Go to the `src/components` directory and create a new file called 
`ListMaker.js`.


**Step 7: Create the ListMaker component**

Open your `ListMaker.js` file and define a ListMaker function 
component that creates a list item for each task the user submits.

```javascript
// ListMaker.js
import React from 'react';
import uniqid from 'uniqid';

function ListMaker(props) {
  return props.items.map(item => {
    return <li key={uniqid()}>{item}</li>;
  });
}

export default ListMaker;
```

Observe that in the snippet above, we generate the key attribute’s 
value using an NPM package called `uniqid`. You can learn more about 
`uniqid` in chapter eight.


**Step 8: Run the application**

Take a look at the app in the browser by running:

```
npm start
```


You can also see mine on [StackBlitz](https://stackblitz.com/edit/react-okpi63?file=src%2Fcomponents%2FApp.js).



# CHAPTER 18: STYLING IN REACT - How to Style React Elements


<!-- // page 307 -->

The four conventional ways to style React elements are:

* CSS stylesheets

* Inline style attributes

* CSS Modules

* CSS-in-JS Libraries


In this chapter, we will discuss all four ways. So, without any 
further ado, let’s get started with CSS stylesheets.



## How To Use CSS Stylesheets To Style React Elements


Here are the two steps of using a regular CSS stylesheet to style 
React elements:

** Step 1: Create a CSS stylesheet**

First, create a CSS stylesheet inside the `src` folder of any of your 
React projects. Then, define your ruleset in it.


Here’s an example:

```css
/* style.css */
.text-color {
  color: seagreen;
}
```

The CSS snippet above told the browser to apply a `seagreen` color on 
elements with a `text-color` class name.


**Step 2: Apply your stylesheet’s ruleset on your element**


Import your stylesheet into the component file containing the element 
you wish to style. Then, apply the stylesheet’s ruleset to it.

Here’s an example:


```javascript
import React from 'react';
import './style.css';

function ImageTitle(props) {
  return (
    <div className="image-title">
      <p className="text-color">
        <strong>{props.imageData.title}</strong>
      </p>
    </div>
  );
}

export default ImageTitle;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-mzkzwr?file=src%2FImageTitle.js)




The snippet above told React to apply the "text-color" ruleset on the 
`className="text-color"` paragraph element.


Note: Suppose you prefer not to import your stylesheet into your script 
file. In that case, you can use an HTML `<link>` tag to link the CSS 
stylesheet to your project’s HTML document.


An alternate way to style an element in ReactJS is to use an inline 
style attribute.


Let’s talk more about this technique below.




## How Does An Inline Style Attribute Work In ReactJS?


React allows you to apply inline styles to your elements.

Keep in mind that in HTML, the norm is to define an inline style as a 
string value—for instance, `style="color:brown"`.


However, in React, you must define inline styles as objects, not 
strings—for instance, `style={{ color: “brown” }}`. Also, remember 
that in JSX, you wrap [JavaScript expressions](https://codesweetly.com/javascript-statement#what-is-a-javascript-expression-statement) inside curly 
braces—for instance, `<p>{props}</p>`.

So, if the expression is a JavaScript object literal, you will need 
two sets of curly braces —for instance, `<p>{{ color: "brown"}}</p>`.

Therefore, in `style={{ color:"brown" }}`, the first set of curly 
braces (`{...}`) tells React that you want to write a JavaScript 
expression.

Meanwhile, the second set of curly braces (`{color: "brown" }`) is 
the JavaScript expression (an object) you are assigning as the style 
attribute’s value.


Here’s an example:


```javascript
import React from 'react';

function ImageDescription(props) {
  return (
    <div className="image-description">
      <p style={{ color: 'brown' }}>{props.imageData.description}</p>
    </div>
  );
}

export default ImageDescription;
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-59cb5r?file=src%2FImageDescription.js)



The React snippet above instructed the computer to apply an inline 
style to the paragraph element.

Suppose you wish to specify more than one inline style. In such a 
case, you can add more properties to the style attribute’s object.


Here’s an example:


```javascript
import React from 'react';

function ImageDescription(props) {
  return (
    <div className="image-description">
      <p style={{ color: 'brown', textDecoration: 'underline' }}>
        {props.imageData.description}
      </p>
    </div>
  );
}

export default ImageDescription;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-g3dmut?file=src%2FImageDescription.js)


Observe that we wrote `textDecoration` in camelCase. This React 
convention follows the way style attributes get referenced in
JavaScript.

To make your code easier to read, consider storing your inline style 
object in a separate variable like so:


```javascript
import React from 'react';

function ImageDescription(props) {
  const myParagraphStyles = {
    color: 'brown',
    textDecoration: 'underline overline'
  };

  return (
    <div className="image-description">
      <p style={myParagraphStyles}>{props.imageData.description}</p>
    </div>
  );
}

export default ImageDescription;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-gr9cgv?file=src%2FImageDescription.js)

So now that we how to use CSS stylesheets and the inline style 
attribute to style React elements, we can discuss CSS modules.




## What Exactly Is A CSS Module?

According to the official [documentation](https://github.com/css-modules/css-modules), 
a CSS Module is a CSS file in which all class names and animation 
names are scoped locally by default.

So, is there any difference between CSS Modules and a regular CSS 
stylesheet? Let’s find out below.


## CSS Module Vs. CSS Stylesheet – What’s The Difference?


CSS module is similar to a regular CSS stylesheet in many ways. 
However, there are two main differences.



**Difference 1: What are the filename convention of a regular CSS stylesheet and a CSS module?**


The syntax for naming a regular CSS stylesheet is `[name].css`—for 
instance, `codesweetly-styles.css`. However, a CSS module’s file 
naming convention is `[name].module.css`—for instance, 
`codesweetlystyles.module.css`.

**Difference 2: Can all components use the styles defined in a regular CSS stylesheet and CSS modules?**

When you import a CSS stylesheet into your script file, the rulesets 
in that stylesheet are available globally to all components (and 
child components) of that file.

However, when you import a CSS module into your script file, the 
rulesets in that module are only available locally to the component 
that invokes the rule. Moreover, that component must be in the script 
that imported the CSS module—otherwise, React will throw an error.

Here’s an example:

Create a regular CSS stylesheet inside the `src` folder of any of your 
React projects and add some ruleset to it:


```css
/* codesweetly-styles.css */
.imageInfo {
  text-align: center;
  color: #442109;
}
```

Also, create a CSS module in the same `src` folder and add some 
ruleset to it:

```css
/* codesweetly-styles.module.css */
.imageInfo {
  border: 8px ridge #71380f;
  background-color: #ffe5b4;
  padding: 20px 0 7px;
}

```

Import both the CSS stylesheet and CSS module you’ve just created into 
your script file:

```javascript
// RandomImageGenerator.js (My JavaScript file)
import React from 'react';
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';
// Import the CSS stylesheet and CSS module:
import './codesweetly-styles.css';
import codesweetlyStyles from './codesweetly-styles.module.css';

function RandomImageGenerator(props) {
  return (
    <div className="imageInfo">
      <Image imageData={data} />
      <ImageTitle imageData={data} />
      <ImageDescription imageData={data} />
    </div>
  );
}

const data = {
  url: 'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-46dtdw?file=src%2FRandomImageGenerator.js)



Now, go ahead to run your app and check its output in your browser.

After running your app, you will notice that React only applied the 
CSS stylesheet’s ruleset—not the CSS module's own.


React did so because the stylesheet’s ruleset is globally available to 
all elements on the page you imported the sheet.

However, the ruleset in the module is locally available only to the 
component that invokes the rule explicitly.

Therefore, to use your CSS module’s style in your component, you must 
specifically invoke it like so:

```javascript
// RandomImageGenerator.js (My JavaScript file)
import React from 'react';
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';
// Import the CSS stylesheet and CSS module:
import './codesweetly-styles.css';
import codesweetlyStyles from './codesweetly-styles.module.css';

function RandomImageGenerator(props) {
  return (
    // Invoke the CSS module’s ruleset:
    <div className={`imageInfo ${codesweetlyStyles.imageInfo}`}>
      <Image imageData={data} />
      <ImageTitle imageData={data} />
      <ImageDescription imageData={data} />
    </div>
  );
}

const data = {
  url: 'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```


Try it on [StackBlitz](https://stackblitz.com/edit/react-8ebenr?file=src%2FRandomImageGenerator.js)


Another helpful way to style React elements is to use a CSS-in-JS library.

But what exactly is a CSS-in-JS library? Let’s find out.



## What Exactly Is A CSS-In-JS Library?


A CSS-in-JS library allows you to use JavaScript to style React 
elements by writing CSS declarations directly inside your 
JavaScript program.

Keep in mind that there are many CSS-in-JS libraries. But the popular 
ones are styledcomponents, Emotion, glamorous, and JSS.

Feel free to try any CSS-in-JS library. However, we will use Emotion 
here to illustrate how a CSS-in-JS library works in a React 
application.

So, go ahead to install the library into any of your React projects 
by running:

```
npm i @emotion/react
```

After you’ve installed Emotion, import, and use it in your component 
file like so:




```javascript
// The comment below is essential. Emotion will not work without it!
/** @jsx jsx */

import React from 'react';
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';
// Import Emotion:
import { css, jsx } from '@emotion/react';

// Use Emotion to define your CSS styles:
const codesweetlyStyles = css`
  border: 8px ridge #71380f;
  background-color: #ffe5b4;
  padding: 20px 0 7px;
  text-align: center;
  color: #442109;
`;

function RandomImageGenerator(props) {
  return ( 
    <div css={codesweetlyStyles}>
      <Image imageData={data} />
      <ImageTitle imageData={data} />
      <ImageDescription imageData={data} />
    </div>
  );
}

const data = {
  url: 'https://placeimg.com/400/400/any',
  title: 'Random Image',
  description: 'Get a new image each time you refresh your browser.'
};

export default RandomImageGenerator;
```

Try it on [StackBlitz](https://stackblitz.com/edit/react-z5isg5?file=src%2FRandomImageGenerator.js)


Now, go ahead to run your app and check its output in your browser.

Note: You must place the /** @jsx jsx */ comment before both the React 
and Emotion importation statements.

The comment tells babel to convert JSX calls to a function called jsx 
instead of `React.createElement`.


And that’s it! You now know how to use the CSS-in-JS library to style 
your React elements.

Note that I used Emotion here because I like how clean their syntax 
looks.  So, feel free to test other CSS-in-JS libraries like 
styled-components. You may find one that suits you better.



# CHAPTER 19: DEPLOYMENT IN REACTJS - How to Deploy ReactApps

<!-- // page 325 -->
So, you’ve built that lovely React App, and you are ready to deploy 
it so everyone can see your genius! But what is the best deployment 
technique?

The ideal deployment technique for your React application largely 
depends on the hosting platform you wish to use to host it.

This chapter will show you how to deploy your app on GitHub Pages. 
Without any further ado, let’s get it started with the first step.

