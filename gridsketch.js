let gridColor = [];
let col2;
//keeps track of the amount of squares the wave has covered
let waveProgress = 0;
//flag to activate the "Wave"
let waveActive = false;
let img;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //sets the canvas to the background
  canvas.style("z-index", "-1");

  col2 = color("#005792");
  initializeGrid();
}

function initializeGrid() {
  // Determine grid size based on the canvas size
  gridColor = [];
  //counts amount of squares in the grid
  let counter = 0;
  //for loop to fill in square with color
  for (let x = 0; x < numCols(); x++) {
    for (let y = 0; y < numRows(); y++) {
      gridColor[counter] = color(0); // Start with white
      counter++;
    }
  }
}

function preload() {
  img = loadImage('IMG_7795.JPG', img => {
    img.resize(300, 350); // Resize image only after it has loaded
  });
}

//calculates number of columns
function numCols() {
  return floor(windowWidth / 50);
}

//calculate number of rows
function numRows() {
  return floor(windowHeight / 50);
}

//calculate cell width
function cellWidth() {
  return windowWidth / numCols();
}

//calculate cell height
function cellHeight() {
  return windowHeight / numRows();
}

function draw() {
  background(220);

  let counter = 0;
  for (let x = 0; x < numCols(); x++) {
    for (let y = 0; y < numRows(); y++) {
      if (waveActive && counter <= waveProgress) {
        gridColor[counter] = col2;
      }
      
      fill(gridColor[counter]);
      rect(x * cellWidth(), y * cellHeight(), cellWidth(), cellHeight());

      counter++;
    }
  }

  // Advance the wave if it's active
  if (waveActive) {
    //the speed of the wave
    waveProgress += 2;
    //if it reaches the length of array then switch the flag to false
    if (waveProgress == gridColor.length) {
      waveActive = false;
      noLoop();
      let x = width/2 - img.width/2
      let y = height/2 - img.height/2
      image(img, x,y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeGrid();
}



function keyPressed() {
  if (key === ' ') {
    waveActive = true; // Start the wave effect
    waveProgress = 0;  // Reset wave progress
  }
}


