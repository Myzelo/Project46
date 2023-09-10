class Game {
    constructor(){
        
    }

    updateGameState(state){
        firebase.database().ref("/").update({
            gameState:state
        })
    }

    start(){
        girl = createSprite(400, 400, 20, 20);
        girl.addImage("standing", girl_img);

        boy = createSprite(400, 300, 20, 20);
        boy.addImage("standing", boy_img);
    }

    play(){
        imageMode(CENTER);
        image (banner_img , windowWidth/2, windowHeight/2 , windowWidth,windowHeight);
       
        drawSprites();
    }
}