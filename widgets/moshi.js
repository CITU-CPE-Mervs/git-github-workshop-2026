// widgets/moshi.js

// Find the widget container
const widget = document.getElementById("moshi-widget");

// Create the widget interface
widget.innerHTML = `
  <h2>8-Bit Converter</h2>
  <label for="binary">Binary (8 bits):</label>
  <input id="binary" type="text" maxlength="8"
    placeholder="10101010" value="00000000">
  <p>Decimal: <span id="decimal">0</span></p>
  <p>Hexadecimal: <span id="hex">00</span></p>
  <p id="message" aria-live="polite"></p>
`;

// Get the input and output elements
const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const hex = document.getElementById("hex");
const message = document.getElementById("message");

// Convert binary whenever the user types
binary.addEventListener("input", function () {
  const value = binary.value;

  // Accept only 8-bit binary numbers
  if (!/^[01]{8}$/.test(value)) {
    decimal.textContent = "--";
    hex.textContent = "--";
    message.textContent = "Enter exactly 8 bits (0 or 1).";
    return;
  }

  // Convert binary to decimal
  const number = parseInt(value, 2);
  decimal.textContent = number;

  // Convert decimal to hexadecimal
  hex.textContent = number.toString(16).toUpperCase().padStart(2, "0");

  // Clear the error message
  message.textContent = "";
});