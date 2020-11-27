const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particle = [];
var plinko = [];
var divisition = [];

function setup() {
    createCanvas(500,700);

	engine = Engine.create();
	world = engine.world;

    Engine.run(engine);
    
    ground = new Ground(250,680,500,20);

    for(var d = 0;d<=width;d=d+70) {
        divisition.push(new Division(d,550,10,240));
    }

    for(var s=25;s <= width;s=s+50) {
        plinko.push(new Plinko(s,100,10))
     }

     for(var s=50;s < width;s=s+50) {
        plinko.push(new Plinko(s,150,10))
     }

     for(var s=25;s <= width;s=s+50) {
        plinko.push(new Plinko(s,200,10))
     }

     for(var s=50;s < width;s=s+50) {
        plinko.push(new Plinko(s,250,10))
     }

}

function draw() {
    rectMode(CENTER);
    background(0);

    if(frameCount % 20 === 0) {
      particle.push(new Particle(random(width/2 - 20,width/2 + 20),0,13))
    }
    drawSprites();

   for(var i = 0;i < plinko.length;i++) {
      plinko[i].display();
   }

   for(var i = 0;i < divisition.length;i++) {
      divisition[i].display();
   }

   for(var i = 0;i < particle.length;i++) {
    particle[i].display();
   }

    ground.display();
   
}
