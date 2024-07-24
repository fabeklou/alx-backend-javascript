const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber: (SUM)', () => {
  it('test-00', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('test-01', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('test-02', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('test-03', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('test-05', () => {
    expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
  });

  it('test-06', () => {
    expect(calculateNumber('SUM', -8, 3.7)).to.equal(-4);
  });

  it('test-07', () => {
    expect(calculateNumber('SUM', 8, -3.7)).to.equal(4);
  });

  it('test-08', () => {
    expect(calculateNumber('SUM', 611, -611)).to.equal(0);
  });
});

describe('calculateNumber: (SUBTRACT)', () => {
  it('test-00', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  it('test-01', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('test-02', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('test-03', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });

  it('test-05', () => {
    expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
  });

  it('test-06', () => {
    expect(calculateNumber('SUBTRACT', -8, 3.7)).to.equal(-12);
  });

  it('test-07', () => {
    expect(calculateNumber('SUBTRACT', 8, -3.7)).to.equal(12);
  });

  it('test-08', () => {
    expect(calculateNumber('SUBTRACT', 611, -611)).to.equal(1222);
  });

  it('test-09', () => {
    expect(calculateNumber('SUBTRACT', 171, 171)).to.equal(0);
  });

  it('test-10', () => {
    expect(calculateNumber('SUBTRACT', -71, -71)).to.equal(0);
  });
});

describe('calculateNumber: (DIVIDE)', () => {
  it('test-00', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });

  it('test-01', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });

  it('test-02', () => {
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
  });

  it('test-03', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });

  it('test-05', () => {
    expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
  });

  it('test-06', () => {
    expect(calculateNumber('DIVIDE', -8, 3.7)).to.equal(-2);
  });

  it('test-07', () => {
    expect(calculateNumber('DIVIDE', 8, -3.7)).to.equal(-2);
  });

  it('test-08', () => {
    expect(calculateNumber('DIVIDE', 611, -611)).to.equal(-1);
  });

  it('test-09', () => {
    expect(calculateNumber('DIVIDE', 611, 0)).to.equal('Error');
  });

  it('test-10', () => {
    expect(calculateNumber('DIVIDE', 611, 0.2)).to.equal('Error');
  });

  it('test-11', () => {
    expect(calculateNumber('DIVIDE', 611, -0.4)).to.equal('Error');
  });
});

describe('calculateNumber: (INVALID OPERATION)', () => {
  it('test-00', () => {
    expect(calculateNumber('MODULUS', 1, 3)).to.equal(undefined);
  });

  it('test-01', () => {
    expect(calculateNumber('MODULUS', 1, 3.7)).to.equal(undefined);
  });
});
