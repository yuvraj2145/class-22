var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200,200,50,80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";

 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor="green";
 
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor="green";

 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor="green";

 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor="green";


 movingRect.debug=true;
 fixedRect.debug=true;

 movingRect.velocityY= -10;
 fixedRect.velocityY= +10;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  

if(isTouching(movingRect, gameObject2)){
  movingRect.shapeColor="blue";
    gameObject2.shapeColor="blue";
}else
{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";

}

bounceOff(movingRect,fixedRect);
  drawSprites();
}

