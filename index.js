#!/usr/bin/env node
// for yarn\npm link to work, i.e to run genpass from anywhere add
//* commander for getting cli arguments and inputs
const program = require('commander');
//* chalk for formatting console
const chalk = require('chalk');
//* clipboardy for asynchronous copying of generated password to clipboard
const clipboardy = require('clipboardy');
//* this util function create the password
const createPassword = require('./utils/createPassword');
//* this util function save the password to password.txt as specified by the user
const savePassword = require('./utils/savePassword');

program
  .version('0.0.1')
  .description('Really simple password generator')
  .option('-len, --length <length>', 'Length of the password', 8)
  .option('-s, --save', 'Save generated password to password.txt')
  .option('-nn, --no-numbers', 'Do not generate numbers')
  .option('-ns, --no-symbols', 'Do not generate symbols');

program.parse();

const { length, numbers, symbols, save } = program.opts();
// console.log(length, numbers, symbols);

const password = createPassword(length, numbers, symbols);
clipboardy.writeSync(password);

if (save) {
  savePassword(password);
}

// console.log(length, numbers);
console.log(chalk.blue('Generated password: ') + chalk.bold(password));
console.log(chalk.yellow('Password copied to clipboard'));
