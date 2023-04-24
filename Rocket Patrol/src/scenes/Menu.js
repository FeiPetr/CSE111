class Menu extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("menuScene");
    }

    create(){
        this.add.text(20,20,"Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}