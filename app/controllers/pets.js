const db = require("../models");
const Pet = db.pets;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const pet = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    idade: req.body.idade,
    porte: req.body.porte,
    raca: req.body.raca,
    personalidade: req.body.personalidade,
    especie: req.body.especie,
    abrigoId: req.body.abrigoId
  };

  console.log(pet);
  Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pet."
      });
    });
};

exports.findAll = (req, res) => {
  let especie = req.query.nome;
  // var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  // Pet.findAll({ where: condition })
  Pet.findAll()
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
