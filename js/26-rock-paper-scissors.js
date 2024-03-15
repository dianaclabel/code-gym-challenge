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

  //------------------------------------------------------------------------ Otra forma mas simplificada----------------------------------------------------------

  //   if((player===0 && computer === 1) || (player===1 && computer === 2)|| (player===1 && computer === 2)){
  //     console.log('The player won!');
  //   }

  // if(player===0 && computer === 2){
  //   console.log('The computer won!');
  // }
}

game();
