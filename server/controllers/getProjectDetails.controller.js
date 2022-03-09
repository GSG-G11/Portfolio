const getProjectDetailsQuery = require('../database/queries/getProjectDetailsQuery');

const getProjectDetails = (req, res) => {
  const { id } = req.params;
  getProjectDetailsQuery(id).then((data) => res.json(data.rows));
};

module.exports = getProjectDetails;
