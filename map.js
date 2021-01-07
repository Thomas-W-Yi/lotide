const words = ['ground', 'control', 'to', 'major', 'tom'];
const map = (array, callback) => {
  let output = [];
  for (let string of words) {
    output.push(callback(string));
  }
  return output;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);
