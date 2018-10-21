import { readFile } from "fs";
import { promisify } from "util";

function readSassFile(sassStreamFilePath: string): Promise<string> {
  return promisify(readFile)(sassStreamFilePath, {
    encoding: "utf-8",
    flag: "r"
  }).catch(err => {
    throw err;
  });
}

export { readSassFile };
