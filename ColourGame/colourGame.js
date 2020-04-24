var colours = [];
var numSquares = 6;
var pickedColour;
var colourDisplay = document.getElementById("colourDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	// Mode button event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	// Square Colour listeners
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
	  });
	}
}

function reset(){
  // Generate new colours
	colours = generateRandomColours(numSquares);
	// Pick a new random colour from array
	pickedColour = pickColour();
	// Change colourDisplay to match picked colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = '';
	// Change colours of squares
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
  numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.background = colours[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.background = colours[i];
			squares[i].style.display = "block";
		}
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

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
