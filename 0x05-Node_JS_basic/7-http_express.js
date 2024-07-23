const express = require('express');
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

  res.push(`Number of students: ${students.length}`);
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
    res.push(`Number of students in ${fieldName}: ${studentList.length}. List: ${studentList.join(', ')}`);
  });

  return res;
};

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseStrings = ['This is the list of our students'];
  countStudents(process.argv[2]).then((studentsData) => {
    for (const data of studentsData) {
      responseStrings.push(data);
    }
    res.send(responseStrings.join('\n'));
  }).catch(() => {
    responseStrings.push('Cannot load the database');
    res.send(responseStrings.join('\n'));
  });
});

app.listen(PORT);

module.exports = app;
