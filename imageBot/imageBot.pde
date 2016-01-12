

void setup() {
  size(1920, 1080, P3D);
  background(0);
  lights();
  for(int i = 0; i < 1000; i++) {
    pushMatrix();
    float x = random(width);
    float y = random(height);
    float z = random(width);
    float r = random(0,255);
    float g = random(0,255);
    float b = random(0,255);
    rotateY(random (0,10)/10);
    noStroke();
    translate(x, y, z);
    fill(r, g, b);
    sphere(random(0,20));
    popMatrix();
  }
  save("output.png");
  exit();
}