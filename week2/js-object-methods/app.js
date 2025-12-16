//object methods are functions inside of objects, where the function is the value
//eg. console.log accesses a function, stored as a value, tied to the key "log".
//this key-value pair is stored in the object called "console"

//
//EXAMPLE
//
const staff = {
  staffName: "Manny",
  staffRole: "instructor",
  staffGreeting: function () {
    console.log("Hi!");
  },
};
//staffGreeting is a method! We use the key to call the method becuase the value is an anonymous function

staff.staffGreeting(); //Hi!

//As a function, the method can take peramaters

const newStaff = {
  staffName: "Manny",
  staffRole: "instructor",
  staffGreeting: function (greeting) {
    console.log(greeting);
  },
  getStaffName: function () {
    return newStaff.staffName;
  },
};

newStaff.staffGreeting("Hello!"); //Hello!
console.log(newStaff.getStaffName()); //Manny

//
//WORKSHOP:
//

//the "this" keyword points to the object containing it and cna only be used in objects
const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  getAge: function () {
    return this.age;
  },
};

const age = person.getAge();

console.log(age); // Output: 30

//
//MINI CHALLENGE:
//

const car = {
  make: "Ford",
  model: "Fiesta",
  colour: "silver",
  advert: function () {
    return `This dealer approved ${this.make} ${this.model} in ${this.colour} is now for sale.`;
  },
};

console.log(car.advert()); //This dealer approved Ford Fiesta in silver is now for sale.

const book = {
  title: "East Of Eden",
  author: "John Steinbeck",
  year: 1952,
  numOfPages: 856,
  advert: function () {
    return `First published in ${this.year}, ${this.author}\'s ${this.title} is a lengthy novel, and sure to keep you busy for a while, at ${this.numOfPages} pages!`; //NOTE: the back-slash before the apostrophe prevents it from breaking the string, as it "escapes" the template literal
  },
};

console.log(book.advert()); //First published in 1952, John Steinbeck's East Of Eden is a lengthy novel, and sure to keep you busy for a while, at 856 pages!
