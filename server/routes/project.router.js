const router = require('express').Router();
const { addProject, updateProject, deletePoject } = require('../controllers/project.controller');

router.post('/addProject', addProject);
router.patch('/updateProject', updateProject);
router.delete('/deletePoject', deletePoject);

module.exports = router;
