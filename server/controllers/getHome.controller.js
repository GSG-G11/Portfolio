const { join } = require('path');

module.exports.getHome = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'index.html'));
};
