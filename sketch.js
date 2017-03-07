var r, g, b;

function setup(){
    var canvas = createCanvas(600,400);
    canvas.parent('sketch-holder');
    background(100);
    
    frameRate(600);
    
    noStroke();
    
    //red square
    fill(255,0,0);
    rect(25,25,50,50);
    
    //green square
    fill(0,255,0);
    rect(25,85,50,50);
    
    //blue square
    fill(0,0,255);
    rect(25,145,50,50);
    
    noFill();
    frameRate(100);
    
}

function draw(){
    
    //paint brush
    noStroke();
    fill(r,g,b);
    
    //acutal painting
    if (mouseIsPressed) {
     ellipse(mouseX,mouseY,25,25);   
    }
    

    
}

function mousePressed() {
  // Check if mouse is inside the red square
  var distanceFromRed = dist(mouseX, mouseY, 37.5, 37.5);
  var distanceFromGreen = dist(mouseX, mouseY, 37.5, 97.5);
  var distanceFromBlue = dist(mouseX, mouseY, 37.5, 157.5);
  
  if (distanceFromRed < 50) {
    r = 255;
    g = 0;
    b = 0;
    
  }
  else if(distanceFromGreen < 50){
      r = 0;
      g = 255;
      b = 0;
  }
  else if(distanceFromBlue < 50){
      r = 0;
      g = 0;
      b = 255;
  }
  
}