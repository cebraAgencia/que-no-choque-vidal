// get users screen size
winW = window.innerWidth;
winH = window.innerHeight;

var starButtonX = (winW / 2) - 100;
var starButtonY = winH - 150;

var menuState = {
    create: function() {
        // Inicio el juego con un click en el boton jugar
        var starte = this.game.add.button(starButtonX,starButtonY,'starte', this.start,this);

        // styles and centered positions for labels
        var style = { font: "28px Fugaz One", fill: "#FFF" };
        var x = game.world.width/2, y = game.world.height/2;

        // logo
        var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'backg');
        sprite.anchor.setTo(0.5, 0.5);
        sprite.alpha = 0;
        game.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        

        // Check for best score
        if (bestScore !== 0) {
            var lastScore = this.game.add.text(x, y - 150, "Te pasaste " + score + " autos.", style);
            var bestScoreLabel = this.game.add.text(x, y - 100, "Mejor puntaje: " + bestScore, style);
            lastScore.anchor.setTo(0.5, 0.5);
            bestScoreLabel.anchor.setTo(0.5, 0.5);
        }
    },

    // Start game
    start: function() {
        // reset count
        i = 0;
        this.game.state.start('game');
    }
};