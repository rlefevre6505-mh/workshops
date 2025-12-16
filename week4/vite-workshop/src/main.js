const button = document.getElementById("clicker");
const pEl = document.getElementById("p-el");

button.addEventListener("click", function () {
  const num = Math.floor(Math.random() * 5);
  if (num == 1) {
    pEl.textContent = "That tickles!";
  } else if (num == 2) {
    pEl.textContent = "OUCH!";
  } else if (num == 3) {
    pEl.textContent = "*blushes*";
  } else if (num == 4) {
    pEl.textContent = "Stop touching me";
  } else if (num == 5) {
    pEl.textContent = "...";
  } else {
    pEl.textContent = "...";
  }
});
