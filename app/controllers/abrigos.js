const db = require("../models");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

exports.create = async (req, res) => {
  const abrigo_params = {
    usuario: req.body.usuario,
    senha: req.body.senha,
    nome: req.body.nome,
    reponsavel: req.body.responsavel,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
    email: req.body.email,
    whatsapp: req.body.whatsapp,
    instagram: req.body.instagram,
    facebook: req.body.facebook,
    outras: req.body.outras,
    foto1: req.body.foto1,
    foto2: req.body.foto2,
    foto3: req.body.foto3
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