let num = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;
let diff = 0; //Difference between guess and value

//Checks the guess by user
function checkGuess() {
const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === num) { //When guess is right
    lastResult.textContent = 'Congratulations! You guessed my numer!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) { //When max aoumt of guesses is reached
    lastResult.textContent = 'You Lost!';
    lowOrHi.textContent = '';
    setGameOver();
  } else { //When guess is wrong
    lastResult.textContent = 'Your guess is wrong!';
    lastResult.style.backgroundColor = 'red';
    diff = Math.floor(Math.abs(userGuess - num));
    if(diff <= 5){
      lowOrHi.textContent = 'Your very hot!';
      }else if(diff >= 6 && diff <= 8){
          lowOrHi.textContent = 'Your hot!';
      }else if(diff >= 9 &&diff <= 15){
          lowOrHi.textContent = 'Your very warm!';
      }else if(diff >= 16 &&diff <= 20){
          lowOrHi.textContent = 'Your warm!';
      }else if(diff >= 21 &&diff <= 30){
          lowOrHi.textContent = 'Your cool!';
      }else if(diff >= 31 &&diff <= 40){
          lowOrHi.textContent = 'Your very cool!';
      }else if(diff >= 41 &&diff <= 55){
          lowOrHi.textContent = 'Your cold!';
      }else{
          lowOrHi.textContent = 'Your very cold!';
      }
  }

  //Increases the guess count when wrong.
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

//Makes a button appear when game is over
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

//When the reset button after game over appears is clicked this runs
 function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  num = Math.floor(Math.random() * 100) + 1;
}