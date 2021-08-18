const User = require("../models").Admin;
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

module.exports = {
  async register(req, res) {
    try {
      const admins = await Admin.findAll({
        where: {
          [Op.or]: [
            { user_cell: req.body.cell },
            { user_email: req.body.email },
          ],
        },
      });
      if (admins.length > 0) {
        return res.status(401).send({
          message: "Admin email or cell exists!",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(req.body.password, salt);

      return Admin.create({
        name: req.body.name,
        email: req.body.email,
        cell: req.body.cell,
        password: bcryptPassword,
      })
        .then((admin) => {
          const jwtToken = jwtGenerator(admin, "ADMIN");
          res.status(201).send(jwtToken);
        })
        .catch((error) => res.status(400).send(error));
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async login(req, res) {
    const admin = await User.findOne({
      where: { cell: req.body.cell },
      });
    if (!admin) {
      return res.status(401).send({
        message: "Invalid Credential",
      });
    }

    const validPassword = await bcrypt
      .compare(req.body.password, admin.password)
      .catch((error) => res.status(400).send(error));

      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(admin, 'USER');
      return res.status(200).send(jwtToken);;
  },

};
