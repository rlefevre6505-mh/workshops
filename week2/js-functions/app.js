function sayHello() {
  console.log("Hello world!");
}

sayHello(); //ouputs "Hello world!"

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

let x = 2;
let y = 5;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

console.log(multiply(x, y));
console.log(subtract(x, y));
console.log(divide(x, y));

//this function uses if/else to define different types of calculations
function calculateV1(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
console.log(calculateV1(3, 6, "+")); //9
console.log(calculateV1(3, 6, "-")); //-3
console.log(calculateV1(3, 6, "/")); //0.5
console.log(calculateV1(3, 6, "*")); //18

//this function uses a switch statement to define different types of calculations
function calculateV2(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
console.log(calculateV2(3, 6, "+")); //9
console.log(calculateV2(3, 6, "-")); //-3
console.log(calculateV2(3, 6, "/")); //0.5
console.log(calculateV2(3, 6, "*")); //18

//convert miles to kilometers
function mToKm(num) {
  return num * 1.60934;
}

//this version decides whether to covert to miles or km (convert INTO specified measure)
function convertDistance(num, measure) {
  if (
    measure === "km" ||
    measure === "KM" ||
    measure === "Km" ||
    measure === "Kilometers" ||
    measure === "kilometers" ||
    measure === "KILOMETERS"
  ) {
    return num * 1.60934;
  } else if (
    measure === "MILES" ||
    measure === "miles" ||
    measure === "Miles"
  ) {
    return num * 0.621371;
  } else {
    console.log("ERROR");
  }
}

console.log(convertDistance(10, "Kilometers") + " km"); //"16.0934 km"
console.log(convertDistance(10, "KILOMETERS") + " km"); //"16.0934 km"
console.log(convertDistance(10, "kilometers") + " km"); //"16.0934 km"
console.log(convertDistance(10, "KM") + " km"); //"16.0934 km"
console.log(convertDistance(10, "Km") + " km"); //"16.0934 km"
console.log(convertDistance(10, "km") + " km"); //"16.0934 km"
console.log(convertDistance(10, "miles") + " miles"); //"6.21371 miles"
console.log(convertDistance(10, "Miles") + " miles"); //"6.21371 miles"
console.log(convertDistance(10, "MILES") + " miles"); //"6.21371 miles"
console.log(convertDistance(10, "meters")); //"ERROR"

//SCOPE MINI CHALLENGE:

const favouriteColour = "blue";

// function printColour(favouriteColour) {
//   const favouriteColour = "red";
//   console.log(favouriteColour);
// }

//this will log "red", as the function takes the variable from its own scope above those in global scope, if named the same (AVOID USING THE SAME NAMES REGARDLESS!)
// printColour(favouriteColour);

// function printColour(colour) {
//   let favouriteColour = "red";
//   console.log(colour);
// }
//by using a parameter we can force the function to choose the gloablly declared variable!
//this way the function will log "blue"
// printColour(favouriteColour);

function printColour(colour) {
  let favouriteColour = "red";
  console.log(favouriteColour);
  console.log(colour);
}

printColour(favouriteColour);
