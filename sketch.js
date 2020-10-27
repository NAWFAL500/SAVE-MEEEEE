var helicopter , package;

function preload(){
  
  helicopter = loadImage("helicopter.png")
  package = loadImage("package.png")
  
}

function setup(){
  createCanvas(400,400)
  
  heli = createSprite(200,35,20,20)
  heli.addImage(helicopter)
  heli.scale = 0.5;
  
  a = createSprite(119,369,20,99)
  b=createSprite(199,393,170,20)  
  c = createSprite(280,369,20,99)
  
  packGroup = new Group();
  
  
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    
     packet();
    
  }
  
  packGroup.collide(b)
  
  drawSprites();
}


function packet(){
    pack = createSprite(200,35,20,20);
    pack.addImage("li",package);
    pack.velocityY=3;
    pack.lifetime = 120;
    pack.scale=0.3
    packGroup.add(pack)
  
  
  
}