function changeColor(element) {
    // Generate a random color and set it as the background color
    var randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
  }

  function resetColor(element) {
    // Reset the background color to the initial state
    element.style.backgroundColor = "#fff";
  }

  function getRandomColor() {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }