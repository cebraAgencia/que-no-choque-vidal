var loadState = {
    preload: function() {
        game.stage.backgroundColor = '#FF0010';
        game.load.spritesheet('cart', 'dist/img/cart.png', 100, 189, 1);
        game.load.spritesheet('rival', 'dist/img/rival-cart.png', 91, 172, 1);
        game.load.image('particle', 'dist/img/particle.png');
        game.load.spritesheet('starte', 'dist/img/jugar.png', 200, 118);
        game.load.image('road', 'dist/img/road.png');
    },

    create: function() {
        game.state.start('menu');
    }
};