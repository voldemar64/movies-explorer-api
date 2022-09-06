const mongoose = require('mongoose');

const linkExpression = /(http:\/\/|https:\/\/)(www\.)*\S*/;

const moviesSchema = new mongoose.Schema({
  country: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  director: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (link) => linkExpression.test(link),
      message: 'Неверная ссылка на картинку',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (link) => linkExpression.test(link),
      message: 'Неверная ссылка на трейлер',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (link) => linkExpression.test(link),
      message: 'Неверная ссылка на миникартинку',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nameEN: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('movies', moviesSchema);
