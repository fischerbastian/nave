class bootScene extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("player", "assets/sprites/square.png");
        this.load.image("beam", "assets/sprites/shoot.png");

        this.load.audio("audio_beam", "assets/sounds/beam.ogg");
    }
    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}