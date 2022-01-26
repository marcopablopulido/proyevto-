class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imagecloud = loadImage("sprites/smoke.png");
    this.trayectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x>10 && this.body.position.x>200){
      var position= [this.body.position.x,this.body.position.y];
      this.trayectory.push(position);
    }                            
    
    for (var i=0; i<this.trayectory.length; i++){
      image(this.imagecloud,this.trayectory[i][0],this.trayectory[i][1]);
    }
    super.display();
  }
}
