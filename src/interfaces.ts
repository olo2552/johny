import { IParseTree } from "gonzales-pe";

export interface IColorWithDifference {
  color: string;
  difference: number;
}

export interface IRgb {
  r: number;
  g: number;
  b: number;
}

export interface IVariableWithColorNode {
  color: string | IParseTree;
  variableName: string;
}
