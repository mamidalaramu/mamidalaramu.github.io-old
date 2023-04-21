function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate((innerWidth/2), (innerHeight/2));
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 275, 275, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 250, 250, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 45, 0);
  pop();

  stroke(255);
  point(0, 0);

}

