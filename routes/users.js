const router = require('express').Router();
const {
  getUser,
  patchUser,
} = require('../controllers/users');
const {
  userValidation,
} = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', userValidation, patchUser);

module.exports = router;
