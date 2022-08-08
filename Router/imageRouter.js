const express = require('express');
const router = express.Router();
const { createImage, getImage } = require('../Controller/imageControl')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
// const upload = multer();
upload.single('image')

// router.post('/post',upload.single('image'), createImage);
router.post('/post', createImage);
router.get('/get', getImage);

module.exports = router