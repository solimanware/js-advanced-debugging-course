const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);
  result.innerHTML = n1 + n2;
});

// create car object
const car = {
  make: "Ford",
  model: "Mustang",
  year: "1969",
  color: "red",
};

function a() {
  console.log("this is function a ");
  b();
}

function b() {
  console.log("this is function b");
  done();
}

function done() {
  console.log("done");
}

a();

const repos = document.getElementById("repos");

//github fetch user microsmsm
fetch("https://api.github.com/users/microsmsm/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      const name = document.createTextNode(repo.name);
      const tag = document.createElement("p");
      tag.appendChild(name);
      repos.appendChild(tag);
    });
  });
