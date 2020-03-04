var config = {
    width: 400,
    height: 600,
    backgroundColor: "#b3b3b3",
    scene: [bootScene, playScene],
    physics: {
      default: "arcade",
      arcade: {
        debug: true
      }
    }
  }
  var gameSettings = {
    playerSpeed : 200,
  }
  var text;
  var game = new Phaser.Game(config);