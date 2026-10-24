// Self-executing anonymous function to avoid polluting the global scope
(function() {
  // 1. Find the target container
  const container = document.getElementById('erolf-widget');
  if (!container) return; // Exit if container isn't on the page

  // 2. Inject HTML structure and basic CSS styling
  container.innerHTML = `
    <style>
      #erolf-widget { font-family: sans-serif; max-width: 250px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
      .erolf-task { display: flex; justify-content: space-between; margin: 8px 0; cursor: pointer; }
      .erolf-done { text-decoration: line-through; color: #aaa; }
      .erolf-delete { color: red; border: none; background: none; cursor: pointer; font-weight: bold; }
    </style>
    <h3 style="margin-top:0;">Daily To-Do</h3>
    <input type="text" id="erolf-input" placeholder="What needs to be done?" style="width: 70%;" />
    <button id="erolf-add">Add</button>
    <ul id="erolf-list" style="list-style: none; padding: 0;"></ul>
  `;

  // 3. Grab the newly created elements
  const input = document.getElementById('erolf-input');
  const btn = document.getElementById('erolf-add');
  const list = document.getElementById('erolf-list');

  // 4. Function to add a new task
  function addTask() {
    const text = input.value.trim();
    if (!text) return; // Ignore empty inputs

    const li = document.createElement('li');
    li.className = 'erolf-task';
    
    // Create task text and delete button
    li.innerHTML = `
      <span class="text">${text}</span>
      <button class="erolf-delete">X</button>
    `;

    // Toggle cross-out effect when clicking the text
    li.querySelector('.text').addEventListener('click', function() {
      this.classList.toggle('erolf-done');
    });

    // Remove the list item when clicking 'X'
    li.querySelector('.erolf-delete').addEventListener('click', function() {
      li.remove();
    });

    // Append to the list and clear the input
    list.appendChild(li);
    input.value = '';
  }

  // 5. Listen for clicks on the "Add" button or the "Enter" key
  btn.addEventListener('click', addTask);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
})();