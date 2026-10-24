// Example widget: a click counter.
// Pattern for every widget: find your <div id="...-widget"> and render into it.
(function () {
  const root = document.getElementById("example-widget");
  let count = 0;

  const button = document.createElement("button");
  button.textContent = "Clicked 0 times";
  button.addEventListener("click", function () {
    count++;
    button.textContent = "Clicked " + count + " times";
  });

  root.appendChild(button);
})();
