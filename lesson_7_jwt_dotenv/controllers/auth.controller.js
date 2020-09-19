const { createTokens } = require('../helpers');


module.exports = {
  login: async (req, res, next) => {
    try {
      const tokens = createTokens();

      //todo save tokens to DB

      res.json(tokens);

    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');
      const netTokensPair = createTokens();

      // todo remove old tokens from db
      // todo insert new token to db

      res.json(netTokensPair);

    } catch (e) {
      next(e);
    }
  }

};
