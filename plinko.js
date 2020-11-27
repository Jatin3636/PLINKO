class Plinko {
    constructor(x,y,radius) {
      var options = {
        'isStatic':true,
          'restitution':1.1,
          'friction':0.5,
          'density':0.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("white");
      fill("white");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }