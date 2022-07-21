const express = require('express');
const router = express.Router();


router.get('/cargar-producto', (req, res) => {

    res.render('products');

});


module.exports = router;