//var gamestate=play;


var Runner, Runner_running, Runner_collided;

var ground, invisibleGround, groundImage;

var paused1,paused1Image;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6,obstacle7,obstacle8,obstacle9,
obstacle10,obstacle11,obstacle12;

var  dog,dog1,dog2,dog3,dog4,dog5,dog6,dog7,dog8;
var catImage,cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8; 


//var dog_running,dog1,dog2,dog3,dog4,dog5,dog6,dog7;

var balloon1,balloon2,balloon;

var score;

var coin,coinImage;


function preload(){
  Runner_running = loadAnimation("sprites/Runner1.png","sprites/Runner2.png","sprites/Runner3.png","sprites/Runner4.png","sprites/Runner5.png","sprites/Runner6.png","sprites/Runner7.png","sprites/Runner8.png","sprites/Runner9.png");

  groundImage = loadImage("ground/ground1.png");

  catImage=loadAnimation("sprites/cat1.png","sprites/cat2.png","sprites/cat3.png","sprites/cat4.png","sprites/cat5.png","sprites/cat6.png","sprites/cat7.png","sprites/cat8.png");
 
 

  balloon1 = loadImage("sprites/balloon1.png");

  balloon2 = loadImage("sprites/balloon2.png");

  obstacle1 = loadImage("sprites/obstacle1.png");
  obstacle2 = loadImage("sprites/obstacle2.png");
  obstacle3 = loadImage("sprites/obstacle3.png");
  obstacle4 = loadImage("sprites/obstacle4.png");
  obstacle5 = loadImage("sprites/obstacle5.png");
  obstacle6 = loadImage("sprites/obstacle6.png");
  obstacle7 = loadImage("sprites/obstacle7.png");
  obstacle8 = loadImage("sprites/obstacle8.png");
  obstacle9 = loadImage("sprites/obstacle9.png");
 obstacle10 =loadImage("sprites/obstacle10.png");
 obstacle11 =loadImage("sprites/obstacle11.png");
 obstacle12 =loadImage("sprites/obstacle12.jpg");
 paused1Image = loadImage("sprites/paused1.png");

 coinImage= loadImage("ground/coin.png");

 

}


function setup() {
  createCanvas(500,600)
  
  //create a trex sprite
  Runner = createSprite(50,210,20,50);
  Runner.addAnimation("running", Runner_running);
  Runner.scale = 0.2;



  


  paused1 = createSprite(400,19,20,50);
  paused1.addImage("paused", paused1Image);
  paused1.scale = 0.6;

  
  
  ground = createSprite(200,209,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
 invisibleGround = createSprite(200,225,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
 score = 0;  
}

function draw() {
  background("white");
  text("Score:" + score,6,14 );
  score=score+Math.round(frameCount/60);
  
  if(keyDown("space")&&  Runner.y >= 100) {
    Runner.velocityY = -10;
  }
  
  Runner.velocityY =  Runner.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
//   if(mousePressedOver(paused1)){
//   gameState = paused;
//   paused1.visible = false ;
//   pause.visible = true
//   ObstaclesGroup.setVelocityEach(0,0);
//   Clouds.setVelocityEach(0,0);
//   }

  Runner.collide(invisibleGround);
  



  
  

  spawnObstacles( );
  drawSprites();
}


function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,205,10,40);
    obstacle.velocityX = -6;
 
    
     // //generate random obstacles
     var rand = Math.round(random(1,16));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       case 7: obstacle.addImage(obstacle7);
               break;
       case 8: obstacle.addImage(obstacle8);
               break;
      case 9: obstacle.addImage(obstacle9);
               break;
      case 10: obstacle.addImage(obstacle10);
               break;   
      case 11: obstacle.addImage(obstacle11);
               break;
      case 12: obstacle.addImage(obstacle12);
               break;
      case 13: obstacle.addImage(coinImage);
               break;
      case 14: obstacle.addImage(balloon1);
               break;
      case 15: obstacle.addImage(balloon2);
               break;
      case 16: obstacle.addImage(catImage);
               break;
         default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     catImage.scale=0.2; 
     balloon1.scale = 0.1;
     balloon2.scale = 0.001;
    coinImage.scale=0.001;
     obstacle9.scale = 0.001;
     obstacle.lifetime = 150;
    
  }
 }