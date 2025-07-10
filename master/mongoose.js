
module.exports = () => {
  const config = require("../config/index")
  const chalk = require('chalk');
  const mongoose = require("mongoose")
  try {
    mongoose.connect(config.DATABASE_URL)
      .then(() => console.log(chalk.green('✔') + ` mongoose is connected.`))
  } catch (error) {
    // console.error('>> ERROR: Mongoose Connect error >> ', error.response?.data || error.message);
    console.error('>> ERROR: Mongoose Connect error >> ', error);
  }
}
