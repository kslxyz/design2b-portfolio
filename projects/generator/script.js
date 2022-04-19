var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("background-draw");
  }
  
  function draw() {
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
  }