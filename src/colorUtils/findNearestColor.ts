import { IColorWithDifference } from "../interfaces";
import { mapColorsToAttachedDifference } from "./mapColorsToAttachedDifference";

function findNearestColor(
  queryColor: string,
  colors: string[]
): IColorWithDifference {
  return mapColorsToAttachedDifference(queryColor, colors).reduce(
    (nearestColor: IColorWithDifference, colorWithDiff: IColorWithDifference) =>
      nearestColor.difference < colorWithDiff.difference
        ? nearestColor
        : colorWithDiff
  );
}

export { findNearestColor };
