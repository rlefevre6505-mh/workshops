console.log("Hello!");

async function getMyStargazerCount() {
  const response = await fetch(
    "https://api.github.com/repos/rlefevre6505-mh/assignment-week2"
  );
  const json = await response.json();
  const myCount = json.stargazers_count;
  return myCount;
}

async function getMyRepoName() {
  const response = await fetch(
    "https://api.github.com/repos/rlefevre6505-mh/assignment-week2"
  );
  const json = await response.json();
  const myname = json.name;
  return myname;
}

getMyRepoName();

const countContainer = document.getElementById("stargazer-count");

function createRepoElement(myRepoName, myRepo) {
  const count = document.createElement("p");
  count.innerHTML = `Current stargazer count for repo "${myRepoName}":  ${myRepo}`;
  countContainer.appendChild(count);
  console.log(count);
}

async function renderCount() {
  const myRepoName = await getMyRepoName(); //
  const myRepo = await getMyStargazerCount();
  createRepoElement(myRepoName, myRepo);
}

renderCount();
