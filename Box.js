class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w+200;
        this.height=h+300;
        World.add(world,this.body);
        this.image=loadImage("Plucking mangoes/boy.png");
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}