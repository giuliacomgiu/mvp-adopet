const db = require("../models/index");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

exports.create = async (req, res) => {
  const abrigo_params = {
    nomeabrigo: req.body.nomeabrigo,
    descricao: req.body.descricao,
    responsavel: req.body.responsavel,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
    email: req.body.email,
    senha: req.body.senha,
    celular: req.body.celular,
    instg: req.body.instg,
    fbook: req.body.fbook,
    outras: req.body.outras,
    fotoabrigo: req.body.fotoabrigo
  };

  const senhaCriptografada = await bcrypt.hash(abrigo_params.senha, 10);
  abrigo_params.senha = senhaCriptografada; 

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
          err.message || "Some error occurred while retrieving abrigos."
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
          err.message || "Some error occurred while retrieving abrigos."
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  await Abrigo.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Abrigo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Abrigo with id=${id}. Maybe Abrigo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Abrigo with id=" + id
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await Abrigo.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Abrigo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Abrigo with id=${id}. Maybe Abrigo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Abrigo with id=" + id
      });
    });
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await Abrigo.findOne({ where: { email } });


    if (!user) {
      return res.status(401).json({ error: 'Email ou senha incorretos.' });
    }

    const match = await bcrypt.compare(senha, user.senha);

    if (!match) {
      return res.status(401).json({ error: 'Email ou senha incorretos.' });
    }

    const token = jwt.sign({ id: user.id }, user.email, { expiresIn: '10m' });
    return res.json({ user, token });;

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};

exports.logout = async(req, res) => {
  req.session.destroy();
  return res.status(200).json({ message: 'Logout realizado com sucesso.' });
};
