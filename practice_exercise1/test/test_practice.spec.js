const assert = require('assert');
const { callOneService, callTwoService, remoteMathService } = require('../practice.js');

describe('Verify Service Call One', () => {
  it('Should return a value of one', () => {
    return callOneService((error, num) => num).then((results) => {
      assert.strictEqual(1, results);
    });
  });

  it('Returned value should be error', () => {
    callOneService().catch((error) => {
      assert.strictEqual('Call back must be a function.', error.message);
    });
  });
});

describe('Verify Service Call Two', () => {
  it('Should return a value of two', () => {
    return callTwoService((error, num) => num).then((results) => {
      assert.strictEqual(2, results);
    });
  });

  it('Returned value should be error', () => {
    callTwoService().catch((error) => {
      assert.strictEqual('Call back must be a function.', error.message);
    });
  });
});

describe('Verify Remote Math Service', () => {
  it('Returned value should be 3', () => {
    remoteMathService((error, value) => value).then((results) => {
      assert.strictEqual(3, results);
    });
  });

  it('Returned value should be error', () => {
    remoteMathService().catch((error) => {
      assert.strictEqual('cb is not a function', error.message);
    });
  });
});

