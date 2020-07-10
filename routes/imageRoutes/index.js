const express = require('express');

const router = express.Router();
const services = require('../../services');

const multer = require('multer');
const path = require('path');
const Image = require('../../models/image');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

var upload = multer({ storage: storage }).single('postImage');

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }
    res.json({
      success: true,
      message: 'Image Uploaded',
    });
    // Everything went fine.
  });
});

// router.get('/', function (req, res) {
//   res.sendfile(path.resolve(__dirname, '/uploads/postImage-1594337174759.jpg'));
// });

module.exports = router;
