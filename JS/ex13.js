// //the second argument after the , specifies time in MS to wait before performing the function
// //after 3 seconds, logs hello
// setTimeout(function subscribe() {
//   console.log("hello");
// }, 3000);
// //how you would use the above function to call a parameter
// setTimeout(
//   function subscribeMe(bingo) {
//     console.log(`hello ${bingo}`);
//     //where the 3000 is time in MS to wait and the string is the passed parameter
//   },
//   3000,
//   "Dev Dreamer"
// );

// function sub(channel) {
//   console.log(`Subscribe to ${channel}`);
// }
// ///how to setTimeout an exisitng function
// setTimeout(sub, 3000, "Walnut boy");

//clearTimeout() clears the setTimeout method,
//since timer is set to 5 seconds and this cleartimeout wll be reached before that 5 seconds
//it nullifies the previous setTimeout
//this can be set to a var to make the clearTimneout method more easily accessible:

// function subber(channel) {
//   console.log(`Call me ${channel}`);
// }
// let timer = setTimeout(subber, 5000, "Walnut boy");

// //clearTimeout(timer);

// const clear = () => {
//   clearTimeout(timer);
//   console.log("timer ended");
// };
// //assign the var btn to the action, go to the dom find the element btn, listen for click, execute clear on click
// const btn = document.getElementById("btn1").addEventListener("click", clear);

//setInterval and clearInterval()
// function subber(channel) {
//   console.log(`Call me ${channel}`);
// }
// let timer = setInterval(subber, 5000, "Walnut boy");

// const clear = () => {
//   clearInterval(timer);
//   console.log("timer ended");
// };
// const btn = document.getElementById("btn1").addEventListener("click", clear);

// function callMe(variable) {
//   console.log(`my name is ${variable}`);
// }
// const x = setInterval(callMe, 1000, "Ant");

// function count(start, end) {
//   //never change function parameters
//   let timer = start;
//   const x = setInterval(addOneThenList, 1000, end);
//   function addOneThenList(endNumber) {
//     console.log(timer); //1//2//3//4
//     if (timer < endNumber) {
//       return (timer += 1); //2//3
//     } else {
//       return clearInterval(x);
//     }
//   }
// }
//count(1, 10);
function counter(start, end) {
  let timer = setInterval(() => {
    consolelog(start);
    if (start >= end) {
      clearInterval(timer);
    } else {
      start++;
    }
  }, 1000);
}
counter(1, 10);

//example using promise to promise the resulting data to be handled however you want in .then

function addTwo(number) {
  return number + 2;
}

const intervalResult = new Promise((resolve, reject) => {
  //   resolve("success");
  //   reject("failure");
  console.log("hi");
  function count(start, end) {
    let timer = start;
    const x = setInterval(addOneThenList, 1000, end);
    function addOneThenList(endNumber) {
      console.log(timer);
      if (timer < endNumber) {
        if (typeof timer === "string") {
          clearInterval(x);
          reject(timer);
        }
        return (timer += 1);
      } else {
        clearInterval(x);
        resolve(timer);
      }
    }
  }
  count(1, 10);
});
console.log(intervalResult);
intervalResult
  .then((result) => {
    console.log(result);
    console.log(addTwo(result));
    console.log(typeof result);
  })
  .catch((error) => {
    console.log("inside catch", error);
  });
console.log(typeof "bill");
