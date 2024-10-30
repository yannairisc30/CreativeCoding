let angle = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); 
    noFill();
}

function draw() {
    background(0);
    let centerX = width / 2;
    let centerY = height / 2;

    let horizontalMovement = mouseX - width / 2;
    let updatedX = centerX + horizontalMovement;

    angle += 0.01;
    let r = map(mouseX, 0, width, 50, 255);
    let g = map(mouseX, 0, width, 255, 50);
    let b = map(mouseX, 0, width, 100, 200);

    for (let i = 0; i < 235; i++) {
        let alpha = map(i, 0, 300, 255, 50);
        stroke(r,g,b,alpha);

        // Calculate position based on rotation
        let x = updatedX + cos(angle + i * 0.1) * i;
        let y = centerY + sin(angle + i * 0.1) * i;

        // Draw the circle
        circle(x, y, i);
    }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
