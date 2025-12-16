// Manny's challenge
//Turn the following traditional functions into arrow functions:

function greet(name) {
  return `Hello ${name}`;
}

//arrow version:
const greetArrow = (name) => `Hello ${name}`;

//==============================

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}
form.addEventListener("submit", handleSubmit);

//arrow version:
const handleSubmitArrow = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
  console.log({ username: username, message: message });
};
form.addEventListener("submit", handleSubmitArrow);

//==============================

button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//arrow version:
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

//==============================

games.forEach(function (game) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//arrow version:
games.foreach((game) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//==============================

async function getNewPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//arrow version:
const getNewPostsArrow = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
