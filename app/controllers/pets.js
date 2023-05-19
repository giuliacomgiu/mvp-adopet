const db = require("../models/index");
const Pet = db.pets;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const pet_params = {
    nomepet: req.body.nomepet,
    fotocardpet: req.body.fotocardpet,
    sexopet: req.body.sexopet,
    descricao: req.body.descricao,
    idadepet: req.body.idadepet,
    porte: req.body.porte,
    raca: req.body.raca,
    personalidade: req.body.personalidade,
    abrigonome: req.body.abrigonome,
    tipo: req.body.tipo,
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
  const tipo= req.query.tipo;
  const condition = tipo ? { tipo: tipo } : null;

  await Pet.findAll({ where: condition })
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
  const tipo = req.query.tipo;

  await Pet.findAll({ where: { tipo: tipo }})
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
