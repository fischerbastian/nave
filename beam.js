class Beam extends Phaser.GameObjects.Sprite {
    constructor(scene) {

        var x = scene.player.x;
        var y = scene.player.y - 20;
        
        super(scene, x, y, "beam");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.body.velocity.y = - 350;
        scene.projectiles.add(this);

    }

    update(){
        if(this.y < 10){
            this.destroy();
        }
    }
}
