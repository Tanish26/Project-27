
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var ballObject1,ballObject2,ballObject3 ,ballObject4,ballObject5;
var ground;
var baseObject ; 

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

ballObject1 = new Ball(300,350,50);
ballObject2=new Ball(350,350,50);
ballObject3=new Ball(400,350,50);
ballObject4=new Ball(450,350,50);
ballObject5=new Ball(500,350,50);
ground = new Base(400,200,300,20);
sling1= new Rope(ballObject1.body,ground.body,-50*2,0);
sling2= new Rope(ballObject2.body,ground.body,-25*2,0);
sling3= new Rope(ballObject3.body,ground.body,-0*2,0);
sling4= new Rope(ballObject4.body,ground.body,25*2,0);
sling5= new Rope(ballObject5.body,ground.body,50*2,0);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();

	ballObject1.display();
	ballObject2.display();
	ballObject3.display();
	ballObject4.display();
	ballObject5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
	

}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-100,y:-100}); } 
} 



