const express = require('express');
const { otpGenrator } = require('../../controllers/controllers');

const otpRouter = express.Router();

otpRouter.post('/genrate_otp', otpGenrator);

module.exports = otpRouter;