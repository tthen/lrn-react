### React Components

React applications are made of components.

What's a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it when some data changes.

Take a look at the code below. This code will create and render a new React component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function MyComponent() {
  return <h1>Hello world</h1>;
}

ReactDOM.createRoot(
document.getElementById('app')
).render(<MyComponent />);
```

A lot of these look unfamiliar but do not worry. We are going to unpack that code, one small piece at a time. By the end of this lesson, you’ll understand how to build a React component!

**apps.js**

```jsx
import React from 'react';

function App() {
  return <h1>Hello again, World!</h1>;
}

export default App;
```

**index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);
```

**Question**

In the context of this lesson 155, can we declare multiple components in a single file?

**Answer**

Yes, you can declare multiple components within a single file. For example, there can be a file containing the following components,

```jsx
class Class1 extends React.Component {
  render() { ... }  
};

class Class2 extends React.Component {
  render() { ... }  
};
```

Choosing to have multiple components in a file or only one component per file can be up to preference. However, keeping classes in separate files can be preferred for the sake of organization.

### Import React

The first React component we created in the last exercise started with importing react. The line that did this is:

```
import React from 'react';
```

This creates an object named React, which contains methods necessary to use the React library. React is imported from the 'react' package, which should be installed in your project as a dependency. With the object, we can start utilizing features of the react library!

By importing the library, we can use important features such as [Hooks](https://www.codecademy.com/resources/docs/react/hooks), which we’ll explore in detail later.

For the next few exercises, we’ll be working in two files: `App.js` and `index.js`. In a React application, the `App.js` file typically is the top level of your application, and `index.js` is the entry point.

**App.js**
```jsx
import React from 'react';
```

**index.js**
```jsx
import React from 'react';
```

**Question**

In the context of this exercise 43, can you import multiple objects from a library at once?

**Answer**

Yes, you can do this using “unpacking” when importing from a library.

For example, say that you wanted to import multiple functions from some library, you could do so as follows,

```
import { functionA, functionB, functionC } from 'library';
```

Another, more concrete, example is importing objects from the ‘react-router’ library.

```
import { Router, Switch } from 'react-router';
```

### Import ReactDOM

Another import we need in addition to React is ReactDOM:

```
import ReactDOM from 'react-dom/client';
```

The methods imported from 'react-dom' interact with the DOM.

The methods imported from 'react' do not deal with the DOM at all. They don’t engage directly with anything that isn’t part of React.

To clarify: the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.

**App.js**
```jsx
import React from 'react';
```

**index.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
```

Although we imported React in both `App.js` and `index.js` in the previous exercise, we will only import ReactDOM in `index.js`.

ReactDOM deals with DOM-specific methods that should be used in `index.js`, which is the entry point of our application.

In `index.js`, import the ReactDOM library on line 2. Store the result in a variable named ReactDOM.


**Question**

In the context of this exercise 54, is the ReactDOM `render()` method the same as the component `render()` method?

**Answer**

No, although they have the same name, they are not the same.

The `ReactDOM.render()` method is used to render a React element into the DOM within the specified container, and returns a reference to that component. It is applied the following way,

```jsx
ReactDOM.render(
  <MyClass />, 
  document.getElementById('app')
);
```

On the other hand, the React component `render()` method returns the elements that make up the component. For instance,

```jsx
class MyClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

### Create a Function Component

You’ve learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML and re-rendering it whenever some data changes.

It’s useful to think of components as smaller pieces of our interface. Combined, they are the building blocks that make up a React application. In a website, we can create a component for the search bar, another component for the navigation bar, and another component for the dashboard content itself.

Here’s another fact about components: we can use JavaScript functions to define a new React component. This is called a function component.

In the past, React components were defined using Javascript classes. But since the introduction of Hooks (something we’ll discuss later), function components have become the standard in modern React applications.

After we define our functional component, we can use it to create as many instances of that component as we want.

Let’s take a look at the example from the first exercise:

```jsx
import React from 'react';

function MyComponent() {
  return <h1>Hello, I'm a functional React Component!</h1>;
}

export default MyComponent;
```

On the third line, a function is defined with the name MyComponent. Inside, the function returns a React element in JSX syntax:

```jsx
return <h1>Hello, I'm a functional React Component!</h1>;
```

Combined, this makes a basic React functional component.

On the last line of the above code block, MyComponent is exported so it can be used later.

A lot of it is still unfamiliar, but you can understand more than you could before! Let’s keep going!

**Question**

In the context of this exercise 33, what else does the React.Component class provide?

**Answer**

The `React.Component` class provides several methods in addition to `render()`, some of which are automatically invoked through the lifecycle of the component.

The `constructor()` method is invoked by the component before it is added to the DOM. This is usually used to run code to set up the component such as initializing some state and binding methods to the component.

The class also provides a `componentDidMount()` method which is run right after the component is inserted into the DOM tree, and is invoked only one time.

Another method is `componentDidUpdate()`, which runs immediately after any updates to the component occurs. This is typically used for code such as network requests which should be run if any updates occur to the component.



