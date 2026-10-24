// widgets/juan.js - Temperature Converter (Celsius, Fahrenheit, Kelvin)
(function () {
  const container = document.getElementById("juan-widget");
  if (!container) return;

  // Render HTML interface
  container.innerHTML = `
    <div style="font-family: sans-serif; max-width: 300px; padding: 15px; border: 1px solid #ccc; border-radius: 8px;">
      <h3 style="margin: 0 0 10px;">Temperature Converter</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 10px;">
        <input type="number" id="juan-val" value="0" style="flex: 1; padding: 6px;">
        <select id="juan-unit" style="padding: 6px;">
          <option value="C">°C</option>
          <option value="F">°F</option>
          <option value="K">K</option>
        </select>
      </div>
      <div id="juan-res" style="font-size: 14px; line-height: 1.5; background: #f9f9f9; padding: 8px; border-radius: 4px;"></div>
    </div>
  `;

  const valInput = container.querySelector("#juan-val");
  const unitSelect = container.querySelector("#juan-unit");
  const resDiv = container.querySelector("#juan-res");

  // Conversion logic & UI update
  function convert() {
    const val = parseFloat(valInput.value);
    if (isNaN(val)) {
      resDiv.innerHTML = "Please enter a valid number.";
      return;
    }

    let c, f, k;
    const unit = unitSelect.value;

    // Convert input to all three scales
    if (unit === "C") {
      c = val;
      f = (val * 9) / 5 + 32;
      k = val + 273.15;
    } else if (unit === "F") {
      c = ((val - 32) * 5) / 9;
      f = val;
      k = c + 273.15;
    } else if (unit === "K") {
      k = val;
      c = val - 273.15;
      f = (c * 9) / 5 + 32;
    }

    // Display formatted results
    resDiv.innerHTML = `
      <strong>${c.toFixed(2)}</strong> °C<br>
      <strong>${f.toFixed(2)}</strong> °F<br>
      <strong>${k.toFixed(2)}</strong> K
    `;
  }

  // Attach event listeners for real-time updates
  valInput.addEventListener("input", convert);
  unitSelect.addEventListener("change", convert);

  // Initial calculation on load
  convert();
})();
