const Panics = require('../models').Panics;
const User = require('../models').User;

module.exports = {

  //get all panics if admin (Jimmy)
  //or by privilege level (Client Level)
  // async list (req, res) {
  //   const panics = await Panics.findAll({
  //       include: [{
  //           model: User,
  //           as: 'user'
  //         },
  //       ],
  //       attributes: ['panic_id'],
  //     })
  //     .then((users) => res.status(200).send(users))
  //     .catch((error) => { res.status(400).send(error); });
  // },
};