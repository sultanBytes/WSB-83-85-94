const express = require('express');
const { addCourse,
    readCourse,
    changeStatus,
    readSingleCourse
} = require('../../controllers/controllers');
const courseMulterFile = require('../../middelwares/course/courseMulter');

const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourse);
courseRoutes.get('/read_courses', readCourse);
courseRoutes.put('/change_course_status', changeStatus);
courseRoutes.get('/fetch_course_with_id/:_id', readSingleCourse);

module.exports = courseRoutes;