console.log("hello world");

// select dom element to set event listener in
// querySelector or getElementById
const clickButton = document.querySelector(".click-btn");

console.log(clickButton); //to check right element selected

//now we make the event listener
//this method needs 2 arguments inside the brackets--> the type of event, and the event handler(the result of the interaction).
clickButton.addEventListener("click", function () {
  console.log("The user has clicked!");
  clickButton.innerText = "You clicked already!";
});

//TOTO: implement an event so that when a user clicks on an image ther title of the imaghe appears
//step0 - get image in html
//step1 - event listener ---> click
//step2 - event handler ---> DOM manipulation

const heroImage = document.getElementById("hero-image");

heroImage.addEventListener("click", function () {
  //create title of image
  const imageTitle = document.createElement("h2");
  //update text content
  imageTitle.textContent = "A colourful chameleon";
  //append to DOM
  document.body.appendChild(imageTitle);
}); //maybe the title should be created, then have innerText added on click, so as to avoid duplication?

//EVENT LISTENER WORKSHOP:

//this listens for keyed inputs, then logs the specific key to the console as a string
//e.key is shorthand for event.key
document.body.addEventListener("keydown", function (e) {
  console.log(e.key);
});
