var assert = require('assert');
var subsets = require('../');

describe('random-subsets', function () {
  describe('n = 2 (default)', function () {
    it('should return an array of subsets of size 2', function () {
      var a = [], i = 10000;
      while (i--) a.push(i);
      var sets = subsets(a);

      sets.forEach(function (set) {
        assert.equal(2, set.length);
      });
    });
  });

  describe('n = 1000', function () {
    it('should return an array of subsets of size 1000', function () {
      var a = [], i = 10000;
      while (i--) a.push(i);
      var sets = subsets(a, 1000);

      sets.forEach(function (set) {
        assert.equal(1000, set.length);
      });
    });
  });

  describe('n = 15 (does not divide evenly)', function () {
    it('should return an array of 666 subsets of size 15 and 1 of size 10', function () {
      var a = [], i = 10000;
      while (i--) a.push(i);
      var sets = subsets(a, 15);

      sets.forEach(function (set, i) {
        if (i !== 666) assert.equal(15, set.length);
        else assert.equal(10, set.length);
      });
    });
  });

  describe('preserve original array', function () {
    it('should clone the array before shuffling to preserve original order', function () {
      var a = [], i = 10000;
      while (i--) a.push(i);
      var sets = subsets(a);

      assert.equal(a.length, 10000);
      a.forEach(function (n, i, array) {
        if (i !== 9999) assert.equal(n, array[i + 1] + 1);
        else assert.equal(n, 0);
      });
    });
  });
});