class Attractor {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = 2;
        this.G = 10;
        this.angle = 0; // Add an angle property
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

    update() {
        this.position.x = width / 2 + cos(this.angle) * 200;
        this.position.y = height / 2 + sin(this.angle) * 300;
        this.angle += 0.01; 
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    display() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(255);
        fill(255);
        ellipse(this.position.x, this.position.y, this.mass * 20, this.mass * 20);
    }
}