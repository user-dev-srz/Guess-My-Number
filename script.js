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
let randomNum = Math.floor(Math.random() * 20 + 1);
console.log(randomNum);
let numInput = '';

function checkSelNum() {
	numInput = numInputEl.value;
	console.log(numInput);
}
