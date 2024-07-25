const request = require('request');
const { expect } = require('chai');

describe('test index page GET: /', () => {
  const apiURL = 'http://localhost:7865/';

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

describe('test GET /cart/:id', () => {
  const getCartUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 when ID is a number', (done) => {
    request.get(`${getCartUrl}12`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Payment methods for cart ID" when ID is a number', (done) => {
    request.get(`${getCartUrl}12`, (error, response, body) => {
      if (error) done(error);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when ID is a number', (done) => {
    request.get(`${getCartUrl}hello`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should have an empty body when ID is not a number', (done) => {
    request.get(`${getCartUrl}hello`, (error, response, body) => {
      if (error) done(error);
      expect(body).to.equal('');
      done();
    })
  });

  it('should return status code 404 on POST request', (done) => {
    request.post(`${getCartUrl}`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(404);
      done();
    })
  });
});
