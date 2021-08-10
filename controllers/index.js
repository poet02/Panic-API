const user = require('./user');
const admin = require('./admin');
const client = require('./client');
const panic = require('./panic');
const clientResponder = require('./clientResponder');
const panicType = require('./panicType');

module.exports = {
  user,
  admin,
  client,
  panic,
  clientResponder,
  panicType
};
