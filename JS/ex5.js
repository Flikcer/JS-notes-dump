/*
//creat blank arr
const arr = []
console.log(arr);
//or
const arr = Array() // creates an an empty array
console.log(arr)
*/
//fills 8 array values with 0
//const eight0values = Array(8).fill(0)
//8 empty values
//const eight0values = Array(8)
/*
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
*/

/*
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
//same but includes
const fruits = ['banana', 'orange', 'mango', 'lemon'];
if (fruits.includes('banana')) {
  console.log('This fruit does exist in the array');
} else {
  console.log('This fruit does not exist in the array');
}

//check if is array
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

//slice doesnt include end position, COPIES DOES NOT ERASE

const numbers = [1,2,3,4,5]
console.log(numbers.slice(1,4)) // -> [2,3,4] 

  const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers)                // -> remove all items
  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers)            // remove the first item
  const numbers = [1, 2, 3, 4, 5, 6]
	numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers)  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


  const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]

const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]


const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
*/

/*
let x = []; 
let y = Array(5).fill(0);
let z = y.length;
let first = y[0];
let middle = y[Math.floor((y.length-1)/2)];
let last = y[y.length - 1];

console.log(first);
console.log(middle);
console.log(last);

 let mixedDataTypes = [1, '2', 3, '4', 5, true];
 console.log(mixedDataTypes.length);
*/

/*
console.log(itcompanies);
console.log(itcompanies.length);

let first = itcompanies[0];
let middle = itcompanies[Math.floor((itcompanies.length-1)/2)];
let last = itcompanies[itcompanies.length - 1];

console.log(first);
console.log(middle);
console.log(last);

//2 ways to print each one by one
//for loop to iterate through arr[i] then console log, for arr.length times
for (let i = 0; i <itcompanies.length; i++){
    console.log(itcompanies[i]);
}
//for each value in itcompanies apply nameless function with the paramter value (each array value to be passed) and log them
itcompanies.forEach( (value) => console.log(value));

let itcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle'];
itcompanies.forEach( (value) => console.log(value.toUpperCase()));
let string = itcompanies.join(', ');
console.log(`${string} and Amazon are big IT companies`)

//find if value exists in array then print value
let x = (value) => {
    if(itcompanies.includes(value)){
        console.log(value)
    }else{
        console.log('not found');
}
}

x('Apple');

//return companies with more than one o

let filteredCompanies = itcompanies.filter(x => {
    let count = 0;
    for (let i = 0; i < x.length; i++){
        if(x[i].toUpperCase() == 'O'){
            count++
        }
    }
    return count <= 1;
});
console.log(filteredCompanies);

*/
/*
let itcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle'];
console.log(itcompanies.sort());
console.log(itcompanies.reverse());

// Slice the first 3 elements
let firstThree = itcompanies.slice(0, 3);
console.log(firstThree);

// Slice the last 3 elements
let lastThree = itcompanies.slice(-3);
console.log(lastThree);

// Slice the middle elements
let middle = itcompanies.slice(1, -1);
console.log(middle);
//to remove item and return that item
console.log(itcompanies.splice(0,1));
//remove first item in array entirely
itcompanies.shift();
//remove last element. it is being displayed since its in a console log. display arr to see without this item
console.log(itcompanies.pop());

//REMOVE ALL ITEMS IN ARR
//3 WAYS
let arr = [1, 2, 3];
arr.splice(0, arr.length);
console.log(arr);

let arr = [1, 2, 3];
arr = [];
console.log(arr);

let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);

//TO EXPORT MULTIPLE ITEMS
module.exports = {
  func1: myFunc1,
  func2: myFunc2
};
//EXPORT 1 ITEM
module.exports = myFunc;

//IMPORT THAT ITEM IN MAIN
const varNameInOtherFile = require('./file1');
//MAKE ARRAYS CONST

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let xclean = text.replace(/[^\w\s]/gi, "");
console.log(xclean);
//SPLIT STRING INTO ARRAY EACH SPACE
let y = xclean.split(' ');
console.log(y);
console.log(y.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.shift('Sugar');
let allergy = true;
const findIndex = shoppingCart.indexOf('Honey');
if(allergy === true){
    shoppingCart.splice(findIndex,1);
}
const findIndexTea = shoppingCart.indexOf('Tea');
if(findIndexTea != 1){
    //replace var with updated var
    shoppingCart.splice(findIndex,1,'Green Tea');
    //add 'Green' in front of the var 
    //shoppingCart[findIndexTea] = 'Green ' + shoppingCart[findIndexTea];
}
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let x = frontEnd.concat(backEnd);
console.log(x);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// use... 'spread' to pass array elements individually to a function
let x = Math.min(...ages);
console.log(x);
ages.sort(function(a, b){return a-b}); // Sort in ascending order, no idea heh
let median;
if (ages.length % 2 === 0) {
  median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  median = ages[Math.floor(ages.length / 2)];
}
console.log(`Median: ${median}`);

// Find average
let sum = ages.reduce(function(a, b) { return a + b; });
let avg = sum / ages.length;
console.log(`Average: ${avg}`);

// Find range
let max = Math.max(...ages);
let min = Math.min(...ages);
let range = max - min;
console.log(`Range: ${range}`);

console.log(Math.abs(min - avg));
console.log(Math.abs(max - avg));
*/
