var menuState = {
    create: function() {
        // Start game on space bar press
        var starte = this.game.add.button(game.world.centerX, game.world.centerY,'starte', this.start,this);

        // styles and centered positions for labels
        var style = { font: "28px Fugaz One", fill: "#FFF" };
        var x = game.world.width/2, y = game.world.height/2;

        
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