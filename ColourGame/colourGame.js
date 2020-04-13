var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  // Generate new colours
	colours = generateRandomColours(6);
	// Pick a new random color from array
	pickedColour = pickColour();
	// Change colourDisplay to match picked colour
	colourDisplay.textContent = pickedColour;
	// Change colours of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = "#232323";
});

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  // Add initial colours to squares
  squares[i].style.backgroundColor = colours[i];

  // Ad click listeners to squares
  squares[i].addEventListener("click", function(){
    // Grab colour of clicked square
    var clickedColour = this.style.backgroundColor;
    // Compare colour to pickedColour
    if(clickedColour === pickedColour){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColours(clickedColour);
      h1.style.backgroundColor = clickedColour;
    } else {
      messageDisplay.textContent = "Try again";
      this.style.backgroundColor = "#232323";
    }
  })
}

function changeColours(colour){
  // Loop through all squares
  for(var i = 0; i < squares.length; i++){
    // Change each square to match the given colour
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour(){
  var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
  // Make an array
  var arr = [];
  // Add num random colours to array
  for(var i = 0; i < num; i++){
    // Get random colour and push into array
    arr.push(randomColour());
  }
  return arr;
}

function randomColour(){
  // Pick a Red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a Green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a Blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}