const User = require("../models").User;
const Client = require("../models").Client;
const Panic = require("../models").Panic;

module.exports = {
  listPanics(req, res) {
    return Panic.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["user_name", "user_cell"],
        },
        {
          model: Responder,
          as: "responder",
          attributes: [
            "responder_name",
            "responder_cell",
            "responder_location",
            "responder_lat",
            "responder_lng",
          ],
        },
      ],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  listUsers(req, res) {
    return User.findAll({
      include: [
        {
          model: Client,
          as: "client",
        },
      ],
      attributes: ["user_name"],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getUser(req, res) {
    return User.findByPk(req.query.id, {
      attributes: ["user_name", "user_cell"],
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  listResponders(req, res) {
    return Responder.findAll({
      include: [
        {
          model: Client,
          as: "client",
        },
      ],
      attributes: ["user_name"],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getResponder(req, res) {
    return Responder.findByPk(req.query.id, {
      attributes: ["user_name", "user_cell"],
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  updatePanic(req, res) {
    return Panic.findByPk(req.params.id)
      .then((panic) => {
        if (!panic) {
          return res.status(400).send({
            message: "Student Not Found",
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  deletePanic(req, res) {
    return Panic.findByPk(req.body.panic_id)
      .then((panic) => {
        if (!panic) {
          return res.status(400).send({
            message: "Panic Not Found",
          });
        }
        return panic
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
