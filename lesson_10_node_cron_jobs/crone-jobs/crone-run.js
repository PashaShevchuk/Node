const cron = require('node-cron');


module.exports = () => {
  try {
    cron.schedule('*/5 * * * * *', async () => {
      console.log('-----------------------ITERATION START------------------------');

      console.log('crone working');

      console.log('-----------------------ITERATION FINISH-----------------------');
    });

  } catch (e) {
    console.log(e);
  }
}


// “At 00:00 on Sunday.” - @weekly

