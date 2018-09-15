import { findNearestColor } from "./colorUtils/findNearestColor";
import { buildColorMapFromSass } from "./fileHandling/buildColorMapFromSass";
import { readSassFile } from "./fileHandling/readSassFile";

const colorToMatch: string = process.argv[2] || "#1ED760";
const sassVariablesFilePath: string =
  process.argv[3] || "/home/olo2552/Desktop/_variables.scss";

readSassFile(sassVariablesFilePath)
  .then(file => buildColorMapFromSass(file))
  .then(Object.keys)
  .then(colors => findNearestColor(colorToMatch, colors))
  // tslint:disable-next-line:no-console
  .then(console.log);
