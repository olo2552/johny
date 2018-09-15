import { ColorWithDifference } from "../interfaces";
import { mapColorsToAttachedDifference } from './mapColorsToDifference';

function findNearestColor (queryColor: string, colors: Array<string>): ColorWithDifference {
    return mapColorsToAttachedDifference(queryColor, colors)
        .reduce((nearestColor: ColorWithDifference, colorWithDiff: ColorWithDifference) =>
            nearestColor.difference < colorWithDiff.difference
                ? nearestColor
                : colorWithDiff
        );
}

export { findNearestColor };