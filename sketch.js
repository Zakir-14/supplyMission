var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	groundIMG = loadImage("ground2.png");
}	

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*
	box1 = createSprite(330,655,150,20);
	box1.shapeColor = "red";
	box2 = createSprite(265,630,20,60);
	box2.shapeColor = "red";
	box3 = createSprite(395,630,20,60);
	box3.shapeColor = "red";
    */

	packageSprite=createSprite(200, 0, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;
	//packageSprite.debug = true;
	packageSprite.velocityX = 4;

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX = 4; 

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.addImage(groundIMG);
	groundSprite.debug = true;


	engine = Engine.create();
	world = engine.world;
	
	helicopterSprite = Bodies.rectangle(0,200,10,10,{isStatic:true});
	World.add(world, helicopterSprite);
	
	packageBody = Bodies.rectangle(	200, 200 , 200,200 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//box1 = Bodies.rectangle(330,655,150,20,{isStatic:true})
	//World.add(world, box1);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody, false)
	packageSprite.visible = true;
}

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  drawSprites();
  textSize(20);
 text("DROP THE PACKAGE IN THE BOX",300,100);
 
}




