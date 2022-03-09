const connection = require('../config/connection');

const getProjectsQuery = () => connection.query('SELECT projects.id, projects.name, projects.description, projects.link, projects.categoryId, categories.name AS categoryName FROM projects JOIN categories ON categories.categoryId = projects.categoryId');

module.exports = getProjectsQuery;
