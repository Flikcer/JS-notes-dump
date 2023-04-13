/*
for (i = 0; i <= 10; i++){
    console.log(i);
}
let x = 0;
while(x<=10){
    console.log(x);
    x++;
}
let y=0;
do{
    console.log(y);
    y++;
}while(y <= 10);

for (i=0; i<=7; i++){
    let x = '';
    for(j=0; j<i;j++){
        x+='#';
    }
    console.log(x);
}

for(i=0;i <=10; i++){
    let x = i*i;
    console.log(`${i} x ${i} = ${x}`);
}

console.log(`i  i^2  i^3`);
for(i=0;i <=10; i++){

    let x = i**2;
    let y = i**3;

    console.log(`${i}  ${x}  ${y}`);
}
//print all even 1-100
for (i=0; i <= 100; i++){
    if(i % 2 === 0){
console.log(i);
}};
//print all odd 1-100
for (i=0; i <= 100; i++){
    if(i % 2 != 0){
console.log(i);
}};

//print all prime to 100
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }

 //add all numbers to 100 and print the total
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  
  console.log("The sum of all numbers from 0 to 100 is: " + sum);

//same thing but prints running total
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
  console.log(i + " - Current sum: " + sum);
}

//print odd and even sums, can set them to an array by simply setting a new var as them with the values, this is close to a nested array
let sumE = 0;
let sumO = 0;

for (let i = 0; i <= 100; i++) {
    if(i % 2===0){
  sumE += i;
}
    if(i % 2 !== 0){
        sumO += i; 
    }
}
console.log(`sumE: ${sumE}`);
console.log(`sumO: ${sumO}`);

const arrVar = [sumE, sumO];
console.log(arrVar);

c
/*
//5 unique numbers
const arr = [];
while (arr.length < 5) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  if (arr.includes(randomNum)) {
    continue;
  }
  arr.push(randomNum);
}
console.log(arr);

//generate random char from charcode of the number generated at the whole floor value then print, ascii vals for all capital and lowercase used
const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
console.log(randomLetter);


for(i=0;i<5;i++){
    const fiveVal = Math.floor(Math.random()*100)+1;
}
console.log(fiveVal);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const results = []
countries.forEach(country => {
    //slice first 3 letters and set to uppercase like an airport value
    const cCode = country.slice(0, 3).toUpperCase();
    //find length of each
    let cLength = country.length;
    //push each value to each array value and create a nested array with each value added in the literal
    results.push([country, cCode, cLength]);
  })

  console.log(results);

//generate 5 random numbers convert them to a string, find char code at that string within ascii vals of letters and save to arr
const arr = [];
for(i=0;i<5;i++){
    const fiveVal = Math.floor(Math.random()* (90 - 65 +1)) + 65;
    arr.push(String.fromCharCode(fiveVal));
}
console.log(arr);

//generate a random amount of random nums 1-100
const arr = [];
const length = Math.floor(Math.random()*100) + 1;
for(let i=0;i<length;i++){
    const val = Math.floor(Math.random()* (90 - 65 +1)) + 65;
    //const randomCharCode = Math.floor(Math.random() * (122 - 48 + 1)) + 48; random nums and letters
    arr.push(String.fromCharCode(val));
}
console.log(arr);

//RANDOM HEX NUM
const randomHex = Math.floor(Math.random() * 0xFFFFFFFF).toString(16);
console.log(randomHex);

/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  const arrUpper = [];
  for (let i = 0; i < countries.length; i++) {
    arrUpper.push(countries[i].toUpperCase());
  }
  const results = []
  countries.forEach(country => {
      //find length of each
      let cLength = country.length;
      //push each value to each array value and create a nested array with each value added in the literal
      results.push(cLength);
    })

    console.log(arrUpper);
    console.log(results);
    

//ends with letters
const results = [];
countries.forEach(country => {
    if(country.endsWith('ia')){
    let cPush = country;
    //push each value to arr results
    results.push(cPush);
  }})

console.log(results);



let map = new Map();

countries.forEach(word =>{
    map.set(word, word.length);
});
console.log(map);


let max = Math.max(...map.values());
let printLargest = Array.from(map.keys()).filter((word) => map.get(word) === max);
//to print the value and the key
//let printLargest = Array.from(map.entries()).filter(([word, length]) => length === max).map(([word, length]) => ({ word, length }));
console.log(printLargest);




const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
//map and set values, then print highest mapped key (largest word)
let map = new Map();

webTechs.forEach(word =>{
    map.set(word, word.length);
});
console.log(map);

let max = Math.max(...map.values());
let printLargest = Array.from(map.keys()).filter((word) => map.get(word) === max);

console.log(printLargest);

//similar but stores into separate array with no tie to value
const results = []
webTechs.forEach(tech => {
    let tLength = tech.length;
    results.push(tLength);
  })

  console.log(results);



 const mernStack = ['MongoDB','Express', 'React', 'Node'];
 let x = ''
 for(let i=0;i<mernStack.length;i++){

  x += mernStack[i][0];
 }
console.log(x);
//bad example to show printing one by one
for(let i=0;i<mernStack.length;i++){
    let x = ''
    x += mernStack[i][0];
    console.log(x);
}

 //take array and return a nested array w the value next to its length
const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
const arr2 = [];
for (const lang of arr){
    arr2.push([lang, lang.length]);
}
console.log(arr2);
  */
