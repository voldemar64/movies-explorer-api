const { FORBIDDEN_ERROR } = require('../utils/errorConstants');

class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = FORBIDDEN_ERROR;
  }
}

module.exports = Forbidden;
