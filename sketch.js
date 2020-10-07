var superman;
var supermanImg;
var edges;

function preload(){
  supermanImg=loadImage("images/Super.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  superman = new Superman();
  superman.sprite.addImage(supermanImg);
  
}

function draw() {
  background("grey");
  edges = createEdgeSprites();
  superman.sprite.collide(edges[2]);
  superman.sprite.collide(edges[3]);

  if (keyWentDown(32)){
    superman.shoot();
  }


  drawSprites();
  superman.control();
}