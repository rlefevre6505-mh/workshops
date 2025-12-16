console.log("Hello!");

//
//LOCAL STORAGE
//
//to store non-sensitive datda between user sessions (datda persistance)

//localStoarge is an object
//in this object we have methods to store, read and delete in local storage
//only strings can be stored (for size efficiency)

const userPreferences = {
  theme: "dark",
  font: "large",
  contrats: "high",
  colourblindMode: true,
};

//TODO: store new data in local storage

//step 1 - stringify data using json method
const stringifiedPreferences = JSON.stringify(userPreferences);

//step 2 - add our stringified data to local storage
localStorage.setItem("user preferences", stringifiedPreferences); //these 2 arguments are a key and a value

//theres no local storage without a DOM, as a browser is needed!

//this can be viewed in dev tools under "application" (and will persist unless cleared manually)

//TODO: READ DATA FROM LOCAL STORAGE

//step 1 - get the data
const storedPreferences = localStorage.getItem("user preferences");
//this method uses 1 argument, which is the key

//step 2 - parse stringified data to its original shape
const parsedPreferences = JSON.parse(storedPreferences);
//with this stored in a variable, we can use dot notation to access individual values
console.log(parsedPreferences.theme); //"dark"
//this only works in the browser, not in other consoles

//TODO: remove an item from local storage

localStorage.removeItem("user preferences");
//this will remove the item from local storage

localStorage.clear();
//this will remove all items from local storage

//
//WORKSHOP
//
//Saving data to Local Storage
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

//Retrieving data from Local Storage
const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
} //this popluates the relevant saved data into the input field
