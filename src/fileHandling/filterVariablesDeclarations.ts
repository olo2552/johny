import { IParseTree } from "gonzales-pe";

function filterVariablesDeclarations(parseTree: IParseTree): IParseTree[] {
  const colors: IParseTree[] = [];

  parseTree.traverseByType("declaration", (node) => {
    colors.push(node);
  });

  return colors;
}

export { filterVariablesDeclarations };
