var birthdays = {
  nick: 'September 22 1983 12:00',
  annah: 'February 08 1986 23:00',
  jan: 'August 08 1954 14:22',
  gus: 'August 20 1991 17:33',
  birthdayDay: function () {
    return Object.value()
  }
}// trying to see if I can add a function that will take in the obj values, you can call the function like the W3Schools example when using .call()

console.log(Object.keys(birthdays))
console.log(Object.values(birthdays))

console.log('sets a current date and time \n')
// Date() obj is a built-in obj in JS. new Date() creates a new instance of the date.THere are many Methods that can be used with the Date object.
// added a new entry to birthdays obj, set it to the current day/time new Date() method
const now = new Date()
birthdays.currentDay = now
// _______________________________________

// var birthdayArr = Object.values(birthdays)

// birthdays.forEach(input => {
//   var dayOfWeek = new Date(input)
//   return dayOfWeek
// })

console.log('Nick was born ' + dayOfWeek)

var weekDay = new Date(birthdays.nick)

console.log('Nicks was born on a ' + weekDay)

// function daysOfTheWeek (birthday) {
//   var newBirthday = new Date(birthday)
//   return newBirthday
// }

// birthdayArr.map(daysOfTheWeek)

// console.log('My birthday day is ' + newBirthday)

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
