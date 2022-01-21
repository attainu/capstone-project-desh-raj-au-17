const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const DB_INIT = require("./db");

// database connection.
DB_INIT();

app.listen(8800, () => {
  console.log(`server started at port ${8800}`);
});
