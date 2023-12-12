'use strict';

//handling clicking events
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener(
  'click',
  /*event handler*/ function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
      displayMessage('⛔No Number!');
      //when player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      //Manipulating String
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // Refactoring the code Dry Principle
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥You  lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
