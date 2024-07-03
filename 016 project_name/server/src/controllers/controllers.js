//admin controllers
const adminLogin = require('./admin/adminLogin');
const registerAdmin = require('./admin/resgisterAdmin');

//course controllers
const addCourse = require('./course/addCourse');
const changeStatus = require('./course/changeStatus');
const deleteSingleCourse = require('./course/deleteSingleCourse');
const readCourse = require('./course/readCourse');
const readSingleCourse = require('./course/readSingleCourse');
const trueCourses = require('./course/trueCourses');
const updateCourse = require('./course/updateCourse');

//video controllers
const addVideo = require('./videos/addVideo');
const readVideos = require('./videos/readVideos');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourse,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse,
    deleteSingleCourse,
    trueCourses,
    addVideo,
    readVideos
}