const { readSassFile } = require('./src/fileHandling/readSassFile');
const { buildColorMapFromSass } = require('./src/fileHandling/buildColorMapFromSass');
const { findNearestColor } = require('./src/colorUtils/findNearestColor');

const colorToMatch = process.argv[2] || '#1ED760';
const sassVariablesFilePath = process.argv[3] || '/home/olo2552/Desktop/_variables.scss';

const colorMap = readSassFile(sassVariablesFilePath)
    .then(buildColorMapFromSass)
    .then(Object.keys)
    .then(findNearestColor(colorToMatch))
    .then(console.log);