const { createTokens } = require('../helpers');
const {
  oauthService: { create, deleteByParams, getByParams }
} = require('../services');


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

  refreshToken: async (req, res, next) => {
    try {
      const user = req.user;
      const token = req.get('Authorization');
      const newTokensPair = createTokens();

      await deleteByParams({ refresh_token: token });
      await create({ ...newTokensPair, user_id: user.id });

      res.json(newTokensPair);

    } catch (e) {
      next(e);
    }
  }

};
