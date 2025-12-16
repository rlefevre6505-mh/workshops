console.log("Hello world!");

//LOOPS
//loops are used to make repetative tasks more efficient (and easier to debug!). Loops make for "dryer" code, ie. not repeating needlessly, are more dynamic and scalable (easy to modify/  adjust), and can also work to print full arrays.
//Loops create their own block scope.
//When setting up a loop we need to consider how many times a task will need to be repeated.

//FOR LOOPS
//If we know how many times we will repeat a task, we can use a for loop

//STRUCTURE:
// keyword (config) {
//actions
// }

// SYNTAX:
// for (initialisation; condition; afterthought) {
//   task
// }

//TODO: log the value of i to the console until i<=4

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//the keyword BREAK can be used to exit a loop manually, eg
// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i += 1;
// }
// console.log(i);
// Expected output: 3

//TODO: create 5 paragraphs in my DOM

for (let i = 0; (i = 4); i++) {
  const paragraph = document.createElement("p"); //this creates a <p> in the DOM
  paragraph.textContent = "paragraph " + i; // this names the <p> for purposes of manipulation in Javascipt
  const container = document.getElementById("p-container"); //this is div already in html
  container.appendChild(paragraph); //this appends the <p>'s tot he <div>
}

//TODO: log in the console all items in an array

const myArray = ["red", "blue", "yellow", "black", "white", "pink", "purple"];

for (let i = 0; i < myArray.legnth; i++) {
  console.log(`item ${colours[i]}`);
}

//LOOP METHODS:

//the "FOR EACH" method is specifically for arrays and uses a callback function
//"item" represents each indexed item in the array, but any word can be used as it is a parameter
//this will run until it reaches the end of the array, as it takes pre-defined arguments
// TODO: log in the console all items in an array

colours.forEach(function (item) {
  console.log(item);
});

//the "FOR.. OF" method is a simplified syntax for a for loop
//colour is a parameter and represents ther variable created to represent each array item
//this is just for arrays, like FOR EACH

for (let colour of colours) {
  console.log(colour);
}

//====================================================================================

//WHILE LOOPS are loops we use when we dont know how many time a task will need to run
//while loops are rarely used as the risk of them becoming infinite is high

//structure:
while (conditional) {
  //task
}

//TODO: while the user is not logged in, ask for log in info

// while (!user) {
//   alert("Please log in");
// }
//THIS WHILE LOOP IS COMMENTED OUT FOR SAFETY!!!!!!
//if the condition is never met, the loops runs forever

//
//WORKSHOP
//

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
} //Iteration 0
//Iteration 1
//Iteration 2
//Iteration 3
//Iteration 4

//this loop will run as long as counter is less than 5, but updates the value of counter on each iteration
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
} //1
//2
//3
//4
//5

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);
  keepLooping = Math.random() < 0.1;
  i++;
} // keepLooping is set to false initially, with 10% chance that Math.random() will return a random value below 0.1, at which point it become truthy

const favouriteFoods = ["pizza", "chocolate", "ice cream", "cheese"];

for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i]);
} //this outputs each array item unit it reached the final index, as this is 1 less than array.length

for (let food of favouriteFoods) {
  console.log(food);
} // this outputs the content of each array item (food) for as long as there is another to output, for the complete extent of the array (foods)

favouriteFoods.forEach(function (food) {
  console.log(food);
}); // this outputs the array by accepting a function as an argument, which then accepts each array item in turn as an argument

favouriteFoods.forEach(function (food, index) {
  console.log(index, food);
});
//The for each array method also passes the array index to the anonymous function, so you can use it if you need to.

//
//MINI CHALLENGES
//

const favouriteAnimals = [
  "dogs",
  "cats",
  "rabbits",
  "guinnea pigs",
  "turtles",
  "otters",
  "piglets",
  "ducks",
];

for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(favouriteAnimals[i]);
} //dogs
//cats
//rabbits
//guinnea pigs
//turtles
//otters
//piglets
//ducks

const favouriteColours = ["red", "blue", "yellow", "black"];

favouriteColours.forEach(function (colour) {
  console.log(colour);
}); //red
//blue
//yellow
//black
