const form = document.querySelector("form");

//This function saves the form inputs to local storage, but does not save multiple key-value pairs as a stringified object
//
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const bgColour = formData.get("background colour");
//   const textColour = formData.get("text colour");
//   localStorage.setItem("background colour", bgColour);
//   localStorage.setItem("text colour", textColour);
// });

//these variables link to locally stored data
const myTextColour = localStorage.getItem("text colour");
const myBGColour = localStorage.getItem("background colour");

//these if statements carry the values over to the page when reloaded and apply them to the inputs (but below we have a way to do this wiht a whole JSON object)
//
// if (myTextColour) {
//   const input = document.getElementById("textinput");
//   input.value = myTextColour;
// }
//
// if (myBGColour) {
//   const input = document.getElementById("bginput");
//   input.value = myBGColour;
// }

//this function takes the multilple key-value pairs and combines them into an object, then stringifies them for JSON storage
function savePreferences(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const bgColour = formData.get("background colour");
  const textColour = formData.get("text colour");
  const preferences = {
    textColour,
    bgColour,
  };
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

//this function applies the styles in the saved preferences to the page on load
if (preferences) {
  const bgInput = document.getElementById("bginput");
  const textInput = document.getElementById("textinput");
  bgInput.value = preferences.bgColour;
  textInput.value = preferences.textColour;

  const documentBody = document.querySelector("body");
  const bgChoice = bgInput.value;
  const textChoice = textInput.value;
  //
  documentBody.style.color = textChoice;
  documentBody.style.backgroundColor = bgChoice;
}
