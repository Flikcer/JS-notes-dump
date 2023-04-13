/*let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3,22));
console.log(challenge.includes('Script'));
console.log(challenge.split(', '));
console.log(challenge.split(' '));
console.log(challenge.repeat(2));

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arr1 = str.split(',');
console.log(arr1);

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.startsWith(3));
console.log(challenge.endsWith('t'));
console.log(challenge.match(/a/g));

let Days = '30 Days of';
console.log(Days.concat(' JavaScript'));

let str2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str2.indexOf('because'));
console.log(str2.lastIndexOf('because'));
console.log(str2.search('because'));

let str3 = 'Facebook,       ';
console.log(str3.trim());*/

/*
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

console.log(typeof '10' === typeof 10);
console.log(typeof +('10') === typeof 10);
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);
console.log(Math.round(parseFloat('9.8')) === 10);

let py = 'Python';
let jar = 'Jargon';
let w= 'I hope this course is not full of jargon.'

console.log(py.includes('on') && jar.includes('on'));
console.log(w.includes('jargon'));
//or
console.log(/jargon/gi.test(w));

let rand = Math.random();

console.log(rand * 101);
console.log(rand * 51+50);
console.log(rand * 255);

let challengeWord = 'JavaScript'; //Access the 'JavaScript' string characters using a random number.
// log the char at index of the floor(rounded down so length doesnt have to be -1) of the random number generated based on the length of the word passed.
console.log(challengeWord.charAt(Math.floor(Math.random() * challengeWord.length))); 

let pattern = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
console.log(pattern);


let str2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str2.substring(31,55));
console.log(str2.substr(31,23)); //deprecated but instead of (start, end), (start, length);


let love ='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let str3 = 'You cannot end a sentence with because because because is a conjunction';
//since match catches only first iteration use regex with g to find all cases 
//and regex i to find regardless of case, then outside match () ask for length. deleting .length will display all cases not number of cases
console.log(love.match(/love/gi).length);
console.log(str3.match(/because/gi).length);
*/
/*
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let xClean = sentence.replace(/[^\w\s]/gi, '');
console.log(xClean);

let map = new Map();
let splitArr = xClean.split(' ');

splitArr.forEach(word =>{
    if(!map.has(word)){
        map.set((word), 1);
    }else{
        map.set((word), map.get(word)+1);
    }
});
console.log(map);
/*
let map = {};
let splitArr = xClean.split(' ');

splitArr.forEach(word =>{
    if(map[word] === undefined){
        map[word] = 1;
    }else{
        map[word]++;
    }
});
console.log(map);
*/
/*
let map = {};
let splitArr = xClean.split(' ');

splitArr.forEach(word =>{
    map[word] ??= 0;
    map[word]++;
});
console.log(map);

*/
/*
let max = Math.max(...map.values());
let gn = Array.from(map.keys()).filter((word) => map.get(word) === max);

console.log(gn);

*/
/*
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let digits = income.match(/\d+/g);
console.log(digits);
let total = (Number(digits[0])+ Number(digits[2])) *12 + Number(digits[1]);
console.log(total);
*/
/*
let x = (prompt('enter age 1'));
let y = (prompt('enter age 2'));
let z = x.length > y.length ? `I am ${x - y} older than you` : `Your are ${y - x} years older than me`;
alert(z);
*/
/*
 let a= 4;
 let b = 5;
 console.log( a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`);

function math (x,y) {
    let multiply = x*y
    let add = x+y
    let sub = x-y;
    return [multiply, add, sub];
}

let num1 = 2;
let num2 = 3;
let result = math(num1,num2);
console.log(result);

//same thing
const math = (x, y) => [x * y, x + y, x - y];

const num1 = 2;
const num2 = 3;
const result = math(num1, num2);
console.log(result);
 */
const words = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "grape",
  "orange",
];

const wordCount = words.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);
