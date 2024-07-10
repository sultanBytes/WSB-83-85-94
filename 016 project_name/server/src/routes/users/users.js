const express = require('express');
const { registerUser } = require('../../controllers/controllers');

const userRouter = express.Router();

userRouter.post('/register_user', registerUser);

module.exports = userRouter;