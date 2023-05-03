const abrigos = require("../controllers/abrigos.js");

module.exports = app => {
  var router = require("express").Router();

  router.get("/", abrigos.findAll);

  router.post("/", abrigos.create);

  app.use('/api/abrigos', router);
};
