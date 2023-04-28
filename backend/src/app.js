require('express-async-errors');
const express = require('express');
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errorHandler } = require('./middleware/error-handler.js');
const { todosRouter } = require('./routes/todo.js');
const NotFoundError = require('./errors/not-found-error.js');
const { userRouter } = require('./routes/user.js');

const app = express();
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(json());

// routes
app.use(userRouter);
app.use(todosRouter);

app.all('*', async () => {
  throw new NotFoundError('Not found');
});

app.use(errorHandler);

module.exports = { app };
