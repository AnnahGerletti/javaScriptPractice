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
