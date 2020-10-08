class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length:0
        }
        this.chain = Matter.Constraint.create(options);
        
        World.add(world, this.chain);

        this.pointB=pointB;
    }

    display(){
     push()

     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
     pop();
    }
    attach(object){
        this.chain.bodyA=object;
        this.chain.pointB=this.pointB;
    }
}