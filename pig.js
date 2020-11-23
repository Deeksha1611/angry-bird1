class PIG{
    constructor(x,y){

        var options = {
            restitution: 0.8,
            friction: 1.5,
            density: 1
        }
        this.pig=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(myworld,this.pig);



    }
    display(){
        push();
        translate(this.pig.position.x,this.pig.position.y)
        rotate(this.pig.angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height)

        pop();
    }
}