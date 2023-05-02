const db = require("../models");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

};

exports.findAll = (req, res) => {
  const nome = req.query.nome;

  Tutorial.findAll()
    .then(data => {
      res.send(data);
    })
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};
