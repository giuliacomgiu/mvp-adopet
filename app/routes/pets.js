const pets = require("../controllers/pets.js");

module.exports = app => {
  var router = require("express").Router();

  router.get("/", pets.findAll);

  router.post("/", pets.create);

  router.get("/:id", pets.findOne);

  router.get("/:especie", pets.findByEspecie);

  router.put("/:id", pets.update);

  router.delete("/:id", pets.delete);

  app.use('/api/pets', router);
};
