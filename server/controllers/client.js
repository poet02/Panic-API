const User = require('../models').User;
const Client = require('../models').Client;
const ClientResponder = require('../models').ClientResponder;

module.exports = {
  async list (req, res) {
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
};

//get all panics


//add responder 



