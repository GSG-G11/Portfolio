const updateProjectQuery = require('../database/queries/updateProjectQuery');

const updateProject = (req, res) => {
  const {
    projectId,
    name,
    description,
    link,
    categoryId,
  } = req.body;
  updateProjectQuery(projectId, name, description, link, categoryId).then(() => res.redirect('/'));
};

module.exports = updateProject;
