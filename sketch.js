const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber = new Rubber(400,490,40);

    stone = new Stone(100,480,50,75)

    iron  = new Iron(600,480,100,100)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}