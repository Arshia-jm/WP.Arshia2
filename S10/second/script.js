// for-in
// const numbers = [1, 9, 10, 5, 6, 7];
// for (let i in numbers) {
//     numbers[i] = numbers[i] + 1;
// }
// console.log(numbers);


const names = ["Arshia", "David", "Ali", "Bardia"];
names.forEach(function(item, index) {
    names[index] = item.toUpperCase();
})
console.log(names)