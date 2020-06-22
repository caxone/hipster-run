class Character extends Sprite {
  constructor(image) {
    super()
    this.image = image;
    this.matrix = this.buildMatrix();
    this.imageWidth = 220;
    this.imageHeight = 270;
    this.characterWidth = 110;
    this.characterHeight = 135;
    this.positionX = 0;
    this.positionY = height - 135;
    this.frame = 0;
  }

  show() {
    image(
      this.image, this.positionX, this.positionY, this.characterWidth, this.characterHeight,
      this.matrix[this.frame][0], this.matrix[this.frame][1],
      this.imageWidth, this.imageHeight
    );
    this.move();
  }

  move() {
    this.frame++;
    if (this.frame >= this.matrix.length - 1) {
      this.frame = 0;
    }
  }

  buildMatrix(elX = 4, elY = 4, width = 220, height = 270) {
    let arr = [];
    let positionX = 0;
    let positionY = 0;
    for (let i = 0; i < elX; i++) {
      for (let j = 0; j < elY; j++) {
        arr.push([positionX, positionY]);
        positionX += width;
      }
      positionX = 0;
      positionY += height;
    }
    return arr;
  }
}