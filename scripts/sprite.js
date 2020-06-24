class Sprite {
  constructor(
    image,
    matrix,
    imageWidth, 
    imageHeight, 
    characterWidth, 
    characterHeight,
    positionX,
  ) {
    this.image = image;
    this.matrix = matrix;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.positionX = positionX;
    this.positionY = height - characterHeight;
    this.frame = 0;
  }

  show() {
    image(
      this.image, this.positionX, this.positionY, this.characterWidth, this.characterHeight,
      this.matrix[this.frame][0], this.matrix[this.frame][1],
      this.imageWidth, this.imageHeight
    );
    this.animation();
  }

  animation  () {
    this.frame++;
    if (this.frame >= this.matrix.length - 1) {
      this.frame = 0;
    }
  }
}