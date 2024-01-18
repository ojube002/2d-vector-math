export const magnitude = ({ x, y }: Coordinates) => {
  return Math.hypot(x, y);
};

export const direction = ({ x, y }: Coordinates) => {
  return Math.atan2(y, x);
};

export const toPolar = (coords: Coordinates) => {
  return {
    dir: direction(coords),
    mag: magnitude(coords),
  };
};

export const toXY = ({ mag, dir }: { mag: number; dir: number }) => {
  return {
    x: Math.cos(dir) * mag,
    y: Math.sin(dir) * mag,
  };
};

export const add = (p1: Coordinates, p2: Coordinates) => {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
};

export const subtract = (p1: Coordinates, p2: Coordinates) => {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
};

export const scale = (p: Coordinates, scalar: number) => {
  return {
    x: p.x * scalar,
    y: p.y * scalar,
  };
};

export const normalize = (p: Coordinates) => {
  return scale(p, 1 / magnitude(p));
};

export const dot = (p1: Coordinates, p2: Coordinates) => {
  return p1.x * p2.x + p1.y * p2.y;
};
