let img;
let posX = 300;
let posY = 200;

let addArray = [-1, 1];
let addX = 0;
let addY = 0;

function preload() {
  img = loadImage("assets/dvdWhite.png");
}

function setup() {
  createCanvas(600, 400);
  addX = random(addArray);
  addY = random(addArray);
}

function draw() {
  background(0);

  imageMode(CORNER);
  image(img, posX, posY, 100, 50);

  posX += addX;
  posY += addY;

  posX = constrain(posX, 0, 499);
  posY = constrain(posY, 0, 349);

  hitWall();
}

function hitWall() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  if (posX === 0 || posX === 499) {
    addX = random(addArray);
    tint(r, g ,b);
  }

  if (posY === 0 || posY === 349) {
    addY = random(addArray);
    tint(r, g ,b);
  }
}
