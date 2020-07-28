const userController = require("../controllers/userController");
const express = require("express");
const usersRoutes = express.Router();
const { check } = require("express-validator");

usersRoutes.post(
  "/signup",
  [
    check("name").notEmpty().isLength({ min: 5 }),
    check("email").normalizeEmail().isEmail(),
    check("password").notEmpty().isLength({ min: 8 }),
  ],
  userController.signupUser
);
module.exports = usersRoutes;
