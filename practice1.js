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
var myArray = Array(25).fill().map((input, index) => { return index + 1 })
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

// refactor FizzBuzz, output boolens

myArray.forEach((item, index) => {
  var output = ''

  output += item % 3 === 0

  output += item % 5 === 0

  console.log(output)
})

myArray.forEach((item, index) => {
  var output = ''

  if (item % 3 === 0) {
    output += 'fizz'
  } if (item % 5 === 0) {
    output += 'buzz'
  } else { output = item }

  console.log(output)
})

// forEach practice

var lettersOne = 'ABCD'
var lettersTwo = 'BBDD'

var newFirstArr = lettersOne.split('')
var newSecArr = lettersTwo.split('')

newFirstArr.forEach((item, index) => {
  if (item === newSecArr[index]) {
    console.log('yep')
  } else { console.log('nuha') }
})

// Line Break
// String Methods
var lettersOne = 'EEFF'
var lettersTwo = 'AEFG'

var lettersOneArr = lettersOne.split('')
var lettersTwoArr = lettersTwo.split('')

lettersOneArr.forEach((input, index) => {
  var output = lettersTwoArr.indexOf(input)

  if (output !== -1) {
    lettersTwoArr.splice(output, 1)
    console.log('yay ' + input + index)
  } else {
    console.log('nooo ' + input + index)
  }
})

// Line Break
// Function that tests for palindrome

// reverseWord(word => {
//   var reverseWord = word.split('')
//   reverseWord += reverseWord.reverse()
//   return reverseWord
// })

// checkPal(word => {
//   var forwardWord = word.split('')
//   if (forwardWord == word.reverseWord) {
//     console.log('Palendrone')
//   }
// })

// console.log(checkPal('racecar'))
