class Particle{
    constructor(x,y,r){
        var options={
            restitutions:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random("blue"),random("red") , rabdom("pink") , random("green") , random("white"));
        World.add(world, this.body);

    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    fll(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.this.r);
    pop(); 
   }
};
