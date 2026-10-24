(function () {
  const root = document.getElementById("carlo-widget");
  if (!root) return;

  // Create the input and result fields inside the widget.
  root.innerHTML = `
    <label for="carlo-binary">8-bit binary (0s and 1s)</label><br>
    <input id="carlo-binary" type="text" maxlength="8" inputmode="numeric"
      value="00000000" aria-describedby="carlo-message">
    <p id="carlo-message" aria-live="polite"></p>
    <p>Decimal: <output id="carlo-decimal">0</output></p>
    <p>Hex: <output id="carlo-hex">0x00</output></p>`;

  const input = root.querySelector("#carlo-binary");
  const message = root.querySelector("#carlo-message");
  const decimal = root.querySelector("#carlo-decimal");
  const hex = root.querySelector("#carlo-hex");

  // Refresh both results whenever the input changes.
  input.addEventListener("input", function () {
    if (!/^[01]{8}$/.test(input.value)) {
      message.textContent = "Enter exactly 8 binary digits.";
      decimal.textContent = "—";
      hex.textContent = "—";
      return;
    }

    const value = parseInt(input.value, 2);
    message.textContent = "";
    decimal.textContent = value;
    hex.textContent = "0x" + value.toString(16).toUpperCase().padStart(2, "0");
  });
})();