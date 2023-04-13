//A Promise is a way to handle asynchronous operations in JavaScript.
//It allows handlers with an asynchronous action's eventual success value or failure reason.
//This lets asynchronous methods return values like synchronous methods:
//instead of immediately returning the final value,
//the asynchronous method returns a promise to supply the value at some point in the future.

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation completed successfully.
//rejected: meaning that the operation failed.

//Promise.prototype.then() and Promise.prototype.catch() return promises so they can be chained together
//so one promise's return is the input to the next promise

// const x = [4, 8, 9, 12];
// const y = [...x].map((num) => num * 6);
// console.log(y);

//callbacks
//assign the constant doSomething to the function that uses callback as the paramter
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback("error", skills);
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };

// doSomething(callback);

// //if error is false return the code block skills
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
//   }

//   doSomething((err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   })

//   //promise
//   const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })

//promised settled with resolve
//create a new promise named doPromise resolce and reject are native to the promise method
// const doPromise = new Promise((resolve, reject) => {
//   //set timeout for 2 seconds
//   setTimeout(() => {
//     //declare an array named skills
//     const skills = ["HTML", "CSS", "JS"];
//     //if skills length less than 0 or falsy in this case
//     if (skills.length > 0) {
//       //resolve which is linked to .then
//       resolve(skills);
//     } else {
//       //if falsy value reject which is tied to catch
//       reject("Something wrong has happened");
//     }
//   }, 2000);
// });

// //finish promise statment
// doPromise
//   //perform resolve value when called, chained
//   .then((result) => {
//     console.log(result);
//   })
//   //perform reject value when called, chained
//   .catch((error) => console.log(error));

// //promsie settled with a reject
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       //since skills does not include 'Node, pass to reject else
//       if (skills.includes('Node')) {
//         resolve('fullstack developer')
//       } else {
//         //else value for reject chained to catch
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

// doPromise.then(function(result) {
//   console.log(result);
// }).catch(function(error) {
//   console.error(error);
// });
// // doPromise
// //   .then(result => {
// //     console.log(result)
// //   })
// //   .catch(error => console.error(error))

//create a var url and set it to the API url
// const url = "https://restcountries.com/v2/all";
// //call the built in fetch method that returns a promise based on whether it succeeds or fails
// fetch(url)
//   //if network request completed .then(), use an anonymous funciton to compile data into an object from JSON
//   .then((response) => response.json())
//   //take the resolve of the promise returned from the JSON above, if successful .the() console log the parsed data
//   .then((data) => {
//     // getting the data
//     console.log(data);
//   })
//   //if error return the actual error that caused the issue to the console
//   .catch((error) => console.error(error));

//async and await
//create asynchronous function named square with the paramter n
//an async funciton will return a promise
//   const square = async function (n) {
//     return n * n
//   }
//   //prints an overlooking view of the promise
//   square(2)//Promise {<resolved>: 4}

// const square = async function (n) {
//     return n * n
//   }
//   //await will be tied to the promise and will await the result of the promise
//   const value = await square(2)
//   console.log(value)//4

//real example
//const players = await (await fetch('https://dnd-managerr-default-rtdb.firebaseio.com/players.json')).json()

//if you request a coffee you cannot complete the action of drinking it until it has been delivered to you

// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error(error));
// //above as async and await
// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const countries = await response.json();
//     console.log(countries);
//   } catch (err) {
//     console.error(err);
//   }
// };
// console.log("===== async and await");
// fetchData();

//axios is a popular Promise-based HTTP client for JavaScript that can be used in both browser and Node.js environments.
// It provides an easy-to-use interface for making HTTP requests to web servers and handling their responses.
//With axios, you can make GET, POST, PUT, and DELETE requests, and also set request headers, query parameters, and request bodies.
// const aRequest = require('axios');
// //use api with axios that sends an HTTP get request and returns it as a promise
// let response = aRequest.get('https://boredapi.com/api/activity');
// //this is not possible since we are not expecting a response object
// //console.log(`you could ${response.data.activity}`);

//const aRequest = require("axios");

// aRequest
//   .get("https://boredapi.com/api/activity")
//   .then((repsonse) => {
//     console.log(`you could ${repsonse.data.activity}`);
//   })
//   .catch((error) => {
//     console.log(`error ${error}`);
//   });

//await means await our code to be completed before moving on to the next line
//in this form we have no erroring method
// async function getActivity() {
//   //awaits data from url api
//   let response = await axiosResuest.get("hettps://boredapi.com/api/activity");
//   //will not run until data from the await is returned
//   console.log(`you could ${repsonse.data.activity}`);
// }

