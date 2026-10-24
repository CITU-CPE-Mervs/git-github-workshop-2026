// Render random engineering survival quote generator into #kescy-widget
(function() {
  const el = document.getElementById('kescy-widget');
  if (!el) return;

  // List of engineering survival quotes
  const quotes = [
    { text: "If it moves and shouldn't: Duct tape. If it doesn't move and should: WD-40.", author: "Engineering Rule #1" },
    { text: "Everything works in simulation until you turn on the power.", author: "Hardware Axiom" },
    { text: "If it works, don't touch it.", author: "Production Proverb" },
    { text: "To the optimist, the glass is half full. To the pessimist, half empty. To the engineer, it is twice as big as necessary.", author: "Anonymous" },
    { text: "A complex system that works is invariably found to have evolved from a simple system that worked.", author: "John Gall" }
  ];

  el.innerHTML = `
    <style>
      .kescy-quote-box { font-family: sans-serif; background: #222; color: #fff; padding: 16px; border-radius: 8px; width: 280px; text-align: center; }
      .kescy-text { font-style: italic; font-size: 14px; min-height: 60px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; }
      .kescy-author { font-size: 12px; color: #888; margin-bottom: 12px; display: block; }
      .kescy-btn { padding: 8px 14px; background: #ff9800; border: none; color: #000; font-weight: bold; border-radius: 4px; cursor: pointer; }
      .kescy-btn:hover { background: #e68a00; }
    </style>
    <div class="kescy-quote-box">
      <h4>Engineering Survival</h4>
      <div class="kescy-text" id="k-text"></div>
      <span class="kescy-author" id="k-author"></span>
      <button class="kescy-btn" id="k-next">Get Survival Tip</button>
    </div>
  `;

  const textEl = el.querySelector('#k-text');
  const authorEl = el.querySelector('#k-author');
  const btn = el.querySelector('#k-next');

  // Pick a random quote and update display
  function nextQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    textEl.textContent = `"${q.text}"`;
    authorEl.textContent = `— ${q.author}`;
  }

  btn.onclick = nextQuote;
  nextQuote(); // Display initial quote on render
})();