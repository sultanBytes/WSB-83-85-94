const express = require('express');
const { addVideo, readVideos } = require('../../controllers/controllers');

const videoRoutes = express.Router();

videoRoutes.post('/add_video', addVideo);
videoRoutes.get('/read_video', readVideos);

module.exports = videoRoutes;