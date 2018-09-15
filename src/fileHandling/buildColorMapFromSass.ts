function buildColorMapFromSass(sassStream: string): object {
  return sassStream
    .trim()
    .split("\n")
    .filter(line => line.includes("#"))
    .map(line => line.split(":"))
    .map(line => line.map(lineElement => lineElement.trim()))
    .map(line => [line[0].slice(1), line[1].slice(0, -1)])
    .map(line => [line[0], line[1].toUpperCase()])
    .map(line => line.reverse())
    .reduce(
      (colorsObj, [colorName, color]) => ({
        ...colorsObj,
        [colorName]: color
      }),
      {}
    );
}

export { buildColorMapFromSass };
