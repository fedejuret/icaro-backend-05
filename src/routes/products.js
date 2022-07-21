const express = require('express');
const { renderUploadProductView } = require('../controllers/product');
const router = express.Router();


router.get('/cargar-producto', renderUploadProductView);


module.exports = router;