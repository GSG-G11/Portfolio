const deleteProjectQuery = require('../database/queries/deleteProjectQuery');

const deleteProject = (req, res) => {
  const { id } = req.params;
  deleteProjectQuery(id).then(() => res.json('Deleted'));
};

module.exports = deleteProject;
