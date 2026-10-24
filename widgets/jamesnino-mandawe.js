// Jamesnino's widget: 8-bit binary to decimal & hex converter
// Renders into <div id="jamesnino-mandawe-widget">
(function () {
  // Find the container; stop quietly if it's missing
  const container = document.getElementById("jamesnino-mandawe-widget");
  if (!container) return;

  // Create the input box (max 8 characters)
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 8;
  input.placeholder = "e.g. 10110101";
  input.setAttribute("aria-label", "8-bit binary number");

  // Create the area that shows the answer
  const result = document.createElement("p");

  // Put them on the page
  container.append(input, result);

  // Convert whatever is typed into decimal and hex
  function convert() {
    // Remove anything that isn't a 0 or 1
    const bits = input.value.replace(/[^01]/g, "");
    if (bits !== input.value) input.value = bits;

    // Nothing typed yet? Show a hint
    if (bits === "") {
      result.textContent = "Type up to 8 bits (only 0s and 1s).";
      return;
    }

    // parseInt(text, 2) reads the text as a base-2 (binary) number
    const decimal = parseInt(bits, 2);

    // toString(16) gives hex; padStart makes it at least 2 digits
    const hex = decimal.toString(16).toUpperCase().padStart(2, "0");

    result.textContent = "Decimal: " + decimal + "  |  Hex: 0x" + hex;
  }

  // Update the answer every time the user types
  input.addEventListener("input", convert);

  // Show the hint when the page first loads
  convert();
})();