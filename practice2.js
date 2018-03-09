// Logic Flow

var myArray = Array(100)
  .fill()
  .map((input, index) => {
    return index + 1
  })

myArray.map(num => {
  var changeNum = (num * 2) + 5
  if (changeNum < 100) {
    if (changeNum % 2 === 0) {
      console.log(changeNum + ' is a SMALL EVEN number')
    } else {
      console.log(changeNum + ' is a SMALL ODD number')
    }
  } else if (changeNum > 100 && changeNum < 150) {
    if (changeNum % 4 === 0) {
      console.log(changeNum + ' is BIG and / by 4')
    } else {
      console.log(changeNum + ' is BIG but NOT / by 4')
    }
  } else if (changeNum > 150) {
    if (changeNum % 2 !== 0) {
      console.log(changeNum + ' is BIG and ODD')
    } else {
      console.log(changeNum + 'is BIG but EVEN')
    }
  }
  else {
    console.log(changeNum)
  }
})
