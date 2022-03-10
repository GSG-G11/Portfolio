const router = require('express').Router();
const {
  clientError,
  serverError,
} = require('../controllers/errors/handlingErrors');

router.use(clientError);
router.use(serverError);

module.exports = router;
