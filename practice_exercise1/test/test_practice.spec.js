const assert = require('assert');
const { callOneService, callTwoService, remoteMathService } = require('../practice.js');

describe('Verify Service Call One', function () {
  it('Should return a value of one', function () {
    return callOneService((error, num) => num).then((results) => {
      assert.strictEqual(1, results);
    });
  });

  it('Returned value should be error', function () {
    callOneService().catch((error) => {
      assert.strictEqual('Call back must be a function.', error.message);
    });
  });
});

describe('Verify Service Call Two', function () {
  it('Should return a value of two', function () {
    return callTwoService((error, num) => num).then((results) => {
      assert.strictEqual(2, results);
    });
  });

  it('Returned value should be error', function () {
    callTwoService().catch((error) => {
      assert.strictEqual('Call back must be a function.', error.message);
    });
  });
});

describe('Verify Remote Math Service', function () {
  it('Returned value should be 3', function () {
    remoteMathService((error, value) => value).then((results) => {
      assert.strictEqual(3, results);
    });
  });

  it('Returned value should be error', function () {
    remoteMathService().catch((error) => {
      assert.strictEqual('cb is not a function', error.message);
    });
  });
});

