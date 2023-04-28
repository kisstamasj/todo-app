const UnauthorizedError = require('../errors/unauthorized-error');

const authorizeUserHandler = (req, res, next) => {
  const cookiejwt = req.cookies.currentUser;
  if (!cookiejwt) {
    throw new UnauthorizedError('Unauthorized user!');
  }

  next();
};

module.exports = { authorizeUserHandler };
