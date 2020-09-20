const OAuthModel = require('../dataBase/models/oauth.model');
const UserModel = require('../dataBase/models/user.model');


module.exports = {
  getByParams: (params) => OAuthModel.findOne({
    where: params,
    raw: true,
    nest: true,
    include: [UserModel]
  }),

  create: (tokenObject) => OAuthModel.create(tokenObject),

  deleteByParams: (params) => OAuthModel.destroy({ where: params }),
}
