const program = require('commander');
const createPassword = require('./utils/createPassword');

program
  .version('0.0.1')
  .description('Really simple password generator')
  .option('-l,--length <length>', 'Length of the password', '8')
  .option('-s, --save', 'Save generated password to password.txt')
  .option('-nn, --no-numbers', 'Do not generate numbers')
  .option('-ns, --no-symbols', 'Do not generate symbols');

program.parse();

const { length, numbers, symbols } = program.opts();

const password = createPassword(length, numbers, symbols);

console.log(length, numbers);
console.log(password);
