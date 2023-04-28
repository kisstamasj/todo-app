class NotFoundError extends Error {
  statusCode = 404;
  constructor(errors) {
    super(errors);
  }
}

module.exports = NotFoundError;
