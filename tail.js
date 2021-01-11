const tail = (array) => {
  let a, rest;
  [a, ...rest] = array;
  return rest;
};

module.exports = tail;