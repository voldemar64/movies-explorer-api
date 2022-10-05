const { Joi, celebrate } = require('celebrate');

const linkExpression = /(http:\/\/|https:\/\/)(www\.)*[a-z0-9\S]*/;

module.exports.signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.signupValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.currentUserValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

module.exports.userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

module.exports.movieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(linkExpression).required(),
    trailerLink: Joi.string().pattern(linkExpression).required(),
    thumbnail: Joi.string().pattern(linkExpression).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.movieIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
});
