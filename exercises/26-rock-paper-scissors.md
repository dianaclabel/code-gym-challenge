# Rock paper scissors

👉[ Aquí encuentras el ejercicio.](https://www.codedex.io/javascript/17-rock-paper-scissors)

Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

Begin with a variable, player, and give a 0 to represent a Rock, a 1 to represent Scissors, or a 2 to represent a Paper.

Then use Math.random() to generate a number between 0 and 3 for another computer variable.

Then, use conditionals to compare the values of player and computer to see who wins!

```

Player picked:      Rock
Computer picked:    Scissors

The player won!


```

## Solución

🔗 [ Mirar solución con el método Reacto ](../js/26-rock-paper-scissors.js)

```
  function game() {
    const choices = ["Rock", "Scissors", "Paper"];

    const player = 1;
    const computer = Math.floor(Math.random() * 3);

    console.log("Player picked: " + choices[player]);
    console.log("Computer picked: " + choices[computer]);

    if (computer === player) {
      console.log("Empate");
      return;
    }

    if (player === 2) {
      if (computer === 0) {
        console.log("The player won!");
      } else {
        console.log("The computer won!");
      }
    }

    if (player === 0) {
      if (computer === 1) {
        console.log("The player won!");
      } else {
        console.log("The computer won!");
      }
    }

    if (player === 1) {
      if (computer === 2) {
        console.log("The player won!");
      } else {
        console.log("The computer won!");
      }
    }
  }

game();

```
