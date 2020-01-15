module.exports = {
  forEach(arr, fn) {
    // for (let i = 0; i < arr.length; i++) {
    //   const val = arr[i];
    //   fn(val, i);
    // }

    for (let index in arr) {
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  }

  //reimplement map() for testing practice
};
