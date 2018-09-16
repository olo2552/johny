import color from "color";

import { IRgb } from "../interfaces";

const RGB_COLOR_WEIGHT: IRgb = {
  b: 0.11,
  g: 0.59,
  r: 0.3
};

function differentiateRgb(hex1: string, hex2: string): number {
  const rgb1 = color(hex1.toLowerCase()).object();
  const rgb2 = color(hex2.toLowerCase()).object();

  const r1 = rgb1.r;
  const g1 = rgb1.g;
  const b1 = rgb1.b;

  const r2 = rgb2.r;
  const g2 = rgb2.g;
  const b2 = rgb2.b;

  return Math.sqrt(
    Math.pow((r1 - r2) * RGB_COLOR_WEIGHT.r, 2) +
      Math.pow((g1 - g2) * RGB_COLOR_WEIGHT.g, 2) +
      Math.pow((b1 - b2) * RGB_COLOR_WEIGHT.b, 2)
  );
}

export { differentiateRgb };
