const fs = require('fs');

/**
 * Reads a database file and returns an object containing students
 * grouped by field.
 *
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves to an object
 *                              containing students grouped by field.
 * @throws {Error} - If the database file cannot be loaded.
 */
const readDatabase = async (filePath) => {
  let fileContent;

  try {
    fileContent = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContent.trim().split('\n');
  const studentsByField = {};

  lines.forEach((line) => {
    const tokens = line.split(',');
    if (tokens.length === 4 && Number(tokens[2])) {
      const name = tokens[0];
      const field = tokens[3];
      if (studentsByField[field] === undefined) {
        studentsByField[field] = [name];
      } else {
        studentsByField[field].push(name);
      }
    }
  });

  return studentsByField;
};

export default readDatabase;
