const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test-00', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('test-01', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('test-02', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('test-03', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('test-05', () => {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
  });
  it('test-06', () => {
    assert.strictEqual(calculateNumber(-8, 3.7), -4);
  });
  it('test-07', () => {
    assert.strictEqual(calculateNumber(8, -3.7), 4);
  });
  it('test-08', () => {
    assert.strictEqual(calculateNumber(611, -611), 0);
  });
});
