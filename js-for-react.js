var pizza = true;
pizza = false;
console.log(pizza); // false

/* The const keyword
A constant is a variable that cannot be overwritten. Once declared, you
cannot change its value.
We cannor reset the value of a constant variable, and it will generate a 
console error if we try to overwrite the value.
*/

// const pizza = true;
// pizza = false; // SyntaxError: Identifier 'pizza' has already been declared

/* 
var topic = "JavaScript";

if (topic) {
  var topic = "React";
  console.log("block", topic); // block React
}

console.log("global", topic); // global React
*/

/* The topic variable inside the if block resets the value of topic 
outside of the block */

/* The let keyword
With the let keyword, we can scope a variable to any code block.
Using let protects the value of the global variable.
*/

/*
var topic = "JavaScript";

if (topic) {
  let topic = "React";
  console.log("block", topic); // block React
}

console.log("global", topic); // global JavaScript

// Another area where curly braces don't block off 
// a variable scope is in for loops
var div, container = document.getElementById("container");
for (let i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function() {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}
*/

/* Declaring the loop counter i with let instead of var does block off 
the scope of i. Now clicking on any box will display the value for i 
that was scoped to the loop iteration.
*/

/**
 * Tenmplate Strings
 * Template strings provide us with an alternative to string concatenation.
 * With a template, we can introduce one string and insert the variabe 
 * values by surrounding them with ${ }
 */

var firstName = "Henry";
var lastName = "Torres";
var middleName = "Mauricio";
console.log(lastName + ", " + firstName + " " + middleName);
console.log(`${lastName}, ${firstName} ${middleName}`);

// Now we can have a string that spans multiple lines without breaking your code

var qty = 1089;
var price = 456;
var event = "Musica a la plancha";
var ticketAgent = "Tu Boleta";

const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}.

Order Details
${firstName} ${middleName} ${lastName}
     ${qty} x $${price} = $${qty*price} to ${event}

You can pick your tickets up 30 minutes before
the show,

Thanks,

${ticketAgent}
`

console.log(email);

/**
 * Creating Functions
 * Function Declarations: A function declaration or function definition 
 * starts with the function keyword, wich is followed by the name of 
 * the function.
 * Function Expressions: this involves creating the function as a variable
 * Note: functions declarations are hoisted and funciton expressions are not.
 * In other words, you can invoke a function before you write a function 
 * declaration
 */

/*
// invoking the function before it's declared
hey();
//function declararion
function hey() {
  console.log("!Hey");
}
*/

//
// invoking the function before it's declared
hey();
//function expression
const hey = function () {
  console.log("!Hey");
};

// ReferenceError: Cannot access 'hey' before initialization
// page 27