const Engine = Matter.Engine;
  const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

 

  line1 = new Ground (240,750,480,10);
  line2 = new Ground (2,530,10,430);
  line3 = new Ground (102,530,10,430);
  line4 = new Ground (202,530,10,430); 
  line5 = new Ground (302,530,10,430);
  line6 = new Ground (402,530,10,430);

  ball1 = new Ball (50,50,10);
  ball2 = new Ball (150,50,10);
  ball3 = new Ball (250,50,10);
  ball4 = new Ball (350,50,10);
  ball5 = new Ball (450,50,10);
  ball6 = new Ball (100,100,10);
  ball7 = new Ball (200,100,10);
  ball8 = new Ball (300,100,10);
  ball9 = new Ball (400,100,10);
  ball10 = new Ball (50,150,10);
  ball11 = new Ball (150,150,10);
  ball12 = new Ball (250,150,10);
  ball13 = new Ball (350,150,10);
  ball14 = new Ball (450,150,10);
  
  cball1 = new Cball(240,5,10);

}

function draw() {
  background(0); 
  
  Engine.run(engine);

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();

  cball1.display();
  drawSprites();
}