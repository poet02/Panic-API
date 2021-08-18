const User = require("../models").User;
const Panic = require("../models").Panic;
const Client = require("../models").Client;
const bcrypt = require("bcrypt");
const axios = require("axios");
const { Op } = require("sequelize");
const jwtGenerator = require("../utils/jwtGenerator");

module.exports = {
  async register(req, res) {
    try {
      const users = await User.findAll({
        where: {
          [Op.or]: [
            { user_cell: req.body.cell },
            { user_email: req.body.email },
          ],
        },
      });
      if (users.length > 0) {
        return res.status(401).send({
          message: "User email or cell exists!",
        });
      }

      const client = await Client.findByPk(req.body.clientId, {});

      if (!client) {
        return res.status(401).send({
          message: "Client does not exist!",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(req.body.password, salt);

      return User.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_cell: req.body.cell,
        user_password: bcryptPassword,
        client_id: req.body.clientId,
      })
        .then((user) => {
          const jwtToken = jwtGenerator(user, "USER");
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

  async addPanic(req, res) {
    //TODO: authentication & authorization from token.
    let formattedAddress = req.body.panicLocation.replace(/\s/g, "+");

    let googleMapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyDjSzLWcWKHO6F_6e9AjcticwLeDU39dS4`;
    let googleLocation = {};
    await axios
      .get(googleMapUrl)
      .then(function (response) {
        googleLocation = response.data.results[0].geometry.location;
      })
      .catch(function (error) {
        return res.status(400).send(error);
      });

    return Panic.create({
      user_id: req.body.userId,
      user_ip: req.body.userIp,
      user_description: req.body.userDescription,
      panic_type_id: req.body.panicType,
      panic_location: req.body.panicLocation,
      panic_lat: googleLocation.lat || req.body.panic_lat,
      panic_lng: googleLocation.lng || req.body.panic_lng,
      responder_id: req.body.responderId,
      responder_location: req.body.responderLocation,
    })
      .then((panic) => res.status(201).send(panic))
      .catch((error) => res.status(400).send(error));
  },

  updatePanic(req, res) {
    //TODO: add authentication middleware

    return Panic.findByPk(req.body.panicId, {})
      .then((panic) => {
        if (!panic) {
          return res.status(404).send({
            message: "Panic Not Found",
          });
        }
        if (
          panic.user_id !== req.body.userId ||
          req.body.panicId !== panic.id
        ) {
          return res.status(401).send({
            message: "Unauthorized panic update",
          });
        }
        return panic
          .update({
            // user_ip: req.body.userIp || panic.user_ip,
            panic_location: req.body.panicLocation || panic.panic_location,
            // panic_location: req.body.panicLocation || panic.panic_location,
            user_helped_at: req.body.userResolved ? panic.updatedAt : null,
          })
          .then(() => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
