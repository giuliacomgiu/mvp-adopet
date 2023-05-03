const db = require("../models");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const abrigo = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    gestor: req.body.gestor,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    email: req.body.email,
    whatsapp: req.body.whatsapp
  };

  Abrigo.create(abrigo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pet."
      });
    });

};

exports.findAll = (req, res) => {
  let nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Abrigo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.findOne = (req, res) => {

};
