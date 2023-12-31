const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const errResponse = require("./utils/");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));

// cors defined
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// acces to main router
server.use(router);

// error handler (4 params)
server.use((err, res, req, next) => {
  const { status, message } = err;
  errResponse(res, status, message);
});

module.exports = server;
