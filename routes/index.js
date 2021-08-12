var express = require('express');
var router = express.Router();

const adminController = require('../controllers').admin;
const userController = require('../controllers').user;
const panicController = require('../controllers').panic;
const responderController = require('../controllers').responder;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //ADMIN 
  router.get('/api/admin/user', adminController.listUsers);
  router.post('/api/admin/client', adminController.addClient);
  
  router.post('/api/user/panic', userController.addPanic);

  router.get('/api/panic', panicController.list);

  //RESPONDER
  router.get('/api/responder', panicController.list);//add
  router.post('/api/responder/updatePanic', responderController.updatePanic);//update panic
  // router.get('/api/responder', panicController.list);//update responder
  // router.get('/api/responder', panicController.list);//delete

  

module.exports = router;
