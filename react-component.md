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

