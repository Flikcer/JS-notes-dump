//console.warn("This is a warning");
// console.warn(
//   "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
// );
// console.warn("Warning is different from error");

// console.error("This is an error message");
// console.error("We all make mistakes");

//console.table can only be used on an arr or obj
// const names = ["Asabeneh", "Brook", "David", "John"];
// console.table(names);

// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// console.table(user);

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// console.table(countries);
// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.table(users);

//console.time
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// console.time("Regular for loop");
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1]);
// }
// console.timeEnd("Regular for loop");

// console.time("for of loop");
// for (const [name, city] of countries) {
//   console.log(name, city);
// }
// console.timeEnd("for of loop");

// console.time("forEach loop");
// countries.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd("forEach loop");

// console.info("30 Days Of JavaScript challenge is trending on Github");
// console.info("30 Days Of fullStack challenge might be released");
// console.info("30 Days Of HTML and CSS challenge might be released");

//console.group
// const names = ["Asabeneh", "Brook", "David", "John"];
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];

// console.group("Names");
// console.log(names);
// console.groupEnd();

// console.group("Countries");
// console.log(countries);
// console.groupEnd();

// console.group("Users");
// console.log(user);
// console.log(users);
// console.groupEnd();

const func = () => {
  console.count("Function has been called");
};
func();
func();
func();


//clean sentence, map all words and key the amount of times each word is used, then print most used word and how many times
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
