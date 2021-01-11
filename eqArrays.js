const eqArrays = (array1, array2) => {
  let len = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < len; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (eqArrays(array1[i], array2[i]) === false) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;