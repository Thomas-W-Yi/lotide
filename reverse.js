const reverse = (args) => {
  let arrayOfArgs = [...args];

  arrayOfArgs.map((x) => {
    let subArr = [],
      len = x.length,
      subStr;
    for (let i = 0; i < len; i++) {
      subArr.push(x[len - i - 1]);
    }
    subStr = subArr.join('');
    console.log(subStr);
  });
};
let a, b, rest;
[a, b, ...rest] = process.argv;
reverse(rest);

module.exports = reverse;