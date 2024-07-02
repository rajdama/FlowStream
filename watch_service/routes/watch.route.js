const express = require("express");
const watchVideo = require("../controllers/watch.controller.js");
const getAllVideos = require("../controllers/home.controller.js");

const router = express.Router();

router.get("/", watchVideo);
router.get("/home", getAllVideos);

module.exports = router;
