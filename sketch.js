
var monkey , monkey_running;
var banana ,bananaImage, obstacleImage;
var foodGroup, obstacleGroup, obstacle;
var score;
var jungle , jungleImage;
var survivalTime = 0;
var invisibleGround;
var background1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadAnimation("Jungle.jpg");
  
}



function setup() {
  
    
 jungle = createSprite(200,200,400,10);
 jungle.addAnimation("moving",jungleImage);
 jungle.velocityX = -4; 
 jungle.x=jungle.x/2;
 
invisibleGround = createSprite(10,380,600,20);
invisibleGround.visible = false;

 monkey = createSprite(100,350);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.1;
  
   
//monkey.debug = true;

  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background("red");


  
  if (jungle.x < 100){
      jungle.x = jungle.width/2;
    }
  
    survivalTime = survivalTime + Math.round(frameRate()/60);
  
  
if(keyDown("space") && monkey.y >= 330) {
      monkey.velocityY = -15;

    } 
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  

  
 
 
 drawSprites(); 
  
   stroke("black");
 fill("black");
 textSize(15);
 text("Survival Time : " + survivalTime,250,40);

  if(monkey.isTouching(obstacleGroup)){

  foodGroup.destroyEach();
  obstacleGroup.destroyEach();
  SurvivalTime = 0;
  jungle.velocityX = 0;
  survivalTime = 0;
  
    text("Game Over",200,200);
    textSize(100);
    
  }
  
  if(monkey.isTouching(foodGroup)){
    
    foodGroup.destroyEach();
    
    
  }
  
  
  
  
    spawnBanana();
    spawnObstacles();
}


function spawnBanana(){
  
 if (frameCount % 100 === 0) { 
   banana = createSprite(600,250,40,10); 
   banana.y = random(190,240);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -4;
   foodGroup.add(banana);
 }
  
}

function spawnObstacles(){
  
  if(frameCount % 80 === 0) {
  obstacle = createSprite(390,360,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4; 
  obstacle.lifetime = 200;
     obstacleGroup.add(obstacle);
  }
  
 
  
}

