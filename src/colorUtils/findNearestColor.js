const { mapColorsToDifference } = require('./mapColorsToDifference');

const findNearestColor = (queryColor) => (colors) => {
    console.log(colors);
    return mapColorsToDifference(queryColor)(colors)
        .reduce((nearestColor, colorWithDiff) =>
        nearestColor.difference < colorWithDiff.difference
            ? nearestColor
            : colorWithDiff
    , colors[0]);
};

module.exports = {
    findNearestColor,
};