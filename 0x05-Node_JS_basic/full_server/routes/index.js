import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to corresponding controller methods.
 * @param {Object} app - The Express app object.
 */
const routeMapper = (app) => {
  /**
   * GET request handler for the homepage.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  app.get('/', AppController.getHomepage);

  /**
   * GET request handler for retrieving all students.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  app.get('/students', StudentsController.getAllStudents);

  /**
   * GET request handler for retrieving students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default routeMapper;
