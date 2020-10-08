class Tree{
    constructor(x,y,w,h){
        var options={
         isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w+300;
        this.height=h+500;
        this.image=loadImage("Plucking mangoes/tree.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}