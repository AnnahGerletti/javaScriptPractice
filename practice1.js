// Loop through arr, output each itteration with the current and next element along with the sum of the two.

let sumArray = [ 2, 5, 7, 34, 23, 8, 3 ]

sumArray.forEach((item, index, array) => {
  if (index < (array.length - 1)) {
    var currentNum = item
    var nextNum = array[index + 1]
    console.log('current:' + currentNum)
    console.log('next:' + nextNum)
    console.log('sum:' + (currentNum + nextNum))
  }
})

var totalSum = sumArray.reduce((item, index) => {
  return item + index
})
console.log(totalSum)

// Fizz Buzz

for (var i = 1; i <= 25; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizz buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}
// Refactor FizzBuzz with Foreach
var myArray = Array(100).fill().map((input, index) => { return index + 1 })
console.log(myArray)

myArray.forEach((item, idex) => {
  if (item % 3 === 0 && item % 5 === 0) {
    console.log('fizzbuzz')
  } else if (item % 3 === 0) {
    console.log('fizz')
  } else if (item % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(item)
  }
})

// refactor FizzBuzz with fewer steps

myArray.forEach((item, index) => {
  var output = ''

  output += item % 3 === 0

  output += item % 5 === 0

  console.log(output)
})
