let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScore();

function computerMove() {
  const randomNumber2 = Math.random();
  if (randomNumber2 >= 0 && randomNumber2 <= 1 / 3) {
    return "rock";
  } else if (randomNumber2 >= 1 / 3 && randomNumber2 <= 2 / 3) {
    return "paper";
  } else if (randomNumber2 >= 2 / 3 && randomNumber2 <= 1) {
    return "sicssors";
  }
}

function playGame(playerMove) {
  const ans = computerMove();
  let result = "";
  if (playerMove === "sicssors") {
    if (ans === "sicssors") {
      result = "Tie";
    } else if (ans === "paper") {
      result = "you win";
    } else {
      result = "computer win";
    }
  } else if (playerMove === "rock") {
    if (ans === "rock") {
      result = "Tie";
    } else if (ans === "sicssors") {
      result = "you win";
    } else {
      result = "computer win";
    }
  } else {
    if (ans === "paper") {
      result = "Tie";
    } else if (ans === "rock") {
      result = "you win";
    } else {
      result = "computer win";
    }
  }

  if (result === "you win") score.Wins += 1;
  else if (result === "computer win") score.Losses += 1;
  else score.Ties += 1;

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-comp"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="icon" />
  <img src="images/${ans}-emoji.png" class="icon" />Computer`;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.Wins} Losses : ${score.Losses} Ties : ${score.Ties}`;
}

// function updateResult() {
//   document.querySelector(".js-result").innerHTML = result;
// }
// function updateComp() {
//   document.querySelector(
//     ".js-comp"
//   ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="icon" />
// <img src="images/${ans}-emoji.png" class="icon" />Computer`;
// }
