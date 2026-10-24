
/* compra.js - D6 and D20 RPG Dice Roller */

// Find the widget container
const widget = document.getElementById("compra-widget");

// Create the widget layout
widget.innerHTML = `
  <div class="dice-roller">
    <p>Choose your dice and roll!</p>
    <button id="roll-d6">Roll D6 🎲</button>
    <button id="roll-d20">Roll D20 🎲</button>
    <h3 id="dice-result">Result: -</h3>
  </div>
`;

// Roll a die and display its result
function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById("dice-result").textContent =
    "D" + sides + " Result: " + result;
}

// Connect buttons to the dice roller
document.getElementById("roll-d6").addEventListener("click", function () {
  rollDice(6);
});

document.getElementById("roll-d20").addEventListener("click", function () {
  rollDice(20);
});
