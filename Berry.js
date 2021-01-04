class Berry{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.berry = Bodies.rectangle(x,y,70,70,options);
        World.add(world,this.berry);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("berry.png");
    }
    display(){
        var pos = this.berry.position;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,70,70);
    }
}