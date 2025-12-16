const newList = document.createElement("ul");
newList.id = "new-list";
const listTitle = document.createElement("p");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");

listTitle.innerText =
  "This is an unordered list, created in javascript and rendered from the DOM";
listTitle.id = "list-title";
newList.appendChild(listTitle);
newList.appendChild(listItem1);
newList.appendChild(listItem2);
newList.appendChild(listItem3);
listItem1.innerText = "Something for the list.";
listItem2.innerText = "Something else...";
listItem3.innerText = "One last thing!";

document.body.appendChild(newList);
console.log(newList);
