const adminLogin = require('./admin/adminLogin');
const registerAdmin = require('./admin/resgisterAdmin');
const addCourse = require('./course/addCourse');
const changeStatus = require('./course/changeStatus');
const readCourse = require('./course/readCourse');
const readSingleCourse = require('./course/readSingleCourse');
const updateCourse = require('./course/updateCourse');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourse,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse
}