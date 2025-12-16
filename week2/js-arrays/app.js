console.log("Hello World!"); // "Hello World!"

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts); //  "My first blog post", "My second blog post", "My third blog post",
console.log(blogPosts[0]); // "My first blog post"
console.log(blogPosts[1]); // "My second blog post"
console.log(blogPosts[2]); // "My third blog post"

blogPosts[3] = "My fourth blog post";
console.log(blogPosts[3]); // "My fourth blog post"

const favouriteFoods = ["pizza", "Pasta", "Burgers"];
const favouriteColours = ["Blue", "Yellow", "Black"];
const favouriteNumbers = [3, 4, 9, 48];

console.log(favouriteFoods, favouriteColours, favouriteNumbers); // [ 'pizza', 'Pasta', 'Burgers' ] [ 'Blue', 'Yellow', 'Black' ] [ 3, 4, 9, 48 ]

console.log(favouriteFoods[0], favouriteColours[2], favouriteNumbers[1]); // 'pizza', 'Pasta', 'Burgers'
