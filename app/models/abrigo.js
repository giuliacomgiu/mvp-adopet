module.exports = (sequelize, Sequelize) => {
  const Abrigo  = sequelize.define("abrigo", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    usuario: { type: Sequelize.STRING },
    senha: { type: Sequelize.STRING },
    nome: { type: Sequelize.STRING },
    responsavel: { type: Sequelize.STRING },
    cnpj: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING },
    cidade: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    whatsapp: { type: Sequelize.STRING },
    instagram: { type: Sequelize.STRING },
    facebook: { type: Sequelize.STRING },
    outras: { type: Sequelize.STRING },
    foto1: { type: Sequelize.STRING },
    foto2: { type: Sequelize.STRING },
    foto3: { type: Sequelize.STRING },
  });

  return Abrigo;
};
