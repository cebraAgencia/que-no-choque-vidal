// get users screen size
winW = window.innerWidth;
winH = window.innerHeight;

// Initialize Phaser
var game = new Phaser.Game(winW, winH, Phaser.CANVAS, 'game-div');

// Game variables
var cart,
	rivals,
	timer,
	score,
	bestScore = 0,
	roadSprite,
	particle,
	i = 0;

// Define all the states
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('game', gameState);


// Start with the 'load' state
game.state.start('load');

