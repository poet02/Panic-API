const user = require('./user');
const client = require('./client');
const panic = require('./panic');
const responder = require('./responder');
const panicType = require('./panicType');
const admin = require('./admin'); 
const auth = require('./auth'); 


module.exports = {
  user,
  admin,
  client,
  panic,
  responder,
  panicType,
  auth
};
 