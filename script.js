
//create a scene with class
var GameScene1 = new Phaser.Class({

    //The sahne is noted.
    Extends: Phaser.Scene,

    initialize:

    function GameScene1 ()
    {
        //We create the scene and set the key.
        Phaser.Scene.call(this, { key: 'GameScene1' });
    },

    preload: function ()
    {
    },

    create: function ()
    {
        //write start
        var txt1 = this.add.text(400,300, 'start');
        //Let txt1 object interactively
        //pointerdown feature with mouse click
        txt1.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('GameScene2');
        });
    }

});

//create a scene with class
var GameScene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'GameScene2' });
    },

    preload: function ()
    {
        //load ship
        this.load.image('ship','assets/ship.png');
    },

    create: function ()
    {
        //Create the ship object
        var ship=this.physics.add.sprite(500,300,'ship');
        //Move ship object
        ship.setVelocityX(-10);

        var txt2 = this.add.text(100,50, 'pause');
        //Let txt1 object interactively
        //pointerdown feature with mouse click
        txt2.setInteractive().on('pointerdown', function() {
            //Let's pause scene with pause
           this.scene.scene.pause('GameScene2');
        });
        
        
    },

    update:function(){

        
       
    }

});


//settings required to configure the game
var config = {
    type: Phaser.AUTO,   
    width: 800,
    height:  600,
    physics: {
        default: 'arcade'
    },
    //set background color
    backgroundColor: 0x27ae60,
    scale: {
        //we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //set scenes
    scene:[GameScene1,GameScene2]
    
};


var game = new Phaser.Game(config);


