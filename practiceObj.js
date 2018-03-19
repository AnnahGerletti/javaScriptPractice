var birthdays = {
  'nick': 'September 22 1983 12:00',
  'annah': 'February 08 1986 23:00',
  'jan': 'August 08 1954 14:22',
  'gus': 'August 20 1991 17:33'
}

console.log(Object.keys(birthdays))
console.log(Object.values(birthdays))

console.log('sets a current date and time \n')
// Date() obj is a built-in obj in JS. new Date() creates a new instance of the date.THere are many Methods that can be used with the Date object.
const now = new Date()

console.log(now)

// Pulling days of the week from the birthdays

var birthdayArr = Object.values(birthdays)

// function birthday (month, day, year, time) {
//   this.month = month
//   this.day = day
//   this.year = year
//   this.time = time
// }

// birthdayArr.map((date) => {
//   var day = date.getDay()
//   return day
// })

// console.log(day)

var dayOfWeek = new Date(birthdays.nick)

console.log("Nick was born " + dayOfWeek)