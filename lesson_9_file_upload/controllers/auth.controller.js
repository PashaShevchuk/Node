const { createTokens } = require('../helpers');
const {
  oauthService: { create, deleteByParams }
} = require('../services');
const { AUTHORIZATION } = require('../configs/constants');
const { NO_CONTENT } = require('../configs/response-status-codes.enum');


module.exports = {
  login: async (req, res, next) => {
    try {
      const user = req.user;
      const tokens = createTokens();

      await create({
        ...tokens,
        user_id: user.id
      });

      res.json(tokens);

    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await deleteByParams({ access_token: token });

      res.status(NO_CONTENT).end();

    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const user = req.user;
      const token = req.get(AUTHORIZATION);
      const newTokensPair = createTokens();

      await deleteByParams({ refresh_token: token });
      await create({ ...newTokensPair, user_id: user.id });

      res.json(newTokensPair);

    } catch (e) {
      next(e);
    }
  }

};
