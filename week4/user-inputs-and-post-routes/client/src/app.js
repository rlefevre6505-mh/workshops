console.log("hello world");

const foodForm = document.getElementById("food-form");

function handleSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(foodForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  fetch("http://localhost:8080/foodform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

foodForm.addEventListener("submit", handleSubmit);
