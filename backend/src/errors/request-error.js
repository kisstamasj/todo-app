class RequestValidationError extends Error {
  statusCode = 400;
  constructor(errors) {
    super(errors);
  }
}

module.exports = RequestValidationError;
