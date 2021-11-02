var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var eggGroup,eggs;
var egg1I,egg2I,egg3I,egg4I,egg5I;
var ground
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket.png");
  egg1I = loadImage("images/egg1.png");
  egg2I = loadImage("images/egg2.png");
  egg3I = loadImage("images/egg3.png");
  egg4I = loadImage("images/egg4.png");
  egg5I = loadImage("images/egg5.png");
  eggGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  ground = createSprite(500,560,1000,20)
  //ground.x = ground.width /2;
  
}

function draw() {
  background(back_img);
  if (gameState===1){
    clear();
    game.play()
  }
  if (gameState===2){
    game.end()
  }
  if (playerCount===2){
    game.update(1)
  }

  // Add conditions for gameStates and playerCount

 drawSprites() 

  
  
}