const express = require('express');
const RequestValidationError = require('../errors/request-error.js');
const { Todo } = require('../models/todo.js');
const jwt = require('jsonwebtoken');
const { authorizeUserHandler } = require('../middleware/authorize-user-handler.js');
const NotFoundError = require('../errors/not-found-error.js');
const UnauthorizedError = require('../errors/unauthorized-error.js');

const router = express.Router();

/**
 * Create Todo
 */
router.post('/api/todos', authorizeUserHandler, async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new RequestValidationError('Title is required');
  }

  const currentUser = jwt.verify(req.cookies.currentUser, process.env.JWT_KEY);

  const todo = new Todo({ title, userId: currentUser.id, completed: false });
  await todo.save();

  res.status(201).send(todo);
});

/**
 * Get all todo
 */
router.get('/api/todos', authorizeUserHandler, async (req, res) => {
  const currentUser = jwt.verify(req.cookies.currentUser, process.env.JWT_KEY);

  const todos = await Todo.find({ userId: currentUser.id });

  res.status(200).send(todos);
});

/**
 * Get one todo by id
 */
router.get('/api/todos/:id', authorizeUserHandler, async (req, res) => {
  const id = req.params['id'];
  const currentUser = jwt.verify(req.cookies.currentUser, process.env.JWT_KEY);

  const todo = await Todo.findOne({ _id: id, userId: currentUser.id });

  res.status(200).send(todo);
});

/**
 * Update one todo
 */
router.put('/api/todos', authorizeUserHandler, async (req, res) => {
  const { todo } = req.body;
  const { id, title, completed } = todo;

  const currentUser = jwt.verify(req.cookies.currentUser, process.env.JWT_KEY);

  const updateTodo = await Todo.findById(id);
  if (!todo) {
    throw new NotFoundError('Todo not found');
  }

  if (updateTodo.userId !== currentUser.id) {
    throw new UnauthorizedError('The user is not authorized to edit the todo!');
  }

  if (title) {
    updateTodo.title = title;
  }
  if (typeof completed !== 'undefined') {
    updateTodo.completed = completed;
  }
  await updateTodo.save();

  res.status(200).send(todo);
});

/**
 * Delete one todo
 */
router.delete('/api/todos/:id', authorizeUserHandler, async (req, res) => {
  const id = req.params['id'];
  const currentUser = jwt.verify(req.cookies.currentUser, process.env.JWT_KEY);

  const todo = await Todo.findById(id);
  if (!todo) {
    throw new NotFoundError('Todo not found!');
  }
  if (todo.userId !== currentUser.id) {
    throw new UnauthorizedError('The user is not authorized!');
  }
  await Todo.deleteOne({ _id: id });

  res.status(200).send(todo);
});

module.exports = { todosRouter: router };
