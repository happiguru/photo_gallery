// const config = require("../module/mysqlConnect");

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "markcable",
  password: "markcable",
  database: "photo_gallery",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const connect = require("knex")({
  client: "mysql",
  connection: con,
});
const httpError = require("../module/http-error");
const bcrypt = require("bcryptjs");
const body = require("body-parser");

const signupUser = async (req, res, next) => {
  const { email, name, password } = req.body;

  try {
    con.query(
      "SELECT email FROM users WHERE email=?",
      [email],
      (error, result) => {
        if (error) {
          return next(new httpError("query error", 403));
        }
        if (result.length > 0) {
          return next(
            new httpError("User already register login instead", 403)
          );
        }
      }
    );
  } catch (error) {
    return next(new httpError("could not fetch", 403));
  }

  let hastPassword;

  try {
    hastPassword = await bcrypt.hash(password, 12);
  } catch (error) {}

  try {
    con.query(
      "INSERT INTO users SET ?",
      { name: name, email: email, password: hastPassword },
      (err, result) => {
        if (err) {
          return next(new httpError("Data could not be inserted,", 401));
        } else {
          console.log(result);
        }
      }
    );
  } catch (error) {
    return next(new httpError("Something went wrong try again", 403));
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
};

exports.signupUser = signupUser;
