const { Op } = require('sequelize');
const dayjs = require('dayjs');

const { oauthService } = require('../services');


module.exports = async () => {
  await oauthService.deleteByParams({
    created_at: {
      [Op.lte]: dayjs().subtract(30, 'day').format()
    }
  });
}
