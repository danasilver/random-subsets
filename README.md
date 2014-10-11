## random-subsets

Create a set of random-ordered subsets.

### `random-subsets(array[, subsetSize])`

`subsetSize` defaults to 2.

Returns an array of subarrays of size `subsetSize`.  The elements of the
subarrays are in random order.  If `array.length` does not divide evenly into
`subsetSize` the last subarray of the result will have length
`array.length % subsetSize`.

Preserves the size and order of the input array.

### Examples

#### Basic use
```js
var subsets = require('random-subsets');

subsets([1, 2, 3, 4]);
//=> [[3, 4], [2, 1]]
```

#### Specify `subsetSize`
```js
var subsets = require('random-subsets');

subsets([1, 2, 3, 4], 1);
//=> [[4], [2], [3], [1]]
```

#### Subset size doesn't divide evenly
```js
var subsets = require('random-subsets');

subsets([1, 2, 3, 4], 3);
//=> [[4, 2, 3], [1]]
```