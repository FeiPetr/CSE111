let config = {
    type: Phaser.CANVAS,
    width: 640,
    height:480,
    scene: [Menu,Play]
}
let game = new Phaser.Game(config); //initialize, config canvas size
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
//Set UI sizes, border+padding
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

