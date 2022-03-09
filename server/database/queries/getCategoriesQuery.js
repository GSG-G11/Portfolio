const connection = require('../config/connection');

const getCategoriesQuery = () => connection.query('SELECT * FROM categories');

module.exports = getCategoriesQuery;
