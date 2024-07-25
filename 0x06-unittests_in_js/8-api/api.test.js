const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

const apiURL = 'http://localhost:7865/';

describe('test index page GET: /', () => {
  it('should return 200 status code', (done) => {
    request.get(apiURL, (error, response) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    })
  });

  it('should have body: Welcome to the payment system', (done) => {
    request(apiURL, (error, response) => {
      if (error) done(error);
      expect(response.body).to.equal('Welcome to the payment system');
      done();
    })
  });

  it('should have the right HTTP headers', (done) => {
    request.get(apiURL, (error, response) => {
      if (error) done(error);
      expect(response.headers['content-length']).to.equal('29');
      done();
    });
  });

  it('should return status code 404 on POST request', (done) => {
    request.post(apiURL, (error, response) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
