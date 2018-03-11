// Logic Flow

var myArray = Array(100)
  .fill()
  .map((input, index) => {
    return index + 1
  })

var results = myArray.map(num => {
  var changeNum = (num * 3) + 3
  if (changeNum < 100) {
    if (changeNum % 2 === 0) {
      return (changeNum + ' is a SMALL EVEN number')
    } else {
      return (changeNum + ' is a SMALL ODD number')
    }
  } else if (changeNum > 100 && changeNum < 150) {
    if (changeNum % 4 === 0) {
      return (changeNum + ' is BIG and / by 4')
    } else {
      return (changeNum + ' is BIG but NOT / by 4')
    }
  } else if (changeNum > 150) {
    if (changeNum % 2 !== 0) {
      return (changeNum + ' is BIG and ODD')
    } else {
      return (changeNum + ' is BIG but EVEN')
    }
  } else {
    return (changeNum)
  }
})

console.log(results)

// Line Break, Refactor
console.log('\n')

function smallRangeNum (num) {
  if (num % 2 === 0) {
    return (num + ' is a SMALL EVEN number')
  } else {
    return (num + ' is a SMALL ODD number')
  }
}
function middleRangeNum (num) {
  if (num % 4 === 0) {
    return (num + ' is BIG and / by 4')
  } else {
    return (num + ' is BIG but NOT / by 4')
  }
}

function highRangeNum (num) {
  if (num % 2 !== 0) {
    return (num + ' is BIG and ODD')
  } else {
    return (num + ' is BIG but EVEN')
  }
}

var refactorResults = myArray.map(num => {
  var changeNum = (num * 3) + 3
  if (changeNum < 100) {
    return smallRangeNum(changeNum)
  } else if (changeNum > 100 && changeNum < 150) {
    return middleRangeNum(changeNum)
  } else if (changeNum > 150) {
    return highRangeNum(changeNum)
  } else {
    return (changeNum)
  }
})

console.log(refactorResults)

// LineBreak
// Multiply numbers output the results
console.log('\n' + 'numbers')

var oneArr = [1, 3, 5, 6, 8, 9, 14]
var twoArr = [9, 33, 52, 2, 1, 5, 88]

oneArr.forEach((input, index) => {
  var results = oneArr[index] * twoArr[index]
  console.log(results)
})

console.log('\n')
// LineBreak
// Index practices

// Write out the number from each array at position 5.
// Write out every second number from each array
// Merge both arrays together and print out every third number

var oneArray = [1, 3, 5, 6, 8, 9, 14]
var twoArray = [ 9, 33, 52, 2, 1, 5, 88]

var result = oneArray[5]
var result2 = twoArray[5]
console.log(result)
console.log(result2)

console.log('every second Num' + '\n')

oneArray.forEach((input, index) => {
  if (index % 2 !== 0) {
    console.log('1st Array ' + input) 
  }
})
