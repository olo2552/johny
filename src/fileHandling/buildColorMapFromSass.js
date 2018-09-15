const buildColorMapFromSass = sassStreamFilePath => (
    sassStreamFilePath
        .trim()
        .split('\n')
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

module.exports = {
    buildColorMapFromSass
};
