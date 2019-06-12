// Multimedia Programming
// Assignment 3 
// Ayofe Farouq Abayomi - 2975219 - ayofef@gmail.com




var mode;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;


var rslider;
var gslider;
var bslider;
var pslider;
var cslider;
var nslider;
var ballslider;

var r1slider;
var g1slider;
var b1slider;
var tslider;

var r;
var g;
var b;
var p;

var r1;
var g1;
var b1;
var t;
var ba;


var n;
var c

var brushSize;



var ellipseButton;
var caligButton;
var diamondButton;
var clearButton;
var linebutton;

var pic1button;
var pic2button;
var pic3button;
var pic4button;
var pic5button;
var pic6button;
var pic7button;
var pic8button;
var pic9button;
var pic10button;
var pic11button;
var pic12button;

var x;
var y;
var x1;
var y1;
var x2;
var y2;



function preload() {
  img = loadImage("logo.png");
  img2 = loadImage("colour.gif");
  img3 = loadImage("delete.png");
  img4 = loadImage("balpen.png");
  img5 = loadImage("calipen.png");
  img6 = loadImage("diamond.png");
  img7 = loadImage("pic1.png");
  img8 = loadImage("pic2.png");
  img9 = loadImage("pic3.png");
  img10 = loadImage("pic4.png");
  img11 = loadImage("pic5.png");
  img12 = loadImage("pic6.png");
  img13 = loadImage("pic7.png");
  img14 = loadImage("pic8.gif");
  img15 = loadImage("pic9.png");
  img16 = loadImage("pic10.png");
  img17 = loadImage("pic11.png");
  img18 = loadImage("pic12.png");

}



function setup() {
  //canvas
  createCanvas (windowWidth, windowHeight);
  background(255);
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  fill(r1,g1,b1);
  noStroke();
  rect(-1,-1,150,height); // Right Toggle Bar
  rect(1400,-1,windowWidth,windowHeight);   // Left Toogle Bar
  fill(255);
  
  brushSize = 3;

  
  // All texts
  //pens
  fill(255);
  rect(5,320, 135, 26, 10);
  fill(0);
  textSize(20);
  text ("P E N S", 37, 340);
  
  //icons
  fill(255);
  rect(1420,1,100,20,5);
  fill(0);
  textSize(20);
  text ("I C O N S",1425,18);
  
  // All slider
  // shapes colour slider
  fill(225,0,0);
  textSize(15);
  text ("Red", 12, 185);
  rslider = createSlider(0,255,random(255));
  rslider.position(10,180);
  
  
  fill(0,225,0);
  textSize(15);
  text ("Green", 12, 215);
  gslider = createSlider(0,255,random(255));
  gslider.position(10,210);
  
  fill(0,0,225);
  textSize(15);
  text ("Blue", 12, 245);
  bslider = createSlider(0,255,random(255));
  bslider.position(10,240);
  
  // image size slider
  pslider = createSlider(10,100,random(100)); 
  pslider.position(1402,45);
  
  //tint colour slider
  fill(0);
  textSize(25);
  text ("Tint", 1445, 570);
  
  fill(255,0,0);
  textSize(15);
  text ("Red",1402,600);
  r1slider = createSlider(0,255,255);
  r1slider.position(1402,600);
  
  fill(0,255,0);
  textSize(15);
  text ("Green",1402,650);  
  g1slider = createSlider(0,255,255);
  g1slider.position(1402,650);
  
  fill(0,0,255);
  textSize(15);
  text ("Blue",1402,700);
  b1slider = createSlider(0,255,255);
  b1slider.position(1402,700);
  
  //transparency slider
  fill(0);
  textSize(15);
  text ("Transparency", 1420, 510);
  tslider = createSlider(0,200,200);
  tslider.position(1402,510);
  
  //caligraph pen slider
  cslider = createSlider(40,400,40);
  cslider.position(10,450);
  
  //needle pen slider
  nslider = createSlider(1,100,1);
  nslider.position(10,580);
  
  // ball pen slider
  ballslider = createSlider(3,50,3);
  ballslider.position(10,350);
  
  // ALL IMAGES
  image(img,20, 7, 100, 100); // logo
  image(img2,50, 120, 40, 40); // colour icon
  image(img3,46,670,50,50); // delete icon
  image(img4,50,380,30,30); //ball pen icon
  image(img5,40,435,50,50); // calligraph pen icon
  image(img6,60,510,10,30); //diamond pen icon
  //Drawable images
  image(img7,1415,75,30,30); // pic 1 icon
  image(img8,1484,75,30,30);  //pic 2 icon
  image(img9,1415,140,40,30);  //pic 3 icon
  image(img10,1484,140,30,30); ///pic 4 icon
  image(img11,1415,205,30,30); // pic 5 icon
  image(img12,1484,205,30,30);  //pic 6 icon
  image(img13,1415,268,30,33);  //pic 7 icon
  image(img14,1484,270,30,35);  //pic 8 icon
  image(img15,1415,340,33,30); //pic 9 icon
  image(img16,1484,340,30,35); //pic 10 icon 
  image(img17,1415,410,40,30); //pic 11 icon
  image(img18,1494,410,20,35); //pic 12 icon

  
  //All BUTTONS

  //ellipse pen button
  ellipseButton = createButton("Ball Pen");
  ellipseButton.position(35,420);
  ellipseButton.mousePressed(ball);
  
  //caligraph pen button
  caligButton = createButton("Caligraph Pen");
  caligButton.position(18,482);
  caligButton.mousePressed(caligraph);
  
  //diamond pen button
  diamondButton = createButton("Diamond Pen");
  diamondButton.position(20,545);
  diamondButton.mousePressed(diamond);
  
  //line pen button
  lineButton = createButton("Needle Pen");
  lineButton.position(25,600);
  lineButton.mousePressed(drawline);
  
  //clear drawing button
  clearButton = createButton("Clear");
  clearButton.position(47,710);
  clearButton.mousePressed(clearScreen);
  
  //All drawable image button
  pic1button = createButton("1");
  pic1button.position(1420,110);
  pic1button.mousePressed(pic1);
  
  pic2button = createButton("2");
  pic2button.position(1490,110);
  pic2button.mousePressed(pic2);
  
  pic3button = createButton("3");
  pic3button.position(1420,170);
  pic3button.mousePressed(pic3);
  
  pic4button = createButton("4");
  pic4button.position(1490,170);
  pic4button.mousePressed(pic4);
  
  pic5button = createButton("5");
  pic5button.position(1420,240);
  pic5button.mousePressed(pic5);
  
  pic6button = createButton("6");
  pic6button.position(1490,240);
  pic6button.mousePressed(pic6);
  
  pic7button = createButton("7");
  pic7button.position(1420,310);
  pic7button.mousePressed(pic7);
  
  pic8button = createButton("8");
  pic8button.position(1490,310);
  pic8button.mousePressed(pic8);
  
  pic9button = createButton("9");
  pic9button.position(1420,380);
  pic9button.mousePressed(pic9);  
  
  pic10button = createButton("10");
  pic10button.position(1490,380);
  pic10button.mousePressed(pic10); 
  
  pic11button = createButton("11");
  pic11button.position(1420,450);
  pic11button.mousePressed(pic11);

  pic12button = createButton("12");
  pic12button.position(1490,450);
  pic12button.mousePressed(pic12);
  
  
  //All Borders in Right and Left toogle menu bar
  noStroke();
  fill(255);
  rect(8,445,132,2);
  rect(8,506,132,2);
  rect(8,570,132,2);
  rect(1402,480,132,2);
  rect(1402,540,132,2);
  
  mode= 0;
}


