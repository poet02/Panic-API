const User = require('../models').User;
const Panic = require('../models').Panic;

module.exports = {
 //SHOULD NOT BE USED IN PROD

  // update(req, res) {
  //   return Panic
  //   //add authentication middleware 
  //     .findByPk(req.params.id, {})
  //     .then(panic => {
  //       if (!panic) {
  //         return res.status(404).send({
  //           message: 'Panic Not Found',
  //         });
  //       }

  //       //update according to authorization
  //       return panic
  //         .update({
  //           responder_id: req.body.responderId || responder_id.panic_location,
  //           panic_type_id: req.body.panicTypeId || responder_id.panic_type_id,
  //           panic_location: req.body.panicLocation || panic.panic_location,
  //           client_responded_at: req.body.clientHelpedAt || panic.client_responded_at,
  //           responder_completed_at: req.body.student_name || panic.responder_completed_at,
  //         })
  //         .then(() => res.status(200).send(panic))
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },

  list (req, res) {
    
    //client id by id
    return Panic.findAll({
         include: [{
             model: User,
             as: 'user'
           },
         ],
       })
       .then((users) => res.status(200).send(users))
       .catch((error) => { res.status(400).send(error); }); 
   },

  // delete(req, res) {
  //   return Student
  //     .findByPk(req.params.id)
  //     .then(student => {
  //       if (!student) {
  //         return res.status(400).send({
  //           message: 'Student Not Found',
  //         });
  //       }
  //       return student
  //         .destroy()
  //         .then(() => res.status(204).send())
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },

};
