var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


  router.get('/api/user', userController.list);


module.exports = router;