//form with try and catch for error handling
// async function getActivity() {
//   //wrap everything in a try/catch to handle errors if caught
//   try {
//     let response = await aRequest.get("hettps://boredapi.com/api/activity");
//     console.log(`you could ${repsonse.data.activity}`);
//   } catch {
//     console.error(error);
//   }
// }

// const url = "https://restcountries.com/v2/all";
// //name shorthand async function
// const fetchData = async () => {
//   //wrap in try block to enable the use of catch for error handling
//   try {
//     //assign the action of using the fetch api to make an http request to the url
//     const response = await fetch(url);
//     //then parse it to json and return a promise
//     const countries = await response.json();
//     //console log the promise of the returned data from the api
//     console.log(countries);
//     //if error
//   } catch (err) {
//     //display the error causing
//     console.error(err);
//   }
// };
// //uneccessary
// //console.log('===== async and await')
// //call the above function
// fetchData();

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// async function getCountries() {
//   try {
//     const response = await fetch(countriesAPI);
//     const data = await response.json();
//     //will specify the data to get from the API
//     //map the original objects from the API response to new objects with only the desired properties
//     const countries = data.map((country) => {
//       return {
//         name: country.name,
//         capital: country.capital,
//       };
//     });
//     console.log(countries);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getCountries();

// async function getCats() {
//   try {
//     const response = await fetch(catsAPI);
//     const data = await response.json();
//     const cats = data.map((cat) => {
//       return {
//         name: cat.name,
//       };
//     });
//     console.log(cats);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getCats();

// async function getCats() {
//   try {
//     const response = await fetch(catsAPI);
//     const data = await response.json();
//     const cats = data.map((cat) => {
//       return cat.weight.metric;
//     });
//     console.log(cats);
//     //after the weights have been found reduce the array and divide the number by the array length
//     const sum = weights.reduce((acc, weight) => acc + weight, 0);
//     const avg = sum / weights.length;
//     console.log(`The average weight of a cat is ${avg} kg`);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getCats();

//get and slice largest 10 populations from the countries objects after parsing
// async function getLargestCountries() {
//   try {
//     const response = await fetch(countriesAPI);
//     const data = await response.json();

//     // sort the countries by population (descending order)
//     const sortedCountries = data.sort((a, b) => b.population - a.population);

//     // slice the first 10 countries from the sorted array
//     const largestCountries = sortedCountries.slice(0, 10);

//     console.log(largestCountries);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getLargestCountries();

//   async function getCountries() {
//     try {
//       const response = await fetch(countriesAPI);
//       const data = await response.json();
//       const sortedCountries = data.sort((a, b) => b.population - a.population);

//       // slice the first 10 countries from the sorted array
//       const largestCountries = sortedCountries.slice(0, 10).map(country => ({
//         name: country.name,
//         population: country.population
//       }));

//       console.log(largestCountries);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   getCountries();

//Read the countries api and count total number of languages in the world used as officials
// async function getCountries() {
//   try {
//     const response = await fetch(countriesAPI);
//     const data = await response.json();

//     let map = new Map();
//     const lang = data.map((lang) => {
//       return lang.language;
//     });
//     lang.forEach((word) => {
//       if (!map.has(word)) {
//         map.set(word, 1);
//       } else {
//         map.set(word, map.get(word) + 1);
//       }
//     });
//     console.log(map);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getCountries();

//create an async function named countries
async function countries() {
  //put all in a try to allow use of a catch for error
  try {
    //set var to await the promise value of countries API
    const response = await fetch(countriesAPI);
    //set var to the promise val of the parsed api data
    const data = await response.json();

    //set var to the languages of the data object
    const langs = data.map((lang) => {
      return lang.languages[0].name;
    });

    //if you want to just get the uniqe set them all to a set
    // let x = new Set();
    // langs.forEach((word) => {
    //   x.add(word);
    // });
    //use a map to count the number of times a lang is found and set it to the key val
    let map = new Map();
    langs.forEach((word) => {
      //map the array to the map and increment the key if already in arr, if not set to 1
      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        map.set(word, map.get(word) + 1);
      }
    });
    console.log(langs);
    console.log(map);
    //console.log(x);
    //do math to find max key val and print it to nect to the name of that key
    let max = Math.max(...map.values());
    let mostused = Array.from(map.keys()).filter(
      (word) => map.get(word) === max
    );
    console.log(mostused, max);
    //error if need be
  } catch (err) {
    console.error(err);
  }
}
//perform function
countries();
