const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/course');
const videoRoutes = require('./routes/video/videoRoutes');
const otpRouter = require('./routes/otp/otp');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/videos', videoRoutes);
allRoutes.use('/otp', otpRouter);


module.exports = allRoutes;