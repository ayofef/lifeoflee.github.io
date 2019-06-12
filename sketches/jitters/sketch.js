var x;
var y;
var r;
var speed;


var x;
var y;




function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  
  
  
  x = windowWidth/2;
  y = windowHeight/2;
  
  
  speed = 10.5;
  
}

function draw() {
  r = random(10,50);
  //background(0);
  x = x + random(-speed,speed);
  y = y + random(-speed,speed);
  x = constrain(x,0,width);
  y = constrain(y,0,height);
  stroke(random(255), random(255), 200);
  fill(random(255), random(255), 200,2);
  ellipse(x,y,r,r);
  ellipse(x,y/2,r,r);
  ellipse(x/2,y,r,r);
  ellipse(x+200,y,r,r);
  ellipse(x,y+200,r,r);
  ellipse(x/2,y/2,r,r);
  ellipse(x+200,y/2,r,r);
  ellipse(x,y-300,r,r);
  ellipse(x-x,y-y,r,r);
  ellipse(x+x,y+y,r,r);
  ellipse(x+x,y,r,r);
  ellipse(x,y+y,r,r);
  ellipse(x,y+300,r,r);
  
  
  //if(x >= width || x >= height){
 //   fill(random(255),100,100);
 //   ellipse(x,y,r,r);
 // }
  
}
