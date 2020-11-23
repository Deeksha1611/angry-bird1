class BOX{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.8,
            friction: 1.5,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h
        World.add(myworld,this.body);
    }

    display(){
        var pos  = this.body.position;
        var angle = this.body.angle;

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