const UnauthorizedError = require('../errors/unauthorized-error');
const jwt = require('jsonwebtoken');

const authorizeUserHandler = (req, res, next) => {
  const cookiejwt = req.cookies.currentUser;
  if (!cookiejwt) {
    throw new UnauthorizedError('Unauthorized user!');
  }
  const verified = jwt.verify(cookiejwt, process.env.JWT_KEY);
  if (!verified) {
    throw new UnauthorizedError('Unauthorized user!');
  }

  next();
};

module.exports = { authorizeUserHandler };
