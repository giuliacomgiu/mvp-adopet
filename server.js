const db = require("./app/models/index");
const express = require("express");
const cors = require('cors')

const app = express();

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync({ force: true }).then(() => {
  // console.log("Drop and re-sync db.");
// });

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/api", (req, res) => {
  res.json({ check: "Ok." });
});

require("./app/routes/abrigos.js")(app);
require("./app/routes/pets.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});