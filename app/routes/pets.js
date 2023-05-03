const pets = require("../controllers/pets.js");

module.exports = app => {
  var router = require("express").Router();

  router.get("/", pets.findAll);

  router.post("/", pets.create);

  app.use('/api/pets', router);
};
