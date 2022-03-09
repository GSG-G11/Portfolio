const getCategoriesQuery = require('../database/queries/getCategoriesQuery');

const getCategories = (req, res) => {
  getCategoriesQuery().then((data) => res.json(data.rows));
};

module.exports = getCategories;