function draw() {
  //Value of  variables
  r = rslider.value();
  g = gslider.value();
  b = bslider.value();
  p = pslider.value();
  r1 = r1slider.value();
  g1 = g1slider.value();
  b1 = b1slider.value();
  t = tslider.value();
  c = cslider.value();
  n = nslider.value();
  ba = ballslider.value();
  
  // active colour bar
  fill(r,g,b);
  noStroke();
  rect(10,275,130,30);

  //Draw Diamond Pen variables
  x = mouseX + 5;
  y = mouseY + 30;
  x1 = mouseX;
  y1 = mouseY + 60;
  x2 = mouseX - 5;
  y2 = mouseY + 30;
  
  //drawing
  noStroke();
  imageMode(CENTER);
  tint(r1,g1,b1,t);
  
  
  if((mouseIsPressed) && (mouseX > 150) && (mouseX < 1400)) {             // here, i declared my mouse pressed function and created a boudary for my drawing
    if(mode == 0){
      fill(r,g,b);
      ellipse(mouseX,mouseY,ba,ba);
    }else if(mode == 1){
      fill(r,g,b);
      ellipse(mouseX,mouseY,3,c);
    }else if(mode == 2){
      fill(r,g,b);
      quad(mouseX,mouseY,x,y,x1,y1,x2,y2);
    }else if(mode == 3){
      image(img7,mouseX, mouseY,p,p);
    }else if(mode == 4){
      image(img8,mouseX,mouseY,p,p);
    }else if(mode == 5){
      image(img9,mouseX,mouseY,p+3,p);
    }else if(mode == 6){
      image(img10,mouseX,mouseY,p,p);
    }else if(mode == 7){
      image(img11,mouseX,mouseY,p,p+3);
    }else if(mode == 8){
      image(img12,mouseX,mouseY,p,p);
    }else if(mode == 9){
      image(img13,mouseX,mouseY,p,p+3);
    }else if(mode == 10){
      image(img14,mouseX,mouseY,p,p+5);
    }else if(mode == 11){
      image(img15,mouseX,mouseY,p+3,p);
    }else if(mode == 12){
      image(img16,mouseX,mouseY,p,p+5);
    }else if(mode == 13){
      image(img17,mouseX,mouseY,p+15,p);
    }else if(mode == 14){
      image(img18,mouseX,mouseY,p,p+35);
    }else if(mode == 15){
      strokeWeight(n);
      stroke(r,g,b);
      line(mouseX,mouseY,pmouseX,pmouseY);
    }
  }


  
}



function ball(){
  mode = 0;
}

function caligraph(){
  mode = 1;
}

function diamond(){
  mode = 2;
}

function pic1(){
  mode = 3;
}

function pic2(){
  mode = 4;
}

function pic3(){
  mode = 5;
}

function pic4(){
  mode = 6;
}

function pic5(){
  mode = 7;
}

function pic6(){
  mode = 8;
}

function pic7(){
  mode = 9;
}

function pic8(){
  mode = 10;
}

function pic9(){
  mode = 11;
}

function pic10(){
  mode = 12;
}

function pic11(){
  mode = 13;
}

function pic12(){
  mode = 14;
}

function drawline(){
  mode = 15;
}

function clearScreen(){
  fill(255);
  rect(150,-1,1250,windowHeight);
}



