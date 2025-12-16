console.log("Hello!");

//TODO: request data from random fox API

//the browser reads our code synchronously (otp to bottom, no waiting time)
//some actions in our code are asynchronous (they take more time that the browser takes to be executed)
//whenw e have an async action, if the browser executes it synchronously, we get a promise (the browswr's was to show it exectued the code, but didnt wait for the response)

//function getFoxesData() will not work due to async!!!!

//we need an async statement to tell the browser the function is async
async function getFoxesData() {
  //fetch is a method that uses an API to get data from a specified URL
  //we need an await statement to tell the browser to wait until the response has been receieved
  const response = await fetch("https://randomfox.ca/floof/");
  //translate (parse) data into JSON, using repsonse.json method (which is async, so needs to be awaited)
  const data = await response.json();
  console.log(data);
  return data;
}

//TODO: use the data to render fox images on my page
const foxContainer = document.getElementById("foxcontainer");

//as this function will take an async function as an argument, it will also need to be async
function createFoxImage(foxUrl) {
  const image = document.createElement("img");
  image.src = foxUrl.image;
  image.alt = "A randomly selected photo of a fox";
  foxContainer.appendChild(image);
}
//if we run these functions like this createFoxImage runs first, then getFoxesData, so the image url is not ready before the image is created and appended

//createFoxImage(getFoxesData());

//a control function is a fucntion that runs other functions, controlling the order
async function renderFox() {
  const foxesData = await getFoxesData();
  createFoxImage(foxesData); //this function will not be called until the data is ready
}

renderFox();
