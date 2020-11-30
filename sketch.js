const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 
var score = 0;
var backgroundImg, bg;

function preload() {
  backgroundManager();
}

function setup() {
  createCanvas(1422, 800);
  engine = Engine.create();
  world = engine.world;
 
  //create the polygon
  polygon = new Polygon(200, 350, 80, 80)
 
  //create the chain
  chain = new Chain(polygon.body,{x : 150, y : 350})
 
  //create a ground
  ground = new Ground(711, 792, width, 20)
 
  //create the Holders
  holder1 = new Ground(600, 500, 250, 20)
  holder2 = new Ground(1010, 300, 230, 20);
 
  //create the blocks of first row in holder 1
  block1 = new Block(500, 350, 40, 60, rgb(0, 188, 255))
  block2 = new Block(540, 350, 40, 60, rgb(0, 188, 255))
  block3 = new Block(580, 350, 40, 60, rgb(0, 188, 255))
  block4 = new Block(620, 350, 40, 60, rgb(0, 188, 255))
  block5 = new Block(660, 350, 40, 60, rgb(0, 188, 255))
  block6 = new Block(700, 350, 40, 60, rgb(0, 188, 255))
 
  //create the blocks of second row in holder 1
  block7 = new Block(540, 200, 40, 60, rgb(255, 195, 232))
  block8 = new Block(580, 200, 40, 60, rgb(255, 195, 232))
  block9 = new Block(620, 200, 40, 60, rgb(255, 195, 232))
  block10 = new Block(660, 200, 40, 60, rgb(255, 195, 232))
 
  //create the blocks of third row in holder 1
  block11 = new Block(580, 50, 40, 60, rgb(109, 255, 232))
  block12 = new Block(620, 50, 40, 60, rgb(109, 255, 232))
 
  //create the blocks of fourth row in holder 1
  block13 = new Block(600, 0, 40, 60, rgb(189, 239, 186))
 
  //create the blocks of first row in holder 2
  block14 = new Block(930, 100, 40, 60, rgb(0, 188, 255))
  block15 = new Block(970, 100, 40, 60, rgb(0, 188, 255))
  block16 = new Block(1010, 100, 40, 60, rgb(0, 188, 255))
  block17 = new Block(1050, 100, 40, 60, rgb(0, 188, 255))
  block18 = new Block(1090, 100, 40, 60, rgb(0, 188, 252))

  //create the blocks of second row in holder 2
  block19 = new Block(970, 0, 40, 60, rgb(255, 195, 232))
  block20 = new Block(1010, 0, 40, 60, rgb(255, 195, 232))
  block21 = new Block(1050, 0, 40, 60, rgb(255, 195, 232))

  //create the blocks of second row in holder 2
  block22 = new Block(1010, -100, 40, 60, rgb(109, 255, 232))
} 
 
function draw() {
  rectMode(CENTER)
  if (backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  polygon.display();
  chain.display();
  ground.display();
  holder1.display();
  holder2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();

  strokeWeight(1.3);
  stroke("white");
  fill("white");
  textSize(35);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 50);
  strokeWeight(1.1);
  stroke("white");
  fill("white");
  textSize(25);
  text("Press the Space to get another chance", 950, 750);
  strokeWeight(3)
  stroke("red");
  fill("red");
  textSize(35);
  text("SCORE : " + score, 100, 150)
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})
}

function mouseReleased() {
   chain.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    chain.attach(polygon.body)
  }
}

async function backgroundManager() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(" response:" + response);
  var responseJSON = await response.json();
  console.log("json response:" + responseJSON);

  var dt = responseJSON.datetime
  var hour = dt.slice(11, 13)
  console.log(hour);

  if (hour >= 6 && hour <= 19) {
      bg = "sprites/bg.png";
      
  }

  else
  {
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(dt)
}
