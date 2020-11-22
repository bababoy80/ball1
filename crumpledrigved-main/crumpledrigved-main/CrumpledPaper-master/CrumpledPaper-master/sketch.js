
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,dustbin1,ground1
var world, engine;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40)
   dustbin1=new dustbin(1200,650) 
   ground1=new ground (800,670,1600,20)
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  paper1.display() 
  ground1.display() 
  dustbin1.display()
 
  
  
 
  
  
 
} 


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
    
  	}
}





