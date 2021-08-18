const User = require("../models").User;
const Client = require("../models").Client;
const Panic = require("../models").Panic;
const Responder = require("../models").Responder;
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwtGenerator = require("../utils/jwtGenerator");


module.exports = {
  async register(req, res) {
    try {
      const responders = await Responder.findAll({
        where: {
          [Op.or]: [
            { responder_cell: req.body.cell },
            { responder_email: req.body.email },
          ],
        },
      });
      if (responders.length > 0) {
        return res.status(401).send({
          message: "Responder email or cell exists!",
        });
      }

      const client = await Client.findByPk(req.body.clientId, {});
      console.log('test', client)

      if (!client) {
        return res.status(401).send({
          message: "Client does not exist!",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(req.body.password, salt);
      console.log('test final')


      return Responder.create({
        responder_name: req.body.name,
        responder_email: req.body.email,
        responder_cell: req.body.cell,
        responder_password: bcryptPassword,
        client_id: req.body.clientId,
      })
        .then((responder) => {
          const jwtToken = jwtGenerator(responder, "RESPONDER");
          res.status(201).send(jwtToken);
        })
        .catch((error) => res.status(400).send(error));
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async login(req, res) {
    const user = await User.findOne({
      where: { user_cell: req.body.cell },
      });
    if (!user) {
      return res.status(401).send({
        message: "Invalid Credential",
      });
    }

    const validPassword = await bcrypt
      .compare(req.body.password, user.user_password)
      .catch((error) => res.status(400).send(error));

      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user, 'USER');
      return res.status(200).send(jwtToken);;
  },

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
            responder_completedAt_at: req.body.responderResolved
              ? panic.updatedAt
              : null,
          })
          .then((panic) => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
