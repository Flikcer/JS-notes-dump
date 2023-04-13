const webTechs = require('./web_techs');
const countries = require('./countries');
console.log(webTechs);
console.log(countries);

let firstThree = countries.slice(0, 3);
let lastThree = countries.slice(-3);

//function to find middle of arrays
function getMiddle(arr) {
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return [arr[mid - 1], arr[mid]];
    } else {
      return arr[mid];
    }
  }

/*
if(!webTechs.includes('Sass')){
    webTechs.push('Sass');
    console.log(webTechs);
}else{
    console.log('Sass is a CSS preprocess');
}

let eth = 'Ethiopia';
//if countries arr ! does not includes ...
if(!countries.includes(eth)){
    countries.push('Ethiopia');
}
console.log(countries);

if(findIndex != 1){
    countries.push('Ethiopia')
}
console.log(countries);

//FOR A PASSED IN VALUE FUNCTION
function addIfNotExists(value) {
  if (myArray.indexOf(value) === -1) {
    myArray.push(value);
  }
}
*/

const len = countries.length;
let firstHalf, secondHalf;

if (len % 2 === 0) {
  // Even number of elements
  firstHalf = countries.slice(0, len/2);
  secondHalf = countries.slice(len/2);
} else {
  // Odd number of elements
  firstHalf = countries.slice(0, Math.floor(len/2) + 1);
  secondHalf = countries.slice(Math.floor(len/2));
}

console.log(firstHalf);
console.log(secondHalf);
// :) 