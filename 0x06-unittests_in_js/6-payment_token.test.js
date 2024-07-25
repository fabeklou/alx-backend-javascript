const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.an('object');
      expect(response).to.have.property('data', 'Successful response from the API');
      done();
    }).catch((err) => done(err));
  });

  it('should not do anything when success is false', (done) => {
    getPaymentTokenFromAPI(false).then((response) => {
      expect(response).to.be.undefined;
      done();
    }).catch((err) => done(err));
  });
});
