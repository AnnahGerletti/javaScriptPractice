var birthdays = {
  'nick': '1983-09-22 12:00:00',
  'annah': '1986-02-08 23:00:00',
  'jan': '1954-08-08 14:22:33',
  'gus': '1991-08-20 17:33:03'
}

console.log(Object.keys(birthdays))
console.log(Object.values(birthdays))

console.log('sets a current date and time \n')
// Date() obj is a built-in obj in JS. new Date() creates a new instance of the date.THere are many Methods that can be used with the Date object.
const now = new Date()

console.log(now)

for (var prop in birthdays){

}