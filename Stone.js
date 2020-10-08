class Stone{
    constructor(x,y,w){
        var option={
         restitution:0,
         friction:1,
         density:1.2
        }
        this.body=Bodies.circle(x,y,w/2,option)
        this.radius=w;
        World.add(world,this.body);
        this.image=loadImage('Plucking mangoes/stone.png');
    }
    display(){
        push();
        
        var angle=this.body.angle;
         translate(this.body.position.x,this.body.position.y);
         imageMode(CENTER)
         rotate(angle);
         image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}