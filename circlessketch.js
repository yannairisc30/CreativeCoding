let circles = [];


class Circles {
  constructor(x, y, size, colors) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colors = colors;
  }

  // Method to move the circle
  move() {
    this.x += random(-1, 3);
    this.y += random(-5, 3);
  }

  // Method to display the circle
  display() {
    fill(this.colors);
    stroke(random(255));
    ellipse(this.x, this.y, this.size);

  }

  // Method to change the color
  changeColor(newColor) {
    this.colors = newColor;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  let numofCircle = random(10, 80);

  for (let i = 0; i < numofCircle; i++) { 
    let x = random(width);
    let y = random(height);
    let size = random(120, 400);
    let colors = color(random(255), random(255), random(255));

    circles.push(new Circles(x, y, size, colors));
  }
}

function draw() {
  background(220);
  for (let circle of circles) {
    circle.move(); 
    circle.display();
  }
}

// Mouse press to change colors
function mousePressed() {
  for (let circle of circles) {
    let newColor = color(random(255), random(255), random(255));
    circle.changeColor(newColor);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}