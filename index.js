module.exports = function (array, subsetSize) {
  var n = subsetSize || 2,
      subsets = [];
  shuffle(array);

  while (array.length >= n) {
    subsets.push(array.splice(0, n));
  }
  if (array.length) subsets.push(array);

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