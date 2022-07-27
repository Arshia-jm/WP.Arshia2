const userData = {
    name: "Arshia",
    lastName: "Jannt Makan",
    age: 16,
    id: 5163,
    score: [15, 10, 20, 19],

}
const edocation = {
        gread: 10,
        score: 19.95,
        school: "mirza sampad"
    }
    // console.log(userData.age);
    // console.log(userData.score[3]);
    // console.log(userData.edocation.score);
const key = "age";
console.log(userData[key]);
delete userData.name;
console.log(userData);
const newObj = {...userData, ...edocation };
console.log(newObj);