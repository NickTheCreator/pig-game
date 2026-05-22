# 🎮 Pig Game

A two-player dice game where you roll, accumulate points, and decide when to hold your score before someone else wins.

---

## 📋 About

In this game, two players take turns rolling a dice to earn points. Each roll adds to your current round total, but if you roll a 1, you lose all points from that round and pass the dice to your opponent. You can hold your score at any time to save your points and switch turns. The first player to reach 100 points wins the game.

This project was built to practice JavaScript DOM manipulation, event listeners, and handling game state.  
It's a learning project focused on building interactive games with vanilla JavaScript.

---

## 🕹️ How It Works

1. Player 1 starts their turn with a score of 0 for the round
2. Click the "Roll dice" button to roll — the game picks a random number from 1 to 6
3. If you roll 2–6, that amount adds to your current round score
4. If you roll a 1, your current round score resets to 0 and your turn ends
5. Click "Hold" to save your current round score to your total and pass to the other player
6. The first player to reach 100 points wins — the game stops and shows the winner
7. Click "New game" to reset everything and play again

---

## 🛠️ Built With

- **HTML** — page structure and dice display
- **CSS** — layout, styling, and modern glassmorphism design
- **JavaScript** — game logic, player turns, and dice rolling mechanics

---

## 📁 File Structure

```
pig-game/
├── img/
│   ├── dice-1.png
│   ├── dice-2.png
│   ├── dice-3.png
│   ├── dice-4.png
│   ├── dice-5.png
│   └── dice-6.png
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in your browser
3. The game runs immediately — no setup needed

---

## 💡 What I Practiced

- Selecting and updating DOM elements with `querySelector` and `getElementById`
- Handling click events with `addEventListener`
- Generating random numbers with `Math.random()`
- Managing game state with variables and arrays
- Creating and switching between player turns
- Controlling classes to show or hide elements
- Changing CSS styles and classes from JavaScript
- Displaying dynamic images based on game outcomes
