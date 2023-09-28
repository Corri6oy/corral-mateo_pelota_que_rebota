let posX, posY, diam, rad;
let esp = 34;
let margen = 50;
let piso;
let velY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  piso = windowHeight - margen - esp / 2;
  diam = 50;
  rad = diam / 2;
}

function draw() {
  background(0, 255, 200, 70);
  noStroke();
  posY += velY;
  if (posY > piso - rad) {
    velY *= -1;
  }
  if (posY) fill(225);
  circle(posX, posY, 50);
  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight - 50, windowWidth - 50, esp);
}
