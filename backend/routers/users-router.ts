const usersRouter = require('express').Router();
const { setUser: grabUser} = require('../controllers/users.controllers');
const { postUser: createUser} = require('../controllers/users.controllers');

usersRouter.route('/').post(createUser)
usersRouter.route('/:email').post(grabUser);

module.exports = { usersRouter }