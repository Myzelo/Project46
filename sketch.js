// images: background(highschool, classes 6-7, house, practice areas)
// self-drawn: characters (boys+girls), life bars (stats)
var database,form, gameState, banner_img, game, girl_img, boy_img, girl, boy;

function preload()
{
  banner_img = loadImage("images/game_banner_placeholder.png");
  girl_img = loadImage("images/dora_de_explorer.png");
  boy_img = loadImage("images/guy_placehodler.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  
  form = new Form();
  game = new Game()
}


function draw() {

  background(0);
  
  drawSprites();
  form.display();

  if(gameState === "start"){
   form.handleSubmitButton();
  }

  else if(gameState === "play"){
    game.start(); 
   game.play();
   
  }
 
}



