import { IColorWithDifference } from "../interfaces";
import { differentiateRgb } from "./differentiateRgb";

function mapColorsToAttachedDifference(
  queryColor: string,
  colors: string[]
): IColorWithDifference[] {
  return colors.map(color => ({
    color,
    difference: differentiateRgb(queryColor, color)
  }));
}

export { mapColorsToAttachedDifference };
