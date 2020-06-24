class Character extends Sprite {
  constructor(image, matrix, imageWidth, imageHeight, characterWidth, characterHeight, x) {
    super(image, matrix, imageWidth, imageHeight, characterWidth, characterHeight, x);
    this.initialPositionY = this.positionY;
    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    if (this.initialPositionY === this.positionY) {
      this.jumpSpeed = -50;
    }
  }

  appliesGravity() {
    this.positionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if(this.positionY > this.initialPositionY) {
      this.positionY = this.initialPositionY;
    }
  }

  isColliding(enemy) {
    const colliding = collideRectRect(
      this.positionX,
      this.positionY,
      this.characterWidth * .7,
      this.characterHeight * .7,
      enemy.positionX,
      enemy.positionY,
      enemy.characterWidth * .7,
      enemy.characterHeight * .7,
    );
    return colliding;
  }
}