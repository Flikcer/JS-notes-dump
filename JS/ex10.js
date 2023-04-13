// // function favNum(num) {
// //   return `My fav num is ${num}`;
// // }
// // console.log(favNum("walnuts"));
// function password(a) {
//   if (a[0] === "o") {
//     return console.log("not allowed");
//   }
//   if (a.length > 8) {
//     return console.log(`you chose ${a}`);
//   } else {
//     return console.log("Not enough");
//   }
// }
// password("PurpleRhino13286");
// password("ok");

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// console.log(`${month}:${year}`);

// let username = "dreamer123";
// console.log(username);
// username = "newUser";
// console.log(username);

//ex of scope differences
// function foo() {
//   console.log(x); // Output: undefined
//   var x = 10;
//   console.log(x); // Output: 10
// }

// foo();

// function conc() {
//   let firstName = "Paul";
//   let lastName = "Williams";
//   let age = 42;
//   let country = "Walrusland";
//   console.log(
//     `${firstName} ${lastName} is ${age} years old and lives in ${country}`
//   );
//   //console.log(firstName + " " + lastName + " is " + age + " years old.");
// }
// conc();

// location('Aslan');
// //NOT HOISTED SINCE INITIALIZED TO A VAR AND NOT DECLARED AS A FUNC
// let lion = function(name){
//     //even though in function, declaration and initializations do not get hoisted
//     console.log(`lion name: ${name}`);
// }

// //hoisted declaration of a funciton
// function lion(name){
//     console.log(`lion name: ${name}`);
// }
//.this() example
// const obj = {
//   title: "Yes",
//   author: "PaulWalrus",
//   info: function () {
//     //can be info() {}
//     console.log(this.title + " by " + this.author);
//   },
// };
// obj.info();

// //incorrect use of this
// const user = {
//   name: "john",
//   age: 25,
//   career: {
//     employer: "Google",
//     title: "Developer",
//     info() {
//       console.log(`${this.name}`);
//     },
//   },
// };
// user.career.info();
// //fixed use case
// const user = {
//   name: "john",
//   age: 25,
//   career: {
//     employer: "Google",
//     title: "Developer",
//     info() {
//       console.log(`${user.name}`);
//     },
//   },
// };
// user.career.info();

// //BEST PRACTICE CASE, call()
// const game = {
//   title: "walnut",
//   year: 1991,
// };

// function info() {
//   console.log(`${this.title} was released in ${this.year}`);
// }
// info.call(game);

//example of using apply for multiple
// const game = {
//   title: "walnut",
//   year: 1991,
// };
// //platform and character must be added as parameters since they dont exist in any object.
// //in this way, do not change the values outright, they just assign them for their purpose
// function info(platform, character) {
//   console.log(
//     `${this.title} was released in ${this.year}, for ${platform}, it features ${character} as the main character`
//   );
// }
// //info.call(game, "SEGA", "Sonic");
// //info.apply(game, ["SEGA", "Sonic"]);

// //if this invocation must be done multiple times or must be *bound*
// const gameInfo = info.bind(game, "SEGA", "Sonic");
// gameInfo();
// const game2 = {
//   title: "mario",
//   year: 1985,
// };
// //cannot be rebound
// gameInfo.bind(game2);
// gameInfo();
//ex2
// function greet(name, message) {
//     console.log(`${message}, ${name}!`);
//   }

//   greet.call(null, "John", "Hello"); // logs "Hello, John!"
//   greet.apply(null, ["Jane", "Hi"]);
//call, apply, bind
const book = {
  title: "Walrus",
  author: "Paulrus",
};

function log(year) {
  console.log(`${this.title} was written by ${this.author} in ${year}`);
}

//log.call(book);
log.apply(book, [1991]);

const bookInfo = log.bind(book, 1991);
bookInfo();
