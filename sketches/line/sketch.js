//var x;
//var y;
var offset;
var scalar;
var angle;
var speed;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  
  //x = width/2;
  //y = height/2;
  angle = 0.0;
  scalar = 30;
  offset=150;

  speed = 2;
  
  //live = 3;


  
}

function draw() {
  //background(255);
  
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(x,y,5,5);
  angle += speed;
  scalar += speed;

  
  //if((x=0) || (x=width) || (y = 0) || (y = height)){
  //  live--;
  //}
  
  /*if((xpos>=width) || (xpos<=0)){
    xdirection = -xdirection;
  }
  if((ypos>height) || (ypos<=0)){
    ydirection = -ydirection;
  }*/
  

  
  
  
 /* if(mouseIsPressed){
    stroke(random(255));
    //strokeWeight();
    line(mouseX,mouseY,mouseX + (random(-spread,spread)), mouseY+ (random(-spread,spread)));
  }
  */
}
