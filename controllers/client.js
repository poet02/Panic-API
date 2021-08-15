const User = require('../models').User;
const Client = require('../models').Client;
const Responder = require('../models').Responder;
const { uuid } = require('uuidv4');

module.exports = {
  async listUsers (req, res) {
    await User.findAll({
        include: [{
            model: Client,
            as: 'client'
          },
        ],
        attributes: ['user_id', 'user_name'],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },
  

  addResponder(req, res) {
    //TODO: authentication & authorization from token.
    
    //get client id from token
    return Client
      .create({
        client_name: req.body.name,
        client_: req.body.responderEmail,
        responder_password: req.body.responderPassword,
        responder_cell: req.body.responder_cell,
        client_id: req.body.client_id,
      })
      .then((responder) => res.status(201).send(responder))
      .catch((error) => res.status(400).send(error));
  },

  addClient(req, res) {
    //TODO: authentication & authorization from token.
        return Client
      .create({
        responder_name: req.body.responderName,
        responder_email: req.body.responderEmail,
        responder_password: req.body.responderPassword,
        responder_cell: req.body.responder_cell,
        client_id: req.body.client_id,
      })
      .then((responder) => res.status(201).send(responder))
      .catch((error) => res.status(400).send(error));
  },

  listPanics (req, res) {
    
    //client id by id
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
            responder_id: req.body.responderId || responder_id.panic_location,
            panic_type_id: req.body.panicTypeId || responder_id.panic_type_id,
            panic_location: req.body.panicLocation || panic.panic_location,
            responded_at: req.body.clientRespondedAt || panic.responded_at,
            responder_completed_at: req.responderCompletedAt || panic.responder_completed_at,
          })
          .then(() => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  
};



