class Game
{
   constructor()
   {
      
   }

   getState()
   {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data)
      {
        gameState = data.val();
      });
   }

   update(state)
   {
      database.ref('/').update
      ({
         gameState: state
      })
   }

   async start()
   {
      if(gameState == 0)
      {
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value"); 
         if(playerCountRef.exists())
         {
            playerCount = playerCountRef.val(); 
            player.getCount();
         }

         form = new Form();
         form.display();
      }
    
     // grounds = [ground1,ground2];

      person1 = createSprite(400,300,20,20);
      person1FruitScore = 0;
      person1DiamondScore = 0;
      //car1.addImage(car1img);
      person2 = createSprite(400,500,20,20);
      person2FruitScore = 0;
      person2DiamondScore = 0;
      //car2.addImage(car2img);
      people = [person1,person2];

      ground1 = createSprite(displayWidth/2,280,displayWidth*100,20);

      ground2 = createSprite(displayWidth/2,480,displayWidth*100,20);
   }

   play()
   {
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      var index = 0;
      var x = 130;
      var y = 60;

      for(var plr in allPlayers)
      {
        index = index + 1;
        x = displayWidth - allPlayers[plr].distance;
        y = y+200;
        people[index-1].x = x;
        people[index-1].y = y;
        if(index == player.index)
        {
          camera.position.x = people[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null)
    {
      player.distance -=15;
      //ground1.x = player.distance;
     // ground2.x = player.distance;
      player.update();
    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      person1.velocityY = -3;
    }
    person1.velocityY = person1.velocityY - 0.5;
  

    if(frameCount % 30 == 0)
    {
      fruit1 = createSprite(person1.x + 60,person1.y,10,10);
      fruit1.shapeColor = color("red");
      fruitGroup1.add(fruit1);
  
      fruit2 = createSprite(person2.x + 60,person2.y,10,10);
      fruit2.shapeColor = color("yellow");
      fruitGroup2.add(fruit2);
    }

    if(frameCount % 60 == 0)
    {
      diamond1 = createSprite(person1.x + 100,person1.y,10,10);
      diamond1.shapeColor = color("blue");
      diamondGroup1.add(diamond1);
  
      diamond2 = createSprite(person2.x + 100,person2.y,10,10);
      diamond2.shapeColor = color("blue");
      diamondGroup2.add(diamond2);
    }

    drawSprites();
  }

  /*end()
  {
     console.log("Game Has Ended");
     game.update(2);   
  }*/
}