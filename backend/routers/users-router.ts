const usersRouter = require('express').Router();
const { setUser: grabUser} = require('../controllers/users.controllers');

usersRouter.route('/:email').post(grabUser);

module.exports = { usersRouter }