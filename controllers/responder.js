const User = require("../models").User;
const Panic = require("../models").Panic;
const Responder = require("../models").Responder;

module.exports = {
  //listAllResponders
  list(req, res) {
    //find other responders in clients
    return Responder.findAll({
      where: {
        client_id: req.body.clientId, //will eventually com from token in header
      },
    })
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
            responder_password:
              req.body.responderPassword || responder.responder_password,
            responder_location:
              req.body.responderLocation || responder.responder_location,
          })
          .then((responder) => res.status(200).send(responder))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  myPanics(req, res) {
    //Panics that responders wills seee on there dashboard
    return Panic.findAll({
      where: {
        client_id: req.body.clientId,
      },
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

  assignPanic(req, res) {
    Responder.findByPk(req.body.responderId)
      .then((responder) => {
        if (!responder) {
          res.status(404).send({
            message: "Responder Not Found",
          });
        }
      })
      .catch((error) => res.status(400).send(error));

    Panic.findByPk(req.body.panicId)
      .then((panic) => {
        if (!panic) {
          return res.status(404).send({
            message: "Panic Not Found",
          });
        }
        return panic
          .update({
            responder_id: req.body.responderId || panic.responder_id,
            client_responded_at: panic.client_responded_at || panic.updatedAt,
          })
          .then((panic) => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
