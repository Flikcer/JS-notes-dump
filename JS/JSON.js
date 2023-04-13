//JSON stands for JavaScript Object Notation.

//The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only.
//JSON is a light weight data format for storing and transporting.
//JSON is mostly used when data is sent from a server to a client.
//JSON is an easier-to-use alternative to XML.

//users here is a JSON and not a normal obj ebcause the keys are in ""
// {
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }

//In JavaScript the keyword JSON has parse() and stringify() methods.
//When we want to change the JSON to an object we parse the JSON using JSON.parse().
//When we want to change the object to JSON we use JSON.stringify().
//ex would be
//Signup form, you would collect all the data on the form, validate it, turn it into JSON text format,
//send it to the server through the network, have the server parse the JSON text, validate the object you created from
//JSON and then save it into the DB based on the information in the object.
//For example. I have a signup form that needs email, password, username. I can transfer that information from the
//frontend to the backend in text format.
//Remember everything is binary, text is just binary that conforms to characters per Xbytes

//object, being used in string interpretation, class B has an overridden toString() all I meant,
//there is a toJSON() that can be overridden too to change what parsing the object to JSON looks like

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`;

// const usersObj = JSON.parse(usersText, undefined, 4);
// console.log(usersObj);
// class A {

// }
// class B {
//     toString() {
//         return "This is class B as a String"
//     }
// }

// const aa = new A();
// const bb = new B();

// console.log(`${aa}`); //[object Object]
// console.log(`${bb}`);
//JSON.parse()
//JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/*JSON.parse(json, (key, value) => {

})
*/

// const jsonString = `{
//     "name": "John Doe",
//     "age": 30,
//     "email": "john.doe@example.com",
//     "hobbies": ["reading", "painting", "hiking"],
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "state": "CA",
//       "zip": "12345"
//     }
//   }`;
// const person = JSON.parse(jsonString);
// console.log(person);

//reviver function
// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`;
// //The 'reviver' function checks if the current value is a string and the current key is not email. If both conditions are true,
// // the value is converted to uppercase using the toUpperCase() method of the string object. If the conditions are false,
// //the value is left unchanged.
// const usersObj = JSON.parse(usersText, (key, value) => {
//   let newValue =
//     typeof value == "string" && key != "email" ? value.toUpperCase() : value;
//   return newValue;
// });
// console.log(usersObj);
//first outputted obj after being run through the function and being parsed
/*{
    firstName: 'ASABENEH',
    lastName: 'YETAYEH',
    age: 250,
    email: 'asab@asb.com'
  },*/

//example using parse and stringify
//to make an object readable for a network request you json.stringify it.
//when you receive data back, you can use json.parse() on it to turn it back into javascript readable values

// const users = {
//     users: [
//       {
//         firstName: "Asabeneh",
//         lastName: "Yetayeh",
//         age: 250,
//         email: "asab@asb.com",
//       },
//       {
//         firstName: "Alex",
//         lastName: "James",
//         age: 25,
//         email: "alex@alex.com",
//       },
//       {
//       firstName: "Lidiya",
//       lastName: "Tekle",
//       age: 28,
//       email: "lidiya@lidiya.com",
//       }
//     ]
// }

// console.log(users)
// const stringifyedUsers = JSON.stringify(users)
// console.log(stringifyedUsers)
// const parsedUsers = JSON.parse(stringifyedUsers)
// console.log(parsedUsers)

//JSON filter array
//  const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
//   }
//   //take and stringify just these properties in the array to JSON with an indentation of 4
//   const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
//   console.log(txt)

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

//parse the json obj text to a regular obj
const w = JSON.parse(txt);
// console.log(w.Alex.skills);
// console.log(w);

//find user with most skills
function maxSkill() {
  let var1 = 0;
  let str = "";
  for (const x in w) {
    if (w[x].skills.length > var1) {
      var1 = w[x].skills.length;
      str = x;
    }
  }
  console.log(`${str} has the most skills with ${var1}`);
}

//access parsedObj w[keynames of w].skills key.length of skills array
//w[x].skills.length;

maxSkill();

//stringify skills
//const x = JSON.stringify(skills);
//console.log(x);
//stringify the age of student
//const y = JSON.stringify(student, ["age"]);
//console.log(y);
//const z = JSON.stringify(student, ["isMarried"]);
//console.log(z);
// const q = JSON.stringify(student);
// console.log(q);
// //stingify needs '' around key names
// const r = JSON.stringify(student, ["firstName", "lastName", "skills"]);
// console.log(r);
