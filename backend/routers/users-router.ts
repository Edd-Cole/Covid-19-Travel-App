const usersRouter = require('express').Router();
const {
  setUser: grabUser,
  postUser: createUser,
  deleteUser: removeUser,
  updateUser: patchUser
} = require('../controllers/users.controllers');

usersRouter.route('/').post(createUser);
usersRouter.route('/:email').post(grabUser).delete(removeUser).patch(patchUser);

module.exports = { usersRouter };
