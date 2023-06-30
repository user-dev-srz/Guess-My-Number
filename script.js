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

const numInputEl = document.getElementById('guess-number');
const resultEl = document.querySelector('.result');
const guessNumBtn = document.querySelector('.guess-number');
let currentScoreEl = document.querySelector('.current-score');
let highScoreEl = document.querySelector('.high-score');
let bestHighScore = undefined;
let revealEl = document.querySelector('.reveal');
let randomNum = Math.floor(Math.random() * 20 + 1);
let currentScore = 20;
let highScore = [];
console.log(randomNum);

function checkSelNum() {
	let guessNum = Number(numInputEl.value);
	console.log(`guessNum = ${guessNum}`);
	if (guessNum === 0) {
		resultEl.textContent = 'Pick a Number!';
	} else if (guessNum === randomNum) {
		youWin();
	} else if (guessNum > randomNum) {
		resultEl.textContent = 'Too high!';
		negScore();
	} else if (guessNum < randomNum) {
		resultEl.textContent = 'Too low!';
		negScore();
	}
}

function negScore() {
	currentScore -= 1;
	if (currentScore === 0) {
		youLose();
	}
	currentScoreEl.textContent = `Score: ${currentScore}`;
}

function youLose() {
	resultEl.textContent = 'You lose!';
	revealEl.textContent = randomNum;
	revealEl.classList.add('reveal-loser');
	guessNumBtn.disabled = true;
}

function youWin() {
	resultEl.textContent = 'You win!';
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
	currentScore = 20;
	currentScoreEl.textContent = `Score: ${currentScore}`;
	randomNum = Math.floor(Math.random() * 20 + 1);
	revealEl.textContent = '?';
	resultEl.textContent = 'Start guessing...';
	revealEl.classList.remove('reveal-winner');
	revealEl.classList.remove('reveal-loser');
	guessNumBtn.disabled = false;
}
