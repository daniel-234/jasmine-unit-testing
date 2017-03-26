// Here is where your tests will go.
describe('The game', function() {
	// write a test describing the function called moveRight
	describe('The function called moveRight', function() {
		it('should add 1 to player.x', function() {
			// Store the player x coordinate before moving it to the right
			var xCoordinate = player.x;
			// Move player to the right
			moveRight();
			// Expect its new x coordinate to be equal to its former
			// x coordinate value before calling the moveRight function
			expect(player.x).toEqual(xCoordinate + 1);
		});
	});

	// write a test describing the function called moveLeft
	describe('The function called moveLeft', function() {
		it('should subtract 1 from player.x', function() {
			var xCoordinate = player.x;
			moveLeft();
			expect(player.x).toEqual(xCoordinate - 1);
		});
	});

	// write a test describing the function called moveDown
	describe('The function called moveDown', function() {
		it('should add 1 to player.y', function() {
			var yCoordinate = player.y;
			moveDown();
			expect(player.y).toEqual(yCoordinate - 1);
		});
	});

	// write a test describing the function called moveUp
	describe('The function called moveUp', function() {
		it('should subtract 1 from player.y', function() {
			var yCoordinate = player.y;
			moveUp();
			expect(player.y).toEqual(yCoordinate + 1);
		});
	});
});