const express = require("express");
const userRouter = require("./router/users");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PATCH,DELETE");
  next();
});

app.use("/api/users", userRouter);

// app.use((req, res, next) => {
//   console.log(error.message);
// });

app.listen(3000);
