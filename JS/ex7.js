
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

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
//class example to do some basic math methods, no vars passed in, can take infinite numbers to be returned

  class Statistics {
    constructor(values) {
      this.values = values
    }
  
    mean() {
      const length = this.values.length
      let sum = 0
      for (const number of this.values) {
        sum += number
      }
  
      const result = sum / length
      return result
    }
  
    min() {
      let smallest = this.values[0]
      for (const number of this.values) {
        if (smallest > number) {
          smallest = number
        }
      }
  
      return smallest
    }
  
    max() {
      let largest = this.values[0]
      for (const number of this.values) {
        if (largest < number) {
          largest = number
        }
      }
      return largest
    }
  }
  
  
  const ages = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
  const raceTimes = new Statistics([11, 9, 5, 7, 15])
  const bill = new Statistics('whats up')
  
  console.log(ages.mean())
  console.log(ages.min())
  
  console.log(raceTimes.mean())
  console.log(raceTimes.min())
  // console.log(raceTimes.min())
  
  console.log(bill.values.charCodeAt(0, 1, 2))

  //EXAMPLE for each
  const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))