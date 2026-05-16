"use strict";

// Variables for the score and the current score
const scorePlayerOneEl = document.getElementById("score--0");
const scorePlayerTwoEl = document.getElementById("score--1");
const currentPlayerOneEl = document.getElementById("current--0");
const currentPlayerTwoEl = document.getElementById("current--1");

scorePlayerOneEl.textContent = 0;
scorePlayerTwoEl.textContent = 0;

// Variables for the players
const player = document.querySelector(".player");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const Winner = document.querySelector(".player--winner");

// Variables for the buttons
const btnNewGame = document.querySelector(".btn--new");
const btnHoldScore = document.querySelector(".btn--hold");
const btnRollDice = document.querySelector(".btn--roll");

// Dice
const diceEl = document.querySelector(".dice");
let dice;

diceEl.classList.add("hidden");

// Buttons
btnRollDice.addEventListener("click", () => {
	dice = Math.trunc(Math.random() * 6) + 1;
	diceEl.classList.remove("hidden");
	diceEl.src = `./img/dice-${dice}.png`;
	return;
});
btnHoldScore.addEventListener("click", () => {
	if (player.classList.contains("player--0") && player.classList.contains("player--active")) {
		scorePlayerOne = currentPlayerOne;
		console.log(scorePlayerOne);
	}
	if (player.classList.contains("player--1") && player.classList.contains("player--active")) {
		scorePlayerTwo = currentPlayerTwo;
	}
});

console.log(scorePlayerTwo);
console.log(currentPlayerOne);
console.log(currentPlayerTwo);
