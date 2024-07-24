const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber: (SUM)', () => {
  it('test-00', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('test-01', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('test-02', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('test-03', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('test-05', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 3.7), 4);
  });

  it('test-06', () => {
    assert.strictEqual(calculateNumber('SUM', -8, 3.7), -4);
  });

  it('test-07', () => {
    assert.strictEqual(calculateNumber('SUM', 8, -3.7), 4);
  });

  it('test-08', () => {
    assert.strictEqual(calculateNumber('SUM', 611, -611), 0);
  });
});

describe('calculateNumber: (SUBTRACT)', () => {
  it('test-00', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('test-01', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });

  it('test-02', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('test-03', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });

  it('test-05', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 3.7), -4);
  });

  it('test-06', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -8, 3.7), -12);
  });

  it('test-07', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 8, -3.7), 12);
  });

  it('test-08', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 611, -611), 1222);
  });

  it('test-09', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 171, 171), 0);
  });

  it('test-10', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -71, -71), 0);
  });
});

describe('calculateNumber: (DIVIDE)', () => {
  it('test-00', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.al
  });

  it('test-01', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });

  it('test-02', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  });

  it('test-03', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });

  it('test-05', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
  });

  it('test-06', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -8, 3.7), -2);
  });

  it('test-07', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8, -3.7), -2);
  });

  it('test-08', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 611, -611), -1);
  });

  it('test-09', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 611, 0), 'Error');
  });

  it('test-10', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 611, 0.2), 'Error');
  });

  it('test-11', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 611, -0.4), 'Error');
  });
});

describe('calculateNumber: (INVALID OPERATION)', () => {
  it('test-00', () => {
    assert.strictEqual(calculateNumber('MODULOS', 1, 3), undefined);
  });

  it('test-01', () => {
    assert.strictEqual(calculateNumber('MODULS', 1, 3.7), undefined);
  });
});
