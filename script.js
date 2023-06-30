// 3:21:56
/*
NOTE: make a code snippet /*

PLAN OF ATTACK - GUESS MY NUMBER:
no particular order:

Main:
1a. Function for Random Number between 1-20 and put it in a variable.
1b. Comparing Random Number and Selected number:
        If statement:
        If RanNum and SelNum same: have a function call for winning.
                    function for winning:
                        a. background color changes,
                        b. winning text
                        c. highs core update function (new greater >)
                        d. Score update: false, score remains the same.
                        f. pop-up button in the middle: play again.
        If s > r:
            function for selected is greater than random:
                a. text: Too High!
                b. score update function -1
        If s < r: 
                function for selected is greater than random:
                a. text: Too low!
                b. score update function -1
1c. onClick - check button:
    a. retrieve value from number-input and save it on an array - to log previous selected number.
    b. compares random number and selected number: (1b)

1d. score update function:
-1,
if score == 0; update for You Lose elements, Play Again Button
*/
'use strict';

const numInputEl = document.getElementById('guess-number');
const resultEl = document.querySelector('.result');
const guessNumBtn = document.querySelector('.guess-number');
const playAgainBtn = document.querySelector('.play-again');
let defaultBgColor = '#191919';
let winBgColor = '#00FF00';
let loseBgColor = 'crimson';
let currentScoreEl = document.querySelector('.current-score');
let highScoreEl = document.querySelector('.high-score');
let bestHighScore = undefined;
let revealEl = document.querySelector('.reveal');
let randomNum = Math.floor(Math.random() * 20 + 1);
let currentScore = 20;
let highScore = [];
console.log(randomNum);

function displayMessage(message) {
	resultEl.textContent = message;
}

//NOTE: BUTTON ON CLICK
guessNumBtn.addEventListener('click', checkSelNum);
playAgainBtn.addEventListener('click', newGame);

function backgroundColor(color) {
	document.body.style.background = color;
}

function checkSelNum() {
	let guessNum = Number(numInputEl.value);
	console.log(`guessNum = ${guessNum}`);
	if (guessNum === 0) {
		displayMessage('Pick a Number!');
	} else if (guessNum === randomNum) {
		youWin();
	} else if (guessNum > randomNum) {
		displayMessage('Too high!');
		negScore();
	} else if (guessNum < randomNum) {
		displayMessage('Too low!');
		negScore();
	}
}

function negScore() {
	currentScore--;
	if (currentScore === 0) {
		youLose();
	}
	currentScoreEl.textContent = `Score: ${currentScore}`;
}

function youLose() {
	displayMessage('You lose!');
	revealEl.textContent = randomNum;
	revealEl.classList.add('reveal-loser');
	backgroundColor(loseBgColor);
	guessNumBtn.disabled = true;
}

function youWin() {
	backgroundColor(winBgColor);
	displayMessage('You Win!');
	revealEl.textContent = randomNum;
	revealEl.classList.add('reveal-winner');
	highScoreChecker();
	guessNumBtn.disabled = true;
}

function highScoreChecker() {
	highScore.push(currentScore);
	bestHighScore = Math.max(...highScore);
	highScoreEl.textContent = `Hi-score: ${bestHighScore}`;
}

function newGame() {
	displayMessage('Start guessing...');
	backgroundColor(defaultBgColor);
	currentScore = 20;
	currentScoreEl.textContent = `Score: ${currentScore}`;
	randomNum = Math.floor(Math.random() * 20 + 1);
	revealEl.textContent = '?';
	revealEl.classList.remove('reveal-winner');
	revealEl.classList.remove('reveal-loser');
	document.body.style.background = '#191919';
	guessNumBtn.disabled = false;
}

function winBg() {
	winBgColor = winBgColor;
}

// NOTE: 3:2
