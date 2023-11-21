class Attractor {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.mass = 20;
        this.G = 1;
    }

    attract(m) {
        let force = p5.Vector.sub(this.position, m.position);
        let distance = force.mag();
        distance = constrain(distance, 5, 25);
        force.normalize();
        let strength = (this.G * this.mass * m.mass) / (distance * distance);
        force.mult(strength);
        return force;
    }

    display() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(255);
        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }
}