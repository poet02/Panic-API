const User = require('../models').User;
const Client = require('../models').Client;

module.exports = {
   list (req, res) {
   return User.findAll({
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
