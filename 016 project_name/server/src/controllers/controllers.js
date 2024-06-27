const adminLogin = require('./admin/adminLogin');
const registerAdmin = require('./admin/resgisterAdmin');
const addCourse = require('./course/addCourse');
const changeStatus = require('./course/changeStatus');
const readCourse = require('./course/readCourse');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourse,
    readCourse,
    changeStatus
}