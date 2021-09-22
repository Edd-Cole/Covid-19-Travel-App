const usersRouter = require('express').Router();
const {
  setUser: grabUser,
  postUser: createUser,
  deleteUser: removeUser,
  updateUser: patchUser,
  getUsers: grabUsers
} = require('../controllers/users.controllers');

usersRouter.route('/').post(createUser);
usersRouter.route('/:email').post(grabUser).delete(removeUser).patch(patchUser);
usersRouter.route('/all_users').get(grabUsers);

module.exports = { usersRouter };
