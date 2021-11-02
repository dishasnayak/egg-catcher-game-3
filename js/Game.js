class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();
        

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        if(keyIsDown (RIGHT_ARROW)&& player.index !==null){
            player.distance+=10
            player.update()
          }
          if(keyIsDown (LEFT_ARROW)&& player.index !==null){
            player.distance-=10
            player.update()
          }

        if (frameCount % 20===0){
            eggs = createSprite(random(100,1000),0,100,100);
            eggs.velocityY=6
            var rand = Math.round(random(1,5))
            switch(rand){
              case 1:eggs.addImage("egg1",egg1I)
              break;
              case 2:eggs.addImage("egg1",egg2I)
              break;
              case 3:eggs.addImage("egg1",egg3I)
              break;
              case 4:eggs.addImage("egg1",egg4I)
              break;
              case 5:eggs.addImage("egg1",egg5I)
              break;
            }
            eggGroup.add(eggs);
        
          }
        

            for(var plr in allPlayers){
                index =index+1
                x = 500-allPlayers[plr].distance;
                y = 500
            
                players[index-1].x=x
                players[index-1].y=y
            
                if (index === player.index){
                  fill ("black");
                  textSize(25);
                  text(allPlayers[plr].name,x-25,y+25)
                }
              }

              if(player.index !==null){
                  for(var i = 0; i< eggGroup.length; i++){
                     if(eggGroup.get(i).isTouching(players)){
                        eggGroup.get(i).destroy();
                        player.score = player.score+
                        player.update();
                     }
                    
                  }
              }
//this is for text {
              textSize(25);
              fill("white")
              text("Player 1 : " +allPlayers.player1.score ,50,50);
              text("Player 2: " +allPlayers.player2.score ,50,100)

 //till here           }
            // Differentiate the main player by printing
            // the name of the player on the basket.
            //if(player.score>=10) {
            //  this.end
            //}
            if(eggGroup.isTouching(ground)){
              eggGroup.changeImage("broken egg",brokenegg.png)
            this.end
            }



        // Give movements for the players using arrow keys

         }
        // Create and spawn fruits randomly
        end(){
           // console.log("Game Ended");
          game.update()
          clear ()
          fill("blue") 
          textSize(40)
          text("GAME OVER",350,300)        
        }

        
    

  }
