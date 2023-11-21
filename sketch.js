// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;

let strength = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 500, strength);
}

function draw() {
  background(0);
  emitter.addParticle();
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  repeller.position = createVector(mouseX, mouseY);
  
  repeller.show();
  emitter.run();

  if (keyIsDown(UP_ARROW)) {
    repeller.setStrength(repeller.strength + 1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    repeller.setStrength(repeller.strength - 1);
  }

  if (keyIsDown(32)) { // 32 is the key code for the 'SPACE' key
    repeller.setStrength(strength); // Assuming 100 is the initial strength
  }

  textSize(16);
  fill(255);
  text("Repeller Strength: " + repeller.strength + " (keyboard up/down/space to reset)", 10, height - 10);

}
