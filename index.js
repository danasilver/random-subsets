module.exports = function (array, subsetSize) {
  var a = array.slice(),
      n = subsetSize || 2,
      subsets = [];
  shuffle(a);

  while (a.length >= n) {
    subsets.push(a.splice(0, n));
  }

  // Account for > n remaining elements in array if n doesn't
  // divide evenly into the array length.
  if (a.length) subsets.push(a);

  return subsets;
};

function shuffle(array) {
  var n = array.length, j, temp;

  while (n) {
    j = Math.random() * n-- | 0;
    temp = array[j];
    array[j] = array[n];
    array[n] = temp;
  }

  return array;
}