import Point from "./point";
import { add, dot, normalize, scale, subtract, toPolar, toXY } from "./utils";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const offset = {
  x: canvasWidth / 2,
  y: canvasHeight / 2,
};

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

(() => {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.translate(offset.x, offset.y);

  const arrowTipPoint = new Point(90, 120);
  const arrowTipPoint2 = new Point(20, 50);

  function update() {
    drawCoordinatesSystem();
    const arrowTipPointCoords = arrowTipPoint.getCoordinates();
    const arrowTipPoint2Coords = arrowTipPoint2.getCoordinates();

    drawArrow({ x: 0, y: 0 }, arrowTipPointCoords, "white");
    drawArrow({ x: 0, y: 0 }, arrowTipPoint2Coords, "white");

    const resultAdd = add(arrowTipPointCoords, arrowTipPoint2Coords);
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(arrowTipPoint2Coords.x, arrowTipPoint2Coords.y);
    ctx.lineTo(resultAdd.x, resultAdd.y);
    ctx.lineTo(arrowTipPointCoords.x, arrowTipPointCoords.y);
    ctx.stroke();
    ctx.setLineDash([]);
    drawArrow({ x: 0, y: 0 }, resultAdd);

    const scaledSub = scale(normalize(arrowTipPointCoords), 50);
    drawArrow({ x: 0, y: 0 }, scaledSub);

    console.log(
      "Dot product of white vectors: " +
        dot(normalize(arrowTipPoint2Coords), normalize(arrowTipPointCoords))
    );
  }

  update();

  document.onmousemove = (evt) => {
    ctx.clearRect(-offset.x, -offset.y, canvasWidth, canvasHeight);
    arrowTipPoint.updateLocation({ x: evt.x - offset.x, y: evt.y - offset.y });
    update();
  };
})();

function drawArrow(
  tail: Coordinates,
  tip: Coordinates,
  color = "#e2b714",
  size = 20
) {
  const { dir } = toPolar(subtract(tip, tail));
  const v1 = { dir: dir + Math.PI * 0.8, mag: size / 2 };
  const p1 = toXY(v1);
  const t1 = add(p1, tip);

  const v2 = { dir: dir - Math.PI * 0.8, mag: size / 2 };
  const p2 = toXY(v2);
  const t2 = add(p2, tip);

  ctx.beginPath();
  ctx.moveTo(tail.x, tail.y);
  ctx.lineTo(tip.x, tip.y);
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(tip.x, tip.y);
  ctx.lineTo(t1.x, t1.y);
  ctx.lineTo(t2.x, t2.y);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawCoordinatesSystem() {
  ctx.beginPath();
  ctx.moveTo(-offset.x, 0);
  ctx.lineTo(canvasWidth - offset.y, 0);
  ctx.moveTo(0, -offset.y);
  ctx.lineTo(0, canvasHeight - offset.y);
  ctx.setLineDash([10, 8]);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#e2b7148a";
  ctx.stroke();
  ctx.setLineDash([]);
}
