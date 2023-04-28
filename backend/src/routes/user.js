const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.js');
const RequestValidationError = require('../errors/request-error.js');
const dayjs = require('dayjs');
const Password = require('../utils/password.js');
const setCookie = require('../utils/set-cookie.js');
const { authorizeUserHandler } = require('../middleware/authorize-user-handler.js');

const router = express.Router();

/**
 * Sign up user
 */
router.post('/api/users/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new RequestValidationError('Email is required');
  }

  if (!password) {
    throw new RequestValidationError('Password is required');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new RequestValidationError('Email in use');
  }

  const hash = Password.toHash(password);
  const user = new User({ email, password: hash });
  await user.save();

  const cookie = jwt.sign(JSON.stringify({ id: user.id, email: user.email }), process.env.JWT_KEY);

  // store cookie object
  setCookie(res, 'currentUser', cookie);

  res.status(201).send(user);
});

/**
 * Sign in user
 */
router.post('/api/users/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new RequestValidationError('Email is required');
  }

  if (!password) {
    throw new RequestValidationError('Password is required');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new RequestValidationError('Your email or password are wrong');
  }

  if (!Password.compare(user.password, password)) {
    throw new RequestValidationError('Your email or password are wrong');
  }

  const cookie = jwt.sign(JSON.stringify({ id: user.id, email: user.email }), process.env.JWT_KEY);

  // store cookie object
  setCookie(res, 'currentUser', cookie);
  res.status(201).send(user);
});

/**
 * Sign out user
 */
router.post('/api/users/signout', authorizeUserHandler, async (req, res) => {
  // store cookie object
  setCookie(res, 'currentUser', null);
  res.status(201).send({ success: true });
});

module.exports = { userRouter: router };
