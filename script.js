"use strict";

// =============================================
// DOM elements
// =============================================
const scorePlayerOneEl = document.getElementById("score--0");
const scorePlayerTwoEl = document.getElementById("score--1");
const currentPlayerOneEl = document.getElementById("current--0");
const currentPlayerTwoEl = document.getElementById("current--1");

const playerOneEl = document.querySelector(".player--0");
const playerTwoEl = document.querySelector(".player--1");

const btnNewGameEl = document.querySelector(".btn--new");
const btnHoldScoreEl = document.querySelector(".btn--hold");
const btnRollDiceEl = document.querySelector(".btn--roll");

const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

// ==============
// Variables
// ==============
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// =============
// Functions
// =============
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	playerOneEl.classList.toggle("player--active");
	playerTwoEl.classList.toggle("player--active");
};

const saveScore = function () {
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

	if (scores[activePlayer] >= 100) {
		document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
		document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
		btnHoldScoreEl.classList.add("hidden");
		btnRollDiceEl.classList.add("hidden");
		return;
	}
	switchPlayer();
};

// ========================
// Buttons
// ========================

btnRollDiceEl.addEventListener("click", () => {
	const dice = Math.trunc(Math.random() * 6) + 1;
	diceEl.classList.remove("hidden");
	diceEl.src = `./img/dice-${dice}.png`;

	if (dice !== 1) {
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		return;
	}
	switchPlayer();
});

btnHoldScoreEl.addEventListener("click", saveScore);

// TODO: create a variable to initialize at the start of the game to reset the values
btnNewGameEl.addEventListener("click", () => {
	document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
	diceEl.classList.add("hidden");
	playerOneEl.classList.add("player--active");
	playerTwoEl.classList.remove("player--active");
	btnHoldScoreEl.classList.remove("hidden");
	btnRollDiceEl.classList.remove("hidden");
	activePlayer = 0;
	currentScore = 0;
	scorePlayerOneEl.textContent = 0;
	scorePlayerTwoEl.textContent = 0;
	currentPlayerOneEl.textContent = 0;
	currentPlayerTwoEl.textContent = 0;
});
