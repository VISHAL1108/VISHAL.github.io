let music;
var slider;

let toon;

let young;

let ssbu;
let s64;

let x;
let y;
let x1;
let y1;
let x2;
let y2;


let xspeed;
let yspeed;

let link;
let r, g, b;

function preload() {
  ssbu = loadImage("Switch_SuperSmashBrosUltimate_Nov_illustration_png_jpgcopy-ds1-670x377-constrain.jpg ")
  link = loadImage("250px-Link_SSB4.png ")
  s64 = loadImage("download.jpg");
  young = loadImage("250px-Young_Link_SSBU.png ")
  music = loadSound('Princess Zelda - The Legend of Zelda Ocarina of Time.mp3', loaded);
  
}

function pickColor() {
  r = random(256);
  g = random(256);
  b = random(256);
}

function setup() {
  createCanvas(1800, 1000);
  x = random(width);
  y = random(height);
  x1 = random(width);
  y1 = random(height + 20);
  slider = createSlider(0, 1, 0.5, 0.01);
  xspeed = 10;
  yspeed = 10;
  pickColor();


}
function loaded() {
    music.loop();
}



function draw() {
  background(ssbu, 1800, 100);
  //rect(x, y, 80, 60);
  // Draw Link
  tint(r, g, b)
  image(link, x, y);
  image(young, x1, y1);
  image(ssbu, 1800, 1000);

  x = x + xspeed;
  y = y + yspeed;
  x1 = x1 + xspeed;
  y1 = y1 + yspeed;


  if (x + link.width >= width) {
    xspeed = -xspeed;
    x = width - link.width;

  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + link.height >= height) {
    yspeed = -yspeed;
    y = height - link.height;

  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
  if (x1 + young.width >= width) {
    xspeed = -xspeed;
    x1 = width - young.width;

  } else if (x1 <= 0) {
    xspeed = -xspeed;
    x1 = 0;
    pickColor();
  }

  if (y1 + young.height >= height) {
    yspeed = -yspeed;
    y1 = height - young.height;

  } else if (y1 <= 0) {
    yspeed = -yspeed;
    y1 = 0;
    pickColor();
  }
  if (x1 + young.width >= width) {
    xspeed = -xspeed;
    x1 = width - young.width;

  } else if (x1 <= 0) {
    xspeed = -xspeed;
    x1 = 0;
    pickColor();
  }




}

