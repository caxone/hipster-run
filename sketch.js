let scenarioImage;
let characterImage;
let scenario;
let character;
let soundtrack;

const ScenarioSpeed = 3;

function preload() {
  characterImage = loadImage('assets/images/character/running.png');
  scenarioImage = loadImage('assets/images/scenario/forest.png');
  soundtrack = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, ScenarioSpeed);
  character = new Character(characterImage);
  frameRate(30);
  soundtrack.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
}