const User = require("../models").User;
const Panic = require("../models").Panic;
const Responder = require("../models").Responder;

module.exports = {
  //listAllResponders
  list(req, res) {
    //find other responders in same
    //get clientId from token, admin, client, responder
    return Responder.findAll()
      .then((responders) => res.status(200).send(responders))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  //update responderInfo
  update(req, res) {
    Responder.findByPk(req.params.id, {})
      .then((responder) => {
        if (!responder) {
          res.status(404).send({
            message: "Responder Not Found",
          });
        }

        //update according to authorization
        return responder
          .update({
            responder_name: req.body.name || responder.responder_name,
            responder_password: req.body.responderPassword || responder.responder_password, //should store encrypt
            responder_location: req.body.responderLocation || responder.responder_location,
          })
          .then((responder) => res.status(200).send(responder))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  myPanics(req, res) {
    return Panic.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      attributes: ["panic_id"],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  async updatePanic(req, res) {
    Responder.findByPk(req.body.responderId).then((responder) => {
        //TODO: client id and responder_id from token
      if (!responder) {
        res.status(404).send({
          message: "Responder Not Found",
        });
      }
      if(responder.client_id === req.body.client_id) {
        res.status(403).send({
          message: "Unauthorized",
        });
      }
    }).catch((error) => res.status(400).send(error));;

    return Panic.findByPk(req.body.panicId)
      .then((panic) => {
        if (!panic) {
          res.status(404).send({
            message: "Panic Not Found",
          });
        }

        //Ideally check for admin token as 
        return panic
          .update({
            responder_id: req.body.responderId || panic.responder_id,
            responded_at: responded_at|| +new Date, //already responded?
            responder_completed_at: req.body.panicLocation || panic.responder_completed_at,
          })
          .then((panic) => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
