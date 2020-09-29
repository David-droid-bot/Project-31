const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var d1,d2,d3,d4,d5,d6,d7;
var p1=[];
var p2=[];
function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20); 
  d1=new Division(0,650,20,300);
  d2=new Division(80,650,20,300);
  d3=new Division(160,650,20,300);
  d4=new Division(240,650,20,300);
  d5=new Division(320,650,20,300);
  d6=new Division(400,650,20,300);
  d7=new Division(470,650,20,300);
  for(var j=40;j<480;j=j+50){
  p1.push(new Plinko(j,75));
  }
  for(var j=15;j<470;j=j+50){
    p1.push(new Plinko(j,175));
    }
      for(var j=15;j<470;j=j+50){
        p1.push(new Plinko(j,375));
        }
        for(var j=40;j<480;j=j+50){
          p1.push(new Plinko(j,275));
          }
}
function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  for(var j=0;j<p1.length;j++){
  p1[j].display();
}
if(frameCount%60==0){
  p2.push(new Particle(random(230,250),20));
}
for(var k=0;k<p2.length;k++){
  p2[k].display();
}
}
