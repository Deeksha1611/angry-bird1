class LOG{
    constructor(x,y,h,a){
        var options = {
            restitution: 0.8,
            friction: 1.5,
            density: 1
        }
        this.log = Bodies.rectangle(x,y,20,h,options);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.log,a);
        World.add(myworld,this.log);
    }

    display(){
        var pos  = this.log.position;
        var angle = this.log.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("brown")
        fill("lightgreen");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}