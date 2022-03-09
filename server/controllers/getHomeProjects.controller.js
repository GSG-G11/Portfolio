const { join } = require('path');

const getHomeProjects = (req, res) => res.sendFile(join(__dirname, '..', '..', 'client', 'projects.html'));

module.exports = getHomeProjects;
