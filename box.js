class box{

    constructor(x,y,width,height){
    
    var bounce = {
    
    restitution : 1,
    friction : 0.3,
    isStatic :false
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height,bounce);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png");
    this.visiblity = 255;
    Worldc.add(world,this.body);
    
    }

    score(){

   if(this.visiblity<0 && this.visiblity >- 105){

score ++;

   }

    }
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<3){
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode (CENTER);
    image (this.image,0,0,this.width,this.height);
    pop();
    }
    else{

        Worldc.remove( world,this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 40,40);
        pop();    

    }
    }
    }