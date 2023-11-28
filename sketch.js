// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att;

//let strength = 5;

let pSlider;

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

  // pSlider = createSlider(-100, 100, 10);
  // let sliderWidth = Math.min(width/2, 300);
  // pSlider.style('width', sliderWidth + 'px');
  // // pSlider.style('width', width/2 + 'px');
  // pSlider.position(width/2 - pSlider.width/2, height - 130);

  gui = QuickSettings.create(10, 10, 'My GUI');
  gui.addRange('strength', strengthMin, strengthMax, initialStrength, 1);

  var resetButton = createButton('Reset');
  resetButton.position(20, 120);
  resetButton.mouseClicked(resetValues);
  resetButton.style('z-index', '1');


  // noLoop();

}

function draw() {
  background(0);
  emitter.addParticle();

  //let strength = pSlider.value();
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
    strength += 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    strength -= 5;
  }

  if (keyIsDown(32)) { // 'SPACE' key
    strength = 10;
  }

  textSize(16);
  fill(255);
  text("Repeller Strength: " + repeller.strength + " (keyboard up/down/space to reset)", 10, height - 10);

}


function resetValues() {
  strength = initialStrength;
  x = gui.x;
  y = gui.y;

  destroyGui(gui);

  gui = QuickSettings.create(x, y, 'My GUI');
  gui.addRange('strength', strengthMin, strengthMax, initialStrength, 1);
}