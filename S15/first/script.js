// localStorage.setItem("name", "Arshia");
// localStorage.setItem("age", 16);
// const userData = {
//     name: "Arshia",
//     lastName: "Jannat Makan",
//     age: 16
// }
// localStorage.setItem("User Data", JSON.stringify(userData))
// const name = localStorage.getItem("name");
// console.log(name)
// localStorage.removeItem("User Data")
// const data = localStorage.getItem("userData")
// const parsedData = JSON.parse(data)
// console.log(parsedData)
// localStorage.clear()
// const ages = [12, 15, 19, 29]
// localStorage.setItem("ages", ages);

// sessionStorage

const userData = {
    name: "Arshia",
    age: 16
}


// Map
const myMap = new Map();
myMap.set({ a: 1 }, "Sarrafi");
myMap.set(16, "mmd")
myMap.set("arshia", 16)
myMap.delete("arshia")
myMap.get(16)
console.log(myMap)
console.log(myMap.get(16))
console.log(myMap.size)
myMap.clear()