'use strict';
const Account = (() => {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isInvalidPassword(testPassword) {
    return userPassword !== testPassword;
  }

  function getRandomLetterNumber() {
    const randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[randomIndex];
  }

  function anonymize() {
    let result = '';

    while (result.length <= 16) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      if (isInvalidPassword(password)) return 'Invalid Password';
      this.displayName = anonymize();
      return true;
    },

    resetPassword(password, newPassword) {
      if (isInvalidPassword(password)) return 'Invalid Password';
      userPassword = newPassword;
      return true;
    },

    firstName(password) {
      if (isInvalidPassword(password)) return 'Invalid Password';
      return userFirstName;
    },

    lastName(password) {
      if (isInvalidPassword(password)) return 'Invalid Password';
      return userLastName;
    },

    email(password) {
      if (isInvalidPassword(password)) return 'Invalid Password';
      return userEmail;
    },
  };
})();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux);
console.log(fooBar);
console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'
