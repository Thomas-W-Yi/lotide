const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key])
      ) {
        if (eqArrays(object1[key], object2[[key]]) === false) {
          return false;
        }
      } else if (typeof(object1[key]) === 'object' && typeof(object1[key]) === 'object') {
        if (eqObjects(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[[key]]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;