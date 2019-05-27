'use strict';

var Immutable = require('immutable');

function transformImmutableData(data) {
  // Transform every object/property that is immutable to plain object JS
  // no function "isImmutable", so it's hard to check what is really immutable or not
  // so i've decided to transform everything each time 'values' is not not empty, regardless it's immutable or not
  var values = data;
  if (values) {
    var immutableValue = Immutable.fromJS(values);
    if (immutableValue) {
      values = immutableValue.toJS();
    }
  }

  return values;
}

module.exports = transformImmutableData;
