// forEach
// const names = ["Arshia", "David", "Ali", "Bardia"];
// names.forEach(function(item, index) {
//     names[index] = item.toUpperCase();
// })
// console.log(names)

// Map
// const names = ["Arshia", "David", "Ali", "Bardia"];
// const newNames = names.map(function(item, index) {
//     return names[index] = item.toUpperCase();
// })
// console.log(newNames);
// console.log(names);

// const numbers = [1, 12, 91, 81, 9, 3, 0];

// filter 
// const newNum = numbers.filter((item) => item > 10);
// console.log(newNum)

// find 
// const newNumber = numbers.find((item) => item % 2 == 0);
// console.log(newNumber);

const numbers = [1, 12, 9, 3];

// reduce
const result = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(result);
// acc		cur
// 0		1
// 1		12
// 13		9
// 22		3
// 25