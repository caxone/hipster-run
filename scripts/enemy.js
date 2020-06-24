class Enemy extends Sprite {
  constructor(image, matrix, imageWidth, imageHeight, characterWidth, characterHeight, x) {
    super(image, matrix, imageWidth, imageHeight, characterWidth, characterHeight, x);
    this.speed = 8;
  }
  
  move() {
    this.positionX-= this.speed;
    if (this.x < this.characterWidth) {
      this.x = width;
    }
  }
}