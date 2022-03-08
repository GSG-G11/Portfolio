const connection = require('../config/connection');

const getProjectsQuery = () => connection.query('SELECT * FROM projects');

module.exports = getProjectsQuery;
