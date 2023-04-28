const bcrypt = require('bcrypt');
const saltRounds = 10;

class Password {
  static toHash(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  static compare(storedPassword, suppliedPassword) {
    return bcrypt.compareSync(suppliedPassword, storedPassword);
  }
}

module.exports = Password;
