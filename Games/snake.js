console.log("snake.js loaded");
/*
    Functions:
    moveTo(character, x, y)
    setSize(width, height)
    character(name, size, color)
*/

// Setting the game to size 500x500
setSize(500, 500);

// Creating a new character named Test who is 50x50 and green
character("Test", 50, "green");

// Moving test once to 100 right and 100 down
moveTo("Test", 100, 100);
