const router = require('express').Router();
const { getHome } = require('../controllers/getHome.controller');

router.get('/', getHome);

module.exports = router;
