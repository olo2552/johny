import gonzalesPe from "gonzales-pe";
import { inspect } from "util";
import { filterVariablesDeclarations } from "./fileHandling/filterVariablesDeclarations";
import { mapDeclarationsToVariablePairs } from "./fileHandling/mapDeclarationsToVariablePairs";
import { readSassFile } from "./fileHandling/readSassFile";

const sassVariablesFilePath =
  process.argv[3] || "./__mocks__/_variables.scss";

readSassFile(sassVariablesFilePath)
  .then(sass =>
    gonzalesPe.parse(sass, {
      syntax: "scss",
      tabSize: 2
    })
  )
  .then(filterVariablesDeclarations)
  .then(mapDeclarationsToVariablePairs)
  .then(x =>
    // tslint:disable-next-line:no-console
    console.log(
      inspect(x, {
        colors: true,
        compact: false,
        depth: 30,
        maxArrayLength: 100
      })
    )
  )
  .catch(error => console.log("ERR", error));
