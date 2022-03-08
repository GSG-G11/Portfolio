const router = require('express').Router();
const {
  getProjects,
  addProject,
  updateProject,
  deletePoject,
} = require('../controllers/project.controller');

router.get('/getProjects', getProjects);
router.post('/addProject', addProject);
router.patch('/updateProject', updateProject);
router.delete('/deletePoject', deletePoject);

module.exports = router;
