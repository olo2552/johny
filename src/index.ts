import gonzalesPe from "gonzales-pe";
import { inspect } from "util";
import { filterVariablesDeclarations } from "./fileHandling/filterVariablesDeclarations";
import { mapDeclarationToVariablePair } from "./fileHandling/mapDeclarationToVariablePair";
import { readSassFile } from "./fileHandling/readSassFile";
import { resolveNamedColorValues } from "./fileHandling/resolveNamedColorValues";

const sassVariablesFilePath = process.argv[3] || "./__mocks__/_namedColorVariables.scss";

readSassFile(sassVariablesFilePath)
  .then(sass =>
    gonzalesPe.parse(sass, {
      syntax: "scss",
      tabSize: 2
    })
  )
  .then(filterVariablesDeclarations)
  .then(nodes => nodes.map(mapDeclarationToVariablePair))
  .then(nodes => nodes.map(resolveNamedColorValues))
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
  .catch(error => {
    // tslint:disable-next-line:no-console
    console.log("ERR", error);
  });
