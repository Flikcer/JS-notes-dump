//Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies.
//Before HTML5, application data had to be stored in cookies, included in every server request.
//Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
//The data storage limit of cookies in many web browsers is about 4 KB per cookie.
//Web Storages can store far larger data (at least 5MB) and never transferred to the server.
//All sites from the same or one origin can store and access the same data.

//The storage is bound to the origin (domain/protocol/port triplet).
//That is, different protocols or subdomains infer different storage objects, they can’t access data from each other
//stuff you put in the storage from http won't be accessible from https

//The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).

//Web Storage data is, in both cases, not available between different browsers.
//For example, storage objects created in Firefox cannot be accessed in Internet Explorer, exactly like cookies.

//store data temporarily
//saving products that the user places in his shopping cart
//data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
//an be used offline completely using localStorage
//Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
//can be used for user authentication method

//window.localStorage - stores data with no expiration date
//window.sessionStorage - stores data for one session

//localStorage - to display the localStorage object
//localStorage.clear() - to remove everything in the local storage
//localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
//localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
//localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
//localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

//When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object,
//we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

// localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
// console.log(localStorage);

// //numnber storage
// localStorage.setItem("age", 200);
// console.log(localStorage);

// //storing an array in local storage

// //declare array of strings set to const skills
// const skills = ["HTML", "CSS", "JS", "React"];

// //stringify skills first to keep the format when passing to storage
// const skillsString = JSON.stringify(skills, undefined, 4);
// localStorage.setItem("skills", skillsString);
// console.log(localStorage);

// //example with nested array of objects
// let skills = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
//   ]

//   let skillJSON = JSON.stringify(skills)
//   localStorage.setItem('skills', skillJSON)

//   //TO STORE AN ITEM IN localStorage IT MUST BE STRINGIFIED
//   const user = {
//     firstName: 'Asabeneh',
//     age: 250,
//     skills: ['HTML', 'CSS', 'JS', 'React']
//   }

//   const userText = JSON.stringify(user, undefined, 4)
//   localStorage.setItem('user', userText)

//   //how to get data from localStorage
//   localStorage.getItem('key')

//   //example
//   let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName, age, skills) // output: 'Asabeneh', '200', '['HTML','CSS','JS','React']'

// //parse data bove
// let skills = localStorage.getItem('skills')
// let skillsObj = JSON.parse(skills, undefined, 4)
// console.log(skillsObj) //output:['HTML','CSS','JS','React']

// //clear all localStorage
// localStorage.clear()
//set const x to the object containing Paul's info
// const x = {
//   firstName: "Paul",
//   lastName: "Paulrus",
//   age: 42,
//   country: "USA",
//   city: "Nunya",
// };

// //convert x to string so it can be read into storage
// const w = JSON.stringify(x);
// //set the item w in localStorage to the key Paul
// localStorage.setItem("Paul", w);
// //retrieve paul's info from stroage and set it to the variable retrieve
// const retrieve = localStorage.getItem("Paul");
// //print pauls stored info
// console.log(retrieve);
// //parse it back into js
// const parseBack = JSON.parse(retrieve);
// console.log(parseBack);

//set student to local storage
// const student ={
//     firstName: 'Paul',
//     lastName: 'Bill',
//     age: 42,
//     skills: [
//         'sleeping',
//         'idk'
//     ],
//     country: 'USA',
//     enrolled: new Date()
// }

// const  x = JSON.stringify(student);
// localStorage.setItem('students', x);

const personAccount = {
  firstName: "Paul",
  lastName: "Bill",
  //example of set nested within an object
  incomes: new Set([
    { description: "Salary", amount: 5000 },
    { description: "Freelance work", amount: 2000 },
  ]),
  expenses: new Set([
    { description: "Rent", amount: 1000 },
    { description: "Groceries", amount: 500 },
    { description: "Utilities", amount: 200 },
  ]),
  totalIncome() {
    //local var to hold total
    let total = 0;
    //for each income in this.comes
    for (let x of this.incomes) {
      //add the descriptor with amount to total
      total += x.amount;
    }
    return total;
  },
  totalExpense() {
    let total = 0;
    //for each income in this.comes
    for (let x of this.expenses) {
      //add the descriptor with amount to total
      total -= x.amount;
    }
    return total;
  },
  addIncome(description, amount) {
    this.incomes.add({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.add({ description, amount });
  },
  accountinfo() {
    return `${this.firstName} ${
      this.lastName
    } makes ${this.totalIncome()} and his expenses are ${this.totalExpense()}`;
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountinfo());
