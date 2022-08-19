// const numberOfScore = prompt("Enter the number of scores");
// let scores = [];
// for (let i = 0; i < numberOfScore; i++) {
//     do {
//         scores[i] = prompt(`Enter ${i+1}th score`);
//     } while (scores[i] < 0 || scores[i] > 20);

// }

// function moadel(scores) {
//     let sum = 0;
//     for (let i = 0; i < numberOfScore; i++) {
//         sum += Number(scores[i]);
//     }
//     console.log(sum);
//     let avg = sum / numberOfScore;
//     console.log(avg.toFixed(2));
//     return avg > 10 ? console.log("You have been accepted") : console.log("You have been rejected");
// }
// moadel(scores)

const userData = [
    { name: "Arshia", scores: [19, 18, 20, 17] },
    { name: "Ali", scores: [5, 3, 12, 8] },
    { name: "Farid", scores: [8, 12, 17, 9] },
    { name: "Bardia", scores: [19, 20, 20, 11] },
];

const newData = userData.map(item => {
    const sum = item.scores.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / item.scores.length;
    item.rate = avg;
    console.log(`${item.name}'s rate is ${item.rate}`);
    return item;
})
const accepted = newData.filter(item => item.rate > 10);
console.log(accepted)