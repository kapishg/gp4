class Tree{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("trees.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
    
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,600,600);
       
      }
}