const connection = require('../config/connection');

const updateProjectQuery = (projectId, name, description, link, categoryId) => connection.query({
  text: 'UPDATE projects SET name=$1, description=$2, link=$3, categoryId=$4 WHERE id = $5 RETURNING name',
  values: [name, description, link, categoryId, projectId],
});

module.exports = updateProjectQuery;
