const express = require('express');
const { addCourse,
    readCourse,
    changeStatus
} = require('../../controllers/controllers');
const courseMulterFile = require('../../middelwares/course/courseMulter');

const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourse);
courseRoutes.get('/read_courses', readCourse);
courseRoutes.put('/change_course_status', changeStatus);

module.exports = courseRoutes;