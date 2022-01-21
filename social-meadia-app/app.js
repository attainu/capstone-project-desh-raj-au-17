const express = require("express");
const app = express();

const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//api reoutes.
app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);

module.exports = app;
