// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    //stroke(280, this.lifespan);
    strokeWeight(1);
    fill(255,180,50, this.lifespan*2);
    //circle(this.position.x, this.position.y, 8);
    let distance = p5.Vector.dist(this.position, repeller.position);
    let size = map(distance, 0, width, 10, 30); // Adjust these values as needed

    ellipse(this.position.x, this.position.y, size, size);
  
  
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
