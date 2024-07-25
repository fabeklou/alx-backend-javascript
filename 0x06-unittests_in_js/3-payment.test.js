const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { afterEach, beforeEach } = require('mocha');

describe('sendPaymentRequestToApi', () => {
  let utilSpy;

  beforeEach(() => {
    utilSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    utilSpy.restore();
  });

  it('should call calculateNumber once with ("SUM", 100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
