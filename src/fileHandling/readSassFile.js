const { promisify } = require('util');
const { readFile } = require('fs');

const readSassFile = sassStreamFilePath =>
    promisify(readFile)(sassStreamFilePath, {
        encoding: 'utf-8',
        flag: 'r',
    })
        .catch(console.log);

module.exports = {
    readSassFile,
};