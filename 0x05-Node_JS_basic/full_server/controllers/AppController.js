/**
 * Represents the controller for the application.
 */
class AppController {
  /**
   * Handles the request for the homepage.
   * @param {object} request - The request object.
   * @param {object} response - The response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
