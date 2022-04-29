function preload(){
dartImage = loadImage("dart.png")
dartboardImage = loadImage("dartboard.png")
wallImage = loadImage("wall.jpg")
}
function setup() {

  createCanvas(800,800);
  dartboard = createSprite(400,400)
  dartboard.addImage(dartboardImage)
  
}

function draw() {
  background(wallImage); 
  if(keyDown("space")){
dartmovement()
  }

  drawSprites() 

}
function dartmovement(){
if(frameCount%10 === 0){
dart = createSprite(400,800)
dart.addImage(dartImage)
dart.velocityY = -2
}
}