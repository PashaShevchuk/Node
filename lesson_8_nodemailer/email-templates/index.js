const emailAction = require('../configs/email-action.enum');


module.exports = {
  [emailAction.WELCOME]: {
    subject: '[Car Shop] Welcome!',
    templateFileName: 'welcome'
  },

  [emailAction.CREATE_CAR]: {
    subject: '[Car Shop] added car',
    templateFileName: 'create-car'
  },

  [emailAction.DELETE_CAR]: {
    subject: '[Car Shop] car removed',
    templateFileName: 'delete-car'
  },

}
