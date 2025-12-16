//TODO: rewrite some common calc or string functions:

// function multiply (a, b) {
//     return a*b
// }
const multiply = (a, b) => a * b;

const username = "Richard";
// function greeting(username) {
//   console.log(`Good morning ${username}`);
// }

const greeting = (username) => console.log(`Good morning ${username}`);

//TODO: write an async fucntion as an arrow function
// NB. You can’t always use async/await at the top level of a JS file, so using a main function that is async is a simple way to ensure you can use async/await.
// No top level await in Node.js, must use an async main function
// No async function for useEffect in React

// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// }

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

// now we can use the async arrow function in another function (also asyn, of course), then call the function
async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}

main();

//TODO: experiment with arrow functions

const hypotenuse = (a, b) => {
  const c = Math.sqrt(a * a + b * b);
  console.log(c);
  return c;
};

hypotenuse(5, 3);
