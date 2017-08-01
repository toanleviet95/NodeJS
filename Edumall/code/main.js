var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);

var result = _.difference([2, 1], [3, 2]);
console.log(result);
