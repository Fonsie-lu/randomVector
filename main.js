function setup() {
  createCanvas(1200, 800);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  let v = p5.Vector.random2D().mult(800);
  v.y *= 1.5;
  let w = p5.Vector.random2D()
    .mult(200)
    .mult(random());
  w.y *= 1.5;

  strokeWeight(random(10));
  stroke(
    floor(random(200)),
    floor(random(60)),
    //0,
    floor(random(240)),
    floor(random(30, 100))
  );
  line(w.x * random(), w.y * random(), v.x * random(), v.y * random());
  stroke(20, 40, 255, 40);
  line(v.x * random(), v.y * random(), w.x * random(), w.y * random());
}
