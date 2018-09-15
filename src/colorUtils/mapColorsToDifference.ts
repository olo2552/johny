import { differentiateRgb } from "./differentiateRgb";
import { ColorWithDifference } from "../interfaces";

function mapColorsToAttachedDifference (queryColor: string, colors: Array<string>): Array<ColorWithDifference> {
    return colors.map(color => ({
        color,
        difference: differentiateRgb(queryColor)(color),
    }));
}

export { mapColorsToAttachedDifference };