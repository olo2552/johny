const RGB_COLOR_WEIGHT = {
    R: 0.3,
    G: 0.59,
    B: 0.11,
};

const diferrentiateRGB = rgb1 => rgb2 => (
    Math.sqrt(
        Math.pow((parseInt(rgb2.r, 16) - parseInt(rgb1.r, 16)) * RGB_COLOR_WEIGHT.R, 2) +
        Math.pow((parseInt(rgb2.g, 16) - parseInt(rgb1.g, 16)) * RGB_COLOR_WEIGHT.G, 2) +
        Math.pow((parseInt(rgb2.b, 16) - parseInt(rgb1.b, 16)) * RGB_COLOR_WEIGHT.B, 2)
    )
);

export { diferrentiateRGB };