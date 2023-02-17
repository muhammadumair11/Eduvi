export const flexBox = (x, y, direction) => ({
    display: "flex",
    flexDirection: direction == "" ? "row" : direction,
    justifyContent: x == "" ? "flex-start" : x,
    alignItems: y == "" ? "flex-start" : y,
});
