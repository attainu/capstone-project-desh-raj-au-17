const mongoose = require("mongoose");

const DB_INIT = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
      console.log(`MngoDB database connected at ${con.connection.host}`);
    })
    .catch((err) => err);
};

module.exports = DB_INIT;
