button = document.getElementById("btn");
div = document.getElementById("div");

button.addEventListener("click", function () {
  message = document.createElement("p");
  message.textContent = "You clicked!";
  console.log(message.textContent);
  div.appendChild(message); //this code creates a message and displays it on the page

  setTimeout(function () {
    div.removeChild(message);
  }, 5000); // this code removes the message after 5 seconds
});
