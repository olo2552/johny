import { IParseTree } from "gonzales-pe";
import { IVariableWithColorNode } from "../interfaces";

function mapDeclarationsToVariablePairs(
  declarations: IParseTree[]
): IVariableWithColorNode[] {
  declarations.forEach(declaration => {
    declaration.traverseByTypes(
      ["space", "propertyDelimiter"],
      (_, index, parent) => {
        parent.removeChild(index);
      }
    );
  });

  return declarations.map(declaration => ({
    color: declaration.content[1],
    variable: declaration.content[0].content[0].content[0].content
  }));
}

export { mapDeclarationsToVariablePairs };
