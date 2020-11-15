
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var paperBall;
var side1,side2,side3;
bounce();
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,height,1200,20); 
	paperBall = new Ball(500,200,50,50);
	side1=createSprite(550,660,10,64)
	side2=createSprite(796,651,10,60)
	side3=createSprite(700,686,300,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  paperBall.display();
  side1.display();
  side2.display();
  side3.display();
  side1.shapeColor="blue"
  side2.shapeColor="blue"
  side3.shapeColor="blue"
    side1.shapeColor="blue"
  side2.shapeColor="blue"
  side3.shapeColor="blue"


  


}

function keyPressed (){
	if( keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:50})
	}
}


