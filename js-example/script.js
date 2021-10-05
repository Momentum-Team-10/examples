// Arrays are used to hold a collection of values. Arrays can hold any type of value, including other arrays.

const students = ['Trey', 'Zack', 'Keanya', 'Lila', 'Janelle', 'RJ', 'Trent', 'James A.', 'James M.', 'Mike', 'Jeff', 'Jonathan', 'Jordyn']

// for loops are the most common kind of loop you will see used in JavaScript. A for loop helps you execute or run a block of code a number of times.

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i] + ' is a great developer!')
// }

// for of loops work the same as for loops, but the syntax is a little different...

// for (const student of students) {
//   console.log(student + ' is a great developer!')
// }

// Add a new value to an array
students.push('Gemma')
console.log('add Gemma', students)

// Take the last value out of the array
students.pop()
console.log('remove Gemma', students)

// Add value to beginning of an array
students.unshift('Oxford')
console.log('Add Oxford to top of list', students)

// Remove first value from array
students.shift()
console.log('Remove oxford from top of list', students)

// Find the index position of a value in an array
console.log(students.indexOf('Janelle'))

// Remove items from the array based on index position
students.splice(5, 2)
console.log(students)

// Add items to an array based on index position
students.splice(7, 0, 'RJ', 'Trent')
console.log(students)

// Copy an array
const newStudents = [...students]
console.log('students', students)
console.log('newStudents', newStudents)

// Tranforming values in an array
// let nameLengths = []
// for (let student of students) {
//   console.log(student.length)
//   return "Length of student's name: " + nameLengths.push(student.length)
// }

// .map() on an array to create a new array with the length of
// students' names as values
console.log(students.map(student => { return student.length}))
console.log(students.map(function (student) {
  return student.length
}))

// .filter() on an array to get student 
// names that have a length of four characters
console.log(students.filter(student => {return student.length === 4}))

// .reduce() on an array to find the sum
let prices = [1.99, 8.98, .50, 12.95, 6.50]
console.log(prices.reduce((price, total) => total += price))