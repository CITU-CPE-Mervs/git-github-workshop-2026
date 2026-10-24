// Select the target widget container
const container = document.getElementById('richellene-mae-tallo-widget');

if (container) {
  // Inject HTML structure for the converter
  container.innerHTML = `
    <div style="font-family: sans-serif; padding: 10px;">
      <input type="text" id="r-bin" maxlength="8" placeholder="Enter up to 8 bits (0/1)" style="padding: 6px; width: 100%; box-sizing: border-box; margin-bottom: 8px;" />
      <div><strong>Decimal:</strong> <span id="r-dec">0</span></div>
      <div><strong>Hexadecimal:</strong> <span id="r-hex">0x0</span></div>
    </div>`;

  const input = document.getElementById('r-bin');
  const decOutput = document.getElementById('r-dec');
  const hexOutput = document.getElementById('r-hex');

  // Listen for user input and convert
  input.addEventListener('input', () => {
    // Keep only 0 and 1 characters
    input.value = input.value.replace(/[^01]/g, '');
    
    if (input.value.length > 0) {
      const decimalValue = parseInt(input.value, 2);
      decOutput.textContent = decimalValue;
      hexOutput.textContent = '0x' + decimalValue.toString(16).toUpperCase();
    } else {
      decOutput.textContent = '0';
      hexOutput.textContent = '0x0';
    }
  });
}