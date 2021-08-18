const User = require('../models').User;
const Client = require('../models').Client;
const Responder = require('../models').Responder;
const { uuid } = require('uuidv4');

module.exports = {
  async register(req, res) {
    try {
      const clients = await Client.findAll({
        where: {
          [Op.or]: [
            { client_cell: req.body.cell },
            { client_email: req.body.email },
          ],
        },
      });
      if (clients.length > 0) {
        return res.status(401).send({
          message: "Client email or cell exists!",
        });
      }


      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(req.body.password, salt);

      return Client.create({
        client_name: req.body.name,
        client_email: req.body.email,
        client_phone_number: req.body.phoneNumber,
        client_owner_name: req.body.clientOwner,
        client_password: bcryptPassword,
      })
        .then((client) => {
          const jwtToken = jwtGenerator(client, "CLIENT");
          res.status(201).send(jwtToken);
        })
        .catch((error) => res.status(400).send(error));
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async login(req, res) {
    const client = await Client.findOne({
      where: { client_email: req.body.email },
      });
    if (!client) {
      return res.status(401).send({
        message: "Invalid Credential",
      });
    }

    const validPassword = await bcrypt
      .compare(req.body.password, client.client_password)
      .catch((error) => res.status(400).send(error));

      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user, 'USER');
      return res.status(200).send(jwtToken);;
  },

  async listUsers (req, res) {
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
  

  addResponder(req, res) {
    //TODO: authentication & authorization from token.
    
    //get client id from token
    return Client
      .create({
        client_name: req.body.name,
        client_: req.body.responderEmail,
        responder_password: req.body.responderPassword,
        responder_cell: req.body.responder_cell,
        client_id: req.body.client_id,
      })
      .then((responder) => res.status(201).send(responder))
      .catch((error) => res.status(400).send(error));
  },

  addClient(req, res) {
    //TODO: authentication & authorization from token.
        return Client
      .create({
        responder_name: req.body.responderName,
        responder_email: req.body.responderEmail,
        responder_password: req.body.responderPassword,
        responder_cell: req.body.responder_cell,
        client_id: req.body.client_id,
      })
      .then((responder) => res.status(201).send(responder))
      .catch((error) => res.status(400).send(error));
  },

  listPanics (req, res) {
    
    //client id by id
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

   updatePanic(req, res) {
    return Panic
    //add authentication middleware 
      .findByPk(req.params.id, {})
      .then(panic => {
        if (!panic) {
          return res.status(404).send({
            message: 'Panic Not Found',
          });
        }

        //update according to authorization
        return panic
          .update({
            responder_id: req.body.responderId || responder_id.panic_location,
            panic_type_id: req.body.panicTypeId || responder_id.panic_type_id,
            panic_location: req.body.panicLocation || panic.panic_location,
            responded_at: req.body.clientRespondedAt || panic.responded_at,
            responder_completed_at: req.responderCompletedAt || panic.responder_completed_at,
          })
          .then(() => res.status(200).send(panic))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  
};



