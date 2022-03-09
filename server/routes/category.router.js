const router = require('express').Router();
const getCategories = require('../controllers/getCategories.controller');

router.get('/', getCategories);

module.exports = router;
