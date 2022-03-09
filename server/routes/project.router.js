const router = require('express').Router();
const {
  getProjects,
  addProject,
  updateProject,
  deletePoject,
  getHomeProjects,
  getProjectDetails,
} = require('../controllers/project.controller');

router.get('/getProjectDetails/:id', getProjectDetails);
router.get('/getHomeProjects', getHomeProjects);
router.get('/getProjects', getProjects);
router.post('/addProject', addProject);
router.patch('/updateProject', updateProject);
router.delete('/deletePoject/:id', deletePoject);

module.exports = router;
