var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(300, 50, 100, 10);
}

function draw() 
{
   background(30);
if (keyIsDown(UP_ARROW)){
  box.position.y -= 2;
}
if (keyIsDown(DOWN_ARROW)){
  box.position.y += 2;
}
if (keyIsDown(RIGHT_ARROW)){
  box.position.x += 2;
}
if (keyIsDown(LEFT_ARROW)){
  box.position.x -= 2;
}
  drawSprites();
}




