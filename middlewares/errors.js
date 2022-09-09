const { SERVER_ERROR } = require('../utils/errorConstants');

module.exports = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR, message } = err;
  res.status(statusCode).send({ message: statusCode === SERVER_ERROR ? 'Произошла ошибка на сервере' : message });
  next();
};
