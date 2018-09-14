const hexToRgb = hex => ({
    r: hex.slice(1, 3),
    g: hex.slice(3, 5),
    b: hex.slice(5, 7),
});

export { hexToRgb };