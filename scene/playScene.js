class playScene extends Phaser.Scene {
    constructor(){
        super("playGame");
    }
    create(){
        text = this.add.text(config.width*0.8, config.height*0.9, '', { font: '18px Verdana', fill: '#ffffff' });
        this.player = this.physics.add.sprite(config.width/2, config.height/2, "player")
        this.player.setCollideWorldBounds(true);

        this.beamSound = this.sound.add("audio_beam");

        this.cursor = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.projectiles = this.add.group();

    }

    update(){
        text.setText([
            'x : ' + Math.trunc(this.player.x),
            'y : ' + Math.trunc(this.player.y),
        ]);
        
        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.shootBeam();
            this.beamSound.play();  
        }

        for(var i = 0; i < this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }

        this.movePlayer();
    }

    movePlayer(){
        if(this.cursor.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed)
        } else if(this.cursor.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        } else {
            this.player.setVelocityX(0);
        }

        if(this.cursor.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if(this.cursor.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        } else {
            this.player.setVelocityY(0);
        }
    }

    shootBeam(){
        var beam = new Beam(this);
    }
}