const deleteProjectQuery = require('../database/queries/deleteProjectQuery');

const deleteProject = (req, res) => {
  const {
    projectId,
  } = req.body;
  deleteProjectQuery(projectId).then(() => res.redirect('/'));
};

module.exports = deleteProject;
