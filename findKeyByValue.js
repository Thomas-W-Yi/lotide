const findKeyByValue = (object, name) => {
  let keys = Object.keys(object);
  let value = [];
  keys.map((key) => {
    value.push(object[key]);
  });
  return keys[value.indexOf(name)];
};

module.exports = findKeyByValue;