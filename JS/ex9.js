// let btn = document.querySelector('#btn');
// btn.addEventListener("click", function () {
//     console.log('sanic fast');
// });

// function myName(){
//     console.log('walrus');
// }
// myName();
//will update colors to parameters OR if undefined will output the default color
// const x = (r,g,b) => {
//     r = r ||'red';
//     g = g ||'green';
//     b = b ||'blue';
//     return {r,g,b};

// };
// console.log(x('yellow', 'purple', 'pink'));
//SAME BUT DIFFERENT WAY
// const x = (r = 'red', g = 'green', b = 'blue') => {
//     return { r, g, b };
//   };

//how i was supposed to do it, showing how they can reassign and use new var to invoke function
// let colors = function(){
//     console.log('red,blue,green');
//     //will print all arguments passed in array format, NO ACCESS TO ARRAY METHODS
//     //console.log(arguments)
//     //console.log(arguments[0])
// }
// colors();
// let myColors = colors;
// myColors();

// //another more readable example for default paremters
// function favGame(game = 'Default Game'){
//     console.log(`my fav game is ${game}`);
// }

// function favGame(game){
//     if(game === undefined){
//         console.log('no game provided');
//     }else{
//         console.log(`my fav game is ${game};`)
//     }
// }

//In general, if you need to use this or if you want your function to be hoisted to the top of
//the scope, a function declaration may be more appropriate. If you don't need to use this
//and you want a concise way to define a function, an arrow function expression may be more appropriate.

//REST PARAMETER, will actually return an array and can use array methods

// const obj = {
//     foo() {
//       console.log(this);
//     }
//   };
//   obj.foo(); // logs the obj object
// let x = {
//     type: 'detached',
//     build: 'brick',
//     year: '2019',
//     price: 250000,
//     driveway: true
// }

//  for(types in x){
//     console.log(`${types} : ${x[types]}`);
//  }
//iterate arr and break if hits green
const arr = ["red", "orange", "yellow", "green", "blue"];
for (values of arr) {
  if (values === "green") {
    break;
  }
  console.log(values);
}
