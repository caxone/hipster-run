let scenarioImage;
let characterImage;
let scenario;
let character;
let slime;
let soundtrack;
let jumpSound;

const ScenarioSpeed = 3;

function preload() {
  characterImage = loadImage('assets/images/character/running.png');
  scenarioImage = loadImage('assets/images/scenario/forest.png');
  enemyImage = loadImage('assets/images/enemies/slime.png');
  soundtrack = loadSound('assets/sounds/soundtrack.mp3');
  jumpSound = loadSound('assets/sounds/jumpSound.mp3');
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.play()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, ScenarioSpeed);

  const characterMatrix = buildMatrix(4, 4, 220, 270);
  character = new Character(characterImage, characterMatrix, 220, 270, 110, 135, 0);
  
  const slimeMatrix = buildMatrix(7, 4, 104, 104);
  slime = new Enemy(enemyImage, slimeMatrix, 104, 104, 52, 52, width - 52);

  frameRate(30);
  soundtrack.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
  character.appliesGravity();
  slime.show();
  slime.move();
  if(character.isColliding(slime)) {
    console.log('colidiu');
    noLoop();
  }
}