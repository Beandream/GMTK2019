var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 2000 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.cameras.main.backgroundColor.setTo(160, 185 ,255);

    this.load.image('bedrock', 'assets/bedrock.jpg');
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(500, 400, 'bedrock').setScale(0.1);
    player.setBounce(0.1);
    player.setCollideWorldBounds(true);


    platforms = this.physics.add.staticGroup();
    platforms.create(500, 750, 'bedrock').setScale(1.85, 0.2).refreshBody();
    platforms.create(700, 550, 'bedrock').setScale(0.2).refreshBody();
    platforms.create(350, 350, 'bedrock').setScale(0.2).refreshBody();

    this.physics.add.collider(player, platforms);
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-360);

    }
    else if (cursors.right.isDown) {
        player.setVelocityX(360);

    }
    else {
        player.setVelocityX(0);

    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-1030);
    }
}
