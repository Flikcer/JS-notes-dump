// const outer =() =>{
//     let outerVar = 'outer';
//     console.log(outerVar);

//     function inner (){
//         console.log(`${outerVar}`);
//     }
//     return inner;
// }
// let myFunc = outer();
// //since myFunc returns inner, myFunc is now a direct reference to inner
// myFunc();

// let crust = "crust";
// function earth() {
//   let mantle = "mantle";
//   function inner() {
//     let core = "core";
//     console.log(`the earth is made up of the ${crust} ${mantle} and ${core}`);
//   }
//   inner();
// }
// earth();

// let crust = "crust";
// function earth() {
//   let mantle = "mantle";
//   function inner() {
//     let core = "core";
//     return `the earth is made up of the ${crust} ${mantle} and ${core}`;
//   }
//   return inner;
// }
// let func = earth();
// console.log(func());

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }
// const innerFunc = outerFunction();

// console.log(innerFunc()); //1
// console.log(innerFunc()); //2
// console.log(innerFunc()); //3

// //in this example inner is run then the value is returned from the resultant
// let crust = "crust";
// function earth() {
//   let mantle = "mantle";
//   function inner() {
//     let core = "core";
//     return `the earth is made up of the ${crust} ${mantle} and ${core}`;
//   }
//   return inner();
// }
// let func = earth();
// console.log(func);

// //this func allows you access to the func itself
// let crust = "crust";
// function earth() {
//   let mantle = "mantle";
//   function inner() {
//     let core = "core";
//     return `the earth is made up of the ${crust} ${mantle} and ${core}`;
//   }
//   return inner;
// }
// let func = earth();
// console.log(func());

// function outerFunction() {
//   let count = 0;
//   function plusOne() {
//     count++;
//     return count;
//   }
//   function minusOne() {
//     count--;
//     return count;
//   }
//   return {
//     //functions are perfomed then value returned
//     plusOne: plusOne(),
//     minusOne: minusOne(),
//   };
// }
// const innerFuncs = outerFunction();
// console.log(innerFuncs); //{plusone: 1, minusone: 0}
// console.log(innerFuncs.plusOne); //1
// console.log(innerFuncs.minusOne); //0

//Create a closure which has one inner function
// function walnutBot() {
//   let walnutCount = 0;
//   function addNut() {
//     walnutCount++;
//     return walnutCount;
//   }
//   return addNut();
// }
// let x = walnutBot();
// console.log(x);

//Create a closure which has three inner functions
// function walnutBot() {
//   let walnutCount = 0;
//   function addNut() {
//     walnutCount++;
//     return walnutCount;
//   }
//   function subtractNut() {
//     walnutCount--;
//     return walnutCount;
//   }
//   return {
//     addMe: addNut(),
//     subMe: subtractNut(),
//   };
// }

// let x = walnutBot();
// console.log(x.addMe);
// console.log(x.subMe);

//create a person account function with a persons info
function personAccount() {
  let firstName = "Bill";
  let lastName = "Billiams";
  //object w incomes
  let income = {
    children: 10000,
    job: 4,
  };
  //object w expenses
  let expenses = {
    walnuts: 6000,
    catFood: 500,
  };
  //function to add incomes together and return total
  function totalIncome() {
    let y = 0;
    for (x in income) {
      y = y + income[x];
    }
    return y;
  }
  //function to add expenses together and return total
  function totalExpense() {
    let y = 0;
    for (x in expenses) {
      y = y + expenses[x];
    }
    return y;
  }
  //add an income to the object
  function addIncome(source, amount) {
    income[source] = amount;
  }
  //add an expense to the object
  function addExpense(source, amount) {
    expenses[source] = amount;
  }
  //print acount into updated
  function accountInfo() {
    return `${firstName} ${lastName} has ${totalIncome()} in income and ${totalExpense()} in expenses`;
  }
  //return above funcs
  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    addExpense: addExpense,
    addIncome: addIncome,
    accountInfo: accountInfo,
  };
}

let account = personAccount();
console.log(account.accountInfo());
account.addIncome("bananas", 1000);
console.log(account.accountInfo());

//store in sets so there cant be multiples
function personAccount() {
  let firstName = "Bill";
  let lastName = "Billiams";
  let income = new Set([10000, 4]);
  let expenses = new Set([6000, 500]);

  function totalIncome() {
    let y = 0;
    for (let val of income) {
      y = y + val;
    }
    return y;
  }

  function totalExpense() {
    let y = 0;
    for (let val of expenses) {
      y = y + val;
    }
    return y;
  }

  function addIncome(amount) {
    income.add(amount);
  }

  function addExpense(amount) {
    expenses.add(amount);
  }

  function accountInfo() {
    return `${firstName} ${lastName} has ${totalIncome()} in income and ${totalExpense()} in expenses`;
  }

  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    addExpense: addExpense,
    addIncome: addIncome,
    accountInfo: accountInfo,
  };
}

let account = personAccount();
console.log(account.accountInfo());
account.addIncome(1000);
console.log(account.accountInfo());

//WRONG
const myObject = {
  value: 42,
  myMethod: function () {
    console.log(this.value); // this refers to the object
    setTimeout(function () {
      console.log(this.value); // this refers to the global object (window in the browser)
    }, 1000);
  },
};

//fixed with arrow function
//since arrow functions do not bind their own this value,
//the this value inside the arrow function remains the same as it is inside myMethod(),
//which is the object.
myObject.myMethod(); // logs 42, then logs undefined after 1 second

const myObject = {
  value: 42,
  myMethod: function () {
    console.log(this.value); // this refers to the object
    setTimeout(() => {
      console.log(this.value); // this refers to the object
    }, 1000);
  },
};

myObject.myMethod(); // logs 42, then logs 42 after 1 second
