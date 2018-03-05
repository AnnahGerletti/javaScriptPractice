function LetterCapitalize (str) {
  var splitLettersToArr = str.split(' ')
  var mapOverArr = splitLettersToArr.map(item => {
    item = item[0].toUpperCase() + item.slice(1)
    return item
  })
  var joinArrBackToStr = mapOverArr.join(' ')
  return joinArrBackToStr
}
console.log(LetterCapitalize('hello world'))
// Line Break

function LongestWord (sen) {
  var newSen = sen.replace('!', '')
  var splitToArray = newSen.split(' ')
  var longestWord = splitToArray.sort(function (a, b) {
    // .sort takes a compair function, condition is length
    return b.length - a.length
  })
  return longestWord[0]
}
console.log(LongestWord('I love dogs and people'))
// Line Break

function FirstFactorial (num) {
  var finalNum = num
  if (num === 0 || num === 1) {
    return 1
  }
  while (num > 1) {
    num--
    finalNum *= num
  }
  return finalNum
}
console.log(FirstFactorial(5))
// Line Break

function FirstReverse (str) {
  var strToArray = str.split('')
  var reverseArr = strToArray.reverse()
  var arrToStr = reverseArr.join('')
  return arrToStr
}
console.log(FirstReverse('Dogs are better than Cats.'))
// Line Break

function LetterChanges (str) {
  var strToArr = str.split('')
  var mapArr = strToArr.map(i => {
    switch (i) {
      case 'C':
        return 'G'
      case 'G':
        return 'C'
      case 'A':
        return 'U'
      case 'T':
        return 'A'
    }
  })
  var arrToStr = mapArr.join('')
  return arrToStr
}
console.log(LetterChanges('ACGTGGTCTTAA'))
// Line Break

function SimpleAdding (num) {
  var addNum = num

  while (num >= 0) {
    addNum += num
    num--
  }

  return addNum
}

console.log(SimpleAdding(20))
// Line Break

function TimeConvert (num) {
  var finalStr = ''
  if (num < 60) {
    finalStr = ':' + num
  } else {
    var wholeNum = (Math.round(num / 60))
    var miniNum = num - (60 * wholeNum)
    finalStr = wholeNum + ':' + miniNum
  }

  return finalStr
}
console.log(TimeConvert(183))
// Line Break

var dogs = {
  Fido: 'Mutt',
  Hunter: 'Doberman',
  Snoopie: 'Beagle'
}
var dogNames = Object.keys(dogs)

var dogType = dogNames.map(name => {
  return dogs[name]
})
console.log(dogNames)
console.log(dogType)

// Line Break

var myArray = []

for (i = 1; i < 6; i++) {
  myArray.push(i)
}
console.log(myArray)

// Line Break

let color = ['blue', 'Pink', 'Yellow', 'white', 'Green', 'Black', 'OraNge', 'teal', 'RED']

color.forEach((item, index, array) => {
  if (item === 'Pink') {
    item = item.toUpperCase()
  } else {
    item = item.toLowerCase()
  }
  return console.log(index, item)
})

color.forEach((item, index, array) => {
  array[item] = item.toUpperCase()
  console.log(array[item])
})

color.forEach((item, index, array) => {
  if (index > 3) {
    item = item.toUpperCase()
  } else {
    item = item.toLowerCase()
  }
  console.log(index, item)
})

// Line Break

let sumArray = [ 2, 5, 7, 34, 23, 8, 3 ]
var sum = 0
sumArray.forEach((item, index, array) => {
  sum += item
})
console.log(sum)

let total = sumArray.reduce((item, index) => {
  return item + index
})
console.log(total)

sumArray.forEach((item, index, array) => {
  if (index < (array.length - 1)) {
    var currentNum = item
    var nextNum = array[index + 1]
    console.log('current:' + currentNum)
    console.log('next:' + nextNum)
    console.log('sum:' + (currentNum + nextNum))
  }
})


