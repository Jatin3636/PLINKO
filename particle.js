class Particle {
    constructor(x,y,radius) {
      var options = {
        'isStatic':false,
          'restitution':0.5,
          'friction':0.5,
          'density':0.2
      }
      this.body = Bodies.circle(x, y,radius/2,options);
      this.radius = radius;
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      stroke("white");
      strokeWeight(0.5);
      fill(this.color);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }