module.exports = app => {
  const tutorials = require("../controllers/abrigos.js");

  var router = require("express").Router();

  router.get("/", tutorials.findAll);

  app.use('/api/abrigos', router);
};
