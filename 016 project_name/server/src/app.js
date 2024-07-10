const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/course');
const videoRoutes = require('./routes/video/videoRoutes');
const otpRouter = require('./routes/otp/otp');
const userRouter = require('./routes/users/users');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/videos', videoRoutes);
allRoutes.use('/otp', otpRouter);
allRoutes.use('/user', userRouter);


module.exports = allRoutes;