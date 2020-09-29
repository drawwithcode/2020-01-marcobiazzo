function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
}

function draw() {
  background(lerpColor(color("#AED6F1"),color("#212F3D"), 0.5 + 0.5*cos(frameCount) ))

  // Sun
  push();
  noStroke();
  fill("#F7DC6F");
  ellipse(width/2, height/2, 80,80);
  pop();

  push(); // It is a good thing to use push and pop
  stroke("#82E0AA");
  fill("#82E0AA");
  translate(width/2, height/2);
  rotate(frameCount/2 );

  // Earth
  translate(50*(cos(frameCount/2)+1.5)+150, 0);
  ellipse(0,0,20);

  // Moon
  fill("#424949");
  noStroke();
  translate(20*(cos(frameCount/2)+1.5)+30, 0);
  rotate(100*frameCount );
  ellipse(0,0,10);
  pop();

  push();
  noStroke();
  fill("#F1948A");
  translate(width/2, height/2);
  rotate(frameCount*2 );

  // Venus
  translate(30*(cos(frameCount/5)+1.5)+50, 0);
  ellipse(0,0,20);

  pop();}
