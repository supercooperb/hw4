//cooper berella and seth mcfarlane

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);

}

function draw() {
  for (i = 0; i < 100; i++){ // this is the "for" loop
    var x = random(width);
    var y = random(height);
    stroke(x, y, 100);
    point(x, y);
  }
}
