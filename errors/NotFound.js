const { NOTFOUND_ERROR } = require('../utils/errorConstants');

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = NOTFOUND_ERROR;
  }
}

module.exports = NotFound;
