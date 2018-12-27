// import of need to be disabled, because of lack of ts typings
// @ts-ignore:next-line
import cssColorNames from "css-color-names";
import { IVariableWithColorNode } from "../interfaces";

function resolveNamedColorValues(variableColorPair: IVariableWithColorNode) {
  if (variableColorPair.color.type !== "ident") {
    return variableColorPair;
  }
  if (!Object.keys(cssColorNames).includes(variableColorPair.color.content)) {
    return variableColorPair;
  }

  return {
    variableName: variableColorPair.variableName,
    color: cssColorNames[variableColorPair.color.content]
  };
}

export { resolveNamedColorValues };
