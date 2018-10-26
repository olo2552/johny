import gonzalesPe from "gonzales-pe";
import { inspect } from "util";
import { filterVariablesDeclarations } from "./fileHandling/filterVariablesDeclarations";
import { mapDeclarationsToVariablePairs } from "./fileHandling/mapDeclarationsToVariablePairs";
import { readSassFile } from "./fileHandling/readSassFile";

const sassVariablesFilePath =
  process.argv[3] || "/home/olo2552/Desktop/_variables.scss";

readSassFile(sassVariablesFilePath)
  .then(sass =>
    gonzalesPe.parse(sass, {
      syntax: "sass",
      tabSize: 2
    })
  )
  .then(filterVariablesDeclarations)
  .then(parseTrees => parseTrees.map(parseTree => parseTree.toJson()))
  .then(parseTrees => parseTrees.map(parseTree => JSON.parse(parseTree)))
  .then(parseTrees => parseTrees[0])
  .then(mapDeclarationsToVariablePairs)
  .then(x =>
    console.log(
      inspect(x, {
        colors: true,
        compact: false,
        depth: 30,
        maxArrayLength: 100
      })
    )
  );
