var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const panicController = require('../controllers').panic;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


  router.get('/api/user', userController.list);

  router.get('/api/panic', panicController.list);


module.exports = router;
