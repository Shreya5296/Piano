var key1,key2,key3,key4,key5,key6,key7,key8;
var key9, key10, key11, key12, key13;

var k1,k2,k3,k4,k5,k6,k7,k8,k9,k10;

var a, a1,b,c,c1,c2,d,d1,e,f,f1,g,g1;

var note,noteImg;

function preload(){
  noteImg=loadImage("notes.jpg");
  
  a=loadSound("A.wav");
  a1=loadSound("A#.wav");
  b=loadSound("B.wav");
  c=loadSound("C.wav");
  c1=loadSound("C#.wav");
  c2=loadSound("C Octave.wav");
  d=loadSound("D.wav");
  d1=loadSound("D#.wav");
  e=loadSound("E.wav");
  f=loadSound("F.wav");
  f1=loadSound("F#.wav");
  g=loadSound("G.wav");
  g1=loadSound("G#.wav");
  
}

function setup(){
  
  createCanvas(410,490);
  
  //rainbowkeys
  key1=createSprite(30,250,40,200);
  key2=createSprite(83,250,40,200);
  key3=createSprite(136,250,40,200);
  key4=createSprite(178,250,40,200);
  key5=createSprite(231,250,40,200);
  key6=createSprite(284,250,40,200);
  key7=createSprite(334,250,40,200);
  key8=createSprite(376,250,40,200);

  //extra keys
  k1=createSprite(50,250,8,200);
  k2=createSprite(60,250,8,200);
  k3=createSprite(105,250,8,200);
  k4=createSprite(115,250,8,200);
  k5=createSprite(200,250,8,200);
  k6=createSprite(210,250,8,200);
  k7=createSprite(250,250,8,200);
  k8=createSprite(260,250,8,200);
  k9=createSprite(300,250,8,200);
  k10=createSprite(310,250,8,200);
  
  //black keys
  key9=createSprite(55,225,30,150);
  key10=createSprite(110,225,30,150);
  key11=createSprite(205,225,30,150);
  key12=createSprite(255,225,30,150);
  key13=createSprite(305,225,30,150);
  
  note=createSprite(300,50,100,0);
  note.addImage(noteImg);
}

function draw() {
  background("indigo");
  
  if(mousePressedOver(key1)){
   c.play();
   key1.shapeColor="lightgrey";
   k1.shapeColor="lightgrey";
  }
  else{
    key1.shapeColor="white";
    k1.shapeColor="white";
  }
  
  if(mousePressedOver(key2)){
    d.play();
    key2.shapeColor="lightgrey";
    k2.shapeColor="lightgrey";
    k3.shapeColor="lightgrey";
  }
  else{
    key2.shapeColor="white";
    k2.shapeColor="white";
    k3.shapeColor="white";
  }
  
  if(mousePressedOver(key3)){
    e.play();
    key3.shapeColor="lightgrey";
    k4.shapeColor="lightgrey";
  }
  else{
    key3.shapeColor="white";
    k4.shapeColor="white";
   
  }
  
  if(mousePressedOver(key4)){
    f.play();
    key4.shapeColor="lightgrey";
    k5.shapeColor="lightgrey";
  }
  else{
    key4.shapeColor="white";
    k5.shapeColor="white";
  }
  
  if(mousePressedOver(key5)){
    g.play();
    key5.shapeColor="lightgrey";
    k6.shapeColor="lightgrey";
    k7.shapeColor="lightgrey";
  }
  else{
    key5.shapeColor="white";
    k6.shapeColor="white";
    k7.shapeColor="white";
  }
  
  if(mousePressedOver(key6)){
    a.play();
    key6.shapeColor="lightgrey";
    k8.shapeColor="lightgrey";
    k9.shapeColor="lightgrey";
  }
  else{
    key6.shapeColor="white";
    k8.shapeColor="white";
    k9.shapeColor="white";
  }
  if(mousePressedOver(key7)){
    b.play();
    key7.shapeColor="lightgrey";
    k10.shapeColor="lightgrey";
  }
  else{
    key7.shapeColor="white";
    k10.shapeColor="white";
  }
  
  if(mousePressedOver(key8)){
    c2.play();
    key8.shapeColor="lightgrey";
  }
  else{
    key8.shapeColor="white";
  }
  
  if(mousePressedOver(key9)){
    c1.play();
    key9.shapeColor="lightgrey";
  }
  else{
    key9.shapeColor="black";
  }
  
  if(mousePressedOver(key10)){
    d1.play();
    key10.shapeColor="lightgrey";
  }
  else{
    key10.shapeColor="black";
  }
  
  if(mousePressedOver(key11)){
    f1.play();
    key11.shapeColor="lightgrey";
  }
  else{
    key11.shapeColor="black";
  }
  
  if(mousePressedOver(key12)){
    g1.play();
    key12.shapeColor="lightgrey";
  }
  else{
    key12.shapeColor="black";
  }
  
  if(mousePressedOver(key13)){
    a1.play();
    key13.shapeColor="lightgrey";
  }
  else{
    key13.shapeColor="black";
  }
  
  drawSprites();

  fill("black");
  text("C",25,340);
  text("D",80,340);
  text("E",130,340);
  text("F",175,340);
  text("G",225,340);
  text("A",276,340);
  text("B",330,340);
  text("C",375,340);
  
  fill("white");
  text("C#",47,290);
  text("D#",102,290);
  text("F#",198,290);
  text("G#",247,290);
  text("A#",299,290);
  
  textSize(15);
  text("| C * C | D * * | C * * | F * * | E * * | * * * |",70,415);
  text("| C * C | D * * | C * * | G * * | F * * | * * * |",70,435);
  text("| C * C | C OCTAVE * * | A * * | F * * | E * * | D * * |",40,455);
  text("| C * A | G * * | F * * | G * * | F * * | * * * |",70,475);
  
  textSize(20);
  text("Happy Birthday Notes",110,380);
}
