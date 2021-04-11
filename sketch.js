var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score=0;

function preload(){  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
    
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score=0;
  
}


function draw() {
  background(200);
  
  text("Score: "+ score,400,50);
  score = score + Math.round(getFrameRate()/60);
  
  if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 600){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground); 
  
  bananas();
  obstacles();

  drawSprites();
}

function bananas(){
  if(frameCount % 80 === 0){
    banana = createSprite(500,100,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.velocityX=-4;
    banana.setlifetime=100;
    banana.scale=0.1;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(80,315,20,20);
    obstacle.x = Math.round(random(400,600));
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-4;
    obstacle.setlifetime=100;
    obstacle.scale=0.1;
    
    obstacleGroup.add(obstacle);
  }
}



