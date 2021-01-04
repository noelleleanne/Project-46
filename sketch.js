
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	front = loadImage("front.png");
	right = loadImage("right.png");
	left = loadImage("left.png");
	back = loadImage("back.png");
	left_running = loadAnimation("leftwalk1.png","leftwalk2.png");
	right_running = loadAnimation("rightwalk1.png","rightwalk2.png");
	front_running = loadAnimation("frontwalk1.png","frontwalk2.png");
	back_running = loadAnimation("backwalk1.png","backwalk2.png");

	berryImg = loadImage("berry.png");
	grassImg = loadImage("grassImg.jpg");
	tree1Img = loadImage("tree1.png");
	tree2Img = loadImage("tree2.png");
	tree3Img = loadImage("tree3.png");
	tree4Img = loadImage("tree4.png");
	tree5Img = loadImage("tree5.png");	
	vineImg = loadImage("vine.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	player = createSprite(600,350);
	player.addAnimation("front",front);
	player.addAnimation("right",right);
	player.addAnimation("left",left);
	player.addAnimation("back",back);
	player.addAnimation("left_running",left_running);
	player.addAnimation("back_running",back_running);
	player.addAnimation("front_running",front_running);
	player.addAnimation("right_running",right_running);
	player.scale = 0.3;


	grass = createSprite(600,350,displayWidth, displayHeight);
	grass.scale = 0.8;
	grass.depth = player.depth-1;
	grass.addImage(grassImg);

	berry = createSprite(-400,600,10,10);
	berry.addImage(berryImg);
	berry.scale = 0.1;
	berry.depth = player.depth-1;

	berry1 = createSprite(0,-700,10,10);
	berry1.addImage(berryImg);
	berry1.scale = 0.1;
	berry1.depth = player.depth-1;

	berry2 = createSprite(400,1200,10,10);
	berry2.addImage(berryImg);
	berry2.scale = 0.1;
	berry2.depth = player.depth-1;

	berry3 = createSprite(700,-400,10,10);
	berry3.addImage(berryImg);
	berry3.scale = 0.1;
	berry3.depth = player.depth-1;

	berry4 = createSprite(1150,900,10,10);
	berry4.addImage(berryImg);
	berry4.scale = 0.1;
	berry4.depth = player.depth-1;

	berry5 = createSprite(1600,-200,10,10);
	berry5.addImage(berryImg);
	berry5.scale = 0.1;
	berry5.depth = player.depth-1;

	tree1 = createSprite(100,900,50,100);
	tree1.addImage(tree1Img);
	tree1.scale = 4;
	tree1.depth = player.depth-1;

	tree2 = createSprite(1500,1200,50,100);
	tree2.addImage(tree2Img);
	tree2.scale = 4;
	tree2.depth = player.depth-1;

	tree3 = createSprite(-400,-300,50,100);
	tree3.addImage(tree3Img);
	tree3.scale = 4;
	tree3.depth = player.depth-1;

	tree4 = createSprite(700,-400,50,100);
	tree4.addImage(tree4Img);
	tree4.scale = 4;
	tree4.depth = player.depth-1;

	tree5 = createSprite(400,190,50,100);
	tree5.addImage(tree1Img);
	tree5.scale = 4;
	tree5.depth = player.depth-1;

	tree7 = createSprite(700,700,50,100);
	tree7.addImage(tree5Img);
	tree7.scale = 4;
	tree7.depth = player.depth-1;

	tree6 = createSprite(900,900,50,100);
	tree6.addImage(tree2Img);
	tree6.scale = 4;
	tree6.depth = player.depth-1;

	tree8 = createSprite(-300,1000,50,100);
	tree8.addImage(tree5Img);
	tree8.scale = 4;
	tree8.depth = player.depth-1;

	tree9 = createSprite(1500,-400,50,100);
	tree9.addImage(tree5Img);
	tree9.scale = 4;
	tree9.depth = player.depth-1;

	tree10 = createSprite(1400,300,50,100);
	tree10.addImage(tree5Img);
	tree10.scale = 4;
	tree10.depth = player.depth-1;

	vine = createSprite(200,-300,40,80);
	vine.addImage(vineImg);
	vine.depth = player.depth-1;
	vine.scale = 0.8;

	vine1 = createSprite(1300,800,40,80);
	vine1.addImage(vineImg);
	vine1.depth = player.depth-1;
	vine1.scale = 0.8;


	Engine.run(engine);
	player.setCollider("rectangle",0,200,300,100);

}


function draw() {
  rectMode(CENTER);
  background("grey");

  if(keyDown("RIGHT_ARROW")){
	player.x = player.x + 10;
  }
  if(keyWentDown("RIGHT_ARROW")){
	player.changeAnimation("right_running",right_running);
}
if(keyWentUp("RIGHT_ARROW")){
	player.changeAnimation("right",right);
}
  if(keyDown("DOWN_ARROW")){
	player.y = player.y + 10;
  }
  if(keyWentDown("DOWN_ARROW")){
	player.changeAnimation("front_running",front_running);
}
if(keyWentUp("DOWN_ARROW")){
	player.changeAnimation("front",front);
}
  if(keyDown("LEFT_ARROW")){
	player.x = player.x - 10;
  }
  if(keyWentDown("LEFT_ARROW")){
	player.changeAnimation("left_running",left_running);
}
if(keyWentUp("LEFT_ARROW")){
	player.changeAnimation("left",left);
}
  if(keyDown("UP_ARROW")){
	player.y = player.y - 10;
  }
  if(keyWentDown("UP_ARROW")){
	player.changeAnimation("back_running",back_running);
}
if(keyWentUp("UP_ARROW")){
	player.changeAnimation("back",back);
}
if(player.isTouching(berry)){
	berry.destroy();
}else if(player.isTouching(berry1)){
	berry1.destroy();
}else if(player.isTouching(berry2)){
	berry2.destroy();
}else if(player.isTouching(berry3)){
	berry3.destroy();
}else if(player.isTouching(berry4)){
	berry4.destroy();
}else if(player.isTouching(berry5)){
	berry5.destroy();
}
camera.x = player.x
camera.y = player.y
  drawSprites();

}


