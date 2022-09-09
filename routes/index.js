const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { signinValidation, signupValidation } = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const NotFound = require('../errors/NotFound');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (_req, res, next) => {
  next(new NotFound('Страница не найдена'));
});

module.exports = router;
