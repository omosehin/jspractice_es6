const apple = {
  numberOfLeaves: 2,
  colors: {
    actual: ["green", "yellow"],
    possible: ["red", "green", "yellow"]
  },
  kind: "Golden Delicious",
  sku: "A-GD-01"
};
const { actual: colors, possible: colors2 } = apple.colors;
console.log(colors);

const [, , four] = [1, 2, 3, 4, 5, 6, 7];
console.log(`I selected ${four}.`);
