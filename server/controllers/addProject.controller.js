const addProjectQuery = require('../database/queries/addProjectQuery');

const addProject = (req, res) => {
  const {
    name,
    description,
    link,
    categoryId,
  } = req.body;
  addProjectQuery(name, description, link, categoryId).then(() => res.redirect('/'));
};

module.exports = addProject;
