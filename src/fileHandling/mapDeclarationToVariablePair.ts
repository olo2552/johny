import { IParseTree } from "gonzales-pe";
import { POSSIBLE_COLOR_TYPES } from "../constants";
import { IVariableWithColorNode } from "../interfaces";

function mapDeclarationToVariablePair(
  declarationNode: IParseTree
): IVariableWithColorNode {
  declarationNode.traverseByTypes(
    ["space", "propertyDelimiter"],
    (_, index, parent) => {
      parent.removeChild(index);
    }
  );

  const variableWithColor: IVariableWithColorNode = {
    color: declarationNode.content[1],
    variableName: ""
  };

  declarationNode.content[1].traverseByTypes(POSSIBLE_COLOR_TYPES, node => {
    variableWithColor.color = node;
  });

  declarationNode.content[0].traverseByType("ident", node => {
    variableWithColor.variableName = node.content;
  });

  return variableWithColor;
}

export { mapDeclarationToVariablePair };
