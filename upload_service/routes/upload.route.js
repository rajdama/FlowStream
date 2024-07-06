const express = require("express");
const {
  initializeUpload,
  uploadChunk,
  completeUpload,
  uploadToDb,
} = require("../controllers/multipartupload.controller.js");
const multer = require("multer");

const upload = multer();
console.log("------------------------------------------------- : )");

const router = express.Router();

// Route for initializing upload
router.post("/initialize", upload.none(), initializeUpload);

// Route for uploading individual chunks
router.post("/", upload.single("chunk"), uploadChunk);

// Route for completing the upload
router.post("/complete", completeUpload);

// router.post("/uploadToDb", uploadToDb);

module.exports = router;
