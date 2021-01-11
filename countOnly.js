const countOnly = function(allItems, itemsToCount) {
  let keys = Object.keys(itemsToCount);

  let newKeys = keys.filter((key) => {
    return itemsToCount[key];
  });

  let countItems = allItems.filter((x) => {
    return newKeys.includes(x);
  });
  console.log(countItems);
  let result = {};
  countItems.map((y) => {
    result[y] ? result[y]++ : (result[y] = 1);
  });
  console.log(result);
  return result;
};

module.exports = countOnly;