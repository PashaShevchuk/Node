const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const htmlTemplate = require('../email-templates');
const { ROOT_EMAIL, ROOT_EMAIL_PASS } = require('../configs/config');


const emailTemplates = new EmailTemplates({
  message: null,
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: ROOT_EMAIL,
    pass: ROOT_EMAIL_PASS
  }
});


module.exports = {
  async sendMail(userMail, action) {
    try {
      const templateInfo = htmlTemplate[action];

      const html = await emailTemplates.render(templateInfo.templateFileName);

      const mailOptions = {
        from: 'NO REPLY CAR SHOP',
        to: userMail,
        subject: templateInfo.subject,
        html
      }

      return transporter.sendMail(mailOptions);
    } catch (e) {
      console.log('***********************************************');
      console.log(e);
      console.log('***********************************************');
    }
  }
}
