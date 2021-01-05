const pigLatin = (args) => {
  let array = [...args],
    resultArray = [];
  array.map((x) => {
    let zeroIndex, restOfArray, subArray;
    [zeroIndex, ...restOfArray] = x.split('');
    zeroIndex = zeroIndex + 'ay';
    subArray = [...restOfArray, zeroIndex];
    resultArray.push(subArray.join(''));
  });
  return resultArray.join(' ');
};
let a, b, rest;
[a, b, ...rest] = process.argv;
console.log(pigLatin(rest));
