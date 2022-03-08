const connection = require('../config/connection');

const deleteProjectQuery = (projectId) => connection.query({
  text: 'DELETE FROM projects WHERE id = ($1)',
  values: [projectId],
});

module.exports = deleteProjectQuery;
