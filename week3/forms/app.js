console.log("Hello world!");

// FORMS
//we want JS to collect the input datda (otehrwise it can appear in the url!)
// we will need and event and a formData object

//event: submit (needs listener and handler)

//event listener (on form):
// const userForm = document.getElementById("user-form");
// userForm.addEventListener("submit", handleSubmit);

// event handler (collect thre form's data):
// function handleSubmit(submitEvent) {
//prevent the form's default behavior (data shown in url). This uses the perameter that is set for the function
//we need the event type as a perameter here
//   submitEvent.preventDefault(submitEvent);
//create a template object to store the input data
//FormData is a built in JS object. We must declare that it is a new instance of this.
//The argument here is the form from the html and provides the structure of key value pairs
//   const formData = new FormData(userForm);
//formData does not yet have values associated with the keys.
//convert (parse) FormData object into an object shape (it intially has a lot of extra data attached)
//   const formValues = Object.fromEntries(formData);
//   console.log(formData);
//normal object structure wihth keys and values
// }

//Data can then be stored locally or on a datdabase
//with local storage we could do other things like:
//Data could be used for login purposes
//We can also choose to render the values on screen

//WORKSHOP:

const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(userForm);
  const formValues = Object.fromEntries(formData);

  const formResults = document.createElement("div");
  formResults.innerHTML =
    "first name: " +
    formValues.firstName +
    ", " +
    "last name: " +
    formValues.lastName +
    ", " +
    "age: " +
    formValues.userAge +
    ", " +
    "email: " +
    formValues.userEmail +
    ", " +
    "phone: " +
    formValues.userPhone;
  ", " +
    "phone type: " +
    formValues.phoneType +
    ", " +
    "city: " +
    formValues.city +
    ", " +
    "hobbies: " +
    formValues.hobbies;
  document.body.appendChild(formResults);
}
