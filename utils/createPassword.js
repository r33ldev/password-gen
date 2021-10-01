const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

// this function generates the password
const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  // initialize all the characters to chars
  let chars = alpha;
  // append the chars if user specifies number and or symbols
  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';
  // call the function that generates the password based on users specified length
  return generatePassword(length, chars);
};

// this function takes lenght and all the characters in chars and return the generated password
const generatePassword = (length, chars) => {
  let password = '';
  // for loop that appends each character to the password string on each  iterations
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
