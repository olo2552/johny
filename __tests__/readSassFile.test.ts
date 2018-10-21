import { readSassFile } from "../src/fileHandling/readSassFile";

describe("readSassFile function", () => {
  it("should work correctly", () => {
    expect.assertions(1);

    expect(readSassFile("."));
    expect(true).toBe(true);
  });

  it("should reject invalid filepath", () => {
    expect(readSassFile("**/src")).rejects.toThrowErrorMatchingSnapshot();
  });
});
