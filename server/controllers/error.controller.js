const clientError = (req, res) => res.status(404).json({ message: 'NOT FOUND' });

const serverError = (err, req, res) => res.status(500).json({ message: 'SERVER ERROR' });

module.exports = {
  clientError,
  serverError,
};
