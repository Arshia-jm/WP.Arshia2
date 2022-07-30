const content = ["Rock", "Paper", "Scissors"];
const random = Math.round(Math.random() * 2);
const computer = content[random];
const userInput = prompt("Rock, Paper or Scissors: ");

if (userInput) {
    console.log(`you choose ${userInput}`);
} else {
    console.log("you cheated!");
    // console.log(typeof userInput); => null = object
}
console.log(`computer choosed ${computer}`);

if (computer == "Rock") {
    if (userInput == "Rock") alert("Tie");
    else if (userInput == "Paper") alert("Win");
    else if (userInput == "Scissors") alert("Lose");
} else if (computer == "Paper") {
    if (userInput == "Rock") alert("Lose");
    else if (userInput == "Paper") alert("Tie");
    else if (userInput == "Scissors") alert("Win");
} else if (computer == "Scissors") {
    if (userInput == "Rock") alert("Win");
    else if (userInput == "Paper") alert("Lose");
    else if (userInput == "Scissors") alert("Tie");
} else {
    console.log("chert nago haji");
}