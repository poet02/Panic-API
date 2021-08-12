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
router.get("/api/admin/user", adminController.listUsers);
router.post("/api/admin/client", adminController.addClient);

//USER
router.post("/api/user/register", userController.register);
router.post("/api/user/panic", userController.addPanic);

//PANIC
router.get("/api/panic", panicController.list);

//RESPONDER
router.get("/api/responder", panicController.list);
router.post("/api/responder/acceptPanic", responderController.assignPanic);
router.get('/api/responder/myPanic', responderController.myPanics);

module.exports = router;
