class Particle {
    constructor(maxRadius, minRadius, canvas, context, color, radius, position, speed) {
      this.maxRadius = maxRadius;
      this.minRadius = minRadius;
      this.context = context;
      this.canvas = canvas;
      this.speedX = (Math.random() * 0.1);
      this.speedY = (Math.random() * 0.1);
      this.xCoord = Math.random() * canvas.width;
      this.yCoord = Math.random() * canvas.height;
      this.positionRatio = canvas.width / this.xCoord;
      this.color = `rgba(99, 102, 241, 0.3)`
      this.radius = 2;
    }

    updatePosition() {
      this.xCoord += (this.speedX);
      this.yCoord += (this.speedY);
      if (this.xCoord <= this.radius || this.xCoord >= this.canvas.width - this.radius) {
        this.speedX *= -1;
      } else if (this.yCoord <= this.radius || this.yCoord >= this.canvas.height - this.radius) {
        this.speedY *= -1;
      }
    }

    updateResizePosition(canvasDimension) {
        this.xCoord = this.positionRatio * canvasDimension.width;
        this.yCoord = this.positionRatio * canvasDimension.height
        this.drawParticle()
        this.updatePosition();
    }

    drawParticle() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.xCoord, this.yCoord, !this.radius && 2 , 0, Math.PI * 2);
        this.context.fill();
    }
}

export default Particle;