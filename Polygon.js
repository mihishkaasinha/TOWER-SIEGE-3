class Polygon
{
   constructor(x, y, w, h)
   {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.h = h;
    this.w = w;
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
   }

   display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }

}