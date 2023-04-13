// let nums = [1, 2, 3];
// //spread, grabs each value from the array, not the entire array
// let arr2 = [...nums];
// console.log(arr2);
// const book = {
//   title: "Narnia",
//   release: "May 1990",
//   author: "Some guy",
//   relatedBooks: {
//     title1: "The other narnia",
//     title2: "Narnia3",
//   },
// };

// const updatedbook = {
//   ...book,
//   characters: "3 dudes, cat1",
//   relatedBooks: {
//     ...book.relatedBooks,
//   },
// };

// console.log(updatedbook.title1);

// const colors = ["blue", "green", "fuschia"];
// const arr2 = [...colors, "color", "color2", "color3"];

// console.log(arr2);
// colors.pop();
// console.log(colors);

// const user = {
//   name: "John",
//   age: 25,
//   occupation: {
//     role: "Dev",
//   },
// };

// const x = {
//   ...user,
//   occupation: {
//     ...user.occupation,
//     role2: "Janitor",
//   },
// };

// console.log(user);
// console.log(x);

// const x = ["Jumanji", 1995];

// function y(x, y, ...z) {
//   console.log(`${x} bombed in ${y}`);
//   console.log(`why did you enter all this ${z}`);
// }

// y(...x, "walnuts", "bananas", "pringles");

// function sum(x, y, ...z) {
//   console.log(x + y);
//   console.log(`why did you enter all this ${z}`);
// }
// sum(6, 7, 8, 9, 10);

// function colors(...z) {
//   console.log(z[1]);
// }
// colors("red", "blue", "green");

// function heroes(a, b, ...c) {
//   console.log(c);
//   console.log(c[2]);
//   console.log(...c);
// }

// heroes("superman", "batman", "wolverine", "bill", "boomhauer");

// x => {
//     console.log(x)
// }

// function user(name) {
//     return `my username is ${name}`
// }
// //arrow
// const user = name => `my username is ${name}`;

// const greeting = function(){
//     return console.log(`hello, how are you?`);
// }
// //arrow
// const greeting = () => console.log(`hello, how are you?`);

//arrow function scope use case
let book = {
  title: "the fellowship of the ring",
  related: ["two towers", "return of the king"],
  showRelated: function () {
    this.related.forEach((relatedBooks) => {
      console.log(`title: ${this.title}`);
      console.log(`related books: ${relatedBooks}`);
    });
  },
};
