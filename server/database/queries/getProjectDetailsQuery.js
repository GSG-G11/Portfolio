const connection = require('../config/connection');

const getProjectDetailsQuery = (projectId) => connection.query({
  text: 'SELECT * FROM projects WHERE id = ($1)',
  values: [projectId],
});

module.exports = getProjectDetailsQuery;
