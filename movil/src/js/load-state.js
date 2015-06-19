var loadState = {
    preload: function() {
        game.stage.backgroundColor = '#FF0010';
        game.load.spritesheet('cart', 'dist/img/cart.png', 60, 113, 1);
        game.load.spritesheet('rival', 'dist/img/rival-cart.png', 53, 99, 1);

        game.load.spritesheet('izquierda', 'dist/img/izquierda.png', 76, 70);
        game.load.spritesheet('derecha', 'dist/img/derecha.png', 76, 70);
        game.load.spritesheet('starte', 'dist/img/jugar.png', 200, 118);

        game.load.image('backg', 'dist/img/bg-mobile.png');

        game.load.image('particle', 'dist/img/particle.png');
        game.load.image('road', 'dist/img/road.png');
        game.load.image('logo', 'assets/sprites/phaser2.png');
    },

    create: function() {
        game.state.start('menu');
    }
};