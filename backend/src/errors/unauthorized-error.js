class UnauthorizedError extends Error {
  statusCode = 401;
  constructor(errors) {
    super(errors);
  }
}

module.exports = UnauthorizedError;
