const router = require('express').Router();
const {
  getProjects,
  addProject,
  updateProject,
  deletePoject,
  getHomeProjects,
} = require('../controllers/project.controller');

router.get('/getHomeProjects', getHomeProjects);
router.get('/getProjects', getProjects);
router.post('/addProject', addProject);
router.patch('/updateProject', updateProject);
router.delete('/deletePoject', deletePoject);

module.exports = router;
