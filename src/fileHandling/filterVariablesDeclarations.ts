import { IParseTree, nodeType } from "gonzales-pe";

function filterVariablesDeclarations(rootNode: IParseTree): IParseTree[] {
  const colors: IParseTree[] = [];

  rootNode.traverseByType("declaration", node => {
    colors.push(node);
  });

  return colors.filter(filteredDeclarationNode => {
    const variableType: nodeType = "variable";
    const property = filteredDeclarationNode.content[0];
    return property.content[0].type === variableType;
  });
}

export { filterVariablesDeclarations };
