var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 700,
    autoCenter: true,
    backgroundColor: '#ffffcc',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('goku', 'images/goku.png');
    this.load.image('frieza', 'images/Frieza.png');
    this.load.image('jiren', 'images/jiren.png');
    this.load.image('tournament', 'images/tournament.png');
}

function create() {

    this.add.image(400, 300, 'tournament');

    var goku = this.add.sprite(100, 660, 'goku');
    var frieza = this.add.sprite(300, 700, 'frieza');
    var jiren = this.add.sprite(600, 690, 'jiren');

    goku.setInteractive();
    frieza.setInteractive();
    jiren.setInteractive();

    this.input.setDraggable(goku);
    this.input.setDraggable(frieza);
    this.input.setDraggable(jiren);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}