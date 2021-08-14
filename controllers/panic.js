const User = require("../models").User;
const Panic = require("../models").Panic;
const  Responder = require("../models").Responder;

module.exports = {
  //SHOULD NOT BE USED IN PROD

  list(req, res) {
    //client id by id

    try {
      //get lat long from location string

    } catch (e) {

    }
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
          attributes: ["responder_name", "responder_cell", "responder_location", "responder_lat", "responder_lng"],
        },
      ],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
