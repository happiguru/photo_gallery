module.exports = require("mysql")
  .createConnection({
    host: "localhost",
    user: "markcable",
    password: "markcable",
    database: "photo_gallery",
  })
  .connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
