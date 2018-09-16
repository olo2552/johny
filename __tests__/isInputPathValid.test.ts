import { appendFile, unlink } from "fs";
import { promisify } from "util";
import { isInputPathValid } from "../src/fileHandling/isInputPathValid";

describe("isInputPathValid", () => {
  const testFilePath = "./test.scss";

  beforeAll(async () => {
    await promisify(appendFile)(testFilePath, "");
  });

  it("should work correctly", async () => {
    expect.assertions(1);
    await expect(isInputPathValid(testFilePath));

    expect(true).toBe(true);
  });

  it("should reject file with incorrect extension", async () => {
    expect.assertions(1);

    await expect(
      isInputPathValid("kappa.txt")
    ).rejects.toThrowErrorMatchingSnapshot();
  });

  it("should accept file with supported extension", async () => {
    expect.assertions(1);
    await expect(isInputPathValid(testFilePath)).resolves.toBe(true);
  });

  it("should reject path guiding to file that does not exist", async () => {
    // expect.assertions(1);

    await expect(
      isInputPathValid("./notExists.scss")
    ).rejects.toThrowErrorMatchingSnapshot();
  });

  afterAll(async () => {
    await promisify(unlink)(testFilePath);
  });
});
