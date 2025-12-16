console.log("Hello world!");

//WORKSHOP:
//this is a callback:
function notifyUser() {
  console.log("notifyUser function was called!");
}

function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}
myAwesomeFunction(notifyUser);

//we can also use anonymous functions in callbacks, just like when we include a function block in the arguemnts for click event:
function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

//the anonymous function can also be coded as an arrow function:
myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

//the choice of functions to use as arguments can aslo be varied by conditionals (if/else or ternary) or random num generators
function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

//now a calculator example that can call different functions for different types of operation
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

//now some more functions that can be called back:
function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function power(a, b) {
  return a ** b;
}

const result3 = myCalculatorFunction(2, 5, power);

const result4 = myCalculatorFunction(2, 5, divide);

const newResult = myCalculatorFunction(result3, result4, subtract);
console.log(newResult); // 31.6

//MY CONTRIVED EXAMPLE:

//a callback is when a function is used as an argument in another function.
//in a click event or similar, there are a listener and a handler.
//the event listener is a function itself, and then calls another function to act as the handler, therefoer the function is a callback.

button.addEventListener("click", otherFunction);
//this runs when a click occurs (generally the preferred bahviour)

button.addEventListener("click", otherFunction());
//this runs when the browser runs the script, then again on click

const firstName = "Richard";
const lastName = "Lefevre";
const yearOfBirth = 1984;
const currentYear = 2025;

function defineAge(current, birth) {
  return current - birth;
}

function defineName(first, last) {
  return first + " " + last;
}

function ageStatement(name, age) {
  return `Hi ${name}, you are ${age} years old!`;
}

console.log(
  ageStatement(
    defineName(firstName, lastName),
    defineAge(currentYear, yearOfBirth)
  )
);
//"Hi Richard Lefevre, you are 41 years old!"
