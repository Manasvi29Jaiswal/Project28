class Stone {
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1.0,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width=50;
      this.height=50;
      this.image = loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      //var angle=this.body.angle
      var pos = this.body.position;
      push()
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width,this.height);
      pop();
    }
  }