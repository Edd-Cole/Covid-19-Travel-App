const usersRouter = require('express').Router();
const { setUser: grabUser, postUser: createUser, deleteUser: removeUser} = require('../controllers/users.controllers');

usersRouter.route('/').post(createUser)
usersRouter.route('/:email').post(grabUser).delete(removeUser);

module.exports = { usersRouter }