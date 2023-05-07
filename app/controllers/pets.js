const db = require("../models");
const Pet = db.pets;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const pet_params = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    idade: req.body.idade,
    porte: req.body.porte,
    raca: req.body.raca,
    personalidade: req.body.personalidade,
    especie: req.body.especie,
    abrigoId: req.body.abrigoId
  };

  await Pet.create(pet_params)
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

exports.findAll = async (req, res) => {
  await Pet.findAll()
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


exports.findOne = async (req, res) => {
  const id = req.params.id;

  await Pet.findByPk(id)
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

exports.findByEspecie = async (req, res) => {
  const especie = req.query.especie;
  console.log(especie)

  await Pet.findAll({ where: { especie: especie }})
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

exports.update = async (req, res) => {
  const id = req.params.id;

  await Pet.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await Pet.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
