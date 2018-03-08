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

function reverseWord (word) {
  var wordToArr = word.split('')
  var reversed = wordToArr.reverse()
  reversed = reversed.join()
  return reversed
}

function checkPal (word) {
  var forwardWord = word.split('')
  forwardWord = forwardWord.join()
  if (forwardWord === reverseWord(word)) {
    return (word + ' is a Palendrone')
  } else { return 'not a palendrone' }
}
console.log(checkPal('nick'))

// Line Break
// removeing characters from a string

var extraChars = 'too, many, commas'
var foo = extraChars.replace(/,/g, '')
console.log(foo)

// Line Break
// Uppercase every 2nd letter of the str

// var magicWords = 'programming is magical and awesome'
// var replaceStr = magicWords.replace(/\s/g, '')
// var newArr = replaceStr.split('')
// newArr.map((arr, index) => {
//   var finalStr = ''
//   if (index % 2 === 0) {
//     finalStr += arr.toString().toUpperCase()
//   } else {
//     return finalStr
//   }
//   console.log(finalStr)
// })
