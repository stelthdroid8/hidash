const { forEach } = require('./index.js');
let sum = 0;
forEach([1, 2, 3], value => {
  sum += value;
});

if (sum !== 6) {
  throw new Error('expected summing array to be 6');
}
