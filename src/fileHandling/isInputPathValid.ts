import { access } from "fs";
import { extname } from "path";
import { promisify } from "util";
import { SUPPORTED_FILE_EXTENTIONS } from "../CONSTANTS";

async function isInputPathValid(path: string): Promise<boolean> {
  const fileExtension = extname(path);

  if (!SUPPORTED_FILE_EXTENTIONS.includes(fileExtension)) {
    throw Error(
      `Given file has unsupported format: "${fileExtension}"
Supported file extensions: ${SUPPORTED_FILE_EXTENTIONS.join(", ")}`
    );
  }

  try {
    await promisify(access)(path);
  } catch {
    throw Error(`Given file "${path}" does not exists.`);
  }

  return true;
}

export { isInputPathValid };
