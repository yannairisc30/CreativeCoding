let hearts = [];

class Heart {
  constructor(x, y, size, colors) {
    this.x = x;      
    this.y = y;       
    this.size = size; 
    this.colors = colors;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.colors);
    stroke(255);

    //creating a new shape
    beginShape();
    for (let t = 0; t < TWO_PI; t += 0.01) {
      //formulas to creaate the heart shape
      let x = 16 * pow(sin(t), 3) * this.size;
      let y = (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t)) * this.size;
      vertex(x, -y);
    }
    endShape(CLOSE);
    pop();
  }

  changeColor(newColor) {
    this.colors = newColor;
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background(220);
  numHeart = random(10,100);
  canvas.position(0, 0);
  canvas.style("z-index", "-1"); // Place canvas behind other content
  canvas.style("position", "fixed"); // Make canvas fixed in the background

  for (let i = 0; i < numHeart; i++) {
    let x = random(width); 
    let y = random(height); 
    let size = random(0, 5);
    let colors = color(random(255), random(255), random(255));
    hearts.push(new Heart(x, y, size, colors));
  }
}

function draw() {
  background(0);
  
  for (let heart of hearts) {
    heart.display();
  }
}

function mousePressed() {
  // Change the color of all hearts when the mouse is pressed
  for (let heart of hearts) {
    let newColor = color(random(255), random(255), random(255));
    heart.changeColor(newColor);
  }
}