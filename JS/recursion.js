// //recursive function that calls itself on the number used as an argument then adds itself to n-1 repeatedly until n===1 then return result
// function sumRange(n) {
//   // Base case
//   if (n === 1) {
//     return 1;
//   }
//   // Recursive case
//   else {
//     return n + sumRange(n - 1);
//   }
// }

// // console.log(sumRange(3));

// // console.log(expRange(2, 4));

// function printMe(index, arr) {
//   //this isnt + because it is before the action so it must run throgh the array then reach this to break. so if array has been parsed, break out
//   if (index === arr.length) return;
//   //log then call it on itself +1 to continue looping until array is fully parsed
//   console.log(arr[index]);
//   printMe(index +1, arr);
// }

// printMe(0, [1, 2, 3, 45]);

// function expRange(n, x) {
//   debugger;
//   // Base case
//   if (x === 1) {
//     return n;
//   }
//   // Recursive case
//   else {
//     //since you are calling expRange again and it needs 2 areguments, 2 must be passed as recursion
//     return n * expRange(n, x - 1);
//   }
// }

// console.log(expRange(2, 4));

// function expRange(n, x) {

//   if (x === 1) return n;
//     return n * expRange(n, x - 1);
//   }

// console.log(expRange(2, 4));

// //example
// const myArray = [[[[[5]]]]]
// const getDeepestValueThatsNotArray = (value) => {
//   if (Array.isArray(value)) {
//     getDeepestValueThatsNotArray(value[0]) // good way to do it
//   } else {
//     return value
//   }
// }

// let stringThing = 0
// function expRange(n, x) {

//   //if (x === 1) return n; inlineing return statements is litteraly a hate crime never do this, ever i dont care where you learn it from
//      if (x === 1) {
//        return n
//      }
//      if (stringThing === 0) {
//        stringThing = n
//      } else {
//        stringThing = stringThing * n
//      }
//      console.log(stringThing)
//      return n * expRange(n, x - 1);
//   }

// console.log(expRange(6, 6));

// console.log(factorial(5)); // 120

// function factorial(num){
// 	if(num == 1) return 1;

// 	return num * factorial(num - 1); // pending multiplier
// }

// //checks if all are less than 7 in the array by using a new sliced copy to check each number 1 by 1
// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

// function all(array, callback){
// 	var copy = copy || array.slice(); // shallow copies array

// 	if(copy.length === 0) return true;

// 	if(callback(copy[0])){
// 		copy.shift(); // remove first element from array
// 		return all(copy, callback);
// 	} else {
// 		return false;
// 	}
// }

// //returns product of every num in the array
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

// console.log(six, sixty);

// function productOfArray(array){
// 	if(array.length === 0) return 1;

// 	return array.shift() * productOfArray(array);
// }

// //search for a val in a nested object:
// var nestedObject = {
//   data: {
//       info: {
//           stuff: {
//               thing: {
//                   moreStuff: {
//                       magicNumber: 44,
//                       something: 'foo2'
//                   }
//               }
//           }
//       }
//   }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(hasIt, doesntHaveIt);

// function contains(obj, value){
// for(var key in obj){
//   if(typeof obj[key] === 'object'){
//     return contains(obj[key], value);
//   }

//   if (obj[key] === value){
//     return true;
//   }
// }
// return false;
// }

// //parse a multidimensional array and check if all are numbers
// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

// function totalIntegers(array){
// 	if(array.length === 0) return 0;

// 	let total = 0;
// 	let first = array.shift();

// 	if (Array.isArray(first)){
// 		total += totalIntegers(first);
// 	} else if (Number.isInteger(first)) {
// 		total += 1;
// 	}

// 	return total + totalIntegers(array);
// }

// //sums all the squares of the numbers in a nested array  regardless of number of nested
// var l = [1,2,3];
// console.log(SumSquares(l)); // 14

// l = [[1,2],3];
// console.log(SumSquares(l)); // 14

// l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)); // 1

// l = [10,[[10],10],[10]]
// console.log(SumSquares(l)); // 400

// function SumSquares(array){
// 	if(array.length === 0) return 0;
// 	let total = 0;

// 	for(let i = 0; i < array.length; i++){
// 		if(Array.isArray(array[i])){
// 			total += SumSquares(array[i]);
// 		} else {
// 			total += array[i] * array[i];
// 		}

// 	}
// 	return total;
// }

// //return an array with the number of the second paramter the number of the first param times, if negative return empty arr
// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

// function replicate(times, number){
// 	if(times <= 0) return [];

// 	return [number].concat(replicate(times - 1, number));
// }

//fibonacci iteration
function fibs(num) {
  var result = [];
  for (var i = 0; i < num; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

//recursion
function fibs(num) {
  if (num <= 2) {
    return Array.from({ length: num }, (_, i) => i);
  } else {
    const result = fibs(num - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}

//merge sort. much more efficient
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

//slice then sort
const arr = [3, 1, 4, 2, 5];
const sortedArr = arr.slice().sort();
console.log(sortedArr); // [1, 2, 3, 4, 5]
console.log(arr); // [3, 1, 4, 2, 5]

//fib recusrion
function fibsRec(length) {
  // Cases to exclude
  if (length < 1 || isNaN(length)) return "Invalid parameter";

  // Base case
  if (length === 1) return [0];

  if (length === 2) return [0, 1];

  // Recursion
  return [
    ...fibsRec(length - 1),
    fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3],
  ];
}

module.exports = fibsRec;
