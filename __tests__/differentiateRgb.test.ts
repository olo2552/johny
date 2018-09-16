import { differentiateRgb } from "../src/colorUtils/differentiateRgb";

describe("differentiateRgb function", () => {
  const sameColorDifference = differentiateRgb("#fff", "#fff");

  it("should work properly", () => {
    expect(sameColorDifference);
  });

  it("should be case insensitive", () => {
    const colors = ["#ffffff", "#a4c", "navy"];

    colors.forEach(color => {
      expect(differentiateRgb(color, color.toUpperCase())).toBe(
        differentiateRgb(color, color)
      );
    });
  });

  it("should work for css predefined colors", () => {
    expect(differentiateRgb("red", "red")).toBe(0);
    expect(differentiateRgb("navy", "pink")).toBeGreaterThan(0);
  });

  it("should give zero difference for same color", () => {
    expect(sameColorDifference).toBe(0);
  });

  it("should be altering", () => {
    expect(differentiateRgb("#edf", "#abc")).toBe(
      differentiateRgb("#abc", "#edf")
    );
  });

  it("should give non-zero difference for different colors", () => {
    expect(differentiateRgb("#aaa", "#fff")).not.toBe(0);
  });

  it("should higher result for colors, that match less", () => {
    const smallDifference = differentiateRgb("#ffe", "#fff");
    const biggerDifference = differentiateRgb("#000", "#fff");

    expect(smallDifference).toBeLessThan(biggerDifference);
  });

  describe("color importance handling", () => {
    const blueDifference = differentiateRgb("#fff", "#ffe");
    const redDifference = differentiateRgb("#fff", "#eff");
    const greenDifference = differentiateRgb("#fff", "#fef");

    it("should be aware of color weight", () => {
      expect(blueDifference).not.toBe(redDifference);
      expect(blueDifference).not.toBe(greenDifference);
      expect(greenDifference).not.toBe(redDifference);
    });

    it("should treat green constituent as the most important", () => {
      expect(greenDifference).toBeGreaterThan(redDifference);
      expect(greenDifference).toBeGreaterThan(blueDifference);
    });

    it("should treat blue constituent as the least important", () => {
      expect(blueDifference).toBeLessThan(greenDifference);
      expect(blueDifference).toBeLessThan(redDifference);
    });
  });

  // Consider for further usage, for now it's redundant
  it.skip("should return percentage values", () => {
    expect(differentiateRgb("#fff", "#fff")).toBeGreaterThanOrEqual(0);

    expect(differentiateRgb("#fff", "#fff")).toBeLessThanOrEqual(100);

    expect(differentiateRgb("#000", "#000")).toBeGreaterThanOrEqual(0);

    expect(differentiateRgb("#000", "#fff")).toBeLessThanOrEqual(100);
  });
});
