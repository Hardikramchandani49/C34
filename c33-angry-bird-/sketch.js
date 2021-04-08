const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg,rock;
var ground,SlingShot1,SlingShot2,SlingShot3;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Buggie(50,170,50,50);
  boggie2 = new Buggie(150,170,50,50);
  boggie3 = new Buggie(250,170,50,50);
  boggie4 = new Buggie(350,170,50,50);
  boggie5 = new Buggie(450,170,50,50);
  boggie6 = new Buggie(550,170,50,50);

  SlingShot1 = new Slingshot(boggie1.body,boggie2.body);
  SlingShot2 = new Slingshot(boggie3.body,boggie4.body);
  SlingShot3 = new Slingshot(boggie5.body,boggie6.body);

  //rock = new Rock(1100,200,100,100);
  
  
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show();
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  //rock.show();
  
  SlingShot1.show();
  SlingShot2.show();
  SlingShot3.show();

 
  }

  
