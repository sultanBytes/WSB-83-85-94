const express = require('express');
const { addCourse } = require('../../controllers/controllers');
const courseMulterFile = require('../../middelwares/course/courseMulter');

const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourse);

module.exports = courseRoutes;