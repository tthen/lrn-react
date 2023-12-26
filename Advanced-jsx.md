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

### Variable Attributes in JSX

When writing JSX, it’s common to use variables to set attributes.

Here’s an example of how that might work:

```jsx
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

Notice how in this example, the `<img />`‘s attributes each get their own line. This can make your code more readable if you have a lot of attributes for one element.

Object properties are also often used to set attributes:

```jsx
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
```

**Example app.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (<img src={goose}/>);
root.render(gooseImg);
```

### Event Listeners in JSX

JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute. Here’s an example:

```jsx
<img onClick={clickAlert} />
```

An event listener attribute’s name should be something like `onClick` or `onMouseOver`: the word on plus the type of event that you’re listening for. Look through the common components list in React docs to browse supported event names.

An event listener attribute’s value should be a function. The above example would only work if `clickAlert` were a valid function that had been defined elsewhere:

```jsx
function clickAlert() {
  alert('You clicked this image!');
}

<img onClick={clickAlert} />
```

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.


**Example app.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}/>
);

root.render(kitty);
```

### JSX Conditionals: If Statements That Don't Work

Great work! You've learned how to use curly braces to inject JavaScript into a JSX expression!

Here's a rule that you need to know: you can not inject an if statement into a JSX expression.

This code will break:

```jsx
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

What if you want a JSX expression to render but only under certain circumstances? You can't inject an if statement. What can you do?

You have lots of options. In the next few lessons, we'll explore some simple ways to write conditionals (expressions that are only executed under certain conditions) in JSX.

#### JSX Conditionals: If Statements That Do Work

How can you write a conditional if you can't inject an if statement into JSX?

One option is to write an if statement and not inject it into JSX.

Look at `if.js`. Follow the if statement, all the way from line 8 down to line 20.

`if.js` works because the words if and else are not injected in bet

ween JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.

This is a common way to express conditionals in JSX.

**`if.js`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root.render(message);
```


**`app.js`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:

if (coinToss() == 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = (
    <img src={pics.doggy} />
  );
}

root.render(img);
```

### JSX Conditionals: The Ternary Operator

There's a more compact way to write conditionals in JSX: the ternary operator.

The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Recall how it works: you write `x ? y : z`, where `x, y`, and `z` are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy”. If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.

Here's how you might use the ternary operator in a JSX expression:

```jsx
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if age is greater than or equal to drinkingAge, then headline will equal `<h1>Buy Drink</h1>`. Otherwise, headline will equal `<h1>Do Teen Stuff</h1>`.


```jsx
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
function coinToss() {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

root.render(img);
```

### JSX Conditionals: `&&`

We're going to cover one final way of writing conditionals in React: the `&&` operator.

Like the ternary operator, `&&` is not React-specific, but it shows up in React very often.

In the last two exercises, you wrote statements that would sometimes render a kitty and other times render a doggy. `&&` would not have been the best choice for that code.

`&&` works best for conditionals that will sometimes do an action but other times do nothing at all.

Here's an example:

```jsx
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered. If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.

**favorite-food.js**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);
```

**Question**

When should I use an if statement, a ternary operator, or the && operator?

**Answer**

We should decide to use either an if statement, ternary operator, or the && operator based on what is most concise while still maintaining readability.

Tips to help decide on which conditional statement or operator to use:

-  the `&&` and ternary operators are more concise, choose either of these when possible
-  choose the `&&` over a ternary when you want an action to occur (or not) based on a single condition
-  choose an `if/else/else if` statement when you need to extrapolate logic to make it easier to read and understand

### `.map` in JSX

The `.map()` array method comes up often in React. It's good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then using `.map()` is often the most efficient way. It can look odd at first:

```jsx
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

In the above example, we start out with an array of strings. We call `.map()` on this array of strings, and the `.map()` call returns a new array of `<li>`s.

On the last line of the example, note that `{listItems}` will evaluate to an array, because it's the returned value of `.map()`! JSX `<li>`s don't have to be in an array like this, but they can be.

```jsx
// This is fine in JSX, not in an explicit array:
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```


