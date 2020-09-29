class Particle {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.7
      }
      this.x=x;
      this.y=y;
      this.color=[random(20,255),random(20,255),random(20,255)];
      this.body = Bodies.circle(this.x,this.y,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(0,0,20,20);
      pop();
    }
  };