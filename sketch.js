var bgImg;
var formObj;
var alienImg, shelterImg, tankImg, lazerImg, bulletImg, gameBgImg;
var alien1;
var alien2;
var alien3;
var alien4;
var alien5;
var alien6;
var alien7;
var level = 'level1';
var edges;

function preload(){
  bgImg = loadImage('Images/homeScreen.jpg')

  alienImg = loadImage('Images/alien.png');
  shelterImg = loadImage('Images/empty-red-brick-wall.jpg');
  tankImg = loadImage('Images/tank.png');
  lazerImg = loadImage('Images/lazer.png');
  bulletImg = loadImage('Images/bullet.png');
  gameBgImg = loadImage('Images/294.jpg')
}

function setup(){
  createCanvas(displayWidth-320,displayHeight-190)

  
}

function draw() {
  background(gameBgImg)

  // createEdgeSprites();

  if(level === 'level1'){
    alien1 = createSprite(300,50,50,50) 
    alien1.velocityX = 4
    alien1.addImage('alien', alienImg)
    alien1.scale = 0.3
   

    alien2 = createSprite(700,130,50,50) 
    alien2.velocityX = -4
    alien2.addImage('alien', alienImg)
    alien2.scale = 0.3


    alien3 = createSprite(1100,200,50,50) 
    alien3.velocityX = 4
    alien3.addImage('alien', alienImg)
    alien3.scale = 0.3
    
    

    console.log('hi im level 1')
  }else if(level === 'level2'){
    alien1 = createSprite(50,50,50,50) 
    alien1.addImage('alien', alienImg)

    alien2 = createSprite(400,50,50,50) 
    alien2.addImage('alien', alienImg)

    alien3 = createSprite(800,50,50,50) 
    alien3.addImage('alien', alienImg)

    alien4 = createSprite(200,50,50,50) 
    alien4.addImage('alien', alienImg)

    alien5 = createSprite(250,50,50,50) 
    alien5.addImage('alien', alienImg)


  }else if(level = 'level3'){
    alien1 = createSprite(50,50,50,50) 
    alien1.addImage('alien', alienImg)

    alien2 = createSprite(400,50,50,50) 
    alien2.addImage('alien', alienImg)

    alien3 = createSprite(800,50,50,50) 
    alien3.addImage('alien', alienImg)

    console.log('hi im level 1')
  }else if(level === 'level2'){
    alien1 = createSprite(50,50,50,50) 
    alien1.addImage('alien', alienImg)

    alien2 = createSprite(400,50,50,50) 
    alien2.addImage('alien', alienImg)

    alien3 = createSprite(800,50,50,50) 
    alien3.addImage('alien', alienImg)

    alien4 = createSprite(200,50,50,50) 
    alien4.addImage('alien', alienImg)

    alien5 = createSprite(250,50,50,50) 
    alien5.addImage('alien', alienImg)

     alien6 = createSprite(250,50,50,50) 
    alien6.addImage('alien', alienImg)

    alien7 = createSprite(250,50,50,50) 
    alien7.addImage('alien', alienImg)
  }else{
    formObj = new Form();
    formObj.display();
  };
  

        drawSprites();
        
        
}