const getProjects = require('./getProjects.controller');
const addProject = require('./addProject.controller');
const updateProject = require('./updateProject.controller');
const deletePoject = require('./deletePoject.controller');
const getHomeProjects = require('./getHomeProjects.controller');

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deletePoject,
  getHomeProjects,
};
