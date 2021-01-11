class Cball {
    constructor(x, y, radius) {
        var options = {
            //isStatic : true,
            'restitution':0.4,
          density : 1
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.color =color (random(0,255),random(0,255),random(0,255))
        
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        translate (pos.x,pos.y)
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0, this.radius,this.radius);
      }
    };