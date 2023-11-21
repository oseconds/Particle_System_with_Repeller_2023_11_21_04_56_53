class Repeller {
  constructor(x, y, strength) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 150;
    this.strength = strength;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(79,70,229);
    circle(this.position.x, this.position.y, this.strength*5 );
    
  }

  repel(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 80);
    let strength = (-1 * this.power * (0.1*this.strength)) / (distance * distance);
    force.setMag(strength);
    return force;
  }

  setStrength(strength) {
    this.strength = strength;
  }

}
