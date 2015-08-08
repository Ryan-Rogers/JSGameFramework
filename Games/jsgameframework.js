console.log("JSGameFramework loaded");

// JSGameFramework by Ryan Rogers

// Variable declarations
var canvas;
var context;
var timeSinceLastFrame;
var characters = [];
var fps;

// Function declarations
// Moves the input character one time to the position given
function moveTo(inputName, inputX, inputY) {
    var tempCharacter = charByName(inputName);
    tempCharacter.xPos = inputX;
    tempCharacter.yPos = inputY;
    window.requestAnimationFrame(drawFrame);
}

// Takes a characters name and returns that character's object
function charByName(inputName) {
    
    // Iterating through the current list of characters
    for(var counter = 0; counter < characters.length; counter++) {
        
        // Returning character with matching name
        if(characters[counter].name === inputName) {
            return characters[counter];
        }
    }
    
    // Returning false if no characters matched
    return false;
}

// Creates a new character with the given properties and lists it
function character(inputName, inputSize, inputColor) {
    this.xPos = 0;
    this.yPos = 0;
    this.name = inputName;
    this.size = inputSize;
    this.color = inputColor;
    characters[characters.length] = this;
    console.log(inputName + " created");
    window.requestAnimationFrame(drawFrame);
}

// Draws the given list of characters
var draw = function(inputCharacters) {
    
    // Iterating through the current list of characters
    for(var counter = 0; counter < inputCharacters.length; counter++) {
        
        // Drawing each
        context.fillStyle = inputCharacters[counter].color;
        context.fillRect(inputCharacters[counter].xPos, 
                inputCharacters[counter].yPos, inputCharacters[counter].size, 
                inputCharacters[counter].size);
    }
};

// Redraws the canvas with the current characters
var drawFrame = function() {
    if(timeSinceLastFrame > 0) {
        timeSinceLastFrame = 0;
        paintCanvas("black");
        draw(characters);
    }
};

// Sets the size of the canvas with input width, height
var setSize = function(inputWidth, inputHeight) {
    
    // Setting width
    if(inputWidth === "fill") {
        context.canvas.width = window.innerWidth;
    } else {
        context.canvas.width = inputWidth;
    }
    
    // Setting height
    if(inputHeight === "fill") {
        context.canvas.height = window.innerHeight;
    } else {
        context.canvas.height = inputHeight;
    }
    
    console.log("Canvas changed to " + inputWidth + "x" + inputHeight);
};

// Fills the entire canvas with the input color
var paintCanvas = function(inputColor) {
    context.fillStyle = inputColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
};

// Increments the frame timer
var frameTimeIncrementer = function() {
    timeSinceLastFrame++;
};

// This code runs after the page has loaded
var load = function() {
    console.log("Page loaded");
    
    // Creating a canvas to draw the game and placing it in the body
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    document.body.appendChild(canvas);
    console.log("Canvas created");
    
    // Starting the game loop
    fps = 30;
    window.setInterval(frameTimeIncrementer(), 1000/fps);
    timeSinceLastFrame = 1;
    console.log("Game loop started");
};
window.addEventListener('load', load(), false);
