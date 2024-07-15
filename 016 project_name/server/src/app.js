const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/course');
const videoRoutes = require('./routes/video/videoRoutes');
const otpRouter = require('./routes/otp/otp');
const userRouter = require('./routes/users/users');
const verifyJWT = require('./middelwares/jwt/jwtVerify');
const paymentRoutes = require('./routes/payment');
require('./db/config');

const allRoutes = express.Router();
const verifyRoutes = express.Router();
verifyRoutes.use(verifyJWT);

allRoutes.use('/admin', adminRoutes);
// verifyRoutes.use('/course', courseRoutes);

allRoutes.use('/videos', videoRoutes);
allRoutes.use('/otp', otpRouter);
allRoutes.use('/user', userRouter);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/payment', paymentRoutes);



allRoutes.use('/', verifyRoutes);


module.exports = allRoutes;