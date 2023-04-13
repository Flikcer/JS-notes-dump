//higher order functions

// //built in higher order funciton .map() is passed the function double as an argument
// const double = (n) => n * 2;
// let nums = [1, 2, 3, 4, 5];
// let result = nums.map(double);
// //spread operator pulls the nums out. doesnt just view the area
// console.log(...result);
// console.log(result);

// const pTag = document.getElementById("p");
// const btn = document.getElementById("btn1");
// //add an event listener so that on click, perform this function
// //the method .addeventlistener is passed the function () as an argument
// btn.addEventListener("click", () => {
//   pTag.innerText = "sub to DD";
// });
//higher order functions are dynamic and reusable

//pure functions
//a function that for some args always produces the same outcome w no side effects
//will not change a variable outside of itself and will always return the same when given these values
// const sum = (num1, num2) => console.log(num1 + num2);
// sum(5, 2);
// sum(100, 47);

// //impure function
// //only good use case is invoking http request
// //given this argument a different val will always be returned
// const num = (num) => console.log(num + Math.random());
// num(5);

// let initResult = 0;

// console.log(`before function = ${initResult}`);

// const addNums = (n1, n2) => {
//   const sum = n1 + n2;
//   //dont do this
//   initResult = sum;
//   return sum;
// };
// //since impure function even though it is just logged the val will change. bad practice
// console.log(addNums(5, 5));
// console.log(initResult);

//recursion
//a recursive function calls itself inside the functionbody and is also responsible for stopping itself
//functions are first class objects and can be used anywhere
//if we dont provide a stop to the function call we will be stuck in an infinite loop
//the code written to stop the recursion in this is called the base case

//assign for loop to this function
// const countDown = (num) => {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// };
// countDown(7);

//in the background the for loop uses the extra variable i
//to keep track of the number whereas this just updated the number itself in a pure function
// const countDown1 = (num) => {
//   console.log(num);
//   const updatedNum = num - 1;

//   //base case
//   //it wont be called again if it is equal to 0 or less than so it cant loop infintitely
//   if (updatedNum >= 0) {
//     countDown1(updatedNum);
//   }
// };
// countDown1(7);

// const countTen = (num) => {
//   console.log(num);
//   const updatedNum = num + 1;
//   //base case
//   if (updatedNum <= 10) {
//     countTen(updatedNum);
//   }
// };
// countTen(-10);

//closures
//functions bundled together with the lexical enviornment within which that function was declared
//an inner function is a closure, it encloses the vars from the lexical enviornment of the outer func
//remembers its outer vars and can access them
const outer = () => {
  let outerVar = "outer";
  console.log(outerVar);
  //this function is a closure
  function inner() {
    //enclosed var
    //let innerVar = "inner";

    //every scope has access to everything outside of its scope
    //each funciton has its own lexical enviornment
    console.log(`inner function print ${outerVar}`);
  }
  return inner;
  //function inner will not run unless it is also called, think about recursion
  //inner();
};
//outer();

//set myFunc to the function outer then log it to display the log then reference the closed func
//you are not limited to invoking it like on line 103 but it is more common to do it in that way
//will allow usage of only the iner func
let myFunc = outer();
console.log(myFunc);
myFunc();

//example of scope capabilities
//dont use global vars like this
let crust = "Crust";

function earth() {
  let mantle = "mantle";
  function message() {
    let core = "core";
    console.log(
      `the earth is made up of the ${crust}, ${mantle}, and ${core} `
    );
  }
  //must be called since it is not assigned and explicitly called outside the func
  message();
}
earth();

//another way
let crust = "Crust";
function earth() {
  let mantle = "mantle";
  function message() {
    let core = "core";
    console.log(
      `the earth is made up of the ${crust}, ${mantle}, and ${core} `
    );
  }
  //must be called since it is not assigned and explicitly called outside the func
  return message;
}
let msg = earth();
msg();
