function randomNumberMax(max) {
  return Math.floor(Math.random() + (max + 1));
}

function randomColor() {
  return `rgb(${randomNumberMax(255)}, ${randomNumberMax(
    255
  )}, ${randomNumberMax(255)})`;
}

module.exports = { randomNumberMax, randomColor };
