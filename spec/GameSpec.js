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
			expect(player.y).toEqual(yCoordinate + 1);
		});
	});

	// write a test describing the function called moveUp
	describe('The function called moveUp', function() {
		it('should subtract 1 from player.y', function() {
			var yCoordinate = player.y;
			moveUp();
			expect(player.y).toEqual(yCoordinate - 1);
		});
	});

	// write a test for the situation of the player going too far on the right
	describe('If the player goes out of bounds on the right', function() {
		it('should not move further on the right', function() {
			// Place the player at the right end of the board
			player.x = 15;
			// Move it to the right
			moveRight();
			// Expect its x coordinate to not have changed
			expect(player.x).toEqual(15);
		});
	});

	// write a test for the situation of the player going too far on the left
	describe('If the player goes out of bounds on the left', function() {
		it('should not move further on the left', function() {
			// Place the player at the left end of the board
			player.x = 0;
			moveLeft();
			expect(player.x).toEqual(0);
		});
	});

	// write a test for the situation of the player going too far downward
	describe('If the player goes out of bounds towards the bottom', function() {
		it('should not move further downward', function() {
			// Place the player at the bottom end of the board
			player.y = 15;
			moveDown();
			expect(player.y).toEqual(15);
		});
	});

	// write a test for the situation of the player going too far upward
	describe('If the player goes out of bounds towards the top', function() {
		it('should not move further upward', function() {
			// Place the player at the top end of the board
			player.y = 0;
			moveUp();
			expect(player.y).toEqual(0);
		});
	});

	// write tests for the checkWin function
	describe('The checkWin function', function() {
		it('checks that the player has won', function() {
			spyOn(window, 'checkWin');
			checkWin();
			// Use the spy matcher 'toHaveBeenCalled' to check if the function was called
			expect(window.checkWin).toHaveBeenCalled();
		});

		it('should return true if the player\'s coordinates match the goal coordinate', function() {
			player.x = 5;
			player.y = 5;
			goal.x = 5;
			goal.y = 5;
			expect(checkWin()).toEqual(true);
		});
	});
});