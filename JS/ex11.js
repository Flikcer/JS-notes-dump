// //nullish coalescing
// const myValue = null;
// const defaultValue = 42;

// const result = myValue ?? defaultValue;

// console.log(result); // Output: 42
//OBJECT destructuring example
//
// const game = {
//   title: "DK",
//   platform: "SEGA",
//   year: 1994,
// };
// //dont do this
// // let title = game.title;
// // let platform = game.platform =game.platform;
// // let year = game.year;
// //you can rename the variables differently than the properties as shown in year
// let { title, platform, year: release } = game;
// //console.log{title, platform, year}
// //print year
// console.log(release);

// const game = {
//   title: "DK",
//   platform: "SEGA",
//   year: 1994,
//   characters: {
//     main: "Donkey Kong",
//     side: "Diddy Kong",
//     boss: "King K. Rool",
//   },
// };

// let {
//   title,
//   platform,
//   year: release,
//   //this chartacter is in reference to the characters in game,
//   //this is so you can access the entire characters object from game without using game.characters
//   characters,
//   //this will destrcuture each element in the object separately so you can access each element of the object
//   characters: { main, side, boss },
// } = game;

// console.log(main, side, boss);

// console.log(characters);

//example of use case for destructuring
// const user = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//   },
// };

// // Extracting the nested address object and renaming the "zip" property to "zipcode"
// const {
//   name,
//   age,
//   address: { street, city, state, zip: zipcode },
// } = user;

// console.log(
//   `${name} is ${age} years old and lives at ${street}, ${city}, ${state} ${zipcode}`
// );
// //this is pulling the mength method built in and saving the value of the given var
// let { length } = "Hello";
// console.log(length);

// //Array destrcuturing
// //this wi
// const book = [
//   "The name of book",
//   "Paul",
//   "1956",
//   ["shift", "puzzle", "character3"],
// ];

//whats happening on backend
// let title = book[0];
// let author = book[1];
// let year = book[2];

//create these varaibles equal to the name being given to them in the book object (equals to book)
//you are not attaching the name of the created var to the name of the property like when used with objects
//it is tied to its index sot eh anme can be aanything as long as they are ordered properly
// let [title, author, year, [a, b, c]] = book;
// console.log(a, b, c);

//if you want to skip one you need to leave a space still to keep the order since it is an aray
//let [title, , year] = book;
//this is bad practice but this is how you would name the sub obj numbers
// let user = {
//   firstName: "Paul",
//   lastName: "Paulrus",
//   country: "USA",
//   todos: {
//     1: "Do the shopping",
//     2: "play some games",
//     3: "Die",
//   },
// };
// //destructuring with numbers as the property in object
// let {
//   firstName,
//   lastName,
//   country,
//   todos,
//   //these are the names of the properties, they are in [] bc they are integers, THEY ARE NOT INDEXES
//   todos: { [1]: val1, [2]: val2, [3]: val3 },
// } = user;
// console.log(firstName, lastName, country, todos);
// console.log(val1, val2, val3);

//corect practice
let user = {
  firstName: "Paul",
  lastName: "Paulrus",
  country: "USA",
  todos: {
    todo1: "Do the shopping",
    todo2: "play some games",
    todo3: "Die",
  },
};
//destructuring with numbers as the property in object
let {
  firstName,
  lastName,
  country,
  todos,
  //these are the names of the properties, they are in [] bc they are integers, THEY ARE NOT INDEXES
  todos: { todo1, todo2, todo3 },
} = user;
//console.log(firstName, lastName, country, todos);
console.log(todo1, todo2, todo3);

const arr = [
  "walnuts",
  "peanuts",
  "blackberries",
  ["secretfrui1", "secretfruit2"],
];
//arr does not need a name:, it is based on order of index
//and you input any var name, it will be tied to that order in the index
let [arrVal1, arrVal2, arrVal3, [secret1, secret2]] = arr;
console.log(arrVal2, secret2);

const arr2 = ["Paul", "Walrusman", "Jones", ["nest", 2, "nest2"]];
//cant assign the entire sub array like you can with object destrcuture
//ex of skipping jones
let [name1, name2, , [nest, two, nest2]] = arr2;

//console.log(name2);

//let arr1 = ['key1', 'key2', 'key3'];
let arr2 = ["value1", "value2", "value3"];

let arrMerge = arr1.map((key, index) => `${key}: ${arr2[index]}`);

console.log(arrMerge); // Output: ["key1: value1", "key2: value2", "key3: value3"]
