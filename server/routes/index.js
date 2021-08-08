var express = require('express');
var router = express.Router();

const adminController = require('../controllers').admin;
const userController = require('../controllers').user;
const panicController = require('../controllers').panic;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //ADMIN 
  router.get('/api/admin/user', adminController.listUsers);
  router.post('/api/admin/client', adminController.addClient);
  
  router.post('/api/user/panic', userController.addPanic);

  router.get('/api/panic', panicController.list);


module.exports = router;
