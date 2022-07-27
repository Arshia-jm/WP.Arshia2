const names = ["Arshia", "Mahdi", "David", "Farid", "Bardia"];
const numbers = [18, 1, 17, 91, 69, 231, 85];
const age = [19, 16, 8, 9];
// console.log(names[0]);
// names.push("Ahmad");
// names.pop();
// names.unshift("jamal");
// names.shift();
// names[2] = "Bardia";
// names.splice(0, 2);
// console.log(numbers.sort());
// console.log(names.reverse());

// console.log(names);
console.log(numbers.concat(names).concat(age));
// spread operators
console.log([...names, ...numbers, ...age, "hello, 15"]);