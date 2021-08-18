const User = require("../models").User;
const Panic = require("../models").Panic;
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

module.exports = {
  // register(req, res) {
  //   //TODO: authentication & authorization from token.
  //   return User.create({
  //     user_name: req.body.userName,
  //     user_email: req.body.userEmail,
  //     user_cell: req.body.userCell,
  //     user_password: req.body.password,
  //     client_id: req.body.clientId,
  //   })
  //     .then((user) => res.status(201).send(user))
  //     .catch((error) => res.status(400).send(error));
  // },

  // login(req, res) {
  //   //TODO: authentication & authorization from token.
  //   return Panic.create({
  //     user_name: req.body.name,
  //     client_id: req.body.clientId,
  //     user_email: req.body.email,
  //     user_password: req.body.password,
  //     user_cell: req.body.cell,
  //   })
  //     .then((panic) => res.status(201).send(panic))
  //     .catch((error) => res.status(400).send(error));
  // },

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
      id: uuidv4(),
      user_id: req.body.userId,
      user_ip: req.body.userIp,
      user_description: req.body.userDescription || panic.user_description,
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
