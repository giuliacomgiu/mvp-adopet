const db = require("../models");
const Abrigo = db.abrigos;
const Op = db.Sequelize.Op;

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
  const { usuario, senha } = req.body;

  try {
    const user = await usuario.findOne({ where: { usuario: usuario } });

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    res.status(200).json({ message: 'Login efetuado com sucesso' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Erro ao efetuar login' });
  }
};

