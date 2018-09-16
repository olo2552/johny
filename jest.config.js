module.exports = {
  errorOnDeprecated: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  notify: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src", "<rootDir>/__tests__"],
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
};
