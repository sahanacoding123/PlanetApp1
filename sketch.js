var backgroundImage;
var earth;

function preload(){
backgroundImage=loadImage("solarsystem.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  earth=createSprite(displayWidth-280,displayHeight-310,100,70)
  earth.shapeColor = "black";
  earth.mousePressed(earthinfo)
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}

function earthinfo(){
  console.log("Welcome to Earth")
}