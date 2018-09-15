const { differentiateRGB } = require('./differentiateRgb');

const mapColorsToDifference = (queryColor) => (colors) => {
    return colors.map(color => ({
        color,
        difference: differentiateRGB(queryColor)(color),
    }));
};

module.exports = {
    mapColorsToDifference,
};