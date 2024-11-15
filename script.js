document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice button");
  const result = document.querySelector(".result p");
  const playerChoiceDisplay = document.querySelector(".bpard p:first-child");
  const cpuChoiceDisplay = document.querySelector(".bpard p:last-child");
  const choicesArray = ["rock", "paiper", "Scissors"];

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const playerChoice = choice.id;
      const cpuChoice =
        choicesArray[Math.floor(Math.random() * choicesArray.length)];
      playerChoiceDisplay.textContent = playerChoice;
      cpuChoiceDisplay.textContent = cpuChoice;
      result.textContent = getResult(playerChoice, cpuChoice);
    });
  });

  function getResult(player, cpu) {
    if (player === cpu) {
      return "It's a draw!";
    } else if (
      (player === "rock" && cpu === "Scissors") ||
      (player === "paiper" && cpu === "rock") ||
      (player === "Scissors" && cpu === "paiper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
});
