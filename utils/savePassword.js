const os = require('os');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const savePassword = (password) => {
  fs.open(path.join(__dirname, '../', 'password.txt'), 'a', '666', (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to password.txt'));
      });
    });
  });
};

module.exports = savePassword;
