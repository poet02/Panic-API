const User = require("../models").User;
const Panic = require("../models").Panic;
const Responder = require("../models").Responder;

module.exports = {
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


  updatePanic(req, res) {
    Responder.findByPk(req.body.responderId)
      .then((responder) => {
        if (!responder) {
          res.status(404).send({
            message: "Responder Not Found",
          });
        }

        responder
        .update({
          responder_lat: req.body.responderLat || responder.responder_lat,
          responder_lng: req.body.responderLng || responder.responder_lng,
        })
        .catch((error) => res.status(400).send(error));
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
            responder_completedAt_at: req.body.responderResolved? panic.updatedAt : null,
          })
          .then((panic) => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
