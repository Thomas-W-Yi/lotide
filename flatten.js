const flatten = function(array) {
  return array.reduce((newArray, x) =>
    Array.isArray(x)
      ? [...newArray, ...flatten(x)]
      : [...newArray, x]
  , []
  );
};

module.exports = flatten;