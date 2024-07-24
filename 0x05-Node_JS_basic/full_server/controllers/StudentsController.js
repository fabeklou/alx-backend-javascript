import readDatabase from '../utils';

/**
 * Controller class for handling student-related operations.
 */
class StudentsController {
  /**
   * Retrieves all students from the database and sends the response.
   * @param {Object} request - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudents(request, response) {
    const filePath = process.argv[2];
    const responseStrings = ['This is the list of our students'];

    readDatabase(filePath).then((studentsByField) => {
      const fields = Object.keys(studentsByField).sort();
      for (const field of fields) {
        const students = studentsByField[field];
        responseStrings.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      response.status(200).send(responseStrings.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  /**
   * Retrieves students by major from the database and sends the response.
   * @param {Object} request - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudentsByMajor(request, response) {
    const filePath = process.argv[2];
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(filePath).then((studentsByField) => {
        response.status(200).send(`List: ${studentsByField[major].join(', ')}`);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    }
  }
}

export default StudentsController;
