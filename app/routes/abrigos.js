const abrigos = require("../controllers/abrigos.js");

module.exports = app => {
  var router = require("express").Router();

  router.get("/", abrigos.findAll);

  router.post("/", abrigos.create);

  router.get("/:id", abrigos.findOne);

  router.put("/:id", abrigos.update);

  router.delete("/:id", abrigos.delete);

  app.use('/api/abrigos', router);
};
