module.exports = {
  login: async (req, res) => {
    try {
      res.json(req.authMessage);

    } catch (e) {
      res.status(404).end(e.message);
    }
  }
};
