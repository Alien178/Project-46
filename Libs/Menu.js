function StartMenu() {
    
    pauseButton.visible = false;
    playButton.x = windowWidth / 2;
    playButton.y = windowHeight / 1.5;

    textSize((windowWidth + windowHeight) / 19.24);
    textFont(font2);
    fill("white");
    text("Wizard's", playButton.x - 300, playButton.y - 350);
    textSize((windowWidth + windowHeight) / 28.86);
    textFont(font2);
    fill("white");
    text("Way", playButton.x - 100, playButton.y - 250);
    //text("Value: " + value, playButton.x - 100, playButton.y - 200);

    if (mousePressedOver(playButton)) {
        gameState = "PLAY";
        playButton.visible = false;
        UnHide();
        LevelOne();
    }
}

function PlayMenu() {
    pauseButton.visible = true;

    if (mousePressedOver(DebugKillFriend)) {
        friendHealth = 0;
        health = 1000;
    }

    if (mousePressedOver(pauseButton) || touches.length > 0) {
        pauseButton.visible = false;
        gameState = "PAUSE";
        var test = touches;
        console.log(test);
        touches = [];
        Hide();
    }
}

function PauseMenu() {
    player.velocityX = 0;
    player.velocityY = 0;
    friend1.velocityX = 0;
    friend1.velocityY = 0;
    bulletGroup.destroyEach();
    bulletGroup2.destroyEach();
    bulletGroup3.destroyEach();
    bulletGroup4.destroyEach();

    friendBulletGroup.destroyEach();
    friendBulletGroup2.destroyEach();
    friendBulletGroup3.destroyEach();
    friendBulletGroup4.destroyEach();
}