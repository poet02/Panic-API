const User = require('../models').User;
const Client = require('../models').Client;
const Panic = require('../models').Panic;

module.exports = {

  //TODO: Move to admin
   listUsers (req, res) {
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

  addClient(req, res) {
    //TODO: authentication & authorization from token.
    return Client
      .create({
        client_name: req.body.clientName,
        client_email: req.body.panicType,
        client_password: req.body.clientPassword,
        client_owner_name: req.body.clientOwnerName,
      })
      .then((client) => res.status(201).send(client))
      .catch((error) => res.status(400).send(error));
  },

 

  updatePanic(req, res) {
    return Panic
      .findByPk(req.params.id)
      .then(panic => {
        if (!panic) {
          return res.status(400).send({
            message: 'Student Not Found',
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
    return Student
      .findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(400).send({
            message: 'Student Not Found',
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
