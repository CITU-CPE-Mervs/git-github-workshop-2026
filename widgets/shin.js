
(() => {
  "use strict";

  // Find the widget container
  const root = document.getElementById("shin-widget");
  if (!root) return;

  // Add cute pastel styling
  const style = document.createElement("style");
  style.textContent = `
    #shin-widget { font-family:"Trebuchet MS",sans-serif; color:#ac7291; }
    #shin-widget * { box-sizing:border-box; }
    #shin-widget .card {
      max-width:370px; margin:20px auto; padding:25px;
      background:#fff7fb; border:3px solid #ffd6e8;
      border-radius:28px; text-align:center;
      box-shadow:0 10px 25px #e8aec255;
    }
    #shin-widget h2 { color:#d58bad; margin:10px 0; }
    #shin-widget p { font-size:13px; color:#bc90a6; }
    #shin-widget .dice { font-size:48px; margin:12px; }
    #shin-widget button {
      background:#e9a8c5; color:white; border:0;
      padding:13px 22px; margin:6px; border-radius:15px;
      cursor:pointer; font-size:15px; font-weight:bold;
    }
    #shin-widget button:hover { background:#d58bad; }
    #shin-widget .result {
      background:#fff0f6; border-radius:18px;
      padding:18px; margin-top:18px;
    }
    #shin-widget .number { font-size:45px; color:#ce7fa5; font-weight:bold; }
  `;
  root.appendChild(style);

  // Create the dice roller layout
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="dice">🎲🎀</div>
    <h2>୨୧ Magical Dice Roller ୨୧</h2>
    <p>roll the dice, make some magic ♡</p>
    <button type="button" data-sides="6">♡ Roll D6</button>
    <button type="button" data-sides="20">♡ Roll D20</button>
    <div class="result" aria-live="polite">
      <p class="label">Your lucky number ✨</p>
      <div class="number">?</div>
    </div>
    <p>⋆˚୨୧⋆ may luck be with you ⋆୨୧˚⋆</p>
  `;
  root.appendChild(card);

  // Generate a random number from 1 to the chosen dice size
  card.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const sides = Number(button.dataset.sides);
      const roll = Math.floor(Math.random() * sides) + 1;
      card.querySelector(".number").textContent = roll;
      card.querySelector(".label").textContent = `You rolled a D${sides}! ✨`;
    });
  });
})();
