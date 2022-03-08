const router = require('express').Router();
const { getProjects } = require('../controllers/project.controller');

router.get('/', getProjects);

module.exports = router;
