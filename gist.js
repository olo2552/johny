const { promisify } = require('util');
const { readFile } = require('fs');

const colorToMatch = process.argv[2];

const promisifiedReadFile = promisify(readFile);

const sassVariablesFilePath = '/home/olo2552/repos/sentione/dev/chimeo/chimeo-new-web/assets/stylesheets/commons/_variables.scss';

const normalizeHex = shortenedHex => (
    shortenedHex.slice(1).length !== 3
        ? shortenedHex
        : '#' + shortenedHex
        .slice(1)
        .split('')
        .map(char => char+char)
        .join('')
);

const hexToRGB = hex => ({
    r: hex.slice(1, 3),
    g: hex.slice(3, 5),
    b: hex.slice(5, 7),
});

const RGBToHex = rgb => '#' + rgb.r + rgb.g + rgb.b;

const diferrentiateRGB = rgb1 => rgb2 => Math.sqrt(
    Math.pow((parseInt(rgb2.r, 16) - parseInt(rgb1.r, 16)) * 0.3, 2) +
    Math.pow((parseInt(rgb2.g, 16) - parseInt(rgb1.g, 16)) * 0.59, 2) +
    Math.pow((parseInt(rgb2.b, 16) - parseInt(rgb1.b, 16)) * 0.11, 2)
);

const buildColorMapFromSASS = sassStreamFilePath =>
    promisifiedReadFile(sassStreamFilePath, {
        encoding: 'utf-8',
        flag: 'r',
    })
        .catch(console.log)
        .then(buffer => buffer.split('\n'))
        .then(arrBuffer => arrBuffer
            .filter(line => line.includes('#'))
            .map(line => line.split(':'))
            .map(line => line.map(line => line.trim()))
            .map(line => [line[0].slice(1), line[1].slice(0, -1)])
            .map(line => [line[0], line[1].toUpperCase()])
            .map(line => line.reverse())
            .reduce((colorsObj, line) => Object.assign(colorsObj, {
                [line[0]]: line[1],
            }), {})
        );


const colorMap = buildColorMapFromSASS(sassVariablesFilePath)
    .then(Object.keys)
    .then(colorsArr => colorsArr
        .map(normalizeHex)
        .map(hexToRGB)
        .map((color) => [color, diferrentiateRGB(hexToRGB(colorToMatch))(color)])
        .reduce((minElem, currentColorWithDiff) => (
            minElem[1] > currentColorWithDiff[1]
                ? currentColorWithDiff
                : minElem
        ))
    )
    .then(colorRow => colorRow[0])
    .then(RGBToHex)
    .then(console.log);