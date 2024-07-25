const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { afterEach, beforeEach } = require('mocha');

describe('sendPaymentRequestToApi', () => {
  let utilSpy;
  let utilStub;

  beforeEach(() => {
    utilStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    utilSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    utilSpy.restore();
    utilStub.restore();
  });

  it('should not call calculateNumber', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilStub.calledBefore(utilSpy)).to.be.true;
    expect(utilStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should always call console.log with 10', () => {
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.alwaysCalledWithExactly('The total is: 10')).to.be.true;
  });
});
