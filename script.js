





/*********************************************************/
//  const playerText = document.querySelector('#playerText');
//  const computerText = document.querySelector('#computerText');
//  const resultText = document.querySelector('#resultText');

//  const choiceBtns = document.querySelectorAll('.choiceBtn');
//  const winnerText = document.querySelector('#winnerText');

//  let player;
//  let computer;
//  let result;
 
//  let playerScore = 0;
//  let computerScore = 0;

//  choiceBtns.forEach(button => button.addEventListener('click', () => {
//     // Resetovanje poena
//     playerScore = 0;
//     computerScore = 0;
    
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
    
//     resultText.textContent = checkWinner();
    

//  }));
//  // funkcija generse nasumičan odabir racunara između tri opcije - ROCK , PAPER i SCISSORS 

//  function computerTurn(){
//     const randNum = Math.floor(Math.random()*3)+1;
//         switch(randNum){
//             case 1:
//                 computer = 'ROCK';
//                 break;
//             case 2:
//                 computer = 'PAPER';
//                 break;
//             case 3: 
//                 computer = 'SCISSORS';
//                 break;
//         }
//  };

//  /*funkcija za proveru pobednika  */
//  function checkWinner() {
//     if (player == computer) {
//         return 'Draw';
//     } else {
//         if (computer == 'ROCK' && player == 'PAPER' || 
//             computer == 'PAPER' && player == 'SCISSORS' ||
//             computer == 'SCISSORS' && player == 'ROCK') {
//             playerScore++;
//             document.querySelector('#playerScore').textContent = `Player: ${playerScore}`;
//             return 'You win';
//         } else {
//             computerScore++;
//             document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`;
//             return 'You Lose';
//         }
//     }
// }



const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

const choiceBtns = document.querySelectorAll('.choiceBtn');
const winnerText = document.querySelector('#winnerText');

let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;

// Resetovanje poena na početku igre
document.querySelector('#playerScore').textContent = `Player: ${playerScore}`;
document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`;

choiceBtns.forEach(button => button.addEventListener('click', () => {
   player = button.textContent;
   computerTurn();
   playerText.textContent = `Player: ${player}`;
   computerText.textContent = `Computer: ${computer}`;

   resultText.textContent = checkWinner();

}));

// funkcija generiše nasumičan odabir računara između tri opcije - ROCK , PAPER i SCISSORS 
function computerTurn(){
   const randNum = Math.floor(Math.random()*3)+1;
       switch(randNum){
           case 1:
               computer = 'ROCK';
               break;
           case 2:
               computer = 'PAPER';
               break;
           case 3: 
               computer = 'SCISSORS';
               break;
       }
};

/*funkcija za proveru pobednika  */
function checkWinner() {
   if (player == computer) {
       return 'Draw';
   } else {
       if (computer == 'ROCK' && player == 'PAPER' || 
           computer == 'PAPER' && player == 'SCISSORS' ||
           computer == 'SCISSORS' && player == 'ROCK') {
           playerScore++;
           document.querySelector('#playerScore').textContent = `Player: ${playerScore}`;
           if (playerScore == 5) {
                alert('Player wins!');
                resetGame();
           }
           return 'You win';
           
       } else {
           computerScore++;
           document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`;
           if (computerScore == 5){
                alert('Computer wins');
                resetGame();
           }
           return 'You Lose';
           
           
       }
   }
}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
  // Resetovanje promenljivih za početak nove igre
  playerScore = 0;
  computerScore = 0;
  playerText.textContent = 'Player: ';
  computerText.textContent = 'Computer: ';
  winnerText.textContent = 'First to 5 wins!';

  // Resetovanje prikaza rezultata
  document.querySelector('#playerScore').textContent = 'Player: 0';
  document.querySelector('#computerScore').textContent = 'Computer: 0';
  resultText.textContent = ' ';
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#playerScore').textContent = 'Player: 0';
    document.querySelector('#computerScore').textContent = 'Computer: 0';
}