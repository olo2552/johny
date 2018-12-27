import { resolveNamedColorValues } from "../src/fileHandling/resolveNamedColorValues";
import { IVariableWithColorNode } from "../src/interfaces";

describe("resolveNamedColorValues function", () => {
  class ColorVariablePair implements IVariableWithColorNode {
    constructor(public color: string, public variableName: string) {}
  }

  const finalColorVariable = new ColorVariablePair("#F0F0F0", "finalColor");
  const namedColorVariable = new ColorVariablePair("lightgray", "namedColor");

  it("should work correctly", () => {
    expect(resolveNamedColorValues(namedColorVariable));
  });

  it("should skip hex variable", () => {
    expect(resolveNamedColorValues(finalColorVariable)).toBe(
      finalColorVariable
    );
  });
});
