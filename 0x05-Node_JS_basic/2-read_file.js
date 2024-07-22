const { readFileSync } = require('fs');

/**
 * Counts the number of students and groups them by field of study.
 *
 * @param {string} path - The path to the file containing student data.
 * @throws {Error} If the database file cannot be loaded.
 * @returns {void}
 */
const countStudents = (path) => {
  let fileContent;

  try {
    fileContent = readFileSync(path, { encoding: 'utf-8' });
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

  process.stdout.write(`Number of students: ${students.length}\n`);

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

  fields.forEach((students, field) => {
    process.stdout.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
  });
};

module.exports = countStudents;
