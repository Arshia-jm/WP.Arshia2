// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// console.table(activities)



// function print(name, age) {
//     console.log(`Hi my name is ${name}${age}`);
// }

// print("Arshia", 16);

// const avg = function(num1, num2, num3) {
//     let result = num1 + num2 + num3;
//     return result /= 3;
// }
// console.log(avg(12, 11, 10));


const f = prompt("Fahrenheit: ");
const a = function(f) {
    let out = 5 / 9 * (f - 32);
    return out.toFixed(2);
}
alert(`Celsius: ${a(f)}`);