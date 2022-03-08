const connection = require('../config/connection');

const addProjectQuery = (name, description, link, categoryId) => connection.query({
  text: 'INSERT INTO projects (name, description, link, categoryId) VALUES ($1, $2, $3, $4) RETURNING *',
  values: [name, description, link, categoryId],
});

module.exports = addProjectQuery;
