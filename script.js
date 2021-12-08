
var computerSelector = [Math.floor(Math.random() * 3)];
var computerHand = ["R", "P", "S"];

// console.log(computerSelector);

var userHand = prompt("Rock, Paper, or Scissors? Input R P or S to play");
var userScore = 0;
var computerScore = 0;

// if (askUser != null) {
//     console.log(userHand);
//     console.log(computerHand[computerSelector]);
// }

if (userHand != null) {
    if (userHand === computerHand[computerSelector]) {
        alert("You tied! " + "Your score is " + userScore + "Computer score is " + computerScore);
       // console.log("You tied!");
       // console.log(userScore, computerScore)
    } else if (userHand === "R" && computerHand[computerSelector] === "P") {
        computerScore = +1;
        alert("Computer won! " + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
    } else if (userHand === "R" && computerHand[computerSelector] === "S") {
        userScore = +1;
        alert("User won!" + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
    } else if (userHand === "S" && computerHand[computerSelector] === "P") {
        userScore = +1;
        alert("User won!" + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
    } else if (userHand === "S" && computerHand[computerSelector] === "R") {
        computerScore = +1;
        alert("Computer won!" + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
    } else if (userHand === "P" && computerHand[computerSelector] === "S") {
        computerScore = +1;
        alert("Computer won!" + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
    } else if (userHand === "P" && computerHand[computerSelector] === "R") {
        userScore = +1;
        alert("User won!" + "Your score is " + userScore + "Computer score is " + computerScore);
        // console.log(userScore, computerScore)
        }
    }

