const http = require('http');
const fs = require('fs');

const PORT = 1245;

/**
 * Counts the number of students and groups them by field of study.
 *
 * @param {string} path - The path to the file containing student data.
 * @throws {Error} If the database file cannot be loaded.
 * @returns {void}
 */
const countStudents = async (path) => {
  let fileContent;
  const res = [];

  try {
    fileContent = await fs.promises.readFile(path, { encoding: 'utf-8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContent.trim().split('\n');
  const students = [];

  lines.forEach((line) => {
    const tokens = line.split(',');
    if (tokens.length === 4 && Number(tokens[2])) {
      students.push(tokens);
    }
  });

  res.push(`Number of students: ${students.length}\n`);
  const fields = new Map();

  students.forEach((student) => {
    const name = student[0];
    const field = student[3];
    if (fields.has(field)) {
      fields.get(field).push(name);
    } else {
      fields.set(field, [name]);
    }
  });

  fields.forEach((studentList, fieldName) => {
    res.push(`Number of students in ${fieldName}: ${studentList.length}. List: ${studentList.join(', ')}\n`);
  });

  return res;
};

const app = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (url === '/students' && method === 'GET') {
    const filePath = process.argv[2];
    countStudents(filePath).then((r) => {
      const data = r;
      data.forEach((str, index) => {
        data[index] = str.trim('\n');
      });
      res.end(`This is the list of our students\n${data.join('\n')}`);
    }).catch(() => {
      res.end('This is the list of our students');
    });
  }
});

app.listen(PORT);

module.exports = app;
