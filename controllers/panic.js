const User = require("../models").User;
const Panic = require("../models").Panic;

module.exports = {
  //SHOULD NOT BE USED IN PROD

  list(req, res) {
    //client id by id
    return Panic.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["user_name", "user_cell"],
        },
      ],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
