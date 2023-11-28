// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att;

let strength = 5;



function setup() {
  createCanvas(innerWidth, innerHeight);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 500, strength);
  att = new Attractor(width/2, height / 2);

  pSlider = createSlider(-100, 100, 10);
  pSlider.position(width/2 - pSlider.width/2, height - 130);

}

function draw() {
  background(0);
  emitter.addParticle();

  let strength = pSlider.value();
  repeller.setStrength(strength);

  
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
    repeller.setStrength(repeller.strength + 1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    repeller.setStrength(repeller.strength - 1);
  }

  if (keyIsDown(32)) { // 'SPACE' key
    repeller.setStrength(strength); 
  }

  textSize(16);
  fill(255);
  text("Repeller Strength: " + repeller.strength + " (keyboard up/down/space to reset)", 10, height - 10);

}
