class Attractor {
    constructor(x, y, mass, G, angle) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.G = G;
        this.angle = angle; // Add an angle property
        // this.radius = radius; // Add a radius property
        // this.speed = speed;
    }

    attract(particle) {
        let force = p5.Vector.sub(this.position, particle.position);
        let distance = force.mag();
        distance = constrain(distance, 5, 25);
        //force.normalize();
        let strength = (this.G * this.mass * particle.mass) / (distance * distance);
        force.mult(strength);
        force.mult(0.001);
        return force;
    }

    update() {
        this.position.x = width / 2 + cos(this.angle) * 200;
        this.position.y = height / 2 + sin(this.angle) * 300;
        this.angle += gui.getRangeValue('angle');
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