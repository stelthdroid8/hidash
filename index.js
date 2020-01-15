module.exports = {
  forEach(arr, fn) {
    // for (let i = 0; i < arr.length; i++) {
    //   const val = arr[i];
    //   fn(val, i);
    // }

    for (let index in arr) {
      fn(arr[index], index);
    }
  }
};
