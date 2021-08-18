var express = require("express");
var router = express.Router();

const adminController = require("../controllers").admin;
const userController = require("../controllers").user;
const panicController = require("../controllers").panic;
const responderController = require("../controllers").responder;

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//ADMIN
router.get("/api/admin/panic", adminController.listPanics);
router.get("/api/admin/user", adminController.listUsers);
// router.get("/api/admin/client", adminController.listClients);
// router.post("/api/admin/client", adminController.listClients);
router.post("/api/admin/client/add", adminController.addClient);

//CLIENT
// router.post("/api/client/register", clientController.register); 
// router.post("/api/client/user", userController.listUsers); 
// router.get("/api/client/responder", userController.listResponders); 
// router.get("/api/client/responder/a", userController.listResponders); 


//RESPONDER
// router.post("/api/client/register", clientController.register); 
// router.post("/api/client/user", userController.listUsers); 
// router.get("/api/client/responder", userController.listResponders); 
// router.get("/api/client/responder", userController.listResponders); 


//USER 
// router.post("/api/user/login", userController.login); 
// router.post("/api/user/panic", userController.addPanic);
router.post("/api/user/panic/add", userController.addPanic);
router.post("/api/user/panic/update", userController.updatePanic);
// router.get('/api/user/myPanics', responderController.myPanics);


//RESPONDER
router.post("/api/responder/panic/update", responderController.updatePanic);

module.exports = router;
