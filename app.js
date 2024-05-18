// A program that changes the BACKGROUND of the body every time the button is clicked and it displays the actual values used on the body

// Getting elements from the DOM

const body = document.querySelector('body');
const button = document.querySelector('#change');
const colorValue = document.querySelector('.color-value');

// Event Listener on the button 'click'
button.addEventListener('click', () => {
  // Generating random color value for rga
  const randomColor = {
    ColorOne: Math.floor(Math.random() * 256),
    ColorTwo: Math.floor(Math.random() * 256),
    ColorThree: Math.floor(Math.random() * 256),
    ColorFour: Math.floor(Math.random() * 256),
    ColorFive: Math.floor(Math.random() * 256),
    ColorSix: Math.floor(Math.random() * 256),
  };

  const values = {
    valueOne: `rgb(${randomColor.ColorOne}, ${randomColor.ColorTwo}, ${randomColor.ColorThree})`,
    valueTwo: `rgb(${randomColor.ColorFour}, ${randomColor.ColorFive}, ${randomColor.ColorSix})`,
  };

  // changing the background of the body every time the button is clicked using two rga values on background property with liner-gradient
  body.style.background = `linear-gradient(rgb(${randomColor.ColorOne},${randomColor.ColorTwo},${randomColor.ColorThree}),rgb(${randomColor.ColorFour},${randomColor.ColorFive},${randomColor.ColorSix}))`;

  // a function that outputs the value on the body and display the rgb value
  function displayColorValue() {
    //   when it is called first the container must be empty to prevent appending each value every time
    colorValue.innerText = '';

    Object.values(values).map((color) => {
      // creating an element 'p'
      const paragraph = document.createElement('p');
      const value = document.createTextNode(color);
      paragraph.style.backgroundColor = color;
      // appending the values
      paragraph.appendChild(value);
      colorValue.appendChild(paragraph);
    });
  }

  displayColorValue();
});
