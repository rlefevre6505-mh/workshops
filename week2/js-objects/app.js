console.log("Hello world!");

//
//WORKSHOP:
//
const person = {
  name: "Richard",
  age: 41,
  favouriteColour: "blue",
};

console.log(person); //this outputs the object as a string in the console

console.table(person); //this outputs the obect as a table in the console. Very useful!

//Dot notaion is used to access values stored in the object:
console.log(person.name); // Output: Richard
console.log(person.age); // Output: 41
console.log(person.favouriteColour); //blue

//properties can be also be added or overwritten using dot notation
person.favouriteFood = "pizza";
console.log(person.favouriteFood); //pizza

person.favouriteFood = "sausage and mash";
console.log(person.favouriteFood); //sausage and mash

//nesting objects and/or arrays in a object makes it a complex object
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

//dot notation can go through multiple layers of nesting:
console.log(blogPost.author.name); // Output: Bob

//a mix if syntax from dot notation and array indexing can be used where needed:
console.log(blogPost.tags[0]); // Output: coding

//although the full contents of an array will not print as part of a complex object, the length of the array can be output using the .length method:
console.log(blogPost.tags.length); // Output: 4

//objects are a data type that stores multiple key value pairs (values with labels). These are more suitable than arrays for many large bodies of data
//structure:
let objectName = {
  key: "value",
  newKey: "newValue",
  //each of these key value pairs are called a property.
  // This object has just 2 properties
};

//
//EXAMPLE:
//
const city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
  cityColours: ["yellow", "green"], //arrays can be used to store mutiple values for one key
  companies: [
    {
      companyName: "Tech Educators",
      staffNumber: 3000,
      fields: ["education", "tech"], // objects can be nested within objects
    },
    {
      companyName: "JD Wetherspoon",
      staffNumber: 465,
      fields: ["hospitality", "alochol", "food"],
    },
  ],
};

//accessing the data inside using dot notation
//TODO: access the cityName property
console.log(city.cityName); //Norwich

//TODO: acess the staffNumber property in the first item of the companies property
console.log(city.companies[0].staffNumber); //3000

//TODO: add a new property (county) using dot notation
city.county = "Suffolk";

console.log(city); //shows whole object including county

city.county = "Norfolk"; // this overwrites the incorrect or outdated value previously in the county property

console.log(city); //shows whole object including county, with the updated information

//
//MINI CHALLENGE
//

const car = {
  make: "Ford",
  model: "Fiesta",
  colour: "silver",
};

//NOTE: in this expamle we are able to say "it's" wihtout breaking the template/ending the quote section, because we used a "\" directly before the quote mark. This "escapes" the quote.
console.log(`My car is a ${car.make} ${car.model} and it\'s ${car.colour}.`);
//My car is a Ford Fiesta and it's silver.

const book = {
  title: "East Of Eden",
  author: "John Steinbeck",
  year: 1952,
  numberOfPages: 860,
};

let bookDescription = `${book.title} is a novel by ${book.author}. It was first published in ${book.year}, and is ${book.numberOfPages} pages long.`;

console.log(bookDescription); //East Of Eden is a novel by John Steinbeck. It was first published in 1952, and is 860 pages long.
