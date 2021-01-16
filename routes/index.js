const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getHome);
//router.get('/item', indexCtrl.getItem);
router.get('/item/', indexCtrl.getItem);
router.get('/cart/', indexCtrl.getCart);
router.get('/order/', indexCtrl.getOrder);


module.exports = router;