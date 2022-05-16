const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const n1 = num1.value;
  const n2 = num2.value;
  result.innerHTML = n1 + n2;
  test();
});


function test(){
  console.log("this is a test");
}
