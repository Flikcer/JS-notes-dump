/*
let firstName = 'Paul';
let lastName = 'Williams';
let country = 'USA';
let city = 'Williamstown';
let age = 42;
let isMarried = false;
let year = 2023;
console.log(typeof(isMarried));
*/
/*
console.log(typeof '10'=== typeof 10 );
console.log(parseInt('9.8')=== 10);

let y = 10;

console.log('10' == 10);
console.log(typeof 10 == typeof 32);
console.log(4>3);

console.log('10' === 10);
console.log(typeof 10 == typeof '6');
console.log(4<3);
*/
/*
let py = 'python';
let jar = 'jargon';

console.log(py.length);
console.log(jar.length);
console.log(jar.length != py.length);
*/
/*
let py = 'python';
let jar = 'jargon';
console.log(py.includes('on') && jar.includes('on'));
*/
/*
let x = (prompt('enter base'));
let y = (prompt('enter height'));

console.log(0.5 * x * y);
*/
/*
let x = Number(prompt('enter x'));
let y = Number(prompt('enter y'));
let z = Number(prompt('enter z'));
console.log(x + y + z);
*/
/*
let x = Number(prompt('enter hours worked:'));
let y = Number(prompt('enter pay rate per hr'));
let z = x * y;

alert(`Your weekly earning is ${z}`);
*/
/*
let namer ='Paul';
const nameLength = namer.length > 7 ? 'your name is long' : 'your name is short';

console.log(nameLength);
*/
/*
let x = (prompt('enter name 1'));
let y = (prompt('enter name 2'));
let z = x.length > y.length ? `Your first name, ${x} is longer than your family name, ${y}` : `Your first name, ${y} is longer than your family name, ${x}`;
alert(z);
*/
/*
let x = (prompt('enter age 1'));
let y = (prompt('enter age 2'));
let z = x.length > y.length ? `I am ${x - y} older than you` : `Your are ${y - x} years older than me`;
alert(z);
*/

let now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const day = now.getDay(); // return date (1 - 31)
const hour = now.getHours();
const minute = now.getMinutes();
if (hour < 10) {
  hour = "0" + hour;
} //add a zero if times less than 10
if (minute < 10) {
  minute = "0" + minute;
} //add a zero if times less than 10

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
