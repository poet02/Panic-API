const User = require('../models').User;
const Panic = require('../models').Panic;
const { v4: uuidv4 } = require('uuid');

module.exports = {

  //TODO: Move to admin
  //  listUsers (req, res) {
  //  return User.findAll({
  //       include: [{
  //           model: Client,
  //           as: 'client'
  //         },
  //       ],
  //       attributes: ['user_id', 'user_name'],
  //     })
  //     .then((users) => res.status(200).send(users))
  //     .catch((error) => { res.status(400).send(error); }); 
  // },

  register(req, res) {
    //TODO: authentication & authorization from token.
    return User
      .create({
        user_name: req.body.userName,
        user_email: req.body.userEmail,
        user_cell: req.body.userCell,
        user_password: req.body.password,
        added_by: req.body.addedBy,
        client_id: req.body.clientId,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  login(req, res) {
    //TODO: authentication & authorization from token.
    return Panic
      .create({
        user_id: req.body.userId,
        user_ip: req.body.userIp,
        panic_type_id: req.body.panicType,
        user_location: req.body.userLocation,
        panic_location: req.body.panicLocation,
      })
      .then((panic) => res.status(201).send(panic))
      .catch((error) => res.status(400).send(error));
  },

  async addPanic(req, res) {
    //TODO: authentication & authorization from token.
    return Panic
      .create({
        user_id: req.body.userId,
        user_ip: req.body.userIp,
        panic_type_id: req.body.panicType,
        user_location: req.body.userLocation,
        panic_location: req.body.panicLocation,
      })
      .then((panic) => res.status(201).send(panic))
      .catch((error) => res.status(400).send(error));
  },

  updatePanic(req, res) {
    return Panic
    //add authentication middleware 
      .findByPk(req.params.id, {})
      .then(panic => {
        if (!panic) {
          return res.status(404).send({
            message: 'Panic Not Found',
          });
        }

        //update according to authour ization
        return panic
          .update({
            // responder_id: req.body.reponderId || responder_id.panic_location,
            user_ip: req.body.userIp || panic.user_ip,
            user_location: req.body.userLocation || panic.user_location,
            panic_location: req.body.panicLocation || panic.panic_location,
            user_helped_at: req.body.userHelpedAt || panic.user_helped_at,
            panic_location: req.body.panicLocation || panic.panic_location,
          })
          .then(() => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
