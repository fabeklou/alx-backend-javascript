const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment')
const { beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI', () => {
  let spyConsole;

  beforeEach('', () => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach('', () => {
    spyConsole.restore()
  });

  it('should call console with "The total is: 120"', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call console with "The total is: 20"', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
