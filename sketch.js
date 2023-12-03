let emitter;
let repeller;
let att;
var gui;
var guis = [];

// New variables for GUI
var strength = 10;
var strengthMin = -100;
var strengthMax = 100;
var initialStrength = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 500, strength);
  att = new Attractor(width / 2, height / 2);

  gui = QuickSettings.create(10, 10, 'My GUI');
  gui.addRange('strength', strengthMin, strengthMax, initialStrength, 1);

  gui.addButton('Reset', resetValues);

}

function draw() {
  background(0);
  emitter.addParticle();

  repeller.setStrength(gui.getRangeValue('strength'));

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  emitter.applyAttractor(att);
  emitter.applyRepeller(repeller);
  repeller.position = createVector(mouseX, mouseY);

  att.update();

  repeller.show();
  att.display();
  emitter.run();

  if (keyIsDown(UP_ARROW)) {
    strength += 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    strength -= 5;
  }

  if (keyIsDown(32)) { // 'SPACE' key
    strength = 10;
    resetValues();
  }

  textSize(16);
  fill(255);
  text("Repeller Strength: " + repeller.strength + " (keyboard up/down/space to reset)", 10, height - 10);

}


function resetValues() {
  gui.setRangeValue('strength', initialStrength);
}