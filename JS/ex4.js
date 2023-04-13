/*
let namer ='Paul';
const nameLength = namer.length > 7 ? 'your name is long' : 'your name is short';

console.log(nameLength);
*/
//let x = prompt('Enter your age:');
//alert( Number(x) >= 18 ? 'You are old enough to drive' : `You must wait ${18 - x} years to drive`);
//or
/*if(Number(x) >= 18){
    alert('You are old enough to drive');
}else{
    alert(`You must wait ${18 - x} years to drive`);
}*/
/*
let a= 4;
console.log( a % 2 === 0  ? `${a} is even` : `${a} is odd`);*/
/*
let x = (prompt('enter age 1'));
let y = (prompt('enter age 2'));
let z = x.length > y.length ? `I am ${x - y} older than you` : `Your are ${y - x} years older than me`;
alert(z);
*/
/*
let input = prompt('Whats your grade?')
let x = Number(input);

    if(x <= 100 && x >= 90){
        console.log('A');
    }else if(x <= 89 && x >= 80){
        console.log('B');
    }else if(x <= 79 && x >= 70){
        console.log('B');
    }else if(x <= 69 && x >= 60){
        console.log('B');
    }else if(x <= 59 && x >= 0){
        console.log('B');
    }else{
        console.log('invalid grade');
    }
//loop and ask for 5 grades from person
for(let i = 1; i <= 5; i++) {
    let input = prompt('Enter grade ' + i + ':');
    let x = Number(input);
  
    if(x <= 100 && x >= 90){
      console.log('A');
    } else if(x <= 89 && x >= 80){
      console.log('B');
    } else if(x <= 79 && x >= 70){
      console.log('C');
    } else if(x <= 69 && x >= 60){
      console.log('D');
    } else if(x <= 59 && x >= 0){
      console.log('F');
    } else{
      console.log('Invalid grade');
    }

    let input = prompt('What is the month?');
    let x = input.toLowerCase();
    
    if(x === 'january' || x === 'february' || x === 'december'){
        console.log('Winter');
    } else if(x === 'march' || x === 'april' || x === 'may'){
        console.log('Spring');
    } else if(x === 'june' || x === 'july' || x === 'august'){
        console.log('Summer');
    } else if(x === 'september' || x === 'october' || x === 'november'){
        console.log('Autumn');
    } else{
        console.log('Invalid month');
    }   
    let input = prompt('check day?');
    let x = input.toLowerCase();
    
    if(x === 'monday' || x === 'tuesday' || x === 'wednesday'|| x === 'thursday' || x === 'friday'){
        console.log(`${x} is a working day`);
    } else if(x === 'saturday' || x === 'sunday'){
        console.log(`${x} is the weekend`);
    } else{
        console.log('Invalid');
    } 
     */
//or
/*
    
let input = prompt('check day?');
let x = input.toLowerCase();
let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

if (weekdays.includes(x)) {
  console.log(`${x} is a working day`);
} else if (x === 'saturday' || x === 'sunday') {
  console.log(`${x} is the weekend`);
} else {
  console.log('Invalid');
}
*/
let month = prompt("Enter a month (e.g. January):");
let year = prompt("Enter a year:");

// Array of months and their number of days
const daysInMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

// Check if it's a leap year
if (year % 4 == 0) {
  daysInMonth["February"] = 29;
}

// Print the number of days in the month
if (daysInMonth[month]) {
  console.log(`${month} ${year} has ${daysInMonth[month]} days.`);
} else {
  console.log("Invalid month input.");
}

//CHECK IF USER INPUT IS INVALID NUMBER OR YEAR
/*
let month = prompt("Enter a month (e.g. January):");
let year = prompt("Enter a year:");

// Regular expression to match a valid month name
const validMonthRegex = /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i;

// Check if the month input is valid
if (!validMonthRegex.test(month)) {
  console.log("Invalid month input.");
} else {
  // Array of months and their number of days
  const daysInMonth = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
  };

  // Check if it's a leap year
  if ((year % 4 == 0)) {
    daysInMonth["February"] = 29;
  }

  // Check if the year input is valid
  if (isNaN(year) || year < 0 || year > 9999) {
    console.log("Invalid year input.");
  } else {
    // Print the number of days in the month
    console.log(`${month} ${year} has ${daysInMonth[month]} days.`);
  }
}
*/
