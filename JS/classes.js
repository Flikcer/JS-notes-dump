//The constructor inside a class is a builtin function which allow us to create a blueprint for the object

// class Person {
//   constructor(firstName, lastName) {
//     //this refers to the class itself here
//     console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// //the value of the properties will be passed when we instantiate a person
// const person1 = new Person("Paul", "Paulrus");
// const person2 = new Person("Lidiya", "Tekle");
// const person3 = new Person("Abraham", "Yetayeh");

// console.log(person1);
// console.log(person2);
// console.log(person3);

//another example
// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       console.log(this) // Check the output from here
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

//   console.log(person1)

//DEFAULT VALUES OF PROPERTIES EXAMPLE
// class Person {
//   constructor(
//     firstName = "Asabeneh",
//     lastName = "Yetayeh",
//     age = 250,
//     country = "Finland",
//     city = "Helsinki"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const person1 = new Person(); // it will take the default values
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// console.log(person1);
// console.log(person2);

//example of storing users from an array of user objects
// class Person {
//     constructor(firstName, lastName, email, password, age, country, city) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//       this.password = password;
//       this.age = age;
//       this.country = country;
//       this.city = city;
//     }
//   }

//   // Create an array of user objects
//   const users = [
//     new Person("John", "Doe", "john.doe@example.com", "123456", 25, "USA", "New York"),
//     new Person("Jane", "Doe", "jane.doe@example.com", "password", 30, "Canada", "Toronto"),
//     new Person("Bob", "Smith", "bob.smith@example.com", "secret", 40, "Australia", "Sydney"),
//     new Person("Alice", "Johnson", "alice.johnson@example.com", "qwerty", 20, "UK", "London")
//   ];

//   // Log the users array to the console
//   console.log(users);

//example of store to mongo DB
// const { MongoClient } = require('mongodb');

// // Connection URI
// const uri = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'myDatabase';

// // Collection Name
// const collectionName = 'users';

// // Create a new MongoClient
// const client = new MongoClient(uri, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('Connected to MongoDB');

//   // Get a reference to the database
//   const db = client.db(dbName);

//   // Get a reference to the collection
//   const collection = db.collection(collectionName);

//   // Insert the users into the collection
//   collection.insertMany(users, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(`Inserted ${result.insertedCount} users`);

//     // Close the connection
//     client.close();
//     console.log('Closed MongoDB connection');
//   });
// });

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//     //class method
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

//   console.log(person1.getFullName())
//   console.log(person2.getFullName())

//   //intial values in proerties, score
//   class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

//   console.log(person1.score)
//   console.log(person2.score)

//   console.log(person1.skills)
//   console.log(person2.skills)

//example of getter
// const obj = {
//   log: [a, b, c],
//   get latest() {
//     return this.log[this.log.length - 1];
//   },
// };

// //these do the same thing
// console.log(obj.latest);
// console.log(obj.log[obj.log.length-1]);

//getter
// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     //you could call these separately like they are outside of the class
//     //but it more eleageant to set the values of the properties you want to a getter like this
//     get getScore() {
//       return this.score
//     }
//     //this will return the values of this.skills in the constructor function object above
//     get getSkills() {
//       return this.skills
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

//   console.log(person1.getScore) // We do not need parenthesis to call a getter method
//   console.log(person2.getScore)

//   console.log(person1.getSkills)
//   console.log(person2.getSkills)

//   //setter
//   //in this example the setter is set to a method and can be called with parameters as the values essentially
//   class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'
//   //1
//   //["HTML", "CSS", "JavaScript"]
//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'
//   //1
//   //["Planning", "Managing", "Organizing"]

//   console.log(person1.score)
//   console.log(person2.score)

//   console.log(person1.skills)
//   console.log(person2.skills)

