const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const n1 = num1.value;
  const n2 = num2.value;
  result.innerHTML = n1 + n2;
});


// const studentDidAttend = false
// console.assert(studentDidAttend, "Student did not attend class") //stacktrace
// console.log("hi")
// console.clear()
function greeting() {
  //console.log("hi");
  console.count("hi is printed for this time");
}
// greeting();
// greeting();
// console.countReset("hi is printed for this time")
// greeting();

const car = {type:"Fiat", model:"500", color:"white"};
//console.dir(num1)
//console.table(car)

// console.group()
// console.log("hi")
// console.log("hi")
// console.log("hi")
// console.groupEnd()

// console.groupCollapsed()
// console.log("hi")
// console.log("hi")
// console.log("hi")
// console.groupEnd()

// function calcTime(){
//   console.time("setTimeout")
//   setTimeout(()=>{
//     console.timeEnd("setTimeout")
//   },1000)
// }
// calcTime();

// console.time()
//  console.timeLog("answer time");
// console.timeEnd()

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();