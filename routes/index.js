var express = require("express");
var router = express.Router();
// const validInfo = require("../middleware/validateInfo");


const authController = require("../controllers").auth;
const adminController = require("../controllers").admin;
const clientController = require("../controllers").client;
const userController = require("../controllers").user;
const responderController = require("../controllers").responder;

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//ADMIN AUTH
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

//ADMIN
router.get("/api/admin/panic", adminController.listPanics);
router.get("/api/admin/user", adminController.listUsers);
// router.get("/api/admin/client", adminController.listClients);


//CLIENT
router.post("/api/client/register", clientController.register); 
router.post("/api/client/login", clientController.login)

//RESPONDER
router.post("/api/responder/register", responderController.register); 
router.post("/api/responder/login", responderController.login);
router.post("/api/responder/panic/update", responderController.updatePanic);
// router.get('/api/responder/panic', responderController.myPanics);

//USER
router.post("/auth/user/register", userController.register); 
router.post("/auth/user/login", userController.login);
router.post("/api/user/panic/add", userController.addPanic);
router.post("/api/user/panic/update", userController.updatePanic);
// router.get('/api/user/myPanics', responderController.myPanics);




module.exports = router;
