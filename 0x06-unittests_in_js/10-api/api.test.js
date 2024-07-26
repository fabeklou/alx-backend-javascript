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

describe('test GET /available_payments', () => {
  const getPaymentsURL = 'http://localhost:7865/available_payments';

  it('should return status code 200', (done) => {
    request.get(getPaymentsURL, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return an object', (done) => {
    request.get(getPaymentsURL, (error, response, body) => {
      if (error) done(error);
      expect(JSON.parse(body)).to.be.an('object');
      done();
    });
  });

  it('should return an object deeply equal to', (done) => {
    request.get(getPaymentsURL, (error, response, body) => {
      if (error) done(error);
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('should return 400 on POST request', (done) => {
    request.post(getPaymentsURL, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('test POST /login', () => {
  const loginURL = 'http://localhost:7865/login';

  const options = {
    url: 'http://localhost:7865/login',
    method: 'POST',
    json: true,
    body: {
      userName: 'Betty'
    }
  };

  it('should return status code 200 when userName is given', (done) => {
    request.post(options, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome :userName" when userName is given', (done) => {
    request.post(options, (error, response, body) => {
      if (error) done(error);
      expect(response.body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status code 400 when userName is missing', (done) => {
    request.post(loginURL, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  it('should have empty body response when userName is missing', (done) => {
    request.post(loginURL, (error, response, body) => {
      if (error) done(error);
      expect(response.body).to.equal('');
      done();
    });
  });

  it('should return status code 404 on GET request', (done) => {
    request.get(loginURL, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
