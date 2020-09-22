const emailAction = require('../configs/email-action.enum');


module.exports = {
  [emailAction.WELCOME]: {
    subject: '[Car Shop] Welcome!',
    templateFileName: 'welcome'
  }
}
