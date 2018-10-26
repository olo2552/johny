import { IParseTree } from "gonzales-pe";

function mapDeclarationsToVariablePairs({
  content
}: IParseTree): [IParseTree | string, IParseTree | string] {
  const propertyObj = content[0];
  const value = content[content.length - 1];

  return [propertyObj, value];
}

export { mapDeclarationsToVariablePairs };
