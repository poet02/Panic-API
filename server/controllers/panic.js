const User = require('../models').User;
const Panic = require('../models').Panic;

module.exports = {
   list (req, res) {
   return Panic.findAll({
        include: [{
            model: User,
            as: 'user'
          },
        ],
        attributes: ['panic_id'],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); }); 
  },
};
