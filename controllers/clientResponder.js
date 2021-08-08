const User = require('../models').User;
const Panic = require('../models').Panic;
const Responder = require('../models').clientResponder;

module.exports = {
    //listAllResponders
   list (req, res) {
  //find other responders in same
  //get clientId from token, admin, client, clientResponder 
    return Responder.findAll({

        attributes: ['client_responder_name','client_responder_email', 'client_responder_cell', 'client_responder_location'],
      })
      .then((responders) => res.status(200).send(responders))
      .catch((error) => { res.status(400).send(error); }); 
  },

  //update responderInfo
  update(req, res) {
    return Responder
    //add authentication middleware 
    //id will come from token
      .findByPk(req.params.id, {})
      .then(responder => {
        if (!responder) {
          return res.status(404).send({
            message: 'Responder Not Found',
          });
        }

        //update according to authorization
        return responder
          .update({
            client_responder_name: req.body.name || responder.client_responder_name,
            client_responder_password: req.body.responderPassword || responder.client_responder_password, //should store encrypt
            client_responder_location: req.body.responderLocation || responder.client_responder_location,
          })
          .then((responder) => res.status(200).send(responder))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  myPanics (req, res) {
    return Panic.findAll({
         include: [{
             model: User,
             as: 'user'
           },
         ],
         attributes: ['panic_id'],
       })
       .then((users) => res.status(200).send(users))
       .catch((error) => { res.status(400).send(error); }); 
   },
  

  updatePanic(req, res) {
    return Panic
    //add authentication middleware 
    //id will come from token
      .findByPk(req.params.id, {})
      .then(panic => {
        if (!panic) {
          return res.status(404).send({
            message: 'Panic Not Found',
          });
        }

        //update according to authorization
        return panic
          .update({
            responder_id: req.body.responder_id || panic.responder_id,
            client_responded_at: req.body.clientRespondedAt || panic.client_responded_at,
            responder_completed_at: req.body.panicLocation || panic.responder_completed_at
          })
          .then((panic) => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