//   class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//     //get person info method within Person class will assign the local variable fullName to this.getfullname
//     //which references the method above that joins the user entered first and last names into one string
//     //
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       //This line constructs a string representation of the skills array on the Person instance.
//       //It first checks whether the length of the array is greater than zero, and if so,
//       //constructs a string that includes all but the last element of the array (joined by commas),
//       //followed by the last element with the word "and" in front of it. The resulting string is assigned to the skills variable.
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
//       let formattedSkills = skills ? `He knows ${skills}` : ''

//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }

//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
//   const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'

//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'

//   console.log(person1.getScore)
//   console.log(person2.getScore)

//   console.log(person1.getSkills)
//   console.log(person2.getSkills)
//   console.log(person3.getSkills)

//   console.log(person1.getPersonInfo())
//   console.log(person2.getPersonInfo())
//   console.log(person3.getPersonInfo())

//   //static method

//   //Static methods are not called on instances of the class.
//   //Instead, they are called on the class itself. These are often utility functions,
//   //such as functions to create or clone objects. An example of static method is Date.now().
//   //The now method is called directly from the class.

//   class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     static createDefaultPerson() {
//       return new Person("John", "Doe");
//     }
//   }
//   //creates a default person with the name John Doe as an obj in the Person class
//   const defaultPerson = Person.createDefaultPerson();

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

//console.log(Person.favoriteSkill());
//console.log(Person.showDateTime());

//inheritance
//example of a child class extdned from the parent class, teacher, etc would be other examples of this
//the student class holds all the same properties and methods as the parent class, hence extends
//so you can add data the same way to the Student class and they will be stored as referenced to the student class
class Student extends Person {
  //this log will also show the difference in the example between the parent and student class logs
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

//overriding methods
// When the method is called on an object of the subclass, the subclass method is called instead of the superclass method.
class Student extends Person {
  //in this case we have to redeclare the constructor to add to it
  constructor(firstName, lastName, age, country, city, gender) {
    //we call the super() function to access all the properties from the parent class, and tell it what to grab
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  //In this case, the getPersonInfo() method is overridden in the Student class to include the gender property,
  //so when it is called on a Student object, the Student version of the method is called.
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());

//   //EXAMPLE for each
//   const numbers = [1, 2, 3, 4]
// ​
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum

// }
// console.log(sumArray(numbers))

//statistics class to do some math methods
class Statistics {
  //This is a constructor method that takes an array of values as an argument
  //and initializes an instance variable named values with the input array.
  constructor(values) {
    this.values = values;
  }

  //This method calculates the mean of the values in the values array.
  //It uses a loop to iterate over the array and adds up all the values,
  //then divides the total by the length of the array to get the mean.
  mean() {
    const length = this.values.length;
    let sum = 0;
    for (const number of this.values) {
      sum += number;
    }

    const result = sum / length;
    return result;
  }
  //by using a loop to iterate over the array and compare each value to the current smallest value.
  //If a smaller value is found, it replaces the current smallest value.
  min() {
    let smallest = this.values[0];
    for (const number of this.values) {
      if (smallest > number) {
        smallest = number;
      }
    }

    return smallest;
  }
  //using a loop to iterate over the array and compare each value
  //to the current largest value. If a larger value is found, it replaces the current largest value.
  max() {
    let largest = this.values[0];
    for (const number of this.values) {
      if (largest < number) {
        largest = number;
      }
    }
    return largest;
  }
}

//set these as constructor values (class object)
//create three instances of the Statistics class, each with a different set of input values
const ages = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);
const raceTimes = new Statistics([11, 9, 5, 7, 15]);
const bill = new Statistics("whats up");
//log the method mean and min for all the objects of numbers entered

//call the ages method within statistics on the ages const
console.log(ages.mean());
console.log(ages.min());
//call the mean min and max methods on raceTimes
console.log(raceTimes.mean());
console.log(raceTimes.min());
console.log(raceTimes.max());

//get th char code at 0 in bill's 'whats up', ignore other vals since we know methods only take in their parameters
//console.log(bill.values.charCodeAt(0, 1, 2));
