// Here is where your program code will eventually go.
// Make sure you are writing in GameSpec.js before you work on this file.

// Move the player to the right
function moveRight() {
	// Check if the player x coordinate is still inside the board
	if(player.x < 15) {
		// Add 1 to its x coordinate
		player.x += 1;
	}
}

function moveLeft() {
	if(player.x > 0) {
		player.x -= 1;
	}
}

function moveDown() {
	if(player.y < 15) {
		player.y += 1;
	}
}

function moveUp() {
	if(player.y > 0) {
		player.y -= 1;
	}
}