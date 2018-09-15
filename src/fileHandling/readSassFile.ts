import { promisify } from "util";
import { readFile } from "fs";

function readSassFile (sassStreamFilePath: string): Promise<string> {
    return promisify(readFile)(sassStreamFilePath, {
        encoding: 'utf-8',
        flag: 'r',
    }).catch((err) => {
        console.log(err);
        return err;
    });
}

export { readSassFile }