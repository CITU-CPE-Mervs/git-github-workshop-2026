// Gabriel's widget: a dice roller card.
// Renders into <div id="gabriel-widget">. No libraries, just vanilla JS.
(function () {
  const root = document.getElementById("gabriel-widget");
  if (!root) return;

  // Unicode dice faces for values 1-6
  const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  let rolls = 0;

  // Build the card markup
  root.innerHTML = `
    <div style="text-align:center; padding:1rem; border:1px solid #ddd; border-radius:8px;">
      <div id="gabriel-die" style="font-size:5rem; line-height:1; transition:transform .4s;">🎲</div>
      <p id="gabriel-result" style="margin:.75rem 0; font-weight:600;">Press roll to start</p>
      <button id="gabriel-roll">Roll the dice</button>
      <p id="gabriel-count" style="margin:.75rem 0 0; font-size:.85rem; opacity:.7;">Rolls: 0</p>
    </div>
  `;

  const die = root.querySelector("#gabriel-die");
  const result = root.querySelector("#gabriel-result");
  const button = root.querySelector("#gabriel-roll");
  const count = root.querySelector("#gabriel-count");

  // Roll: spin the die briefly, then show a random face 1-6
  button.addEventListener("click", function () {
    button.disabled = true;
    die.style.transform = "rotate(" + (360 * (rolls + 1)) + "deg)";

    setTimeout(function () {
      const value = Math.floor(Math.random() * 6) + 1;
      rolls++;
      die.textContent = faces[value - 1];
      result.textContent = "You rolled a " + value + "!";
      count.textContent = "Rolls: " + rolls;
      button.disabled = false;
    }, 400);
  });
})();
