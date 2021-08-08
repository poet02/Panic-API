const PanicType = require('../models').PanicType;

module.exports = {
  list (req, res) {
    
    //client id by id
    return PanicType.findAll({
        //  attributes: ['panic_type_id', ],
       })
       .then((panicTypes) => res.status(200).send(panicTypes))
       .catch((error) => { res.status(400).send(error); }); 
   },

  add (req, res) {
    
    //client id by id
    return PanicType.create({
        name: req.body.name
        //  attributes: ['panic_type_id', ],
       })
       .then((panicType) => res.status(201).send(panicType))
       .catch((error) => { res.status(400).send(error); }); 
   },

  }
