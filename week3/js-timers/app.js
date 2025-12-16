console.log("Hello world!");

button = document.getElementById("btn");
div = document.getElementById("div");
message = document.createElement("p");
let currentSeconds = 0;
message.textContent = currentSeconds;
div.appendChild(message);
let timerRunning;
let interval;

console.log(timerRunning);

button.addEventListener("click", function () {
  if (timerRunning == null || timerRunning == false) {
    interval = setInterval(function () {
      message.textContent = currentSeconds++;
    }, 1000);
    timerRunning = true;
  } else if (timerRunning == true) {
    clearInterval(interval);
    currentSeconds = 0;
    message.textContent = 0;
    timerRunning = false;
  } else {
  }
});
