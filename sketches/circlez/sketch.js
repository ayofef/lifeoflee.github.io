var xpos;
var ypos;
var r;

var xspeed;
var yspeed;

var xdirection;
var ydirection;

var angle;
var scalar;
var speed;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
  
  angle = 0;
  scalar = 2;
  speed = 0.05;
  
  
  /*xpos = width/2
  ypos = height/2
  
  
  r = 100;
  
  xdirection = 1;
  ydirection = 1;
  
  xspeed = 5
  yspeed = 5


*/

  
}

function draw() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  var x = windowWidth/2 + (cos(angle) *scalar);  //height/2 originsl //
  var y = windowHeight/2 + (sin(angle) *scalar);
  fill(r,g,200);
  noStroke();
  ellipse(x,y,2,2);
  angle+=speed;
  scalar+=speed;
  
  
  
  
  
  /*background(255,100,100);
  xpos = xpos + (xdirection * xspeed);
  ypos = ypos + (ydirection * yspeed);
  //xpos = constrain(xpos,0,width);
  //ypos = constrain(ypos,0,height);
  ellipse(xpos,ypos,r,r,0);
  ellipse(xpos-300,ypos-300,r,r);
  
  if(xpos>width || xpos<0){
    xdirection *= -1;
  }
  
  if(ypos>height || ypos<0){
    ydirection *= -1;
  }
*/






/*
  fill(255);
  ellipse(x,y,30,30);
  
  if(keyIsPressed){
    if(keyCode == RIGHT_ARROW){
      background(0);
      x+=5;
      
    }else if(keyCode == LEFT_ARROW){
      background(0);
      x-=5;
    }else if(keyCode == UP_ARROW){
      background(0);
      y-=5;
    }else if(keyCode == DOWN_ARROW){
      background(0);
      y+=5;
    }
  }

*/

  
    
  
    
  
   
  
  

}

function Log(){
  //console.log("working");
}
