const db = require("../models/index");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const abrigo_params = {
    nomeabrigo: req.body.nomeabrigo,
    descricao: req.body.descricao,
    responsavel: req.body.responsavel,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
    email: req.body.email,
    celular: req.body.celular,
    instg: req.body.instg,
    fbook: req.body.fbook,
    outras: req.body.outras,
    fotoabrigo: req.body.fotoabrigo
  };

  await Abrigo.create(abrigo_params)
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

exports.findAll = async (req, res) => {
  await Abrigo.findAll()
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

  await Abrigo.findByPk(id)
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

  await Abrigo.update(req.body, { where: { id: id } })
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

  await Abrigo.destroy({ where: { id: id } })
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
