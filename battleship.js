const location1 = 3;
const location2 = 4;
const location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready steady shoot!! (please choose numbers between 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Incorrect number, please try again");
	} else {
		guesses += 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			hits += hits;
			if (hits == 3) {
				isSunk = true;
				alert("You sunk my ship");
			}
		}
	}
}

const stats =
	"You needed " +
	guesses +
	" guesses to sunk my ship." +
	"Statistics: " +
	3 / guesses +
	".";

alert(stats);
