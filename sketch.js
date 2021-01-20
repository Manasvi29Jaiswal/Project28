const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImage
var stone, slingShot;
var ground;
var canvas;
var TreeSprite,TreeImage;
var BoySprite,BoyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var mango8,mango9,mango10,mango11;


function preload() {
backgroundImage=loadImage("backgroundImage.jpg")
BoyImage=loadImage("boy.png")
TreeImage=loadImage("tree.png")
}

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;
    
    BoySprite=createSprite(250,410,300,300);
	BoySprite.addImage(BoyImage)
    BoySprite.scale=0.13;
    
    TreeSprite=createSprite(1000,250,300,300);
	TreeSprite.addImage(TreeImage)
    TreeSprite.scale=0.4;
    
    ground = new Ground(650,490,width,20);

    mango1 = new Mango(900,200);
    mango2 = new Mango(840,160);
    mango3 = new Mango(940,140);
    mango4 = new Mango(990,180);
    mango5 = new Mango(920,80);
    mango6 = new Mango(1000,50);
    mango7 = new Mango(1020,110);
    mango8 = new Mango(1070,170);
    mango9 = new Mango(1080,80);
    mango10 = new Mango(1130,130);
    mango11 = new Mango(1180,180);

    stone = new Stone(180,340);
    slingShot = new Slingshot(stone.body,{x:180,y:340});
    

    Engine.run(engine);
}

function draw(){
    background(backgroundImage);
    
    drawSprites();
    
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    stone.display();
    slingShot.display(); 

    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
    detectCollision(stone,mango7);
    detectCollision(stone,mango8);
    detectCollision(stone,mango9);
    detectCollision(stone,mango10);
    detectCollision(stone,mango11);
    
	
	
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

    slingShot.fly()
}

function keyPressed(){

    if(keyCode===32){
    
    slingShot.attach(stone.body)
    
}

}

function detectCollision(Lstone,Lmango){

mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance <= Lstone.width + Lmango.width){

    Matter.Body.setStatic(Lmango.body,false)
}

if(distance <= Lstone.height + Lmango.height){

    Matter.Body.setStatic(Lmango.body,false)
}

   
}






