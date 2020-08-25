var database;
var form,player,game;
var gameState = 0;
var playerCount;
var allPlayers;
var person1,person2,people;
var person1FruitScore,person1DiamondScore,person2FruitScore,person2DiamondScore;
var person1img,person2img;
var ground1,ground2,grounds;
var fruit1,fruitGroup1,fruit2,fruitGroup2;
var diamond1,diamondGroup1,diamond2,diamondGroup2;

function preload()
{
  //bg = loadImage("a.jpg");
  fruitGroup1 = new Group();
  fruitGroup2 = new Group();
  diamondGroup1 = new Group();
  diamondGroup2 = new Group();
}

function setup() 
{
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  background("white");

  if(playerCount == 2)
  {
     game.update(1);  
  }

  if(gameState == 1)
  {
     clear();
     game.play();
  }

  if(fruitGroup1.isTouching(person1))
  {
    person1FruitScore = person1FruitScore + 1;
    fruitGroup1.destroyEach();
  }

  if(fruitGroup2.isTouching(person2))
  {
    person2FruitScore = person2FruitScore + 1;
    fruitGroup2.destroyEach();
  }

  
  if(diamondGroup1.isTouching(person1))
  {
    person1FruitScore = person1FruitScore + 1;
    diamondGroup1.destroyEach();
  }

  if(diamondGroup2.isTouching(person2))
  {
    diamond2FruitScore = person2FruitScore + 1;
    diamondGroup2.destroyEach();
  }

 
  fill("black");
  textSize(20);
  text("Player 1 Fruits Collected: "+person1FruitScore,300,50);
  text("Player 1 Diamonds Collected: "+person1DiamondScore,300,70);
  text("Player 2 Fruits Collected: "+person2FruitScore,300,90);
  text("Player 2 Diamonds Collected: "+person2DiamondScore,300,110);
}

function isTouching(object1,object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function bounceOff(object1,object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2)
  {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }

  if(object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < fixedRect.height/2 + object1.height/2)  
  {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }

  if(object1.isTouching(topEdge)) 
  {
    object1.velocityY = 5;
  } 

  if(object1.isTouching(bottomEdge)) 
  {
    object1.velocityY = -5;
  }

  if(object2.isTouching(topEdge)) 
  {
    object2.velocityY = 5;
  } 

  if(object2.isTouching(bottomEdge))
  {
    object2.velocityY = -5;
  }
}


