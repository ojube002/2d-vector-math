export default class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  updateLocation({ x, y }: Coordinates) {
    this.x = x;
    this.y = y;
    return this;
  }

  getCoordinates(): Coordinates {
    return { x: this.x, y: this.y };
  }

  draw(
    ctx: CanvasRenderingContext2D,
    { fillStyle = "#e2b714", size = 10 } = {}
  ) {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
