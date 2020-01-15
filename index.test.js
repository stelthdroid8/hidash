const { forEach, map } = require('./index.js');

const test = (desc, fn) => {
  console.log('-----------', desc);
  try {
    fn();
  } catch (err) {
    console.log(err);
  }
};

// TESTS using test()
//----foreEeach testing
test('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });

  if (sum !== 6) {
    throw new Error('expected summing array to be 6');
  }
});
//----map testing
test('The map function', () => {
  const result = map([1, 2, 3], value => {
    return value * 2;
  });

  if (result[0] !== 2) {
    throw new Error(`expected to find 2, but found :${result[0]}`);
  }
  if (result[1] !== 4) {
    throw new Error(`expected to find 4, but found :${result[1]}`);
  }
  if (result[2] !== 6) {
    throw new Error(`expected to find 6, but found :${result[2]}`);
  }
});
