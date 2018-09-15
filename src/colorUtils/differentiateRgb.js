const Color = require('color');

const RGB_COLOR_WEIGHT = {
    r: 0.3,
    g: 0.59,
    b: 0.11,
};

const diferrentiateRGB = hex1 => hex2 => {
    const rgb1 = Color(hex1).object();
    const rgb2 = Color(hex2).object();

    const r1 = rgb1.r;
    const g1 = rgb1.g;
    const b1 = rgb1.b;

    const r2 = rgb2.r;
    const g2 = rgb2.g;
    const b2 = rgb2.b;

    return Math.sqrt(
        Math.pow((r1-r2) * RGB_COLOR_WEIGHT.r, 2) +
        Math.pow((g1-g2) * RGB_COLOR_WEIGHT.g, 2) +
        Math.pow((b1-b2) * RGB_COLOR_WEIGHT.b, 2)
    );
};

module.exports = {
    differentiateRGB: diferrentiateRGB,
};
