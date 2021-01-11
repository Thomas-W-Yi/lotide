const middle = (array) => {
  if (array.length <= 2) {
    return [];
  } else {
    return array.length % 2 === 0
      ? [array[array.length / 2 - 1], array[array.length / 2]]
      : [array[(array.length - 1) / 2]];
  }
};

module.exports = middle;