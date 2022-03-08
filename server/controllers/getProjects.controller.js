const getProjectsQuery = require('../database/queries/getProjectsQuery');

const getProjects = (req, res) => {
  getProjectsQuery().then((data) => res.json(data.rows));
};

module.exports = getProjects;
