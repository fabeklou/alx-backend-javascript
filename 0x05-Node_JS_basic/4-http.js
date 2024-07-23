const http = require('http');

const PORT = 1245;
const MESSAGE = 'Hello Holberton School!';

const app = http.createServer((req, res) => {
  res.write(MESSAGE);
  res.end();
});

app.listen(PORT);

module.exports = app;
